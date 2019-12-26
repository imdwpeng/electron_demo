/*
 * @Author: Eric
 * @Date: 2019-12-23 15:37:54
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 16:45:43
 */
const { ipcRenderer } = require('electron');
const { remote } = require('electron');
const { BrowserWindow } = remote;

// 接收主进程反馈消息
ipcRenderer.on('toNews',(event, data, winId) => {
    // 获取对应ID的窗口
    const firstWin = BrowserWindow.fromId(winId);
    console.log('首页打开news窗口后传值:', data);
    firstWin.webContents.send('toIndex', '来自news进程反馈的信息');
});
