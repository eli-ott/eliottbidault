<script>
  import Header from "./assets/components/Header.svelte";
  import Footer from "./assets/components/Footer.svelte";
  import Landing from "./assets/components/Landing.svelte";

  import PicturePortfolio from "./assets/components/PicturePortfolio.svelte";
  import QuantumPhysics from "./assets/components/QuantumPhysics.svelte";
  import IssTracker from "./assets/components/IssTracker.svelte";
  import MontBerru from "./assets/components/MontBerru.svelte";
  import CercleMixte from "./assets/components/CercleMixte.svelte";
  import VisitReims from "./assets/components/VisitReims.svelte";
  import About from "./assets/components/About.svelte";
  import Coffee from "./assets/components/Coffee.svelte";
  import DoIt from "./assets/components/Do-it.svelte";

  const routingMap = {
    "": Landing,
    "#": Landing,
    "#landing": Landing,
    "#picture-portfolio": PicturePortfolio,
    "#quantum-physics": QuantumPhysics,
    "#trail-mont-berru": MontBerru,
    "#coffee": Coffee,
    "#iss-tracker": IssTracker,
    "#cercle-mixte": CercleMixte,
    "#visit-reims": VisitReims,
    "#a-propos": About,
    "#do-it": DoIt
  };

  let currentComponent = routingMap[location.hash];

  const changePage = () => {
    //reseting the scroll for mobile users
    window.scroll(0, 0);

    currentComponent = routingMap[location.hash];
  };

  const changeDir = (e) => {
    location.hash = e.detail.dir;
  };
</script>

<svelte:window on:hashchange={changePage} />
<main>
  <Header on:changePage={changeDir} />
  <svelte:component this={currentComponent} />
  <Footer />
</main>

<style lang="scss">
  @use "./assets/style/global.scss";

  main {
    background: global.$white;
    @media screen and (min-width: 1025px) {
      overflow: hidden;
      width: 100vw;
      height: 100vh;
    }
  }
</style>
