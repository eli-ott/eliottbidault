<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let show = false;

  onMount(() => {
    show = true;
  });
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
    <h2>2023 portfolio</h2>
  </header>
{/if}

<style lang="scss">
  @use "../style/global.scss";

  header {
    pointer-events: none;

    position: fixed;
    @include global.flex(row, nowrap, space-between, start);

    z-index: 9999;
    height: 10vh;
    width: 100%;
    padding: 1.15vw 1.5vw;

    @media screen and (max-width: 770px) {
      height: 7.5vh;
    }

    h1,
    h2 {
      font-family: bebasNeue;
      font-size: 1.75vw;
      line-height: 1.35vw;
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
