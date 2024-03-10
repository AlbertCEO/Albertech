'use strict';



/**
 * navbar toggle
 */

const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const elemArr = [navCloseBtn, overlay, navOpenBtn];

for (let i = 0; i < elemArr.length; i++) {
  elemArr[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}

/**
 * toggle navbar & overlay when click any navbar-link
 */

const navbarLinks = document.querySelectorAll("[data-navbar-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
}




const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 400) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});



fetch("../menu.json").then(function(response){
  return response.json();
}).then(function(projects){

  let projectHolder = document.querySelector("#dataFetched");
  let out = "";
  for(let project of projects){
    // console.log(project.name)
    out += `
    
    <li>
    <div class="blog-card">
      <figure class="banner">
        <a href="#">
          <img src=${project.image} width="750" height="350" loading="lazy"
            alt="Donec feugiat mollis nisi in dignissim. Morbi sollicitudin quis." class="img-cover">
        </a>
      </figure>
      <div class="content">
        <h3 class="h3 title">
          <a href="#">
            ${project.name}
          </a>
        </h3>
        <p class="text">
        ${project.desc}
        </p>
        <p> <strong> Student Name: </strong> ${project.Designer}</p>
        <div class="meta">
          <div class="publish-date">
            <ion-icon name="time-outline"></ion-icon>
            <time datetime="2022-03-07">20 February, 2024</time>
          </div>
          <button class="comment" aria-label="Comment">
            <ion-icon name="chatbubble-outline"></ion-icon>
            <data value="15">${project.price}</data>
          </button>
        </div>
      </div>
    </div>
  </li>
    `
  }
  projectHolder.innerHTML = out;
})




// Fetching User IP Address

const userIP = document.getElementById('ip');
const userCountry = document.getElementById('country');
const userCity = document.getElementById('city');
const userProvince = document.getElementById('province');
const userISP = document.getElementById('ISP');
const userTimezone = document.getElementById('timezone');


fetch('http://ip-api.com/json/?fields=61439')
.then((res) => res.json())
.then((res) => {
  console.log(res.query)
  
  userIP.textContent = res.query;
  userCountry.textContent = res.country;
  userCity.textContent = res.city;
  userProvince.textContent = res.regionName;
  userISP.textContent = res.isp;
  userTimezone.textContent = res.timezone;
  
});
