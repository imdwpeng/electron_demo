/*
 * @Author: Eric
 * @Date: 2019-12-23 15:39:07
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 16:44:18
 */
const { ipcMain, BrowserWindow }  = require('electron');
const path = require('path');

let win;

ipcMain.on('openWindow', (event, data)=> {
    console.log('监听打开news窗口');
    // 获取当前窗口ID
    const winId = BrowserWindow.getFocusedWindow().id;

    win = new BrowserWindow({ 
        width: 400,
        height: 300, 
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(path.join('file:',__dirname,'../news.html'));
    // 新开窗口调试模式
    win.webContents.openDevTools();

    // 窗口加载完毕，发消息给news
    win.webContents.on('did-finish-load', () => {
        win.webContents.send('toNews', data, winId);
    });

    win.on('closed', () => {
        win = null;
    });
});