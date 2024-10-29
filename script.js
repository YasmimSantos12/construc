let menu=document.querySelector("nav ul")
let menuIcon=document.querySelector(".menu-icon i")
let button=document.querySelector(".menu-icon")

button.addEventListener('click',function(){
    menu.classList.toggle("active")
    if(menuIcon.getAttribute("class")=="fa fa-reorder"){
        menuIcon.setAttribute("class","fa fa-close")
    }else{
        menuIcon.setAttribute("class","fa fa-reorder")
    }
})


let links = document.querySelectorAll("nav ul li a");
links.forEach(link => {
    link.addEventListener('click', function() {
        menu.classList.remove("active");
        menuIcon.setAttribute("class", "fa fa-reorder"); // Reseta o ícone para "reorder"
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    function animateTimeline() {
        const windowHeight = window.innerHeight;
        timelineItems.forEach(item => {
            const positionFromTop = item.getBoundingClientRect().top;

            if (positionFromTop - windowHeight <= -50) {
                item.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', animateTimeline);
    animateTimeline();  // Run on page load in case some elements are already visible
});
