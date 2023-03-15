<script>
  import { onMount } from "svelte";
  import { quadInOut } from "svelte/easing";
  import Scroll from "../plugins/scroll";
  import {
    topScaleIn,
    topScaleInInverse,
    topScaleOut,
    topScaleOutInverse,
  } from "../plugins/transitions";
  import { store } from "../store";
  import ProjectInfos from "./ProjectsInfos.svelte";
  import ProjectsNav from "./ProjectsNav.svelte";

  let data = $store.issTracker;

  let scroll;
  let show = false;
  let maxTranslate;

  onMount(() => {
    show = true;

    scroll = new Scroll({
      el: document.querySelector("[data-scroll-container]"),
      lerp: 0.75,
      treshold: -10,
      draggable: true,
    });

    if (window.screen.width > 1024) {
      maxTranslate = 300;
    } else if (window.screen.width > 675 && window.screen.width <= 1024) {
      maxTranslate = 150;
    } else {
      maxTranslate = 0;
    }

    //enabling the scroll only for wide screen
    setTimeout(() => {
      if (window.screen.width > 1024) {
        scroll.init();
      }
    }, 950);
  });

  const goBack = () => {
    show = false;
    scroll.destroy();

    setTimeout(() => {
      window.location.hash = "#";
    }, 950);
  };
</script>

<section class="iss-tracker project">
  {#if show}
    <ProjectInfos
      completed={data.completed}
      role={data.role}
      techs={data.techs}
    />
  {/if}
  <div class="images" data-scroll-container>
    {#if show}
      {#each data.src as src, i}
        <div
          data-scroll-speed={data.speed[i]}
          in:topScaleIn={{
            delay: 250,
            duration: 650,
            easing: quadInOut,
          }}
          out:topScaleOut={{
            duration: 650,
            easing: quadInOut,
          }}
          style:transform="translateX({Math.floor(
            Math.random() * maxTranslate
          )}px)"
        >
          <img
            in:topScaleInInverse={{
              delay: 250,
              duration: 650,
              easing: quadInOut,
            }}
            out:topScaleOutInverse={{
              duration: 650,
              easing: quadInOut,
            }}
            src={data.path + src}
            alt={data.path}
          />
        </div>
      {/each}
    {/if}
  </div>
  {#if show}
    <ProjectsNav
      on:goBack={goBack}
      link="https://iss-tracker-eli-ott.vercel.app"
    />
  {/if}
</section>

<style lang="scss">
  @use "../style/global.scss";

  section.iss-tracker {
    @include global.flex(row, nowrap, center, start);
    height: 125vh;

    width: 100%;

    @media screen and (max-width: 1024px) {
      @include global.flex(column, nowrap, flex-start, center);
    }

    @media screen and (max-width: 400px) {
      height: 155vh;
    }
    @media screen and (min-width: 401px) and (max-width: 500px) {
      height: 195vh;
    }
    @media screen and (min-width: 501px) and (max-width: 600px) {
      height: 220vh;
    }
    @media screen and (min-width: 601px) and (max-width: 1024px) {
      height: 245vh;
    }

    > div.images {
      @include global.flex(column, nowrap, center, start);
      height: 100%;
      width: 50%;

      @media screen and (max-width: 1024px) {
        @include global.flex(column, nowrap, center, center);
        width: 100%;
      }

      > div {
        overflow: hidden;

        margin: 5vh 0;
        height: 30%;
        width: 60%;

        @media screen and (max-width: 675px) {
          width: 90%;
        }
        @media screen and (min-width: 676px) and (max-width: 1024px) {
          width: 50%;
        }

        > img {
          width: 100%;
        }
      }
    }
  }
</style>
