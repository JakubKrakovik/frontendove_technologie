<template>
  <div class="footer-main">
    <div class="container_prvy">
    <div class="logo-nazov">
      <img src="../../public/logo.png" alt="Logo" class="footer-logo">
      <p class="nazov">Kava</p>
    </div>
  <div class="footer-address">
    <p>Ulica 86</p>
    <p>888 11 Mesto</p>
  </div>
    </div>
  <div class="container_druhy">
    <a href="#">Predplatné</a>
    <a href="#">Kontakt</a>
    <a href="#">Obchodné podmienky</a>
    <a href="#">Ochrana osobných údajov</a>
    <a href="#">Doprava</a>
    <a href="#">Platba</a>
    <a href="#">Reklamačný poriadok</a>
  </div>
</div>
  <div class="footer-spodok">
    <p>Bezpečné platby a doručenie včas</p>
    <p>Prijímame všetky druhy online platieb vrátane platobných kariet, Google Pay a Apple Pay. Doručujeme cez Packeta Z-Box a Packeta kuriér.</p>
  </div>
</template>

<script>

</script>

<style scoped>
.footer-main {
  background-color: #333;
  color: #fff;
  padding: 0;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
}
.sekcia_prva,
.sekcia_druha{
  display: flex;
  flex-direction: row;
}

.container_prvy,
.container_druhy {
  margin: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-address,
.footer-contact
{
  margin-left: 2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.footer-logo {
  width: 3em;
  height: 3em;
  object-fit: contain;
  margin-bottom: 0.625em;
}
.logo-nazov{
  display: flex;
  align-items: center;
  justify-content: center;

}





.container_druhy {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25em;
}

.container_druhy a {
  color: #fff;
  text-decoration: none;
}

.footer-spodok {
  background-color: #444;
  padding: 1em 0 1.25em 0;
  margin-bottom: 0;
  color: #fff;
  text-align: center;
}
</style>
