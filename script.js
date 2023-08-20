$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 50) {
            $(`#back-to-top`).fadeIn();
        } else {
            $(`#back-to-top`).fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function(){
        $('body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
});

const typed2 = document.querySelector('.typed2');
typed2.classList.remove('typing2');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.classList.add('typing2');
            return;
        }
        typed2.classList.remove('typing2')
    });
});
observer.observe(document.querySelector('.typed2'));