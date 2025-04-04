document.getElementById("contactform").addEventListener('submit',function (event) {
    event.preventDefault();
    
});
document.getElementById("contactform").addEventListener("submit", function(event) {
    let email = event.target.element["email"].value;
    if (!email||!tel) {alert("all fields are requreid");
        event.preventDefault();
    } else if (tel.length ===10){
        alert("provide valid number ")
    }
})
let menuicon= document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
menuicon.onclick = ()=>  {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll  = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if( top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+ id +']').classList.add('active');
            });
        };

    }); 
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

window.addEventListener("load", () => {
    clock();

    function clock() {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        const hour = hours < 10 ? "0" + hours : hours;
        const minute = minutes < 10 ? "0" + minutes : minutes;
        const second = seconds < 10 ? "0" + seconds : seconds;
        const time = hour + ":" + minute + ":" + second;
        document.getElementById("date-time").innerHTML = time;
        setTimeout(clock, 1000);
    }
});
document.getElementById("contactform").addEventListener('submit',function (event) {
    event.preventDefault();
    
});
document.getElementById("contactform").addEventListener("submit", function(event) {
    let email = event.target.element["email"].value;
    if (!email||!tel) {alert("all fields are requreid");
        event.preventDefault();
    } else if (tel.length ===10){
        alert("provide valid number ")
    }
})

const datecontainer = document.getElementById('current-date');
function updateDate(){
   const today = new Date();
   const options = {
    weekday:'long',year:'numeric',month:'long',
    day:'numeric'
   };
   datecontainer.textContent= today.toLocaleDateString("en-US",options);
}
updateDate();

  let popup = document.getElementById('popup');
  function openPopup (){
    popup.classList.add("open-popup");
  }
  function closePopup (){
    popup.classList.remove("open-popup");
}

let popuprate = document.getElementById('popuprate');
function openPopuprate (){
  popuprate.classList.add("open-popuprate");
}
function closePopuprate (){
  popuprate.classList.remove("open-popuprate");}


document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('change', () => {
        submitRating(star.value);
        highlightStars(star.value);
    });
});

function submitRating(rating) {
    console.log(`Rating submitted: ${rating}`);
    // Add code to save the rating to a database or send it to a server

}
function highlightStars(rating) {
    document.querySelectorAll('label[class*="star"]').forEach(label => {
        label.style.color = label.htmlFor.split('-')[1] <= rating ? 'gold' : 'grey';
    });
};

