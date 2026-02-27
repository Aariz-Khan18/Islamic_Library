// Toggle Dark Mode
function toggleTheme() {
    document.body.classList.toggle("dark");
}

// Toggle Mobile Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Search Filter Logic
function searchLibrary() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        let text = card.innerText.toLowerCase();
        if (text.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Back to Top Logic
window.onscroll = function() {
    let btn = document.getElementById("backToTop");
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// SCROLL ANIMATION LOGIC
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    }); // Triggers when 10% of the card is visible

    document.querySelectorAll('.card').forEach(card => {
        observer.observe(card);
    });
});
