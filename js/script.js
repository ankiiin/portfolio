document.addEventListener("DOMContentLoaded", () => {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const popupMenu = document.querySelector(".popup-menu");
    const menuLinks = document.querySelectorAll(".popup-menu a");

    hamburgerMenu.addEventListener("click", () => {
        const isMenuVisible = popupMenu.style.display === "block";
        popupMenu.style.display = isMenuVisible ? "none" : "block";
    });

    document.addEventListener("click", (e) => {
        if (!hamburgerMenu.contains(e.target) && !popupMenu.contains(e.target)) {
            popupMenu.style.display = "none";
        }
    });

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            popupMenu.style.display = "none";
        });
    });
});

const popupMenu = document.querySelector('.popup-menu');
document.querySelectorAll('.popup-menu a').forEach(link => {
    link.addEventListener('click', () => {
        popupMenu.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const scrollToTopButton = document.getElementById("scrollToTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) { 
            scrollToTopButton.style.display = "flex";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });

    scrollToTopButton.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", 
        });
    });
});

