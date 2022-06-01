window.addEventListener('load', ()=>{
    navbar()
})

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



