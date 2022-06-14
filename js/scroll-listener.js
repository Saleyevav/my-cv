//Adds or removes classes from the element(elementId),
//depending on Scroll direction
const scrollListener = (function () {
  const defaultOptions = {
    elementId: "navBar",
    scrollUpClass: "nav-scroll-active",
    scrollDownClass: "nav-scroll",
  };

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
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  return function (clientOptions) {
    const options = {
      ...defaultOptions,
      ...clientOptions,
    };
    let y = 0;
    document.addEventListener(
      "scroll",
      throttle(function () {
        element = document.getElementById(options.elementId);
        let delta = window.pageYOffset - y;
        if (window.pageYOffset > 700) {
          if (delta > 0) {
            //Down
            element.classList.remove(options.scrollUpClass);
            element.classList.add(options.scrollDownClass);
          } else if (delta < 0) {
            //Up
            element.classList.add(options.scrollUpClass);
          }
        } else if (window.pageYOffset < 700) {
          element.classList.remove(options.scrollUpClass);
        }
        y = window.pageYOffset;
      }, 100)
    );

    return;
  };
})();
