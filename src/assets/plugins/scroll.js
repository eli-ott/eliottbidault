let currentScroll = 0;
let isDown = false;
let startX;
let scrollLeft;

export default class Scroll {
  constructor({
    el,
    ease = "cubic-bezier(.19,.57,.51,.99)",
    direction = "vertical",
    lerp = 0.25,
    treshold = 0,
    draggable = true,
  }) {
    this.el = el;
    this.ease = ease;
    this.direction = direction;
    this.lerp = lerp;
    this.treshold = treshold;
    this.draggable = draggable;
    this.aeraListener = new AbortController();

    //adding data-scroll-container in case it doesn't have it and setting basic values to element to use them after
    el.setAttribute("data-scroll-container", "");
    el.setAttribute("data-scroll-direction", direction);
    el.setAttribute("data-scroll-treshold", treshold.toString());
  }

  init = function () {
    Scroll.setTransition(this.el.children, this.ease, this.lerp);

    window.addEventListener(
      "wheel",
      (event) => {
        Scroll.manageScroll(event, this.el, this.direction, this.treshold);
      },
      {
        signal: this.aeraListener.signal,
      }
    );

    if (this.draggable) {
      let startFrom, currentScrollStart;

      //calculating min and max so the drag doesn't go too far
      let min = 0;
      let max;
      this.direction == "vertical"
        ? (max =
            Math.ceil(-((100 * this.el.clientHeight) / window.innerHeight)) +
            100 +
            this.treshold)
        : (max =
            Math.ceil(-((100 * this.el.clientWidth) / window.innerWidth)) +
            100 +
            this.treshold);

      window.addEventListener(
        "mousedown",
        (e) => {
          isDown = true;
          this.direction == "vertical"
            ? (startFrom = e.clientY)
            : (startFrom = e.clientX);

          currentScrollStart = currentScroll;

          // startX = e.pageX - window.offsetLeft;
          // scrollLeft = window.scrollLeft;
        },
        {
          signal: this.aeraListener.signal,
        }
      );
      window.addEventListener(
        "mouseleave",
        () => {
          isDown = false;
        },
        {
          signal: this.aeraListener.signal,
        }
      );
      window.addEventListener(
        "mouseup",
        () => {
          isDown = false;
        },
        {
          signal: this.aeraListener.signal,
        }
      );
      window.addEventListener(
        "mousemove",
        (e) => {
          if (!isDown) return;
          e.preventDefault();
          let lateralMvt;
          this.direction == "vertical"
            ? (lateralMvt = Math.floor(
                ((e.clientY - startFrom) * 100) / window.innerHeight
              ))
            : (lateralMvt = Math.floor(
                ((e.clientX - startFrom) * 100) / window.innerWidth
              ));

          console.log(lateralMvt);

          if (
            (lateralMvt < 0 && currentScroll >= max) ||
            (lateralMvt > 0 && currentScroll <= min)
          ) {
            //offseting the elements with the translate function
            currentScroll = currentScrollStart + lateralMvt;
          }

          Scroll.scrollElements(this.el, this.direction);
        },
        {
          signal: this.aeraListener.signal,
        }
      );
    }

    //triggering dummy mouse event to append the inline transform style
    window.dispatchEvent(
      new WheelEvent("wheel", {
        deltaY: -1,
        deltaMode: 1,
      })
    );

    //appengind an overflow hidden so the user won't be able to scroll when the scroll is initiated
    document.querySelector("body").style.overflow = "hidden";
    document.getElementById("app").style.overflow = "hidden";
  };

  destroy = function () {
    //reseting the current scroll
    currentScroll = 0;

    this.aeraListener.abort();

    //reinitializing the scroll
    document.querySelector("body").removeAttribute("style");
    document.getElementById("app").removeAttribute("style");
  };

  static setTransition(scrollEl, ease, lerp) {
    //setting the transition and easing method;
    for (const element of scrollEl) {
      //@ts-ignore
      element.style.transition = `transform ${lerp}s ${ease}`;
    }
  }

  static manageScroll(event, el, direction, treshold) {
    let step = 10;
    let min = -10;
    let max;
    direction == "vertical"
      ? (max =
          Math.ceil(-((100 * el.clientHeight) / window.innerHeight)) +
          100 +
          treshold)
      : (max =
          Math.ceil(-((100 * el.clientWidth) / window.innerWidth)) +
          100 +
          treshold);

    if (event.deltaY > 0 && currentScroll >= max) {
      //offseting the elements with the translate function
      currentScroll -= step;
    } else if (event.deltaY < 0 && currentScroll <= min) {
      currentScroll += step;
    }

    //making the obkects move;
    Scroll.scrollElements(el, direction);
  }

  static scrollElements(el, direction) {
    let scrollEl = el.children;

    for (const element of scrollEl) {
      let speed = parseFloat(element.dataset.scrollSpeed) || 1;

      //containing the speed between 0 and 5
      speed = Math.max(Math.min(speed, 5), 0);

      //keeping other main transform property
      let style = window.getComputedStyle(element);
      let transformMatrix = new WebKitCSSMatrix(style.transform);

      if (direction == "horizontal") {
        //@ts-ignore
        element.style.transform = `translateY(${transformMatrix.f}px)
        translateX(${currentScroll * speed}vw)`;
      } else if (direction == "vertical") {
        //@ts-ignore
        element.style.transform = `translateY(${currentScroll * speed}vh)
        translateX(${transformMatrix.e}px)`;
      }
    }
  }
}
