/*
 * @Author: Eric
 * @Date: 2019-12-24 13:29:14
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-24 13:37:24
 */
const path = require('path');

let options = {
    title: '通知标题',
    body: '通知主体',
    icon: path.join('static/logo.png')
}

document.getElementById('btn').onclick = function () {
    const myNotification  = new window.Notification(options.title, options);
    
    // 消息可点击
    myNotification.onclick = function () {
        console.log('点击了消息');
    }
}

// 监听网络变化实现消息通知
window.addEventListener('online', function(){
    console.log('在线');
}); 
window.addEventListener('offline', function(){
    // 断开网络触发事件
    var options = {
        title: '提示',
        body: '网络异常，请检查你的网络',
        icon: path.join('static/logo.png')
    }
    var myNotification  = new window.Notification(options.title, options);
    // 消息可点击
    myNotification.onclick = function () {
        console.log('点击了消息');
    }
});