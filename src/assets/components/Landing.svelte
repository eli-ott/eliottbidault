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
      treshold: 50,
      draggable: true,
    });

    //enabling the scroll only for wide screen
    if (window.screen.width > 1024) {
      setTimeout(() => {
        console.log("init");
        scroll.init();
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
    //removing the scroll while the transition is getting done
    scroll.destroy();
    show = false;

    let target = e.currentTarget;
    let location = target.dataset.title || dir;
    setTimeout(() => {
      window.location.hash = `#${location}`;
    }, 850);
  };

  //doing this to avoid clicking on a project when the used just wanted to drag scroll
  let mouseDown = false;
  const removeClick = () => {
    console.log("removing");
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
        data-index="1"
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
        data-index="2"
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
        data-index="1"
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
      data-scroll-speed="1.3"
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
        data-index="1"
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
        data-index="3"
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
        data-index="4"
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
        data-index="5"
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
    width: 300vw;

    @media screen and (max-width: 675px) {
      @include global.flex(column, nowrap, space-evenly, center);
      height: 225vh;
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

      // filter: invert(27%) sepia(97%) saturate(100%) hue-rotate(3deg)
      //   brightness(28%) contrast(102%);

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
