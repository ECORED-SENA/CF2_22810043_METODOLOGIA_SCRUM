<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Métodos ágiles
    
    .row.justify-content-center.align-items-center
      .col-lg-6.md-5(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/img_1.jpg" alt='AvatarTop').m-auto
      .col-lg-6.md-5(data-aos="fade-left")
          p.mb-3 La incertidumbre por la falta de respuesta en los proyectos de desarrollo es muy común y por esto, se empiezan a proponer ciertos tipos de metodologías ágiles. En 1986 Nonaka y Takeuchi destacaron la forma de trabajar en la que un equipo acoge las diferentes fases, así como en un juego de <i> Rugby </i>, afrontando un <i> Scrum, </i> orientados hacia un mismo camino y a la par.

          p.mb-0 Por definición y naturaleza una metodología ágil es aquella que favorece la aceleración de los procesos en un proyecto o desarrollo, gracias a que permite adaptaciones a las maneras y formas de trabajo, a los tiempos, a los roles, a las condiciones mismas del producto o proyecto, etc.
  
      
    
    Separador 
    
    #t_2_1.titulo-segundo
      .h2 2.1. El manifiesto ágil

    p.mb-3 Hace referencia al conjunto de autores y personas relevantes, relacionadas con el desarrollo del <i>software,</i> quienes lograron plasmar las ideas y el sentimiento industrial del <i> software. </i> El manifiesto ágil surgió para dar un carácter específico, una identidad a los proyectos de desarrollo de <i> software. </i>

    p.text-center Conozca y profundice en los principios constitutivos del manifiesto ágil, los cuales se detallan a continuación:
  .container.bg-white.p-2.p-md-3.fondo-1
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10(data-aos="fade-down")
        ImagenInfografica.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema2/img_2.svg")
              

          .tarjeta.color-infografica-2.p-4(x="28%" y="45%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-12
                h3 1. Valorar individuos y sus interacciones frente a procesos y herramientas
                p  Todas las ayudas, junto con las personas, son importantes y debe trabajarse con la ayuda de procesos.

          .tarjeta.color-infografica-2.p-3(x="37%" y="24%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-12
                h3 2. Valorar más el <i> software </i> que funciona, que una documentación exhaustiva
                p Siempre es más importante el producto; esto no quiere decir que la documentación no sea importante, pero se deben tener prioridades.

          .tarjeta.color-infografica-2.p-3(x="72%" y="32%"  numero="+")
            .row.justify-content-center.mb-3  
              .col-12
                h3 3. Valorar más la colaboración con el cliente que la negociación de un contrato
                p La idea es establecer un marco de colaboración y de confianza con el usuario. Los intereses han de ser comunes; entender al cliente y satisfacer sus necesidades es lo importante.
          
          .tarjeta.color-infografica-2.p-3(x="68%" y="69%" numero="+" )
            .row.justify-content-center.mb-3      
              .col-12
                h3 4. Valorar más la respuesta al cambio que el seguimiento de un plan
                p Se debe valorar más la incertidumbre como parte del mismo trabajo; la adaptación y flexibilidad son más valiosas a los cambios que hacer seguimiento y cumplimiento a un plan.

    Separador
    #t_2_2.titulo-segundo
      .h2 2.2. Diferentes métodos ágiles

    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-7(data-aos="fade-right")
        .cajon.color-custom-1.p-4.mb-4
          p Los métodos ágiles suelen diferenciarse gracias a ciertos aspectos constitutivos en cada uno de ellos. En determinada situación se elige un cierto método porque se considera el más apropiado, el más adaptable y justo para un proyecto.
        
        p.mb-3 Los métodos son ágiles, en tanto que consideran el elemento clave de la comunicación permanente entre el cliente y los desarrolladores del producto. En ellos, todos deben sentirse parte de un gran equipo, apuntando hacia un objetivo común. 
      .col-8.col-md-8.col-lg-5(data-aos="fade-left")
        img(src="@/assets/curso/images/tema2/img_3.png" alt="", style="width:450px; display:block; margin: 0 auto;")
    
    p.mb-3(data-aos="fade-down") Se presentan algunos de los métodos ágiles más utilizados en los proyectos de desarrollo de <i>software</i>; analice los elementos constitutivos de cada uno y los aspectos diferenciadores entre ellos:
    
  .container.bg-white.p-4.p-md-5.container-bottom.mg-top

    .tarjeta.col-md-12.col-12.pos12.gris.mb-5
      SlyderA.tema2(tipo="b")(data-aos="fade-left")
        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/1.png').m-auto
        
          .col-lg-7.align-items-center
            h5.mt-5 <i> Kanban </i>
              p.mt-3 Palabra de origen japonés que significa “tarjetas visuales”. Con este método se consigue mostrar siempre visualmente el estado del proyecto a todo el equipo involucrado.
          
        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/2.png').m-auto
          .col-lg-7.align-items-center
            h5 <i> Lean software development </i>
              p.mt-3 Posee tres objetivos: reducir tiempos de entrega, reducir precios y costos, reducir número de defectos o <i> bugs </i> (dar calidad). 
        
        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/3.png').m-auto
        
          .col-lg-7.align-items-center
            h5.mt-5 <i> Dynamic Systems Development Method </i>
              p.mt-3 Considerado uno de los marcos más extendidos de trabajo; propone fases de estudio, viabilidad del proyecto, estudio del negocio, iteraciones del modelo, iteraciones para creación del diseño, desarrollo del producto, iteraciones para implementación.
          
        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/4.png').m-auto
          .col-lg-7.align-items-center
            h5.mt-5 <i> Programación extrema XP </i>
              p.mt-3 Método muy útil para abordar proyectos de <i> software </i> con escasos requisitos o cambiantes.

        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/5.png').m-auto
          .col-lg-7.align-items-center
            h5.mt-5 <i> Feature Driven Development” FDD </i>
              p.mt-3 Desarrollo orientado hacia la funcionalidad. Método ágil orientado al desarrollo de sistemas informáticos; centrado solamente en fases de diseño y construcción.

        .row.justify-content-evenly.fondo-slyder
          .col-lg-4.col-7.center
            figure
              img.p-y-1(src='@/assets/curso/images/tema2/6.png').m-auto
          .col-lg-7.align-items-center
            h5.mt-5 <i> Scrum </i>
              p.mt-3 Propone un marco de trabajo que da soporte a la innovación. Se obtienen rersultados con calidad y con iteraciones cortas (<i> Sprints </i>). Es el más usado.


  

</template>

<script>
export default {
  name: 'Tema2',
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
