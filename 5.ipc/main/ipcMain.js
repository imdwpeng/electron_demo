/*
 * @Author: Eric
 * @Date: 2019-12-23 15:39:07
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 16:08:51
 */
const { ipcMain }  = require('electron');

// 异步接收渲染进程数据
ipcMain.on('sendMsg', (event, data)=> {
    console.log('data\n ', new Date().getTime(), data);
    console.log('event\n ', new Date().getTime(), event);

    // 主进程给渲染进程反馈消息
    event.sender.send('sendFeedbackToRender', '异步反馈');
});

// 同步接收渲染进程数据
ipcMain.on('sendSync', (event, data)=> {
    // 主进程给渲染进程反馈消息
    event.returnValue ='同步反馈';
});