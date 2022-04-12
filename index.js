let countEl = document.getElementById("count-el") 
let count = 0

function increment () {
    count += 1
    countEl.innerText = count
}


function save(){
    console.log(count)
    count = 0
    countEl.innerText = 0
}

