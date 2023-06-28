let currentScroll = 0,
  isDown = false,
  startX,
  scrollLeft,
  canScroll = true;

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

    //calculating min and max to use it after
    this.min = 0;
    this.max;
    direction == "vertical"
      ? (this.max =
          Math.ceil(-((100 * el.clientHeight) / window.innerHeight)) +
          100 +
          treshold)
      : (this.max =
          Math.ceil(-((100 * el.clientWidth) / window.innerWidth)) +
          100 +
          treshold);

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

      window.addEventListener(
        "mousedown",
        (e) => {
          isDown = true;
          this.direction == "vertical"
            ? (startFrom = e.clientY)
            : (startFrom = e.clientX);

          currentScrollStart = currentScroll;
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

          if (
            (lateralMvt < 0 && currentScroll >= this.max) ||
            (lateralMvt > 0 && currentScroll <= this.min)
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
        deltaY: -0,
        deltaMode: 1,
      })
    );

    //appengind an overflow hidden so the user won't be able to scroll when the scroll is initiated
    document.querySelector("body") != null
      ? (document.querySelector("body").style.overflow = "hidden")
      : console.log("no body");
    document.querySelector("#app") != null
      ? (document.querySelector("#app").style.overflow = "hidden")
      : console.log("no app");
  };

  destroy = function () {
    //reseting the current scroll
    currentScroll = 0;

    this.aeraListener.abort();

    //reinitializing the scroll
    document.querySelector("body") != null
      ? document.querySelector("body").removeAttribute("style")
      : console.log("no body");
    document.querySelector("#app") != null
      ? document.querySelector("#app").removeAttribute("style")
      : console.log("no app");
  };

  scrollTo = function (el) {
    let offset;

    let elementSpeed = parseFloat(el.parentNode.dataset.scrollSpeed);

    //reversing the value so 1.25 will be 0.75 instead of being 25% more it's 25% less
    elementSpeed = +Math.abs(elementSpeed - 2).toFixed(2);

    //calculating the element's left/top offset in vh/vw
    this.direction == "vertical"
      ? (offset = Math.round(
          (el.getBoundingClientRect().top * 100) / window.innerHeight
        ))
      : (offset = Math.round(
          (el.getBoundingClientRect().left * 100) / window.innerWidth
        ));

    //multiplicating by the elementspeed so if the elements goes faster than 1 it will still align good
    offset *= elementSpeed;

    currentScroll += -offset;

    //containing the current scroll value between min and max
    //reversing min and max due to negative scroll value
    currentScroll = Math.max(Math.min(currentScroll, this.min), this.max);

    Scroll.scrollElements(this.el, this.direction);
  };

  center = function (el) {
    let offset, spaceNeeded;

    let elementSpeed = parseFloat(el.parentNode.dataset.scrollSpeed);

    //reversing the value so 1.25 will be 0.75 instead of being 25% more it's 25% less
    //substracting .05 from it so it centers perfectly
    elementSpeed = Math.abs(elementSpeed - 2);

    if (this.direction == "vertical") {
      //calculating the element's top offset in v
      offset = (el.getBoundingClientRect().top * 100) / window.innerHeight;

      //calculating the left/up part of the window that is left after the element's width or height has been deduced in vw/vh
      spaceNeeded =
        (((window.innerHeight - el.getBoundingClientRect().height) / 2) * 100) /
        window.innerHeight;
    } else if (this.direction == "horizontal") {
      offset = (el.getBoundingClientRect().left * 100) / window.innerWidth;

      spaceNeeded =
        (((window.innerWidth - el.getBoundingClientRect().width) / 2) * 100) /
        window.innerWidth;
    }

    //multiplicating by the elementspeed so if the elements goes faster than 1 it will still align good
    let scrollTo = (-offset + spaceNeeded) * elementSpeed;

    currentScroll += scrollTo;

    //containing the current scroll value between min and max
    //reversing min and max due to negative scroll value
    currentScroll = Math.max(Math.min(currentScroll, this.min), this.max);

    Scroll.scrollElements(this.el, this.direction);
  };

  scrollIntoView = function (el, amountVisible = 10) {
    //containing amountVisible into [0;100] because it's a precentage
    amountVisible = Math.max(Math.min(amountVisible, 100), 0);

    //getting the offset top in VW
    let offestClose, offsetFar, size;

    if (this.direction == "vertical") {
      offestClose = (el.getBoundingClientRect().top * 100) / window.innerHeight;
      offsetFar =
        (el.getBoundingClientRect().bottom * 100) / window.innerHeight;
      size = (el.getBoundingClientRect().height * 100) / window.innerHeight;
    } else if (this.direction == "horizontal") {
      offestClose = (el.getBoundingClientRect().left * 100) / window.innerWidth;
      offsetFar = (el.getBoundingClientRect().right * 100) / window.innerWidth;
      size = (el.getBoundingClientRect().width * 100) / window.innerWidth;
    }

    let visibleSize = size * (amountVisible / 100);

    if (offestClose > 100) {
      let distanceToViewport = offestClose - 100 + visibleSize;
      currentScroll += -distanceToViewport;

      //containing the current scroll value between min and max
      //reversing min and max due to negative scroll value
      currentScroll = Math.max(Math.min(currentScroll, this.min), this.max);

      Scroll.scrollElements(this.el, this.direction);
    } else if (offsetFar < 0) {
      let distanceToViewport = offsetFar - visibleSize;
      currentScroll += -distanceToViewport;

      //containing the current scroll value between min and max
      //reversing min and max due to negative scroll value
      currentScroll = Math.max(Math.min(currentScroll, this.min), this.max);

      Scroll.scrollElements(this.el, this.direction);
    } else {
      console.warn("Element already visible");
    }
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
    let min = 0;
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

    if (canScroll) {
      canScroll = false;

      event.deltaY > 0
        ? (currentScroll = Math.max(Math.min(currentScroll - step, min), max))
        : (currentScroll = Math.max(Math.min(currentScroll + step, min), max));

      //making the elements move;
      Scroll.scrollElements(el, direction);

      setTimeout(() => {
        canScroll = true;
      }, 50);
    }
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
