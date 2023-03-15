<script>
  import Header from "./assets/components/Header.svelte";
  import Footer from "./assets/components/Footer.svelte";
  import Landing from "./assets/components/Landing.svelte";
  
  import PicturePortfolio from "./assets/components/PicturePortfolio.svelte";
  import QuantumPhysics from "./assets/components/QuantumPhysics.svelte";
  import IssTracker from "./assets/components/IssTracker.svelte";
  import CercleMixte from "./assets/components/CercleMixte.svelte";
  import VisitReims from "./assets/components/VisitReims.svelte";
  import About from "./assets/components/About.svelte";

  const routingMap = {
    "": Landing,
    "#": Landing,
    "#landing": Landing,
    "#picture-portfolio": PicturePortfolio,
    "#quantum-physics": QuantumPhysics,
    "#iss-tracker": IssTracker,
    "#cercle-mixte": CercleMixte,
    "#visit-reims": VisitReims,
    "#a-propos": About
  };

  let currentComponent = routingMap[location.hash];

  const changePage = () => {
    currentComponent = routingMap[location.hash];
  };
</script>

<svelte:window on:hashchange={changePage} />
<main>
  <Header />
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
