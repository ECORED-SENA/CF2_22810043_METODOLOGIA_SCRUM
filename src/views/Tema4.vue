<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <i>Kanban</i>

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-7
        p.mb-3 Además de Scrum, otro método extendido es Kanban. El método extendido hace referencia a que pueden ser agregados a otros métodos existentes. Kanban está fundamentado en los principios Lean y se centra en la eliminación de lo que no aporta valor, estos buscan reducir tiempos, precios y defectos.
        .cajon.color-custom-1.p-4.mb-4
          p El trabajo con Kanban se basa en definir un número máximo de tarjetas visuales en un tablero para cada fase del proceso; se trata de esperar antes de avanzar a otro estado. Estos procedimientos son efectivos para detectar atascos o errores, para que los problemas no se hagan más grandes y difíciles de solucionar. 
      .col-8.col-md-8.col-lg-5
        img(src="@/assets/curso/images/tema4/img_1.jpg" alt="", style="width:450px; display:block; margin: 0 auto;")
    
    p.text-center.mb-5 Sobre Kanban tenga en cuenta:
  .container.bg-white.p-4.p-md-5.fondo-1.mg-top
    .row.justify-content-center.mb-5
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--sencilla.p-3
            figure
              img(src='@/assets/curso/images/tema4/ico_1.svg' alt="", style="width:155px; display:block; margin:auto 0;").m-auto
            p.aling-9-text.text-small.mt-3  1. Surge para entregar a tiempo un producto y mejorar siempre los procesos.
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--sencilla-1.p-3
            figure
              img(src='@/assets/curso/images/tema4/ico_2.svg' alt="", style="width:150px; display:block; margin:auto 0;").m-auto
            p.aling-9-text.text-small 2. Kanban ayuda a optimizar los procesos establecidos en la organización, existiendo muchas maneras de aplicar Kanban al proyecto.
      
      .col-md-8.col-lg-4.mb-4.mb-lg-0
        .tarjeta--sencilla-1.p-3
            figure
              img(src='@/assets/curso/images/tema4/ico_3.svg' alt="", style="width:150px; display:block; margin:auto 0;").m-auto
            p.aling-9-text.mt-2 3. La aplicación de este método debe darse en fases establecidas para ello.
    
    br
    SlyderF.elemento.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.sp1.p-3
        .row.justify-content-center.mb-3
          .col-8
            img.mb-5(src='@/assets/curso/images/tema4/img_2.png' alt='Volver arriba' style="width:150px; display:block; margin:0 auto;")
        h3.aling.text-white Definir
        p.aling.text-white.text-small Mapa de flujo del trabajo actual
      
      .tarjeta.sp1.p-3
        .row.justify-content-center.mb-3
          .col-8
            img.mb-3(src='@/assets/curso/images/tema4/img_3.png' alt='Volver arriba' style="width:150px; display:block; margin:0 auto;")
        h3.aling.text-white Crear
        p.aling.text-white.mb-4.text-small El tablero formando las columnas que representan el estado del flujo anterior.

      .tarjeta.sp1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/images/tema4/img_4.png' alt='Volver arriba' style="width:150px; display:block; margin:0 auto;")
        h3.aling.text-white Definir
        p.aling.text-white.text-small  El WIP, <i>work</i> in progress, para cada columna y la cantidad de tarjetas permitidas en cada estado.

      .tarjeta.sp1.p-3
        .row.justify-content-center.mb-3
          .col-8
            img.mb-4(src='@/assets/curso/images/tema4/img_7.png' alt='Volver arriba' style="width:160px; display:block; margin:0 auto;")
        h3.aling.text-white Reflejar
        p.aling.text-white.text-small En forma de tarjetas los ítems que representan cada uno de los trabajos.

      .tarjeta.sp1.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/images/tema4/img_8.png' alt='AvatarTop' style="width:150px; display:block; margin:0 auto;")
        h3.aling.text-white Medir
        p.aling.text-white.text-small El tiempo empleado por cada ítem, desde que entra al tablero hasta que se termina.

    .row.mb-5
      .col-lg-3
        img(src="@/assets/curso/images/tema4/ico_4.svg")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.order-1.order-lg-2
        .custom_box_left 
          p.mb-0 La creación del tablero es sencilla, se dispone de una columna para cada etapa del flujo ya definida. Para que un tablero Kanban esté bien elaborado es importante saber en qué momento del flujo empieza uno y termina otro; la idea es organizar el trabajo sobre la capacidad de acción. 
  
      .col-auto.mb-5.mb-lg-0.onTop.order-2.order-lg-1
        img(src="@/assets/curso/images/tema4/img_5.jpg" alt='AvatarTop', style="width:450px; display:block; margin:-6rem -2rem;").m-auto
  .container.bg-white.p-4.p-md-5.container-bottom.mg-top

    p.text-center.mb-5 Toda tarjeta Kanban debe contener:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        img(src="@/assets/curso/images/tema4/img_6.svg")

    
    






















</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    modal1: false,
    indicadorTarjetaFlip: true,
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
