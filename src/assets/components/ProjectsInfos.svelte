<script>
  import { fade } from "svelte/transition";

  export let completed, role, techs;
</script>

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
      <p>Completé:</p>
      <p>{completed}</p>
    </li>
    <li>
      <p>Role:</p>
      <p>{role}</p>
    </li>
    <li>
      <p>Technologies:</p>
      <ul>
        {#each techs as tech}
          <li>{tech}</li>
        {/each}
      </ul>
    </li>
  </ul>
</div>

<style lang="scss">
  @use "../style/global.scss";

  div.infos {
    @include global.flex;

    height: 100vh;
    width: 25%;

    @media screen and (max-width: 1024px) {
      height: 25%;
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
</style>
