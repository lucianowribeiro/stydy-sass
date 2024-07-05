document.querySelector("button.toggle-menu").addEventListener("click", function(){
    const menu = document.querySelector("aside.menu")
    if(menu.style.display === "" || menu.style.display === "none"){
        menu.style.display = "block"
        return 
    }
    return menu.style.display = "none"
})