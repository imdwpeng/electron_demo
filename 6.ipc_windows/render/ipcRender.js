/*
 * @Author: Eric
 * @Date: 2019-12-23 15:37:54
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:28:37
 */
const openWindow = document.getElementById('openWindow');
const { ipcRenderer } = require('electron');

// 打开news窗口
openWindow.onclick = function () {
    ipcRenderer.send('openWindow', { name:'zhangsan', age:18 });
};

// 接收news进程反馈消息
ipcRenderer.on('toIndex',(event, data) => {
    console.log('收到news传值后反馈:',  data);
});
