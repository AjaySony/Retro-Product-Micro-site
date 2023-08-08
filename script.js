function setActiveNavLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
document.addEventListener('DOMContentLoaded', function () {
    setActiveNavLink();

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            navigateTo(targetPage);
        });
    });
});

function navigateTo(targetPage) {
    window.location.href = targetPage;
}

document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector('.footer-year');
    if (footerYear) {
        footerYear.textContent = currentYear;
    }
});
