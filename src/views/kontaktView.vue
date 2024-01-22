<template>
  <div class="kontakt-main">
    <h1>Kontaktujte nás</h1>
    <form>
      <div class="mb-3">
        <label for="meno" class="form-label">Meno:</label>
        <input type="text" class="form-control" id="meno" placeholder="Vaše meno">
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">E-mail:</label>
        <input type="email" class="form-control" id="email" placeholder="Váš e-mail">
      </div>
      <div class="mb-3">
        <label for="sprava" class="form-label">Správa:</label>
        <textarea class="form-control" id="sprava" rows="4" placeholder="Vaša správa"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Odoslať</button>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
form{
  width: 50%;
}
.kontakt-main{
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 5rem;
  margin-bottom: 5rem;
}
</style>
