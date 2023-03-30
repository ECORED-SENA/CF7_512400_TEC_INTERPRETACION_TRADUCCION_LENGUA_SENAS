<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Verificación de los procesos de traducción
    
    .container-img-text-color.px-4.pt-4.mb-5
      img.bg-container(src="@/assets/curso/temas/tema1/bg-1.svg")
      img.mt-auto.col-12.col-lg-4.mb-4.mb-lg-0.mx-auto.position-relative(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 382px")
      .col-12.col-lg-8.ps-md-5.mb-4.position-relative
        p Para comenzar es importante recordar cómo la 
          b(style="color: #005B8B") Norma ISO 17100 ha definido el término interpretar en el contexto del lenguaje de señas.
        .tarjeta.p-4(style="background-color: white")
          .d-flex.align-items-start
            .col.pe-3
              p.fw-bold(style="color: #005B8B") Interpretación
              p(style="color: #005B8B") Se define como el acto de verter una lengua a otra información oral o en forma de signos.
            img(src="@/assets/curso/temas/tema1/d-1.svg" style="max-width: 81px")
          p.mb-0 Los intérpretes de Lengua de Señas Colombiana (LSC) trabajan para permitir intercambios comunicativos entre los usuarios, la lengua de señas y los usuarios de habla española.

    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 85px")
      p.mb-0.ps-md-4 Con dicha idoneidad, el intérprete se convierte en 
        b(style="color: #005B8B") “un medio a través del cual las personas sordas pueden acceder a todos los servicios que como ciudadanos colombianos les confiere la Constitución” 
        | (Ley 324 de 1996, Art.7), definiendo escenarios incluyentes y participativos que le permiten: 
    
    img.mb-5.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-3.svg")

    .mb-5.flex-wrap.d-flex.justify-content-center.d-lg-none.py-4.px-2(style="background-color: #FFFAF4")
      .d-flex.justify-content-center.mb-4.col-12
        .d-flex.justify-content-center.px-3.py-2(style="background-color: #4DB1F0; border-radius: 30px;")
          h4.w-100.mb-0 Escenarios incluyentes
      img.mb-4(src="@/assets/curso/temas/tema1/img-3-movil.svg" style="max-width: 350px")
      .tarjeta-number.mb-4
        span.card-number(style="background-color: #FFDEB7") 01
        p.col.mb-0.pe-3 Revisar y corregir la traducción de acuerdo con las técnicas y las normas de corrección.
      
      .tarjeta-number.mb-4
        span.card-number(style="background-color: #D9F0FC") 02
        p.col.mb-0.pe-3 Establecer un plan de mejora continua de acuerdo con los procesos normalizados de traducción.
      
      .tarjeta-number.mb-4
        span.card-number(style="background-color: #D9F0FC") 03
        p.col.mb-0.pe-3 Comprobar los procesos de traducción empleados según la solicitud.
      
      .tarjeta-number.mb-4
        span.card-number(style="background-color: #FFDEB7") 04
        p.col.mb-0.pe-3 Aplicar las medidas de mejora continua acordes a los métodos de traducción estandarizados.

      .tarjeta.tarjeta--azul.p-3
        p.mb-0 El intérprete debe trabajar en pro de la inclusión realizando este tipo de tareas
    
    .d-flex.mb-5
      .titulo-secondary-content
        h3.mb-0 Técnicas de revisión del texto meta
    
    p Para implementar las técnicas de revisión y corrección que se aplican a un proceso de traducción, logrando lo propuesto en el texto meta en Lengua de Señas Colombiana - Español, y que atienden al propósito de este, debe tenerse en cuenta al público al que se dirige dicho texto, además es importante tener en cuenta el contexto social y cultural.
    p.fw-bold(style="color: #7E2736") Algunas técnicas de revisión del texto meta son:

    TabsA.color-primario.tabs-a-edit.mb-5
      .tarjeta.p-4(titulo="La exactitud" style="background-repeat: no-repeat; background-color: #F9DCE1" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
        h4 La exactitud
        .d-flex.flex-wrap.align-items-center
          p.order-2.order-md-1.col-12.col-md.pe-md-4 Debido a que la equivalencia entre las lenguas implicadas -Lengua de Señas Colombiana y Español- no es posible hacerse directamente palabra-seña, se privilegia una equivalencia de sentido entre las dos lenguas. Así, la exactitud en dicha equivalencia es uno de los grandes retos del intérprete/traductor que no solo involucra su conocimiento lingüístico y metalingüístico de las lenguas en contacto, también involucra su conocimiento intercultural.
          img.order-1.order-md-2.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-t-1.svg" style="max-width: 240px; width: 100%")
      .tarjeta.p-4(titulo="La corrección" style="background-repeat: no-repeat; background-color: #F9DCE1" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
        h4 La corrección
        .d-flex.flex-wrap.align-items-center
          p.order-2.order-md-1.col-12.col-md.pe-md-4 Durante el proceso de traducción existe la posibilidad de volver sobre el sentido que se transmite y analizar las equivalencias seleccionadas entre las lenguas; proceso que resulta valioso en términos de calidad del texto final. 
          img.order-1.order-md-2.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-t-2.svg" style="max-width: 240px; width: 100%")
      .tarjeta.p-4(titulo="La exactitud" style="background-repeat: no-repeat; background-color: #F9DCE1" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
        h4 La legibilidad
        .d-flex.flex-wrap.align-items-center
          p.order-2.order-md-1.col-12.col-md.pe-md-4 Dado que las dos lenguas implicadas -Lengua de Señas Colombiana y Español-  poseen estructuras gramaticales diferentes, el intérprete/traductor debe estar atento y asegurarse de que todas las estructuras en las que se construye el texto final o texto meta corresponden a la lengua meta. Durante una alta exposición a los contenidos de las dos lenguas es posible que existan lapsus linguae a los que el ojo del intérprete/traductor no alerta, dada su familiaridad con el contenido. Es por ello que una de las habilidades más trabajadas en un intérprete es la altísima capacidad de concentración. 
          img.order-1.order-md-2.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-t-3.svg" style="max-width: 240px; width: 100%")
      .tarjeta.p-4(titulo="La tonalidad" style="background-repeat: no-repeat; background-color: #F9DCE1" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
        h4 La tonalidad
        .d-flex.flex-wrap.align-items-center
          p.order-2.order-md-1.col-12.col-md.pe-md-4 Es uno de los elementos que enaltecen la calidad del trabajo del intérprete/traductor. La presencia de la tonalidad del emisor en el discurso traducido o interpretado refiere a la fidelidad con la que se transmite la información y a la consciencia ética profesional de quien lo asume.
          img.order-1.order-md-2.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-t-4.svg" style="max-width: 240px; width: 100%")
      .tarjeta.p-4(titulo="La adecuación al destinatario" style="background-repeat: no-repeat; background-color: #F9DCE1" :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.svg')})`}")
        h4 La adecuación al destinatario
        .d-flex.flex-wrap.align-items-center
          p.order-2.order-md-1.col-12.col-md.pe-md-4 Es una respuesta directa a las necesidades de la lengua y del registro del usuario final, al garantizar su beneplácito con el servicio prestado y al éxito de este. Es necesario recordar que las personas sordas poseen características diferentes de la lengua, no solo en la lengua natural, también en su segunda lengua. Esto exige del intérprete un conocimiento del usuario al que se dirige en beneficio del amplio sentido a comunicar.  
          img.order-1.order-md-2.mb-4.mb-md-0.mx-auto(src="@/assets/curso/temas/tema1/img-t-5.svg" style="max-width: 240px; width: 100%")

    .d-flex.mb-5
      .titulo-secondary-content
        h3.mb-0 Métodos y normas técnicas de revisión y corrección
    
    p Existen diferentes métodos para la revisión en los procesos de traducción; sin embargo, siempre será aconsejable, antes de pasar a este punto, hacer una autorrevisión del trabajo realizado. Al hacerlo se puede comparar con el texto origen para encontrar posibles desfases o errores. 

    p.fw-bold.mb-5(style="color: #7E2736") Entre estos desaciertos se pueden mencionar:

    .mb-5.bg-left-to-right.py-4
      .d-flex.flex-wrap.col-12.col-md-11.col-lg-10.mx-auto
        img.col-12.col-lg-7.mb-4.mb-lg-7.mx-auto(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 609px")
        ul.col-12.col-lg-5.ps-lg-4.lista-ul--color.lista-ul--separador
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Dobles espacios.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Dobles puntos finales.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Dos comas seguidas.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Mala acentuación.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | El uso de términos inadecuados.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Expresiones poco significativas y confusas.
          li.d-flex
            img.me-3(src="@/assets/curso/temas/tema1/hand.svg" style="max-width: 18px")
            | Incoherencia entre palabra, frases y oraciones.
    
    p.fw-bold.mb-5(style="color: #7E2736") A continuación se revisarán los dos métodos de revisión y corrección más utilizados:
    
    .d-flex.flex-wrap
      .col-12.col-lg-6.d-flex.px-md-2.mb-4        
        .tarjeta.tarjeta-hover
          img.mb-3.mx-auto(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 281px")
          h3.w-100.text-center Método de edición
          p.w-100.text-center El revisor, que es un profesional cualificado, se encarga completamente de corregir por su cuenta. Aquel que realizaba el proceso de traducción lo entrega y deja de preocuparse; la responsabilidad pasa a ser del revisor.
      .col-12.col-lg-6.d-flex.px-md-2.mb-4        
        .tarjeta.tarjeta-hover
          img.mb-3.mx-auto(src="@/assets/curso/temas/tema1/img-6.svg" style="max-width: 281px")
          h3.w-100.text-center Método de validación
          p.w-100.text-center Se entrega el trabajo realizado a un revisor, pero en este caso las correcciones y las opiniones del trabajo se hacen en un informe que se le devuelve al mismo traductor, quien finalmente debe leerlas cuidadosamente para hacer los ajustes necesarios. Este proceso ocupa más tiempo que el método de edición.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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

<style lang="sass">
.tarjeta-number
  width: 100%
  background-color: white
  border: 1px solid #2E6A90
  padding: .3rem
  border-radius: 100px
  display: flex
  align-items: center
  .card-number
    height: 72px
    width: 72px
    display: flex
    align-items: center
    justify-content: center
    font-size: 32px
    border-radius: 100px
    font-weight: bold
    margin-right: .5rem
.tabs-a-edit
  .tabs-a__tab
    background-color: #EEEEEE
    &:hover
      background-color: #C75368 !important
    &__selected
      background-color: #C75368 !important
      &::before
        background-color: #C75368 !important
.tarjeta-hover
  background-color: #FBE6E9
  transition: all .3s linear
  padding: 2rem
  display: flex
  flex-wrap: wrap
  justify-content: center
  &:hover
    background-color: #BFE5F9
</style>
