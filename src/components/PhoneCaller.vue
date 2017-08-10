<template lang="pug">
  .row.justify-content-center
    .col.col-md-3
      h5 Telefone de origem
      b-form-input(type="tel", v-model="numbers.from")
      h5 Telefone da vítima
      b-form-input(type="tel", v-model="numbers.to")
      br
      b-btn(variant="success", v-on:click="startCall") Iniciar chamada
      br
      small(v-if="result !== 0")
        span.text-success(v-if="result === 1") √ Sucesso!
        span.text-danger(v-else) x Falha!
</template>

<script>
  export default {
    name: 'phone-caller',
    data () {
      return {
        result: 0,
        numbers: {
          from: '',
          to: ''
        }
      }
    },
    methods: {
      startCall () {
        this.result = 0
        this.$phone.startCall(this.$store.getters.provider, this.numbers)
          .then(() => {
            this.result = 1
          })
          .catch(() => {
            this.result = 2
          })
      }
    }
  }
</script>

<style scoped>
  h5:not(:first-child) {
    margin-top: 1em;
  }
  .row {
    margin-top: 2em;
  }
</style>
