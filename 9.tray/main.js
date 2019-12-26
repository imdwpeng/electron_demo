const { app, BrowserWindow, Menu, Tray } = require('electron')
const path = require('path');

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win;
let iconTray;

function createWindow () {
  // 引入tray
  iconTray = new Tray(path.join(__dirname, 'static/logo.png'));
  const menu = Menu.buildFromTemplate([
    {
      label: '显示',
      click: function() {
        win.show();
      } 
    },
    {
      label: '退出',
      click: function() { 
        app.exit();
      }
    }
  ]);
  // 鼠标放上去提示信息
  iconTray.setToolTip('hello poetries');

  // 为了实现mac 点击鼠左键弹出弹出程序界面，右键弹出托盘选项，不能用setContextMenu方法
  // iconTray.setContextMenu(menu);

  // 创建浏览器窗口。
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true
    }
  })

  // 加载index.html文件
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools();

  // 在窗口要关闭的时候触发
  win.on('close', (e) => {
    e.preventDefault();
    win.hide();
  })

  /**
   * *******************************************************************************
   * 点击鼠左键弹出弹出程序界面，右键弹出托盘选项
   * mac 调用了了setContextMenu()，会走系统默认的托盘点击事件（mac 默认是左键点击显示托盘选项）
   * *******************************************************************************
   */
  // 单击图标打开界面
  iconTray.on('click', () => {
    win.show();
  })

  // 右击图标显示托盘选项
  iconTray.on('right-click', () => {
    iconTray.popUpContextMenu(menu);
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow)

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => {
    app.quit();
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})