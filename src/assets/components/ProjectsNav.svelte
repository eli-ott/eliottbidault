<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let link;

  const dispatch = createEventDispatcher();

  const goBack = () => {
    dispatch("goBack");
  };
</script>

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
    <button data-content="retour" on:click={goBack} on:keydown={goBack}
      >retour</button
    >
  </div>
  <div class="visit">
    <a
      data-content="visiter le site"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      visiter le site
    </a>
    <div class="line" />
  </div>
</div>

<style lang="scss">
  @use "../style/global.scss";

  div.directions {
    @include global.flex(column, nowrap, space-between, center);

    height: 100vh;
    width: 25%;

    @media screen and (max-width: 1024px) {
      @include global.flex(row, nowrap, space-between, center);
      width: 100%;
    }

    button,
    a {
      position: relative;
      overflow: hidden;

      background: none;
      border: none;

      cursor: pointer;

      text-decoration: none;
      font-family: bebasNeue;
      font-size: 17px;

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
    }

    div.line {
      position: relative;

      height: 50%;
      width: 2px;

      background: global.$brown;

      @media screen and (max-width: 1024px) {
        height: 2px;
        width: 50%;
      }
    }

    div.visit {
      @include global.flex(column, nowrap, start, center);

      height: 47.5%;
      width: 100%;

      @media screen and (max-width: 1024px) {
        width: 47.5%;
        @include global.flex(row, nowrap, start, center);
      }

      > div.line {
        &::before,
        &::after {
          content: "\A0";
          position: absolute;

          bottom: 2px;
          left: -1px;
          height: 2px;
          width: 10px;

          background: global.$brown;

          transform: rotate(-45deg);

          @media screen and (max-width: 1024px) {
            bottom: -3px;
            left: calc(100% - 7px);
            transform: rotate(135deg);
          }
        }
        &::after {
          left: -7px;
          bottom: 2px;
          transform: rotate(45deg);

          @media screen and (max-width: 1024px) {
            bottom: 3px;
            left: calc(100% - 7px);
          }
        }
      }
    }
    div.back {
      @include global.flex(column, nowrap, end, center);

      height: 47.5%;
      width: 100%;

      @media screen and (max-width: 1024px) {
        width: 47.5%;
        @include global.flex(row, nowrap, end, center);
      }

      > div.line {
        &::before,
        &::after {
          content: "\A0";
          position: absolute;

          top: 2px;
          left: -1px;
          height: 2px;
          width: 10px;

          background: global.$brown;

          transform: rotate(45deg);

          @media screen and (max-width: 1024px) {
            top: -3px;
            left: -2px;
            transform: rotate(-45deg);
          }
        }
        &::after {
          left: -7px;
          top: 2px;
          transform: rotate(-45deg);

          @media screen and (max-width: 1024px) {
            transform: rotate(225deg);
            left: -2px;
            top: 3px;
          }
        }
      }
    }
  }
</style>
