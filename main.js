const backThisProject = document.querySelector(".back-this-project");
const pledgeModal = document.querySelector(".pledge-modal");
const closeModal = document.querySelector(".close-modal");
const radio = document.querySelectorAll(".radio");
const continueBtn = document.querySelectorAll(".continue");
const thankYou = document.querySelector(".thank-you");
const thankYouBtn = document.querySelector(".thank-you-btn");
const backerNumber = document.querySelector(".backer-number");
const pledgeInput = document.querySelectorAll(".pledge-input-amount");
const moneyBacked = document.querySelector(".money-backed");
let givenNumber = parseInt(89914);

let count = 5007;


backThisProject.addEventListener("click", ()=>{
    pledgeModal.classList.remove("hidden");
});

thankYouBtn.addEventListener("click", ()=>{
    resetModal();
    thankYou.style.display = "none";
    thankYou.classList.add("hidden");
    
    backerNumber.innerHTML = new Intl.NumberFormat().format(++count);
});


closeModal.addEventListener("click", ()=>{
    resetModal(); 
    pledgeModal.classList.add("hidden");
});

radio.forEach((item)=>{
    item.addEventListener('click', ()=>{
        // each article card
        let pledge = item.parentElement.parentElement;
        // each section pledge
        let check =  item.parentElement.parentElement.lastElementChild;
        // activates individual cards and removes activate from other cards
        radio.forEach((item)=> {
            resetModal(item);
            });
        pledge.classList.add('pledge-cyan');
        check.classList.add('active');
    }, false);
});

// closes current modal and opens thank you modal
continueBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        pledgeModal.classList.add("hidden");
        thankYou.style.display = "flex";
        thankYou.classList.remove("hidden");
})});

// function to reset modal
function resetModal(){
    radio.forEach((item)=> {
            let pledge = item.parentElement.parentElement;
            let check =  item.parentElement.parentElement.lastElementChild;
            pledge.classList.remove("pledge-cyan");
            check.classList.remove('active');
})};


pledgeInput.forEach((input)=>{
    input.addEventListener("input", ()=>{

        moneyBacked.innerHTML = givenNumber;
        internationalNumberFormat = new Intl.NumberFormat('en-US');
        moneyBacked.innerHTML = `\$${internationalNumberFormat.format(givenNumber + parseInt(input.value))}`

        if(moneyBacked.innerHTML == "$NaN"){

            moneyBacked.innerHTML = "$89,914"
        }

    })
})


