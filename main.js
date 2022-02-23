
var sidebar = document.getElementById("navbar")

var navLinks = document.querySelectorAll(".nav-link")

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        toggleMenu()
    })
})

// window.addEventListener('keydown', function(e){
//     console.log(e)
//     if(e.key === 'c'){
//         toggleMenu()
//     }
// })



function toggleMenu(){
    sidebar.classList.toggle('hide')
}