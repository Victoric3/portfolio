'usestrict'
const navButton = document.querySelector('.bar-icon')
const navContainer = document.querySelector('.nav-bar')
const aboutPage = document.querySelector('.about')
const navLinks = document.querySelectorAll('.links')
const navHeight = navContainer.getBoundingClientRect().height
const header = document.querySelector('header')

//navigation button
navButton.addEventListener('click', function(){
     navContainer.classList.toggle('responsive')
     aboutPage.classList.toggle('shifted')
})

//move to page
navLinks.forEach(nav => {
    nav.addEventListener('click', function(e){
    e.preventDefault();
    const scrollPoint = e.target.getAttribute('href') 
    document.querySelector(`${scrollPoint}`).scrollIntoView({behavior: 'smooth'})
    const currentPage = document.querySelector(`${scrollPoint}`)
    currentPage.classList.add('current-page')
    const removeCurrentPage = () => {currentPage.classList.remove('current-page')}
    setTimeout(removeCurrentPage, 1000)

})
});