
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

    if (window.pageYOffset > 250) {
        if (delta > 0) {
            console.log("down " + delta);
            element.classList.remove("nav-scroll-active");
            element.classList.add("nav-scroll");
        } else if (delta < 0) {
            console.log("up " + delta);
            element.classList.add("nav-scroll-active");
        }
    } else if (window.pageYOffset < 250) {
        element.classList.remove("nav-scroll-active");
        element.classList.remove("nav-scroll");
    }
    y = window.pageYOffset;
}, 500));




