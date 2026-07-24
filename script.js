
const form = document.getElementById("contactForm")
form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if(name === "" || email === "" || subject === "" || message === ""){

        alert("Please fill in all fields.");

        return;

    }

    alert("Thank you! Your message has been sent.");

    form.reset();

});


window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".custom-navbar");

    if(window.scrollY > 50){

        navbar.style.background = "#020617";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";

    }else{

        navbar.style.background = "rgba(15,23,42,.95)";
        navbar.style.boxShadow = "none";

    }

});


const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            let count = 0;

            const speed = target / 50;

            const update = () => {

                count += speed;

                if(count < target){

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText = target;

                }

            };

            update();

            observer.unobserve(counter);

        }

    });

});

counters.forEach(counter => observer.observe(counter));



const topBtn = document.getElementById("topBtn");
console.log(topBtn);


window.addEventListener("scroll", function(){

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});