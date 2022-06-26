
const darkMode = document.querySelector(".btn-dark-mode")
const input = document.querySelector(".input-buscar")

darkMode.addEventListener('click',()=>{
    console.log("click")
    document.body.classList.toggle('dark-mode')

    if(document.body.className == 'dark-mode'){
        darkMode.innerHTML=  `<ion-icon name="moon-outline"></ion-icon> ligth mode`
    } else{
        darkMode.innerHTML=  `<ion-icon name="moon-sharp"></ion-icon> dark mode`
    }
})