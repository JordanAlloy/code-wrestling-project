//NAV MENU
const mobileCta = document.getElementById('mobile-ctas')
    nav = document.querySelector('nav')
    mobileExit = document.getElementById('mobile-exits');


    mobileCta.addEventListener('click', ()=>{
      nav.classList.add('mobile-btn');
    })

    mobileExit.addEventListener('click', ()=>{
      nav.classList.remove('mobile-btn')
    })


// FORM VALIDATION
    const myForm = document.querySelector('#my-form');
    const nameInput = document.querySelector('#name');
    const phoneNo = document.querySelector('#phone');
    const msg = document.querySelector('.msg');
    const mssg = document.querySelector('.mssg')
    const userList = document.querySelector('#users');
    const btn = document.querySelector('.btn')
    const userInput = document.querySelector('.user-input')
    const input = document.querySelector('.input')

    // submit event
    myForm.addEventListener('submit', onSubmit);
    
    function onSubmit(e){
      e.preventDefault()

      // seting a waring border if input are empty
      if(nameInput.value ===''){
        msg.style.border ='1px solid red';  
      }else{
        msg.style.border ='none'
      }

      if(phoneNo.value === ''){
        mssg.style.border = '1px solid red'
      }else{
        mssg.style.border ='none';

        //clear fields
        nameInput.value='';
        phoneNo.value='';
      }

      setTimeout(() => msg || mssg.remove(), 3000)
    }

    // info button pop up
    const info = document.querySelector('.infos');
    const userInfo = document.querySelector('.user-input')
    
    info.addEventListener('click', revealInfo);

    function revealInfo(e){
      if(userInfo.classList.contains('input')){
        userInfo.style.display='block'
      }
    }
  
    function toggle(e){
      const blur = document.getElementById('blur');
      blur.classList.toggle('active');

      const popup = document.getElementById('popup');
      popup.classList.toggle('active')

    }


    // Function to filter content based on search input
function filterContent() {
    const filterInput = document.getElementById("filter");
    const cards = document.querySelectorAll(".cards");

    filterInput.addEventListener("keyup", function () {
        const searchTerm = filterInput.value.toLowerCase();

        cards.forEach(function (card) {
            const courseName = cards.querySelector(".learning").textContent.toLowerCase();

            if (courseName.includes(searchTerm)!=-1) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            } 
        });
    });
}


const organizationDetails = document.querySelector('.organization-details');
const triggerSection = document.querySelector('.trigger-section');

function handleScroll() {
    const triggerPosition = triggerSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (triggerPosition < windowHeight * 0.7) {
        organizationDetails.style.opacity = 1;
        organizationDetails.style.transform = 'translateY(0)';
    }
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);


// acc details
document.addEventListener("DOMContentLoaded", function () {
  const userName = "John Doe";
  const userEmail = "john.doe@example.com";
  const subscriptionPlan = "Premium";
  const nextBillingDate = "October 15, 2023";

  document.querySelector("person h1").textContent = `Welcome, ${userName}`;
  document.querySelector(".account-details p:nth-of-type(1)").textContent = `Name: ${userName}`;
  document.querySelector(".account-details p:nth-of-type(2)").textContent = `Email: ${userEmail}`;
  document.querySelector(".service-details p:nth-of-type(1)").textContent = `Subscription Plan: ${subscriptionPlan}`;
  document.querySelector(".service-details p:nth-of-type(2)").textContent = `Next Billing Date: ${nextBillingDate}`;
});

const profile = document.querySelector('.profile');
const items = document.querySelector('.main-cardbox');
const person= document.querySelector('.person1');
const details = document.querySelector('.account-details')
