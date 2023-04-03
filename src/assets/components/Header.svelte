<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { fly } from "svelte/transition";

  let dispatch = createEventDispatcher();

  let show = false;
  let btnContent = "A propos";
  let dir = "a-propos";

  onMount(() => {
    show = true;

    changeBtn();
  });

  window.addEventListener("hashchange", () => {
    changeBtn(650);
  });
  
  const changeBtn = (delay = 0) => {
    //setting timeouts to let the animation happen and then change the btn content
    if (window.location.hash == "#a-propos") {
      setTimeout(() => {
        btnContent = "Accueil";
        dir = "";
      }, delay);
    } else {
      setTimeout(() => {
        btnContent = "A propos";
        dir = "a-propos";
      }, delay);
    }
  };

  const changePage = () => {
    dispatch("changePage", {
      dir,
    });
  };
</script>

{#if show}
  <header
    in:fly={{
      delay: 650,
      duration: 400,
      y: -100,
      opacity: 0,
    }}
  >
    <h1>
      Eliott Bidault-Hervouet <br />
      Front-End Developer
    </h1>
    <!-- <h2>2023 portfolio</h2> -->
    <button data-content={btnContent} on:click={changePage}>{btnContent}</button
    >
  </header>
{/if}

<style lang="scss">
  @use "../style/global.scss";

  header {
    position: fixed;
    @include global.flex(row, nowrap, space-between, start);

    z-index: 9999;
    height: 10vh;
    width: 100%;
    padding: 1.15vw 1.5vw;

    @media screen and (max-width: 770px) {
      height: 7.5vh;
    }

    button {
      position: relative;
      overflow: hidden;

      background: none;
      border: none;

      cursor: pointer;

      text-decoration: none;
      font-family: bebasNeue;
      font-size: 1vw;

      color: transparent;

      @media screen and (max-width: 675px) {
        font-size: 4vw;
        color: global.$brown;
      }

      @media screen and (min-width: 676px) and (max-width: 1024px) {
        font-size: 2.5vw;
        color: global.$brown;
      }

      &::before,
      &::after {
        content: attr(data-content);
        position: absolute;

        top: 0;
        left: 0;

        text-decoration: none;
        font-family: bebasNeue;
        font-size: 1vw;

        color: global.$brown;

        transition: top 0.25s;

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }
      &::after {
        top: 100%;
        color: global.$blue;
      }

      &:hover::before {
        top: -100%;
      }
      &:hover:after {
        top: 0;
      }
    }

    h1 {
      font-family: bebasNeue;
      font-size: 1.75vw;
      line-height: 2.5vh;
      height: 100%;

      color: global.$brown;

      transform: scale(1.1, 1.25);

      @media screen and (max-width: 770px) {
        margin: 2.5%;
        font-size: 5vw;
        line-height: 4.5vw;
      }
    }
  }
</style>
