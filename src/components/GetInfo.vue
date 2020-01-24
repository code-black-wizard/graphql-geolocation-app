<template>
  <div>
    <div class="info">
      <h2 class="title-base">{{ $t("ipAddress") }}</h2>
      <form @submit.prevent="postData">
        <input placeholder="000.000.00.00" v-model.trim="ipAddress" class="info__field" type="text" v-mask="'###.###.##.##'" :class="error ? 'info__field-error' : ''">
        <button class="btn-base">{{ $t("getInfo") }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'

export default {
  name: 'GetInfo',
  directives: { mask },
  data() {
    return {
      error: false
    }
  },
  computed: {
    ipAddress: {
      get () {
        return this.$store.state.ip
      },
      set (ip) {
        this.$store.commit('setIp', ip)
      }
    }
  },
  methods: {
    postData () {
      if (this.ipAddress.length) {
        this.$store.dispatch('getLocation')
          .then(() => {
            this.error = false
          })
          .catch((err) => {
            this.error = true
          })
      } else {
        this.error = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .info {
    margin-bottom: 50px;
    &__field {
      margin-bottom: 20px;
      background: #FFFFFF;
      box-shadow: 0px 0px 50px rgba(230, 230, 230, 0.8);
      border: 1px solid #CCCCCC;
      border-radius: 8px;
      line-height: 18px;
      padding: 10px 20px;
      min-width: 50%;
      font-size: 16px;
      color: #454545;
      outline: none;
      transition: all .2s;
      &-error {
        border: 1px solid #FF6C6C;
      }
      &::placeholder {
        color: #CCCCCC;
      }
      &:focus {
        border: 1px solid #656BF2;
      }
    }
  }
</style>
