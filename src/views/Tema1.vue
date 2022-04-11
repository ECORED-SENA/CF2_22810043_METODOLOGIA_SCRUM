<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Actividades Scrum  

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.order-1.order-lg-2
        .custom_box_left 
          p.mb-0 El conjunto de actividades de la metodología Scrum es el desarrollo en el que el equipo ejecuta tareas, según los acuerdos clave para el logro de los objetivos del proyecto. Este desarrollo se caracteriza por los diferentes <i>sprint</i> en cada fase. 
  
      .col-auto.mb-5.mb-lg-0.onTop.order-2.order-lg-1
        img(src="@/assets/curso/images/tema1/img_1.jpg" alt='AvatarTop', style="width:430px; display:block; margin:-6rem -3rem;").m-auto

    p.mb-5.text-center Preste atención a estos dos aspectos que son de  suma importancia:

  
    .row.justify-content-center.align-items-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.px-2
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.color-tarjeta-1
            .tarjeta-flip__img
              figure.justify-center
                img.img250.mt-4(src='@/assets/curso/images/tema1/img_2.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              p.text-white   1. Al inicio de un <i>sprint</i> han de seleccionarse los elementos del product backlog por desarrollar.
      .col-sm-6.col-xl-3.mb-4.mb-xl-0.px-2
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor.color-tarjeta-1
            .tarjeta-flip__img
              figure.justify-center
                img.img250.mt-4(src='@/assets/curso/images/tema1/img_3.svg', alt='imagen 1-2')
            .tarjeta-flip__contenido.bgr_3.p-4.p-xl-5
              p.text-white 2. Estas actividades se ejecutarán ajustadas a la velocidad del equipo, aportando mucho valor al producto.
     
    Separador 
   
    #t_1_1.titulo-segundo
      h2 1.1  <i>Sprint </i>

    p.mb-5 Es la unidad de tiempo del ciclo en desarrollo Scrum, permite al equipo centrarse en aportar más valor al producto o proyecto; entre más <i>sprint</i> se planifique, mejor se da el avance del proyecto. Esta entrega da más valor al cliente, puesto que con él se logra visualizar la evolución del proyecto.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        img(src="@/assets/curso/images/tema1/img_4.svg")

    .jumbotron.p-3.mb-3
      p En algunos proyectos Scrum, el <i>sprint</i>0 no es utilizado; en cambio, algunos otros proyectos lo ven como una antesala importante antes del primer <i>sprint</i> El <i>sprint</i>0 no tiene una duración aproximada y se realiza solamente para las tareas previstas.
    
    p.mb-3 Se presentan algunos aspectos clave que debe conocer y asimilar relacionados con el <i>sprint</i>; procure llevar registro de lo más destacado en su libreta personal de apuntes:

    
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario.mb-3
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/images/tema1/img_5.png',  alt="",)
              

          .tarjeta.color-infografica.p-3(x="31%" y="6%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-8
                h3 1. <i>Sprint planning</i>
                p  Se trata de la planeación del <i>sprint.</i>

          .tarjeta.color-infografica.p-3(x="86%" y="18%"  numero="+" )
            .row.justify-content-center.mb-3  
              .col-8
                h3 2. Daily meeting
                p Se trata de la reunión diaria con el <i>Development Team</i> (DT).

          .tarjeta.color-infografica.p-3(x="92%" y="72%"  numero="+")
            .row.justify-content-center.mb-3  
              .col-8
                h3 3. <i>Grooming</i>
                p Varias reuniones de refinamiento, necesarias para resolver inquietudes y continuar con el otro <i>sprint.</i>
          
          .tarjeta.color-infografica.p-3(x="10%" y="75%" numero="+" )
            .row.justify-content-center.mb-3      
              .col-8
                h3 4. <i>Sprint review</i>
                p Se realiza para entregar el producto acabado.

          .tarjeta.color-infografica.p-3(x="10%" y="24%"  numero="+" ) 
            .row.justify-content-center.mb-3  
              .col-8
                h3 5. <i>Sprint retrospective</i>
                p Se utiliza para favorecer la mejora continua en el equipo.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img(src="@/assets/curso/images/tema1/img_12.svg")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
          span El <i>sprint</i> 0 
          .indicador--click(v-if="mostrarIndicador")
      .col
        
          a.lnk(@click="modal1 = true") 

    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        .col-md-6.mb-4.mb-md-0
          
          p El <i>Sprint</i> 0 se relaciona con la fase inicial del proyecto, cuando el <i>Scrum Team</i> realiza la planeación inicial y define las reglas. De igual forma, se utiliza para entregar un pequeño ejemplo que evoluciona y permite llegar al <i>Sprint 1.</i>
      
        .col-md-6
          figure
            img(src='@/assets/curso/images/tema1/ico_1.svg', alt='Texto que describa la imagen')
    
    Separador 
    
   
    #t_1_2.titulo-segundo
      h2 1.2  <i>Sprint planning</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.order-2.order-lg-1
        .custom_box_rigth 
          p.mb-0 Se refiere a la planificación en detalle del <i>sprint</i>, percibiendo la funcionalidad por desarrollar, resolviendo dudas, etc. De igual forma, en el <i>sprint planning</i> se crean las historias de usuario (<i>user histories</i>) y se determinan los criterios de aceptación de las mismas. Cabe recordar que las historias son cíclicas y se reajustan.
  
      .col-auto.mb-5.mb-lg-0.onTop.order-1.order-lg-1
        img(src="@/assets/curso/images/tema1/img_6.png" alt='AvatarTop', style="width:330px; display:block; margin:-6rem -1rem;").m-auto

    p.mb-3 El <i>sprint planning</i>se divide en dos: el qué (what) y el cómo (how). A continuación, se detallan las particularidades de cada una de estas subdivisiones y otros elementos importantes relacionados:

    .tarjeta.fondo-slyder.mb-5
      SlyderA
        .row
          .col-lg-4
           figure
              img(src='@/assets/curso/images/tema1/img_7.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
          .col-lg-6
            h5.aling-1 <i>How</i> (¿Cómo se hará?)
              p.mt-3 Se hace el desglose de las historias de usuario (<i>user histories</i>), participan: el equipo de desarrollo (<i>Development Team)</i>, el <i>Scrum Master</i>y, si se quiere se invita al Product Owner (PO).
           
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_8.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
          .col-lg-6
            h5.aling-3  <i>What</i> (¿Qué se hará?)
              p.mt-3 Es el detalle de la funcionalidad. Participa el Scrum Team y a veces, el cliente.  
          
        .row
          .col-lg-4
              figure
                img(src='@/assets/curso/images/tema1/img_9.png',alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
          .col-lg-6
            h5.aling-1 Importancia del <i>sprint planning</i>
              p.mt-3 Es muy importante, porque es allí donde el <b>DT</b> recoge y planifica el trabajo para el <i><b>sprint</b></i>. Se tiene que proponer una metodología predictiva, puesto que no existe documentación. La comunicación entre todos debe ser fluida y dinámica.   
          
        .row
          .col-lg-4
            figure
              img(src='@/assets/curso/images/tema1/img_10.png', alt='AvatarTop', style="width:350px; display:block; margin:auto 2rem;").m-auto
          .col-lg-6
            h5.aling-3 El <i>sprint planning</i> y las <i>user histories</i>
              p.mt-3 Las historias de usuario del <i>product backlog</i> cambian, y es posible que se recalculen de nuevo; entonces será necesario volver a priorizarlas.
        
    Separador 
   
    #t_1_3.titulo-segundo
      h2 1.3  <i>Sprint review</i>

    .row.justify-content-center.align-items-center.mb-5
      .col-lg.order-2.order-lg-1
        .custom_box_rigth 
          p.mb-0 Se relaciona con el release, que es la forma de agrupar <i>sprints</i>. Es cuando el usuario no acepta algunas entregas de la funcionalidad finalizando cada <i>sprint</i> y se agrupan esos puntos. Concuerda con el final del <i>sprint</i> y se utiliza el<i>sprint</i> review para realizar la entrega total del producto.
  
      .col-auto.mb-5.mb-lg-0.onTop.order-1.order-lg-1
        img(src="@/assets/curso/images/tema1/img_13.svg" alt='AvatarTop', style="width:330px; display:block; margin:-6rem -1rem;").m-auto

    p.mb-5.text-center  Conozca las generalidades y aspectos más importantes sobre el <i>sprint review</i>, los cuales se detallan en el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
