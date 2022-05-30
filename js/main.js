document.addEventListener('wheel', function(event) {
    console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
    element = document.getElementById("navBar");

    if (window.pageYOffset > 400){
        if (event.deltaY > 0){
            console.log("down " + event.deltaY);
            element.classList.remove("nav-fixed");
            element.classList.toggle("nav-hidden");
        } else if (event.deltaY < 0) {
            console.log("up " + event.deltaY);
            element.classList.remove("nav-hidden");
            element.classList.toggle("nav-fixed");
        }
    } else if (window.pageYOffset < 400){
        element.classList.remove("nav-fixed");
        element.classList.remove("nav-hidden");
    }
});


