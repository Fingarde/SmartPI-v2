let menu = document.getElementsByClassName('menu-item');
let index = 0;
let show = 3;

setInterval(() => {
    if(show > 0)
        show--;
    else {
        document.getElementById('menu').classList.add('menu-hide')
    }
}, 1000)

$(window).keydown( (key) => 
{
    if(show == 0) {
        document.getElementById('menu').classList.remove('menu-hide')
        
    }

    show = 3;

  



    menu[index].classList.remove('menu-item-selected')
    if(key.which == 39)
    {
        index++
        
        if(index > menu.length - 1) index = 0
    }
    else if(key.which == 37)
    {
        index--

        if(index < 0) index = menu.length - 1
    }

    menu[index].classList.add('menu-item-selected')
});