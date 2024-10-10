document.addEventListener('mousemove', function(e) {
    const body = document.body;
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    
    body.style.background = `linear-gradient(${x * 360}deg, #FFD700, #FF8C00, #FFA500, #FF4500)`;
});

document.addEventListener('scroll', function() {
    const body = document.body;
    const scrollPos = window.scrollY / window.innerHeight;

    
    body.style.background = `linear-gradient(${scrollPos * 180}deg, #FFD700, #FF6347, #FF8C00)`;
});
