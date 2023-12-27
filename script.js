device = (() => {
    const ua = navigator.userAgent
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {return "phone"}
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {return "tablet"}
    return "desktop"
})()

const wait = s => new Promise(r => setTimeout(r, s * 1000))

for (let i = 0; i < 10; i++) {document.getElementsByClassName("squares")[0].appendChild(document.createElement("li"))}

// window.onload = async () => {
//     langs = ["python", "javascript", "html", "css", "graphql"]
//     var lang = document.getElementById("language")
//     for (let i of langs) {lang.innerHTML += `<img src = "images/${i}.png" class = "lang">`}
// }