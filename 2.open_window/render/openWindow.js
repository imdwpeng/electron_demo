/*
 * @Author: Eric
 * @Date: 2019-12-23 11:08:00
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:27:57
 */
const btn = document.getElementById('btn');
const { remote } = require('electron');
const path = require('path');

const { BrowserWindow } = remote;

btn.onclick = () => {
    win = new BrowserWindow({ 
        width: 400,
        height: 300, 
        webPreferences: {
            nodeIntegration: true
        }
    }) 

    win.loadURL(path.join('file:',__dirname,'news.html'));

    win.on('close',()=>{win = null});
}