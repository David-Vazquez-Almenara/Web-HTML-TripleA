    function menuDesplegable() {
        const menuList = document.querySelector('#header ul');
        menuList.classList.toggle('active');
        
        const menuIcon = document.querySelector('#header span');
        menuIcon.classList.toggle('active');
    }
