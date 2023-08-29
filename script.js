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


// Intersection Observer

const typing_animation = document.querySelectorAll('.typing')
const observer = new IntersectionObserver((entries) => {
  console.log(observer);
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('typing-animation')
      
    } else {
      entry.target.classList.remove('typing-animation');
    }
  })
}, {
  threshold: 0.5
});

for (let i=0; i<typing_animation.length; i++){
  const elements = typing_animation[i];
  console.log(elements)
  observer.observe(elements);
}

const intersectionCallback = (entries, observer) => {
  console.log(intersectionCallback);

  // Your code for handling the intersection
};

