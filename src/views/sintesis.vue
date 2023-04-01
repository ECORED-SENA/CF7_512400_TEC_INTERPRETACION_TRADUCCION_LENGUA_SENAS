<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .d-flex.flex-wrap.flex-md-nowrap.align-items-center.mb-5
      img.mb-4.mb-md-0(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 143px")
      .col-12.col-md
        p.ps-md-4 Trabajar en el proceso de inclusión es fundamental sobre todo en el contexto de la población sorda, la posibilidad de abrir caminos accesibles en diferentes contextos es un trabajo que requiere de gran dedicación y empeño, en este orden de ideas, el proceso de traducción e interpretación resulta indispensable, pues facilita la participación activa de las personas con dicha discapacidad dentro de la sociedad, además de permitirles involucrarse sin dificultades en contextos como el educativo, el empresarial, el económico, entre muchos otros.
        p.ps-md-4.fw-bold(style="color: #7E2736") Una breve revisión de los temas vistos se encuentra en el siguiente esquema:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
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
