<script>
  import { onMount } from "svelte";
  import { quadInOut } from "svelte/easing";
  import {
    rightScaleIn,
    rightScaleInInverse,
    rightScaleOut,
    rightScaleOutInverse,
  } from "../plugins/transitions";
  import Scroll from "../plugins/scroll";

  export let dir;

  let scroll;
  let show = false;
  let imageTransform, maxTranslate;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 250);

    scroll = new Scroll({
      el: document.querySelector("[data-scroll-container]"),
      direction: "horizontal",
      lerp: 0.75,
      treshold: 75,
      draggable: true,
    });

    //enabling the scroll only for wide screen
    if (window.screen.width > 1024) {
      setTimeout(() => {
        scroll.init();

        setTimeout(() => {
          //centering the last element viewed
          if (sessionStorage.getItem("lastViewed")) {
            let lastViewedTitle = sessionStorage.getItem("lastViewed");
            let lastViewedElement = document.querySelector(
              `[data-title="${lastViewedTitle}"]`
            );

            scroll.center(lastViewedElement);
          }
        }, 300);
      }, 650);
    }
  });

  if (window.screen.width > 1024) {
    imageTransform = `translateY(`;
    maxTranslate = 150;
  } else {
    imageTransform = `translateX(`;
    maxTranslate = 0;
  }

  const transition = (e) => {
    let target = e.currentTarget;

    //storing the viewed project so that we will center it if he goes back to the landing
    sessionStorage.setItem("lastViewed", target.dataset.title);

    //removing the scroll while the transition is getting done
    scroll.destroy();
    show = false;

    let location = target.dataset.title || dir;
    setTimeout(() => {
      window.location.hash = `#${location}`;
    }, 850);
  };

  //doing this to avoid clicking on a project when the used just wanted to drag scroll
  let mouseDown = false;
  const removeClick = () => {
    if (mouseDown) {
      //@ts-ignore
      document.querySelector("[data-scroll-container]").style.pointerEvents =
        "none";
    } else {
      //@ts-ignore
      document.querySelector("[data-scroll-container]").style.pointerEvents =
        "all";
    }
  };
</script>

<svelte:window
  on:hashchange={scroll.destroy()}
  on:mouseup={() => {
    mouseDown = false;
  }}
  on:mousedown={() => {
    mouseDown = true;
  }}
  on:mousemove={removeClick}
  on:load={() => {
    sessionStorage.removeItem("lastViewed");
  }}
/>
<section class="projects-display" data-scroll-container>
  {#if show}
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="cercle-mixte"
        on:click={transition}
        on:keydown={transition}
        src="pictures/cercleMixte/landing.png"
        alt="cercle mixte reims landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.35"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="trail-mont-berru"
        on:click={transition}
        on:keydown={transition}
        src="pictures/montBerru/landing.png"
        alt="trail mont berru landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="picture-portfolio"
        on:click={transition}
        on:keydown={transition}
        src="pictures/portfolioPicture/landing.png"
        alt="photography portfolio landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.15"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="do-it"
        on:click={transition}
        on:keydown={transition}
        src="pictures/do-it/landing.png"
        alt="do-it landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.25"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="coffee"
        on:click={transition}
        on:keydown={transition}
        src="pictures/coffee/landing.png"
        alt="coffee landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.25"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="quantum-physics"
        on:click={transition}
        on:keydown={transition}
        src="pictures/quantumPhysics/landing.png"
        alt="quantum physics landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.35"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="iss-tracker"
        on:click={transition}
        on:keydown={transition}
        src="pictures/issTracker/landing.png"
        alt="iss tracker landing"
      />
    </div>
    <div
      in:rightScaleIn={{
        duration: 650,
        easing: quadInOut,
      }}
      out:rightScaleOut={{
        duration: 650,
        easing: quadInOut,
      }}
      data-scroll-speed="1.4"
      style:transform="{imageTransform}{Math.floor(
        Math.random() * maxTranslate
      )}px)"
    >
      <img
        in:rightScaleInInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        out:rightScaleOutInverse={{
          duration: 650,
          easing: quadInOut,
        }}
        data-title="visit-reims"
        on:click={transition}
        on:keydown={transition}
        src="pictures/visitReims/landingPage.png"
        alt="visit reims landing"
      />
    </div>
  {/if}
</section>

<style lang="scss">
  @use "../style/global.scss";

  section.projects-display {
    @include global.flex(row, nowrap, flex-start, center);

    height: 87.5vh;
    width: 375vw;

    @media screen and (max-width: 675px) {
      @include global.flex(column, nowrap, space-evenly, center);
      height: 300vh;
      width: 100%;
    }

    @media screen and (min-width: 676px) and (max-width: 1024px) {
      @include global.flex(column, nowrap, space-evenly, center);
      width: 100%;
      height: 275vh;
    }

    > div {
      cursor: pointer;
      -webkit-user-drag: none;
      user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;

      transform-origin: right center;

      margin: 0 2.5%;
      width: 100%;

      overflow: hidden;

      @media screen and (max-width: 675px) {
        width: 90%;
      }

      @media screen and (min-width: 676px) and (max-width: 1024px) {
        width: 75%;
      }

      > img {
        -webkit-user-drag: none;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;

        border-radius: 2px;
        width: 100%;
      }
    }
  }
</style>
