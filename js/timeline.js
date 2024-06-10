//making our timeline scrollable 
document.addEventListener('DOMContentLoaded', () => {
    const box1 = document.getElementById('box1');
    const dropdownContent = box1.querySelector('.dropdown-content');

    box1.addEventListener('click', () => {
        dropdownContent.classList.toggle('show');
    });

    const timeline = document.querySelector('.timeline');
    
    timeline.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            timeline.scrollLeft += event.deltaY;
        }
    });
});