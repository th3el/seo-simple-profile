window.onload = function () {
    var bgcolor = new Array("#ffcdd2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", "#DCEDC8", "#F0F4C3", "#FFF9C4", "#FFECB3", "#FFE0B2", "#FFCCBC", "#D7CCC8", "#F5F5F5", "#CFD8DC")
    document.body.style.background = bgcolor[Math.floor(Math.random() * bgcolor.length)]
}