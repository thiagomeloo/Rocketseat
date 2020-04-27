const modalOverlay = document.querySelector(".modal-overlay")
const cards = document.querySelectorAll(".card")
const modal = modalOverlay.querySelector(".modal")
const iframe = modalOverlay.querySelector("iframe")

for(let card of cards){
    card.addEventListener("click",function(){
        const cardId = card.getAttribute("id")
        modalOverlay.classList.add('active')
    
        if(!(modal.classList.contains('maximize'))){
    
            modalOverlay.querySelector("iframe").src = concatenaUrl(cardId)

        }else{
            
            if(!(iframe.src == concatenaUrl(cardId))){
                
                let v = confirm("Deseja sobrepor a pagina que está minimizada?")

                if(v){
                    modalOverlay.querySelector("iframe").src = concatenaUrl(cardId)
                }
            }

        }
    })
}

document.querySelector(".modal .maximize-modal").addEventListener("click", function(){
    modalOverlay.classList.remove("active")
    modal.classList.add("maximize")
    
})


document.querySelector(".modal .close-modal").addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src = ""
})

function concatenaUrl(url){
    return `https://rocketseat.com.br/${url}`
}