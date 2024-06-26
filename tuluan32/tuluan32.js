let currentSection = 0;
const sections = document.querySelectorAll('.section');
const totalSections = sections.length;

window.addEventListener('wheel', function(event) {
    if (event.deltaY > 0) {
        // Scroll down
        if (currentSection < totalSections - 1) {
            currentSection++;
            scrollToSection(currentSection);
        }
    } else {
        // Scroll up
        if (currentSection > 0) {
            currentSection--;
            scrollToSection(currentSection);
        }
    }
});

function scrollToSection(sectionIndex) {
    sections.forEach((section, index) => {
        if (index === sectionIndex) {
            section.style.transform = 'translateY(-' + sectionIndex * 100 + 'vh)';
        } else {
            section.style.transform = 'translateY(-' + sectionIndex * 100 + 'vh)';
        }
    });
}
