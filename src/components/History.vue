<template>
  <div>
    <div class="history">
      <h2 class="title-base">{{ $t("history") }}</h2>
      <div class="history__table">
        <div class="history__table-top bg-base">
          <span class="table-caption history__table-top-item" v-for="(history, index) in getHistoryTable" :key="index">{{ history }}</span>
        </div>
        <div v-for="(item, index) in getHistory" :key="index" class="history__table-bottom">
          <div class="history__table-bottom-item">
            <span class="table-item-text">{{ item.ip ? item.ip : $store.state.ip | checkVal }}</span>
          </div>
          <div class="history__table-bottom-item">
            <span v-if="item.country !== undefined" class="table-item-text">{{ item.country ? `${item.country.names[lang]}/${item.country.iso_code}` : item.country | checkVal }}</span>
          </div>
          <div class="history__table-bottom-item">
            <span v-if="item.city !== undefined" class="table-item-text">{{ item.city ? item.city.names[lang] : item.city | checkVal }}</span>
          </div>
        </div>
      </div>
      <button @click="clearHistory" :disable="!getHistory[0].ip" class="btn-base" :class="!getHistory[0].ip ? 'btn-base-disable' : ''">{{ $t("clearHistory") }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'History',
  computed: {
    getHistory () {
      return this.$store.state.locations
    },
    getHistoryTable () {
      return [ this.$t("ipAddress"), this.$t("country"), this.$t("city") ]
    },
    lang () {
      return this.$i18n.locale
    }
  },
  methods: {
    clearHistory () {
      this.$store.commit('clearHistory')
    }
  }
}
</script>

<style scoped lang="scss">
  .history {
    &__table {
      width: 50%;
      margin-bottom: 20px;
      &-top {
        display: flex;
        justify-content: space-between;
        border-radius: 8px 8px 0 0;
        &-item {
          width: 30%;
          padding: 10px 0;
          text-align: center;
          word-wrap: break-word;
        }
      }
      &-bottom {
        display: flex;
        justify-content: space-between;
        border-radius: 0 0 8px 8px;
        border: 1px solid #CCCCCC;
        &-item {
          border-right: 1px solid #CCCCCC;
          width: 30%;
          padding: 10px 0;
          text-align: center;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
