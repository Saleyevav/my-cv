
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
    console.log(window.pageYOffset)
    element = document.getElementById("navBar");
    let delta = window.pageYOffset - y;
    if (window.pageYOffset > 700) {
        if (delta > 0) {
            element.classList.remove("nav-scroll-active");
            element.classList.add("nav-scroll");
        } else if (delta < 0) {
            element.classList.add("nav-scroll-active");
        }
    } else if (window.pageYOffset < 700) {
         element.classList.remove("nav-scroll-active");
    }
    y = window.pageYOffset;
}, 100));


let buttons = document.querySelectorAll('a[href^="#"]');

for (let btn of buttons) {
    btn.onclick = function (e) {
        e.preventDefault();
        href = btn.getAttribute('href');
        let anchor = document.querySelector('a[name$="' + href.slice(1) + '"]');
        anchor.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    }
}

function typeWriter(id, speed, txt, i) {

    if (i < txt.length) {
        document.getElementById(id).innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed, id, speed, txt, i);
    }
}

typeWriter('hi', 500, 'hi', 0);
setTimeout(typeWriter, 1000, 'my-name', 100, 'my name is alex', 0);
setTimeout(typeWriter, 3200, 'i-am', 100, 'i am a web developer', 0);
