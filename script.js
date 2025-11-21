let img = document.querySelector('img');

let heart = document.querySelector('i');

img.addEventListener('dblclick', function() {
    heart.style.opacity = '1';
    heart.style.transform = 'translate(-50%, -50%) scale(1.6) rotate(0deg)';

    

    setTimeout(()=> {
        heart.style.transform = 'translate(-50%, -500%) scale(1) rotate(45deg)';
    }, 700)

    setTimeout(()=> {
        heart.style.opacity = '0';
    }, 1200)

    setTimeout(()=> {
        heart.style.transform = 'translate(-50%, -50%) scale(0) rotate(-45deg)';
    }, 1500)
    

})