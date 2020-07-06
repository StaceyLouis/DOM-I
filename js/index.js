const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let navBar = document.querySelector('nav');
let navItemA = document.createElement('a');
navItemA.textContent = 'Media';
navItemA.setAttribute('href', '#');

let navItemB = document.createElement('a');


navBar.appendChild(navItemA);

navBar.prepend('Home', navItemB);

  let x, i;
  x = document.querySelectorAll("a");
  for (i = 0; i < x.length; i++) {
    x[i].style.color = "green";
  }


let ctaImg = document.querySelector('#cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

let link = document.body.getElementsByTagName("a")[0].innerHTML="Services";
let link1 = document.body.getElementsByTagName("a")[1].innerHTML="Product";
let link2 = document.body.getElementsByTagName("a")[2].innerHTML="Vision";
let link3 = document.body.getElementsByTagName("a")[3].innerHTML="Features";
let link4 = document.body.getElementsByTagName("a")[4].innerHTML="About";
let link5 = document.body.getElementsByTagName("a")[5].innerHTML="Contact";

let jumbo = document.querySelector('.cta-text h1').innerHTML = 'DOM IS AWESOME';
let start = document.querySelector('button').innerHTML="Get Started";

let content = document.querySelector('.top-content');
content.getElementsByTagName('h4')[0].innerHTML= siteContent['main-content']['features-h4'];
content.getElementsByTagName('p')[0].innerHTML= siteContent['main-content']['features-content'];
content.getElementsByTagName('h4')[1].innerHTML= siteContent['main-content']['about-h4'];
content.getElementsByTagName('p')[1].innerHTML= siteContent['main-content']['about-content'];

let bottom = document.querySelector('.bottom-content');
bottom.getElementsByTagName('h4')[0].innerHTML= siteContent['main-content']['services-h4'];
bottom.getElementsByTagName('p')[0].innerHTML= siteContent['main-content']['services-content'];
bottom.getElementsByTagName('h4')[1].innerHTML= siteContent['main-content']['product-h4'];
bottom.getElementsByTagName('p')[1].innerHTML= siteContent['main-content']['product-content'];
bottom.getElementsByTagName('h4')[2].innerHTML= siteContent['main-content']['vision-h4'];
bottom.getElementsByTagName('p')[2].innerHTML= siteContent['main-content']['vision-content'];


let contact = document.querySelector('.contact');
contact.getElementsByTagName("h4")[0].innerHTML = siteContent['contact']['contact-h4'];
contact.getElementsByTagName("p")[0].innerHTML = siteContent['contact']['address'];
contact.getElementsByTagName("p")[1].innerHTML = siteContent['contact']['phone'];
contact.getElementsByTagName("p")[2].innerHTML = siteContent['contact']['email'];

let footerText = document.querySelector("footer p").innerHTML= siteContent['footer']['copyright'];


// stretch goals
let buttonD = document.querySelector("button");
console.log(buttonD);
buttonD.addEventListener("click", function(){
  buttonD.style.backgroundColor = "red";
  alert('Thanks for clicking');
});