document.addEventListener('DOMContentLoaded', function() {
    const joinBtn = document.getElementById('join-btn');
    const moreBtn = document.getElementById('more-btn');
    const moreContent = document.getElementById('more-content');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileJoinBtn = document.getElementById('mobile-join-btn');
    
    joinBtn.addEventListener('click', function() {
        alert('Thank you for your interest! Registration will open soon.');
    });

    moreBtn.addEventListener('click', function() {
        moreContent.classList.toggle('hidden');
        moreBtn.classList.toggle('active');
    });
});
