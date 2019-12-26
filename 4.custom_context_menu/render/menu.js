/*
 * @Author: Eric
 * @Date: 2019-12-23 11:24:33
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 11:42:41
 */
const { remote }  = require('electron');
const { Menu }  = remote;
const options = [
    {
        label: '文件',
        submenu: [
            {
                label: '新建文件',
                accelerator: 'ctrl+n', // 绑定快捷键
                click: function () { // 绑定事件
                    console.log('新建文件')
                }
            },
            {
                label: '新建窗口',
                click: function () {
                    console.log('新建窗口')
                }
            }
        ]
    },
    {
        label: '编辑',
        submenu: [
            {
                label: '复制',
                role: 'copy' // 调用内置角色实现对应功能
            },
            {
                label: '剪切',
                role: 'cut'  // 调用内置角色实现对应功能
            }
        ]
    }
];

let menus = Menu.buildFromTemplate(options);

// 绑定右键菜单
window.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
    menus.popup({
     window: remote.getCurrentWindow()
    });
 }, false);