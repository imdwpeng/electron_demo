/*
 * @Author: Eric
 * @Date: 2019-12-23 11:24:33
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:17:57
 */
const { Menu, shell, BrowserWindow, BrowserView }  = require('electron');

function openWebview(url) {
    // 获取当前窗口Id
    let win = BrowserWindow.getFocusedWindow()

    // 广播通知渲染进程打开webview
    win.webContents.send('openWebview', url)
}

function openIframe(url) {
    // 获取当前窗口Id
    const win = BrowserWindow.getFocusedWindow();
    // 广播通知渲染进程打开webview
    win.webContents.send('openIframe', url);
}

function openBrowserView(url) {
    // 获取当前窗口Id
    const win = BrowserWindow.getFocusedWindow();
    const view = new BrowserView();
    win.setBrowserView(view);
    view.setBounds({ x: 0, y: 40, width: 800, height: 600 });
    view.webContents.loadURL(url);
    setTimeout(()=>{
        // 关闭窗口
        view.destroy();
    },2000);
}

// 在窗口外打开网页
function openWeb(url) {
    shell.openExternal(url);
}

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
        label: '打开页面',
        submenu: [
            {
                label: '窗口外打开网页',
                click: function () {
                    openWeb('http://blog.poetries.top')
                }
            },
            {
                type: 'separator' // 分隔符
            },
            {
                label: 'iframe',
                click: function () {
                    openIframe('./child2.html')
                }
            },
            {
                type: 'separator' // 分隔符
            },
            {
                label: 'BrowserView',
                click: function () {
                    openBrowserView('http://www.baidu.com')
                }
            },
            {
                label: 'webview标签（5.0版本后默认禁止,需配置webPreferences）',
                click: function () {
                    openWebview('./child2.html')
                }
            }
        ]
    }
];

let menus = Menu.buildFromTemplate(options);
Menu.setApplicationMenu(menus);
