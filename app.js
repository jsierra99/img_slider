const slideEl = document.querySelectorAll(".slide");
const nextEl = document.querySelector(".next");
const prevEl = document.querySelector(".prev");
const auto = false;
const intervalTime = 3000;
let slideInterval;

const nextSlide = () =>
{
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if(current.nextElementSibling)
    {
        current.nextElementSibling.classList.add("current");
    }
    else
    {
        slideEl[0].classList.add("current");
    }
}

const prevSlide = () =>
{
    const current = document.querySelector(".current");
    current.classList.remove("current");

    if(current.previousElementSibling)
    {
        current.previousElementSibling.classList.add("current");
    }
    else
    {
        slideEl[slideEl.length - 1].classList.add("current");
    }
}

function slider()
{
    nextEl.addEventListener("click", function()
    {
        nextSlide();
        
        if(auto)
        {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    })

    prevEl.addEventListener("click", function()
    {
        prevSlide();
        
        if(auto)
        {
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    })
}

if(auto)
{
    slideInterval = setInterval(nextSlide, intervalTime);
}
slider();