/*
 * @Author: Eric
 * @Date: 2019-12-23 15:37:54
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:28:25
 */
const send = document.getElementById('send');
const { ipcRenderer } = require('electron');

send.onclick = function () {
    // 同步传递消息给主进程
    let msg =  ipcRenderer.sendSync('sendSync', {name:'lisi', age: 28});
    // 异步传递消息给主进程
    ipcRenderer.send('sendMsg', {name:'zhangsan', age: 18});
    // 同步接收主进程反馈的数据
    console.log('msg\n ', new Date().getTime(), msg);
};

// 接收主进程反馈消息
ipcRenderer.on('sendFeedbackToRender',(event, data) => {
    console.log('data\n ', new Date().getTime(),  data);
    console.log('event\n ', new Date().getTime(),  event);
});
