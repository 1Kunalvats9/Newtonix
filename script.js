const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function goToNewton(){
  window.location.href="https://www.newtonschool.co/newton-school-of-technology-nst/life-at-nst";
}

function goToLogin() {
  window.location.href="http://127.0.0.1:3002/newtonix redefined/Login Page/index1.html"
}
document.getElementsByClassName("contact-us").addEventListener("click", scrollToSection);

function goToCommunity(){
  window.location.href="http://127.0.0.1:3002/newtonix redefined/community.html";
}