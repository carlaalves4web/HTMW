// Back-to-top animation
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $(`#back-to-top`).fadeIn();
      } else {
        $(`#back-to-top`).fadeOut();
      }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
      $('body').animate(
        {
          scrollTop: 0,
        },
        400
      );
      return false;
    });
  });
  
  // Navbar
  
  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById('myNav').style.top = '0';
    } else {
      document.getElementById('myNav').style.top = '-250px';
    }
  }
  
 
  // Function Debounce
  const debounce = function(func, wait, immediate){
    console.log(debounce);
    let timeout;
    return function(...args){
      const context = this;
      const later = function(){
        timeout = null;
        if(!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if(callNow) func.apply(context, args);
    };
  };
  
const target = document.getElementById('typing');
const animationClass = 'typing-animation';

function animeScroll(){
  const windowTop = window.scrollY + ((window.innerHeight *3)/4);
  target.forEach(function(element){
    if((windowTop) > element.offsetTop){
      element.classList.add(animationClass);
    }else{
      element.classList.remove(animationClass);
    }
  })
}
animeScroll();

if(target.length){
  window.addEventListener('scroll', debounce(function(){
    animeScroll();
  }, 200))
}