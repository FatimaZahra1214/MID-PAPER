document.addEventListener('DOMContentLoaded', function () {
    // Define elements first
    const speakers = [
        {
            name: "Elon Musk",
            position: "CEO of SpaceX and Tesla",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ratione! Voluptas, fugiat corrupti fuga ex porro quod molestias vitae neque a.",
            image: "elon musk.jpg"
        },
        {
            name: "Fei-Fei Li",
            position: "AI expert and Stanford Professor",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, ratione! Voluptas, fugiat corrupti fuga ex porro quod molestias vitae neque a.",
            image: "fei fei lei.jpg"
        }
    ];
    const joinBtn = document.getElementById('join-btn');
    const moreBtn = document.getElementById('more-btn');
    const moreContent = document.getElementById('more-content');
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu'); // Check if this ID is correct in your HTML
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileJoinBtn = document.getElementById('mobile-join-btn');
    const menu = document.getElementById("menu"); // Added for consistency

    // Now log elements to console
    console.log('DOM fully loaded');
    console.log('Hamburger button:', hamburgerBtn);
    console.log('Mobile menu:', mobileMenu);

    // Attach event listeners
    joinBtn?.addEventListener('click', function () {
        alert('Thank you for your interest! Registration will open soon.');
    });

    moreBtn?.addEventListener('click', function () {
        moreContent.classList.toggle('hidden');
        moreBtn.classList.toggle('active');
    });

    function toggleMobileMenu() {
        menu.classList.toggle("open");
    }

    // Attach toggle function to the hamburger button
    hamburgerBtn?.addEventListener('click', function () {
        console.log("Hamburger menu clicked");
        toggleMobileMenu();
    });

    closeMenuBtn?.addEventListener('click', toggleMobileMenu);
    console.log('Hamburger button click event listener attached');

    mobileJoinBtn?.addEventListener('click', function (e) {
        e.preventDefault();
        toggleMobileMenu();
        alert('Thank you for your interest! Registration will open soon.');
    });

    // Close mobile menu when clicking on any link inside it
    mobileMenu?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function (e) {
            if (this.id !== 'mobile-join-btn') {
                e.preventDefault();
                toggleMobileMenu();
            }
        });
    });


     // Get the container where speakers will be added
     const speakersContainer = document.getElementById('featured-speakers');

     // Clear existing HTML inside the container
     speakersContainer.innerHTML = `<h3 class="speakers-title">Featured Speakers</h3>`;
 
     // Loop through speakers and create HTML for each one
     speakers.forEach(speaker => {
         // Create a div element for each speaker
         const speakerElement = document.createElement('div');
         speakerElement.classList.add('speaker');
 
         // Set inner HTML with speaker data
         speakerElement.innerHTML = `
             <div class="speaker-img-container">
                 <img src="${speaker.image}" alt="${speaker.name}">
             </div>
             <div class="speaker-text-content">
                 <h4 class="speaker-name">${speaker.name}</h4>
                 <p class="speaker-position">${speaker.position}</p>
                 <div class="speaker-line"></div>
                 <p class="speaker-description">${speaker.description}</p>
             </div>
         `;
 
         // Append each speaker element to the speakers container
         speakersContainer.appendChild(speakerElement);
     });

    console.log('Event listeners attached');
});
