document.addEventListener('DOMContentLoaded',()=>{
    const dropNavbarBtn = document.getElementById('dropNavbarBtn')
    const closeNavbarBtn = document.getElementById('closeNavbarBtn')
    const dropNavbar = document.getElementById('dropNavbar')

    dropNavbarBtn.onclick = ()=>{
        dropNavbar.style.display = 'block'
    }

    closeNavbarBtn.onclick = ()=>{
        dropNavbar.style.display = 'none'
    }
})