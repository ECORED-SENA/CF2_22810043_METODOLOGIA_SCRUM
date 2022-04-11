<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción 

    
    
    .cajon-b.color-primario.p-3.mb-5
      p.mb-0 Se da la bienvenida a este componente denominado #[span.color-text <b>“Planeación, ejecución y desarrollos ágiles”</b>] y se desea muchos éxitos en este recorrido formativo. Para comenzar, visualice con atención el recurso que enseguida se muestra:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
     
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
