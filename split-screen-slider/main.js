document.addEventListener("DOMContentLoaded", () => {
    let wrapper = document.getElementById('wrapper'),
        topLayer = wrapper.querySelector('.top'),
        handle = wrapper.querySelector('.handle'),
        skew = 0,
        delta = 0;

    if (wrapper.className.indexOf('skewed') !== -1) {
        skew = 1000;
    }
    
    wrapper.addEventListener('mousemove', e => {
        delta = (e.clientX - window.innerWidth / 2) * 0.5;
        handle.style.left = `${e.clientX + delta}px`;
        topLayer.style.width = `${e.clientX + skew + delta}px`;
    });
});

