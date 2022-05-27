<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 <i>Kanban</i>

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-7(data-aos="fade-down")
        p.mb-3 Además de <i> Scrum, </i> otro método extendido es <i> Kanban. </i> El método extendido hace referencia a que pueden ser agregados a otros métodos existentes. <i> Kanban. </i>  está fundamentado en los principios Lean y se centra en la eliminación de lo que no aporta valor, estos buscan reducir tiempos, precios y defectos.
        .cajon.color-custom-1.p-4.mb-4
          p El trabajo con <i> Kanban </i> se basa en definir un número máximo de tarjetas visuales en un tablero para cada fase del proceso; se trata de esperar antes de avanzar a otro estado. Estos procedimientos son efectivos para detectar atascos o errores, para que los problemas no se hagan más grandes y difíciles de solucionar. 
      .col-8.col-md-8.col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/images/tema4/img_1.jpg" alt="", style="width:450px; display:block; margin: 0 auto;")
    
    p.text-center.mb-5(data-aos="fade-down") Sobre <i> Kanban </i> tenga en cuenta:
  
  .container.bg-white.p-4.p-md-5.bg-tema1
    .col-lg-12.px-lg-5.px-4
      .row.justify-content-center.mb-5
        .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta--sencilla.p-3.h-100
              figure
                img(src='@/assets/curso/images/tema4/ico_1.svg' alt="", style="width:155px; display:block; margin:auto 0;").m-auto
              p.aling-9-text.mt-3  1. Surge para entregar a tiempo un producto y mejorar siempre los procesos.
        .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta--sencilla-1.p-3.h-100
              figure
                img(src='@/assets/curso/images/tema4/ico_2.svg' alt="", style="width:150px; display:block; margin:auto 0;").m-auto
              p.aling-9-text 2. <i> Kanban </i> ayuda a optimizar los procesos establecidos en la organización, existiendo muchas maneras de aplicar <i> Kanban </i> al proyecto.
        
        .col-md-8.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
          .tarjeta--sencilla-1.p-3.h-100
              figure
                img(src='@/assets/curso/images/tema4/ico_3.svg' alt="", style="width:150px; display:block; margin:auto 0;").m-auto
              p.aling-9-text.mt-2 3. La aplicación de este método debe darse en fases establecidas para ello.
    
      p.mb-3 Conozca ahora las fases para la aplicación del método <i> kanban </i> en proyectos de desarollo de <i> software: </i>
      br
      SlyderF.elemento.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-down")
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
        .col-lg-3(data-aos="fade-down")
          img(src="@/assets/curso/images/tema4/ico_4.svg")

      .row.justify-content-center.align-items-center.mb-5
        .col-lg.order-1.order-lg-2.px-0(data-aos="fade-right")
          .custom_box_left 
            p.mb-0 La creación del tablero es sencilla, se dispone de una columna para cada etapa del flujo ya definida. Para que un tablero <i> Kanban </i> esté bien elaborado es importante saber en qué momento del flujo empieza uno y termina otro; la idea es organizar el trabajo sobre la capacidad de acción. 
    
        .col-auto.mb-5.mb-lg-0.onTop.order-2.order-lg-1.px-0(data-aos="fade-left")
          img(src="@/assets/curso/images/tema4/img_5.jpg" alt='AvatarTop', style="width:450px;")
  .container.bg-white.p-4.p-md-5.container-bottom.mg-top

    p.text-center.mb-5(data-aos="fade-down") Toda tarjeta <i> Kanban </i> debe contener:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down")
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
