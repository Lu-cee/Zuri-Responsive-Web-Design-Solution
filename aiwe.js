const hamburger = document.querySelector('#hamburger');
const body = document.querySelector('body');

hamburger.addEventListener('click', function(){
    if(body.classList.contains('menu')){
        body.classList.remove('menu');
    } else {
        body.classList.add('menu');
    }
});