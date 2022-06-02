window.addEventListener('load', ()=>{
    navbar();
    slide();
    validation();
})


// NAVBAR
const navbar = () => {

    let isNavbarActive = false;

    const bars = document.querySelector(".js-bars");
    const navList = document.querySelector(".js-list");
    const activeBody = document.querySelector("body");

    bars.addEventListener("click", ()=> {

        isNavbarActive = !isNavbarActive

        if(isNavbarActive) {
            navList.classList.add("active");
            activeBody.classList.add("dark-background");
        } else {
            navList.classList.remove("active");
            activeBody.classList.remove("dark-background");
        }

        bars.classList.toggle("rotate")
    })
}

// SLIDER
const slide = () => {

    const slider = document.querySelector(".js-slider");
    const sliderWrapper = document.querySelector(".js-slider-wrapper");

    let pressed = false;
    let startx;
    let x;

    slider.addEventListener('mousedown', (e)=> {
        pressed = true;
        startx = e.offsetX - sliderWrapper.offsetLeft;
        slider.style.cursor = 'grabbing';
    });

    slider.addEventListener('mouseenter', ()=> {
        slider.style.cursor = 'grab';
    });

    slider.addEventListener('mouseup', () => {
        slider.style.cursor = 'grab';
    })

    window.addEventListener('mouseup', () => {
        pressed = false;
    })

    slider.addEventListener('mousemove', (e)=> {
        if(!pressed) return;
        e.preventDefault();

        x = e.offsetX
        
        sliderWrapper.style.left = `${x - startx}px`;

        checkboundery();
    })

    function checkboundery() {
        let outer = slider.getBoundingClientRect();
        let inner = sliderWrapper.getBoundingClientRect();

        if(parseInt(sliderWrapper.style.left) > 0) {
            sliderWrapper.style.left = '0px';
        }else if(inner.right < outer.right){
            sliderWrapper.style.left = `-${inner.width - outer.width}px`
        }
    }
}

 //Form validation
const validation = () => {

    const form = document.querySelector(".js-form");
    const input = document.querySelector(".js-input");

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        checkInputField();
    })

    function checkInputField () {
        let formField = input.parentElement;
        if(input.value === ""){
            formField.classList.add("error");
        } else {
            formField.classList.remove("error");
        }

        if(!validateEmail(input.value)){
            formField.classList.add("error");
        } else {
            formField.classList.remove("error");
        }
    }

    function validateEmail(email){
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
}




