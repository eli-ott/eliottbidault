<script>
  import { onDestroy, onMount } from "svelte";
  import { fly } from "svelte/transition";

  let show = false;

  onMount(() => {
    setTimeout(() => {
      show = true;
    }, 450);
  });

  onDestroy(() => {
    show = false;
  });

  const changeShine = (e) => {
    let el = e.currentTarget
    let mousePos = e.clientX - el.getBoundingClientRect().left;

    el.style.backgroundPosition = `${mousePos}px`;
  }
</script>

<section class="about">
  {#if show}
    <div
      in:fly={{
        delay: 250,
        duration: 450,
        x: 100,
      }}
      out:fly={{
        duration: 450,
        x: -100,
      }}
      class="infos"
    >
      <ul>
        <li>
          <p>Années d'expérience:</p>
          <p>4</p>
        </li>
        <li>
          <p>Roles majeurs:</p>
          <ul>
            <li>Front-End</li>
            <li>Motion</li>
          </ul>
        </li>
        <li>
          <p>Technologies préférées:</p>
          <ul>
            <li>Svelte</li>
            <li>SCSS</li>
          </ul>
        </li>
        <li>
          <p>Mes passions:</p>
          <ul>
            <li>Photographie</li>
            <li>Musique</li>
          </ul>
        </li>
      </ul>
    </div>
  {/if}
  {#if show}
    <div
      in:fly={{
        delay: 250,
        duration: 450,
        x: -100,
      }}
      out:fly={{
        duration: 450,
        x: 100,
      }}
      class="description"
    >
      <p>
        Je suis un développeur autodidacte <span class="stressed" on:mousemove={changeShine}
          >passionné</span
        >
        situé à Reims. <br /> Ce que j'adore dans le développement web, c'est la
        création de site
        <span class="stressed" on:mousemove={changeShine}>personnalisé</span> et
        <span class="stressed" on:mousemove={changeShine}>singulier</span>. <br /> <br />
        Je vise à créer une <span class="stressed" on:mousemove={changeShine}>expérience</span>
        particulière entre le site et l'utilisateur. Notamment grâce à des interactions
        et animations. <br /> <br />
        Mes nombreuses passions pour le design et la photographie m'aident à avoir
        une vision <span class="stressed" on:mousemove={changeShine}>créative</span>. <br /> <br />
        Pour discuter de votre projet, n'hésitez pas à me contacter par mail ou via
        Instagram.
      </p>
    </div>
  {/if}
</section>

<style lang="scss">
  @use "../style/global.scss";

  section.about {
    @include global.flex;
    overflow: hidden;

    height: 100vh;

    @media screen and (max-width: 1024px) {
      @include global.flex(column);
    }

    div.infos {
      @include global.flex;

      height: 100vh;
      width: 50%;

      @media screen and (max-width: 1024px) {
        height: 35%;
        width: 100%;
        margin-top: 12.5vh;
      }

      > ul {
        list-style-type: none;

        width: 50%;

        color: global.$brown;

        @media screen and (max-width: 1024px) {
          width: 75%;
        }

        > li {
          @include global.flex(row, nowrap, space-between, start);

          position: relative;

          text-align: right;
          font-family: bebasNeue;
          font-size: 17px;
          line-height: 2.5vh;
          margin-bottom: 2%;

          &::before {
            content: "\A0";
            position: absolute;

            height: 1px;
            width: 100%;
            top: -1px;
            left: 0;

            background: global.$brown;
          }
        }
        ul {
          list-style-type: inherit;
        }
      }
    }
    div.description {
      @include global.flex;

      height: 100vh;
      width: 50%;

      @media screen and (max-width: 1024px) {
        @include global.flex(row, nowrap, center, start);
        width: 95%;
        height: 65vh;
      }

      > p {
        font-family: merriweather;
        font-size: 23px;
        line-height: 4vh;

        width: 75%;

        color: global.$brown;

        > span.stressed {
          color: #48adf0;

          &:hover {
            color: transparent;

            background: linear-gradient(
              90deg,
              #48adf0,
              #48adf059,
              #48adf0,
            );
            background-clip: text;
            -webkit-background-clip: text;
            background-position: 1000px;
          }
        }

        @media screen and (max-width: 1024px) {
          font-size: 17px;
          height: 55%;
          width: 100%;
        }
      }
    }
  }
</style>
