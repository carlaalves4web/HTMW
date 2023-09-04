"use.strict"
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

  // ScrollTrigger

  function scrollTrigger(selector, options = {}){
    let els = document.querySelectorAll(selector);
    els = Array.from(els);
    els.forEach(el => {
      addObserver(el, options)
    })
  }

  function addObserver(el, options){
    let observer = new IntersectionObserver((entries, observer) =>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
          if(options.cb){
            options.cb(el)
          }else{
            entry.target.classList.add('active')
          }
          observer.observe(entry.target);
        }
      })
    }, options)
    observer.observe(el);
  }

  scrollTrigger('.mars-title', {
    root: null,
    rootMargin: '0px',
    threshold: 1 
  });
  scrollTrigger('.core-title', {
    threshold: 1
  });
  scrollTrigger('.sample-title', {
    threshold: 1
  })