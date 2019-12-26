/*
 * @Author: Eric
 * @Date: 2019-12-24 13:46:20
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-24 13:51:11
 */
const {globalShortcut, app} = require('electron');

app.on('ready', () => {
    // 注册全局快捷键
    globalShortcut.register('ctrl+e', ()=>{
        console.log('执行了ctrl+e');
    })

    // 检测快捷键是否注册成功 true是注册成功
    let isRegister = globalShortcut.isRegistered('ctrl+e');
    console.log(`快捷键是否注册成功：${isRegister}`);
})

// 退出的时候取消全局快捷键
app.on('will-quit', () => {
    globalShortcut.unregister('ctrl+e');
})