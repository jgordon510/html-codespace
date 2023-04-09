
function renderGoatArray (goatArray){
    let html = "";
    for(let goat of goatArray) {
        html += `<div>${goat}</div>`
    }
    document.querySelector(".goat-patch").innerHTML = html;
}


const allTheGoats = ["🐑", "🐑", "🐑", "🐐", "🐐", "🐐"];
allTheGoats.push("🐕")
renderGoatArray(allTheGoats.reverse());