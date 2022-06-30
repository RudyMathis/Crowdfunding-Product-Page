const backThisProject = document.querySelector(".back-this-project");
const pledgeModal = document.querySelector(".pledge-modal");
const closeModal = document.querySelector(".close-modal");


backThisProject.addEventListener("click", ()=>{
    pledgeModal.classList.remove("hidden");
})


closeModal.addEventListener("click", ()=>{
    pledgeModal.classList.add("hidden");
})
