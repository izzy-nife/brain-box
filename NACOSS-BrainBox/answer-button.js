const show = document.querySelector(".show")
const explain = document.querySelector(".explain")
show.addEventListener("click", shows)
let clickCount = 0
function shows() {
     clickCount++
     if (clickCount % 2 == 1) {
     explain.style.display = "block"
     explain.innerHTML = `<div class="my-3"> <h4> Explanation</h4> <div> <p>   </p> </div> </div>`  }  
     if (clickCount%2===0) {
         explain.style.display = "none"
     explain.innerHTML = ``
     }
}
