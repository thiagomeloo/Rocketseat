const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")

for(let card of cards){
    card.addEventListener("click",function(){

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('img').src = card.querySelector("img").getAttribute('src')
        modalOverlay.querySelector('h3').textContent = card.querySelector("h3").textContent
        modalOverlay.querySelector('p').textContent = card.querySelector("p").textContent
    })
}

document.querySelector(".close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("img").src = ""
})