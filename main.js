// menu
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const menuList = document.querySelector(".menu-list");


// not happy try rest parameter/spread syntax
// want to click outside menu to close it
menuOpen.addEventListener("click",()=>{
    toggle(menuOpen);
    toggle(menuClose);
    toggle(menuList);
});

menuClose.addEventListener("click",()=>{
    toggle(menuOpen);
    toggle(menuClose);
    toggle(menuList);
});

function toggle(element){
    element.classList.toggle("hidden")
} 


// back this modal prompt
const backThisProject = document.querySelectorAll(".back-this-project");
backThisProject.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        pledgeModal.classList.remove("hidden");
    })
})


// thank you prompt
const thankYou = document.querySelector(".thank-you");
const thankYouBtn = document.querySelector(".thank-you-btn");
const backerNumber = document.querySelector(".backer-number");
let count = 5007;

thankYouBtn.addEventListener("click", ()=>{
    resetModal();
    thankYou.style.display = "none";
    thankYou.classList.add("hidden");
    
    backerNumber.innerHTML = new Intl.NumberFormat().format(++count);
});

// close modal and reset
const pledgeModal = document.querySelector(".pledge-modal");
const closeModal = document.querySelector(".close-modal");

closeModal.addEventListener("click", ()=>{
    resetModal(); 
    pledgeModal.classList.add("hidden");
});

// radio selected
const radio = document.querySelectorAll(".radio");

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
const continueBtn = document.querySelectorAll(".continue");

continueBtn.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        pledgeModal.classList.add("hidden");
        thankYou.style.display = "flex";
        thankYou.classList.remove("hidden");

        internationalNumberFormat = new Intl.NumberFormat('en-US');
        if(!btn.previousElementSibling.value){
            moneyBacked.innerHTML = `\$${internationalNumberFormat.format(parseInt(moneyBacked.innerHTML.replace(/\$|,/g, '')) + parseInt(btn.previousElementSibling.placeholder.replace(/\$|,/g, '')))}`
        } else {
            btn.previousElementSibling.value = ''
        }
    })
});


// function to reset modal
function resetModal(){
    radio.forEach((item)=> {
            let pledge = item.parentElement.parentElement;
            let check =  item.parentElement.parentElement.lastElementChild;
            pledge.classList.remove("pledge-cyan");
            check.classList.remove('active');
})};

// pledge input
const pledgeInput = document.querySelectorAll(".pledge-input-amount");
const moneyBacked = document.querySelector(".money-backed");
const progress = document.querySelector(".progress");

pledgeInput.forEach((input)=>{
    // changing event listener from input to change solved the input issue of adding all inputs as appose to the last number before change state
    input.addEventListener("change", ()=>{
        internationalNumberFormat = new Intl.NumberFormat('en-US');

        moneyBacked.innerHTML = `\$${internationalNumberFormat.format(parseInt(moneyBacked.innerHTML.replace(/\$|,/g, '')) + parseInt(input.value))}`
        progress.style.width = `${(parseInt(moneyBacked.innerHTML.replace(/\$|,/g, '')) + parseInt(input.value)) / 1000}\%`

        if(moneyBacked.innerHTML == "$NaN"){
            moneyBacked.innerHTML = "$89,914"
        }
    })
})

// bookmark
const bookmark = document.querySelector(".bookmark");
const circle = document.querySelector("circle")
const path = document.querySelector("path")

bookmark.addEventListener("click", ()=>{
    
    circle.classList.toggle("circle");
    path.classList.toggle("path");

})

// desktop features
const menuDesktop = document.querySelector(".menu-list-desktop");
const bookmarkText = document.querySelector(".bookmark-text")
if(screen.width >= 768){
    menuOpen.classList.add("hidden");
    menuClose.classList.add("hidden");
    menuDesktop.classList.remove("hidden");
    bookmark.addEventListener("click", ()=>{

        if(bookmarkText.innerHTML === "Bookmark" ){
            bookmarkText.innerHTML = "Bookmarked"
            bookmarkText.style.color = "var(--Moderate-Cyan)"
        } else {
            bookmarkText.innerHTML = "Bookmark" 
            bookmarkText.style.color = "var(--Dark-Grey)"
        }
    })
} 
// if(bookmarkText.innerHTML = "Bookmarked"){
//     bookmarkText.innerHTML = "Bookmark"
// } 