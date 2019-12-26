/*
 * @Author: Eric
 * @Date: 2019-12-24 13:55:47
 * @LastEditors  : Eric
 * @LastEditTime : 2019-12-24 14:35:30
 */
const { clipboard, nativeImage }  = require('electron');
const path = require('path');

const copyBtn = document.getElementById('copy');
const input = document.getElementById('input');
const pasteBtn = document.getElementById('paste');
const targetInput = document.getElementById('targetInput');
const imgCopy = document.getElementById('imgCopy');

copyBtn.onclick = () => {
    clipboard.writeText(input.value)
    alert(`复制成功：${input.value}`);
}

pasteBtn.onclick = () => {
    const text = clipboard.readText();
    targetInput.value = text;
}

imgCopy.ondblclick = (e) => {
    const url = e.target.src.replace('file://','');
    const image = nativeImage.createFromPath(path.join(url));
    // 复制图片
    clipboard.writeImage(image);
    // 粘贴图片
    let imgSrc = clipboard.readImage().toDataURL();
    // 显示到页面上
    let imgDom = new Image();
    imgDom.src = imgSrc;
    document.body.appendChild(imgDom);
}