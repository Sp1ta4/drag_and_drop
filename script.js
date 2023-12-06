const $ = document;
const permittedZone = $.querySelector('#permitted-zone');
const mainBox = $.querySelector('#main-box');
let startX = 0;
let startY = 0;

mainBox.onmousedown = (event) => {
    startX = `${event.clientX - mainBox.offsetLeft}`;
    startY = `${event.clientY - mainBox.offsetTop}`;
    permittedZone.onmousemove = (e) => {
        mainBox.style.left = `${e.clientX - startX}px`;
        mainBox.style.top = `${e.clientY - startY}px`;
        if (mainBox.offsetLeft <= 0) {
            mainBox.style.left = "0px";
        }
        if (mainBox.offsetLeft + mainBox.clientWidth >= permittedZone.clientWidth) {
            mainBox.style.left = `${permittedZone.clientWidth - mainBox.clientWidth}px`;
        }
        if (mainBox.offsetTop <= 0) {
            mainBox.style.top = "0px";
        }
        if (mainBox.offsetTop + mainBox.clientWidth >= permittedZone.clientHeight) {
            mainBox.style.top = `${permittedZone.clientHeight - mainBox.clientHeight}px`;
        }
    }
}
mainBox.onmouseup = () => {
    permittedZone.onmousemove = null;
}
mainBox.onmouseover = () => {
    permittedZone.onmousemove = null;
}