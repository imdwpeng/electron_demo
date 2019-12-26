/*
 * @Author: Eric
 * @Date: 2019-12-23 16:59:06
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:28:49
 */
var { ipcRenderer } = require('electron');
let iframe = document.getElementById('iframe');
let webview = document.getElementById('webview');

ipcRenderer.on('openIframe', (e, url)=>{
    iframe.src = url;
});

ipcRenderer.on('openWebview', (e, url)=>{
    console.log(url);
    
    webview.src = url;
});

