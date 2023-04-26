<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    .row.bg-c2
      .col-12
        .px-5
          .container-decorativo-intro.d-flex.flex-wrap.flex-md-nowrap.mb-5(data-aos="fade-up")
            img.mb-4.mb-md-0(src="@/assets/curso/temas/img-1.svg" style="max-width: 72px")(data-aos="fade-right")
            p.mb-0.ps-md-4(data-aos="fade-left") Bienvenido a este componente formativo, para comenzar el recorrido por el mismo
              b(style="color: #005B8B") revise la información que se presenta a continuación:

          figure.mb-5(data-aos="fade-left")
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/LK88tQ4bLRI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

            figcaption Video: Importancia de la traducción en la LSC.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass">
.container-decorativo-intro
  background-color: #FBE2E3
  padding: 1rem 2rem
  border-radius: 10px
  align-items: center
  img
    width: 72px
</style>
