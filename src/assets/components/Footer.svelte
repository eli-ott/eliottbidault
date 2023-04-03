<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  let year = new Date().getFullYear();
  let show = false;

  onMount(() => {
    show = true;
  });
</script>

{#if show}
  <footer
    in:fly={{
      delay: 650,
      duration: 400,
      y: 100,
      opacity: 0,
    }}
  >
    <p>
      © Copyright {year}
    </p>
    <div class="socials">
      <a data-content="email" href="mailto:eliottbidault@gmail.com"> email </a>
      <a data-content="instagram" href="https://www.instagram.com/eliott_bh/">
        instagram
      </a>
      <a data-content="github" href="https://github.com/eli-ott"> github </a>
    </div>
  </footer>
{/if}

<style lang="scss">
  @use "../style/global.scss";

  footer {
    position: fixed;
    @include global.flex(row, nowrap, space-between, center);

    z-index: 9999;
    width: 100%;
    height: 2.5vh;
    bottom: 0;

    > p {
      width: 50%;

      text-align: center;
      font-family: bebasNeue;
      font-size: 17px;

      color: global.$brown;

      @media screen and (max-width: 675px) {
        display: none;
      }
      @media screen and (min-width: 676px) and (max-width: 1024px) {
        width: 25%;
        font-size: 2.5vw;
      }
    }

    > div.socials {
      width: 50%;

      @include global.flex;

      @media screen and (max-width: 675px) {
        width: 100%;
      }
      @media screen and (min-width: 676px) and (max-width: 1024px) {
        width: 75%;
      }

      > a {
        position: relative;
        overflow: hidden;

        margin: 0 calc(0.5vw + 24px);

        font-family: bebasNeue;
        font-size: 17px;
        text-decoration: none;

        color: transparent;

        &::before,
        &::after {
          content: attr(data-content);
          position: absolute;

          top: 0;
          left: 0;

          text-decoration: none;
          font-family: bebasNeue;
          font-size: 17px;

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

        @media screen and (max-width: 675px) {
          color: global.$brown;
          font-size: 4vw;
        }
        @media screen and (min-width: 676px) and (max-width: 1024px) {
          color: global.$brown;
          font-size: 2.5vw;
        }
      }
    }
  }
</style>
