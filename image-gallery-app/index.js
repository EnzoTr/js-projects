let scrollContainer = document.querySelector('.gallery')
let prevBtn = document.getElementById('prev-btn')
let nextBtn = document.getElementById('next-btn')

scrollContainer.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = 'auto';
});

nextBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth !important';
    scrollContainer.scrollLeft += 900;
})

prevBtn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = 'smooth !important';
    scrollContainer.scrollLeft -= 900;
})