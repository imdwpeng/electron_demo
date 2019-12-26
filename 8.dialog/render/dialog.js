/*
 * @Author: Eric
 * @Date: 2019-12-23 16:59:06
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-23 18:49:28
 */
const { remote } = require('electron');
const { dialog } = remote;

const btnError = document.getElementById('btnError');
const btnMsg = document.getElementById('btnMsg');
const btnOpen = document.getElementById('btnOpen');
const btnSave = document.getElementById('btnSave');

btnError.onclick = function () {
    dialog.showErrorBox('警告', '操作有误');
}

btnMsg.onclick = function () {
    dialog.showMessageBox({
        type: 'info',
        title: '提示信息',
        message: '内容',
        buttons: ['确定', '取消']
    }).then(result => {
        console.log(result.checkboxChecked);
        console.log(result.response);
    }).catch(err => {
        console.log(err);
    });
}

btnOpen.onclick = function () {
    dialog.showOpenDialog({
        properties: ['openDirectory', 'openFile']
    }).then(result => {
        console.log(result.canceled);
        console.log(result.filePaths);
    }).catch(err => {
        console.log(err);
    });
}

btnSave.onclick = function () {
    dialog.showSaveDialog({
        title: 'Save File',
        defaultPath: '/Users/poetry/Downloads/',
        // filters 指定一个文件类型数组，用于规定用户可见或可选的特定类型范围
        filters: [
            { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
            { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
            { name: 'Custom File Type', extensions: ['as'] },
            { name: 'All Files', extensions: ['*'] }
        ]
    }).then(result => {
        console.log(result.canceled);
        console.log(result.filePath);
    }).catch(err => {
        console.log(err);
    });
}