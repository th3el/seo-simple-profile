window.onload = function () {
    var bgcolorlist = new Array("#ef5350", "#ec407a", "#42a5f5", "#29b6f6", "#26c6da", "#26a69a", "#66bb6a", "#9ccc65", "#d4e157", "#ffee58", "#ffca28", "#ffa726", "#ff7043", "#bdbdbd")
    document.body.style.background = bgcolorlist[Math.floor(Math.random() * bgcolorlist.length)]
}