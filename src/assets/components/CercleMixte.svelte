<script>
  import { onMount } from "svelte";
  import { quadInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import Scroll from "../plugins/scroll";
  import {
    topScaleIn,
    topScaleInInverse,
    topScaleOut,
    topScaleOutInverse,
  } from "../plugins/transitions";
  import { store } from "../store";

  let data = $store.cercleMixte;

  let scroll;
  let show = false;
  let maxTranslate;

  onMount(() => {
    show = true;

    scroll = new Scroll({
      el: document.querySelector("[data-scroll-container]"),
      lerp: 0.75,
      treshold: -15,
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

<section class="cercle-mixte project">
  {#if show}
    <div
      in:fade={{
        delay: 650,
        duration: 250,
      }}
      out:fade={{
        duration: 250,
      }}
      class="infos"
    >
      <ul>
        <li>
          <p>Completed:</p>
          <p>July 2022</p>
        </li>
        <li>
          <p>Role:</p>
          <p>Front & Back End</p>
        </li>
        <li>
          <p>Technologies:</p>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li>PHP</li>
          </ul>
        </li>
      </ul>
    </div>
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
    <div
      in:fade={{
        delay: 650,
        duration: 250,
      }}
      out:fade={{
        duration: 250,
      }}
      class="directions"
    >
      <div class="back">
        <div class="line" />
        <a on:click={goBack} on:keydown={goBack}>back</a>
      </div>
      <div class="visit">
        <a
          href="https://cercle-mixte-reims.ga"
          target="_blank"
          rel="noopener noreferrer"
        >
          visit site
        </a>
        <div class="line" />
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
  @use "../style/project.scss";

  section.cercle-mixte {
    height: 250vh;

    @media screen and (max-width: 400px) {
      height: 260vh;
    }
    @media screen and (min-width: 401px) and (max-width: 500px) {
      height: 285vh;
    }
    @media screen and (min-width: 501px) and (max-width: 600px) {
      height: 310vh;
    }
    @media screen and (min-width: 601px) and (max-width: 1024px) {
      height: 335vh;
    }
  }
</style>
