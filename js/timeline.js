document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.querySelector('.timeline');
    
    timeline.addEventListener('wheel', (event) => {
        if (event.deltaY !== 0) {
            event.preventDefault();
            timeline.scrollLeft += event.deltaY;
        }
    });
});