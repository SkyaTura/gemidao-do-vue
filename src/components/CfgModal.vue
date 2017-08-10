<template lang="pug">
  b-modal#cfgmodal(:title='title', @ok='submit', @shown='refreshTitle')
    form(@submit.stop.prevent='submit')
      .col-md-12
        b-form-select(v-model="provider.name", :options="providers")
      .col-md-12(v-if="hasProvider")
        br
        h5 Insira um token de acesso:
        p Se você ainda não possui um token, cadastre-se&nbsp;
          a(href="https://api2.totalvoice.com.br/painel/login.php") aqui
        b-form-input(type='text', placeholder="Token", v-model='provider.token')
        small Importante!! Nós não salvamos essa informação online
</template>

<script>
  export default {
    name: 'cfg-modal',
    data () {
      return {
        title: '',
        provider: {
          name: '',
          token: ''
        },
        providers: [
          {value: null, text: 'Selecione um provedor', disabled: true}
        ]
      }
    },
    methods: {
      submit (e) {
        if (!this.validate()) {
          return e.cancel()
        }
        this.$store.commit('provider', this.provider)
      },
      validate (quiet = false) {
        if (!this.hasProvider) {
          if (!quiet) alert('Você deve escolher um provedor!')
          return false
        }
        if (!this.hasToken) {
          if (!quiet) alert('A inserção do Token é obrigatória')
          return false
        }
        return true
      },
      refreshTitle () {
        let provider = this.$store.getters.provider
        this.provider = {
          name: provider.name,
          token: provider.token
        }
        this.title = this.provider.token ? 'Configuração' : 'Instalação'
      }
    },
    computed: {
      hasProvider () {
        return this.provider.name !== null
      },
      hasToken () {
        return this.provider.token !== null
      }
    },
    created () {
      let providers = this.$phone.providers
      for (let key in providers) {
        this.providers.push({
          value: key,
          text: providers[key].name
        })
      }
    }
  }
</script>

<style scoped>

</style>
