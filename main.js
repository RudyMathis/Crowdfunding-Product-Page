const backThisProject = document.querySelector(".back-this-project");
const pledgeModal = document.querySelector(".pledge-modal");
const closeModal = document.querySelector(".close-modal");

const radio = document.querySelectorAll(".radio");
const enterPledge = document.querySelectorAll(".enter-pledge");

backThisProject.addEventListener("click", ()=>{
    pledgeModal.classList.remove("hidden");
})


closeModal.addEventListener("click", ()=>{
    pledgeModal.classList.add("hidden");
})

radio.forEach(function(item){
    item.addEventListener('click', function(){
        let pledge = item.parentElement.parentElement;
        let check =  item.parentElement.parentElement.lastElementChild;
        radio.forEach(function(item) {
            let pledge = item.parentElement.parentElement;
            let check =  item.parentElement.parentElement.lastElementChild;
            pledge.classList.remove("pledge-cyan")
            check.classList.remove('active')
        })
        pledge.classList.add('pledge-cyan')
        check.classList.add('active')
    }, false)
})