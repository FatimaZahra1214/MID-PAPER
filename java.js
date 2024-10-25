document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded');
    console.log('Hamburger button:', hamburgerBtn);
    console.log('Mobile menu:', mobileMenu);

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

    function toggleMobileMenu() {
        console.log('Toggling mobile menu');
        mobileMenu.classList.toggle('hidden');
        document.body.style.overflow = mobileMenu.classList.contains('hidden') ? 'auto' : 'hidden';
    }

    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    closeMenuBtn.addEventListener('click', toggleMobileMenu);
    console.log('Hamburger button click event listener attached');

    mobileJoinBtn.addEventListener('click', function(e) {
        e.preventDefault();
        toggleMobileMenu();
        alert('Thank you for your interest! Registration will open soon.');
    });

    // Close mobile menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.id !== 'mobile-join-btn') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    });

    console.log('Event listeners attached');
});