<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.bg-white.container-top.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Programación extrema (XP)

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down")
        img(src="@/assets/curso/images/tema3/img_1.png")
      
    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-10(data-aos="fade-down")
        p.mb-3 Este proceso plantea una convivencia latente con la incertidumbre; de esta forma, el proceso se adapta a los cambios y a la variabilidad. En XP son naturales las transformaciones; la adaptación consiste, desde esta mirada, en ser capaces de laborar en entornos siempre cambiantes, siempre inciertos.
        .cajon.color-custom-1.p-4.mb-4(data-aos="fade-down")
          p Este proceso plantea una convivencia latente con la incertidumbre; de esta forma, el proceso se adapta a los cambios y a la variabilidad. En XP son naturales las transformaciones; la adaptación consiste, desde esta mirada, en ser capaces de laborar en entornos siempre cambiantes, siempre inciertos.
        p.mb-3(data-aos="fade-down") Profundice en las generalidades y aspectos constitutivos de la programación XP; preste atención al recurso que se muestra a continuación:

    figure
      .video.mb-3(data-aos="fade-down")
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador
  .container.bg-white.p-4.p-md-5.fondo-1.mg-top
    #t_3_1.titulo-segundo
      .h2 3.1. Valores XP
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.md-5(data-aos="fade-right")
          p.mb-3 Se trata de aquellos principios que regulan los procesos, acciones, actividades, fases y funcionamiento de los roles dentro de un proyecto o desarrollo de producto. Para efectivizar los valores XP debe existir una unión entre pensamientos y prácticas en el día a día; ello dará las pautas para configurar la identidad del trabajo mismo, incluso, del producto final.
          .cajon.color-custom-2.p-4.mb-4
           p Los valores que orientan el desarrollo en XP son la simplicidad, la comunicación, el feedback, el respeto, la valentía, la calidad de vida y demás valores que se quieran adicionar en cada organización. 
      .col-lg-5.md-5(data-aos="fade-left")
        img(src="@/assets/curso/images/tema3/img_2.jpg").m-auto
    
    p.mb-3.text-center(data-aos="fade-down") Familiarícese con los siguientes valores del método XP y sus aspectos característicos; procure llevar registro de lo más destacado en su libreta personal de apuntes:

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10(data-aos="fade-down")
        ImagenInfografica.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src="@/assets/curso/images/tema3/img_3.svg")
              
          .tarjeta.color-infografica-1.p-2(x="5%" y="42%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-8
                h3 Comunicación: 
                p  Acción permanente de encuentro e intercambio entre desarrolladores y el cliente; ello favorece evitar errores e inconvenientes. 

          .tarjeta.color-infografica-1.p-2(x="37%" y="61%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-8
                h3 Simplicidad:
                p  El trabajo debe hacerse de la forma más simple posible. El diseño y el código debe ser simple, pero correcto, eliminando redundancias.

          .tarjeta.color-infografica-1.p-2(x="55%" y="38%"  numero="+")
            .row.justify-content-center.mb-3  
              .col-8
                h3 Feedback:  
                p Combinación de reacciones, comentarios, sugerencias, observaciones, etc.; por eso debe existir comunicación constante entre los roles del equipo y del equipo con el cliente.
          
          .tarjeta.color-infografica-1.p-2(x="64%" y="62%" numero="+" )
            .row.justify-content-center.mb-3      
              .col-8
                h3 Coraje:
                p Se necesita valentía para establecer comunicación asertiva, así mismo, para afrontar cambios y transformaciones del producto o del trabajo mismo. 

          .tarjeta.color-infografica-1.p-2(x="85%" y="42%" numero="+" )
            .row.justify-content-center.mb-3      
              .col-8
                h3 Respeto:
                p Debe existir respeto en todas las formas y en todas las direcciones. Opiniones, personas, equipos, objetivos, métodos, aportes, etc.  
    Separador 
  .container.bg-white.p-4.p-md-5.container-bottom.mg-top
    
    #t_3_2.titulo-segundo
      .h2 3.2 Principios XP

    p.mb-3(data-aos="fade-down") Para lograr concretar los valores y llevarlos a la práctica es necesario relacionarlos con algunos principios útiles para el desarrollo. Al igual que los valores, los principios pueden ser muchos según la organización, el tipo de desarrollo o producto, etc.; los principios pueden ser establecidos dependiendo del sistema de software de la empresa.

    p.mb-5(data-aos="fade-down") Los principios más destacados y enfocados al desarrollo de software en el marco de la programación XP son:
  .container.bg-white.p-4.p-md-5.fondo-2.mg-top
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-down")
        img(src="@/assets/curso/images/tema3/img_4.svg")
  .container.bg-white.p-4.p-md-5.container-bottom

    Separador 

    #t_3_3.titulo-segundo
      .h2 3.3 Las prácticas XP

    .row.justify-content-center.align-items-start.mb-5
      .col-12.col-lg-7(data-aos="fade-right")
        p.mb-3 Para lograr concretar los valores y llevarlos a la práctica es necesario relacionarlos con algunos principios útiles para el desarrollo. Al igual que los valores, los principios pueden ser muchos según la organización, el tipo de desarrollo o producto, etc.; los principios pueden ser establecidos dependiendo del sistema de software de la empresa.

        p.mb-3 Los principios más destacados y enfocados al desarrollo de software en el marco de la programación XP son:
      .col-8.col-md-8.col-lg-3(data-aos="fade-left")
        img(src="@/assets/curso/images/tema3/img_5.svg" alt="", style="width:450px; display:block; margin: 0 auto;")


    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250.p-2(src='@/assets/curso/images/tema3/ico_1.svg', alt='imagen 1-2').ms-4
                h3 Primarias
            .tarjeta-flip__contenido.bgr_3.p-5
              h3.text-center.text-white Primarias
              p.text-white.mt-3 Las prácticas primarias se realizan de manera independiente y aportan valor inmediato al producto, ayudan a mejorar el desarrollo del <i>software.</i>

      .col-sm-6.col-xl-3.mb-4-xl-0.mb-4(data-aos="fade-down")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250.p-2(src='@/assets/curso/images/tema3/ico_2.svg', alt='imagen 1-2').ms-4
                h3.text-center Corolario
            .tarjeta-flip__contenido.bgr_2.p-5
              h3.text-center.text-white  Corolario
              p.text-white.mt-5 Para las prácticas corolario es necesario tener experiencia en la aplicación de las prácticas primarias. 
    
      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250.p-2(src='@/assets/curso/images/tema3/ico_3.svg', alt='imagen 1-2')
                h3.text-center Prácticas conexas entre sí
            .tarjeta-flip__contenido.bgr_3.p-5.p-xl-5
              h3.text-center.text-white Prácticas conexas entre sí
              p.text-white.mt-5 Las prácticas corolario se deben realizar cuando las primarias ya han sido incorporadas al trabajo

      .col-sm-6.col-xl-3.mb-4.mb-xl-0(data-aos="fade-down")
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img.bgr_2.align-items-center
              figure.justify-center
                img.img250.p-2(src='@/assets/curso/images/tema3/ico_4.svg', alt='imagen 1-2')
                h3.text-center-1 Excepcionalidades de la prácticas
            .tarjeta-flip__contenido.bgr_3.p-5.p-xl-5
              h3.text-white Excepcionalidades de la prácticas
              p.text-white.mt-5 Una de las prácticas corolario propone reducir los integrantes del equipo, práctica peligrosa si no se respeta el rimo del equipo.
    
    .row.justify-content-center.align-items-center
      .col-lg-10
        p.mb-5 La siguiente tabla enuncia las prácticas XP más usadas, analice la información que allí se presenta y afiance su comprensión sobre este punto:
        .titulo-sexto.acento-contenido.mb-5
          h5 Tabla 1.
          br
          span Prácticas primarias y corolario del método programación extrema XP
        .row.justify-content-center.align-items-center(data-aos="fade-down")
            .tabla-a.color-acento-contenido
              table
                thead
                  tr.cell--blue
                    th(colspan='2') Prácticas XP 
                    
                tbody
                  tr.cell--blue-1
                    td.text-center-1 #[strong  Prácticas primarias]
                    td.text-center-1 #[strong Prácticas corolario]            
                  tr
                    td Historias
                    td Participación real de clientes
                    
                  tr
                    td Ciclos semanales
                    td Despliegue incremental
                    
                  tr
                    td Revisiones y planificaciones
                    td Negociar el alcance del contrato
                    
                  tr
                    td Holgura
                    td Pagar por funcionalidad
                    
                  tr
                    td Sentarse juntos 
                    td  Continuidad de los equipos
                    
                  tr
                    td El equipo completo
                    td Reducir los equipos
    Separador 

    #t_3_4.titulo-segundo
      .h2 3.4. Scrum y XP
    
    p.mb-5(data-aos="fade-down") Son métodos basados en los valores y principios #[span.color-text <b>ágiles.</b>] Comparten prácticas de desarrollo, conviven en armonía siempre y cuando el proyecto esté basado en desarrollo de software. Con XP se desarrolla el software más económico, con menos errores y más productivo; por su parte, Scrum relaciona y mejora las actividades del equipo de desarrollo, organizando y gestionando el trabajo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-down")
        img(src="@/assets/curso/images/tema3/img_6.svg")

    .row.justify-content-center.align-items-center.position-relative.mb-5
      img.position-1(src='@/assets/curso/images/tema1/ico_2.svg',  alt="",)
      .col-auto
    a.boton.color-acento-contenido.indicador__container.botom(@click="modal1 = true")
      span <i>Complemento entre métodos</i>
      .indicador--click(v-if="mostrarIndicador")
      .col
          a.lnk(@click="modal1 = true") 
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          
          p <i>Scrum</i> es el método que relacionas las mejores prácticas para la gestión del trabajo, y XP, relaciona buenas prácticas de programación, por lo tanto, ambos métodos se complementan, si así se decide trabajar.
      
        .col-md-6
          figure
            img(src='@/assets/curso/images/tema3/img_8.svg', alt='Texto que describa la imagen')
    
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
