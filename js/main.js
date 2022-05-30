// через колесо
// document.addEventListener('wheel', function (event) {
//     // console.log('Текущая прокрутка сверху: ' + window.pageYOffset);
//     element = document.getElementById("navBar");

//     if (window.pageYOffset > 400) {
//         if (event.deltaY > 0) {
//             console.log("down " + event.deltaY);
//             element.classList.remove("nav-fixed");
//             element.classList.toggle("nav-hidden");
//         } else if (event.deltaY < 0) {
//             console.log("up " + event.deltaY);
//             element.classList.remove("nav-hidden");
//             element.classList.toggle("nav-fixed");
//         }
//     } else if (window.pageYOffset < 400) {
//         element.classList.remove("nav-fixed");
//         element.classList.remove("nav-hidden");
//     }
// });



const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function () {
        const context = this;
        const args = arguments;
        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function () {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    }
}





let y = 0;
document.addEventListener('scroll', throttle(function () {
    element = document.getElementById("navBar");
    let delta = window.pageYOffset - y;
    
    if (window.pageYOffset > 400) {
        if (delta > 0) {
            console.log("down " + delta);
            element.classList.remove("nav-fixed");
            element.classList.toggle("nav-hidden");
        } else if (delta < 0) {
            console.log("up " + delta);
            element.classList.remove("nav-hidden");
            element.classList.toggle("nav-fixed");
        }
    } else if (window.pageYOffset < 400) {
        element.classList.remove("nav-fixed");
        element.classList.remove("nav-hidden");
    }
    y = window.pageYOffset;
}, 500));




