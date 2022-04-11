<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .row.mb-5
      .col-lg-3
        img(src="@/assets/curso/images/tema4/ico_5.svg")

    p.mb-5 Ya ha finalizado el estudio de los contenidos de este componente formativo. En este punto, se invita a hacer un análisis de la estructura que se muestra a continuación. Registre su propia síntesis en su libreta de apuntes personal y realice un repaso de los puntos que considere necesario.  #[span.color-text <b>¡Adelante!</b>]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/images/tema4/info.svg")
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
