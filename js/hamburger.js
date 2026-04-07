const hamburgerMenu = document.getElementById('hamburgerMenu')
const sidebar = document.getElementById('sidebar')

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active')
    sidebar.classList.toggle('active')
})