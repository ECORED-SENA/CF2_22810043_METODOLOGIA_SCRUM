<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 Ya ha finalizado el estudio de los contenidos de este componente formativo. En este punto, se invita a hacer un análisis de la estructura que se muestra a continuación. Registre su propia síntesis en su libreta de apuntes personal y realice un repaso de los puntos que considere necesario.  #[span.color-text <b>¡Adelante!</b>]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/images/tema4/info.svg")

    .row.align-items-center.justify-content-center.mb-3   
      .col-auto(data-aos="zoom-in-down")
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis
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
