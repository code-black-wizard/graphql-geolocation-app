<template>
  <div>
    <div class="result">
      <h2 class="title-base">{{ $t("result") }}</h2>
      <div class="result__table">
        <div class="result__table-top bg-base">
          <span class="table-caption result__table-top-item" v-for="(result, index) in getResultTable" :key="index">{{ result }}</span>
        </div>
        <div class="result__table-bottom">
          <div class="result__table-bottom-item">
            <span class="table-item-text">{{ $store.state.ip | checkVal }}</span>
          </div>
          <div class="result__table-bottom-item">
            <span v-if="getLocation" class="table-item-text">{{ getLocation.continent ? `${getLocation.continent.code}/${getLocation.continent.names[this.lang]}` : getLocation.continent | checkVal }}</span>
          </div>
          <div class="result__table-bottom-item">
            <span v-if="getLocation" class="table-item-text">{{ getLocation.country ? `${getLocation.country.names[this.lang]}/${getLocation.country.iso_code}` : getLocation.country | checkVal }}</span>
          </div>
          <div class="result__table-bottom-item">
            <span v-if="getLocation" class="table-item-text">{{ getLocation.city ? getLocation.city.names[this.lang] : getLocation.city | checkVal }}</span>
          </div>
          <div class="result__table-bottom-item">
            <span v-if="getLocation" class="table-item-text">{{ getLocation.postal ? getLocation.postal.code : getLocation.postal | checkVal }}</span>
          </div>
          <div class="result__table-bottom-item">
            <span v-if="getLocation" class="table-item-text">{{ getLocation.location ? `${getLocation.location.latitude}/${getLocation.location.longitude}` : getLocation.location | checkVal }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Result',
  computed: {
    getLocation () {
      return this.$store.state.getLocation
    },
    getResultTable () {
      return [ this.$t("ipAddress"), this.$t("continent"), this.$t("country"), this.$t("city"), this.$t("postCode"),this.$t("coordinates") ]
    },
    lang () {
      return this.$i18n.locale
    }
  }
}
</script>

<style scoped lang="scss">
  .result {
    margin-bottom: 50px;
    &__table {
      &-top {
        display: flex;
        justify-content: space-between;
        border-radius: 8px 8px 0 0;
        &-item {
          width: 20%;
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
          width: 20%;
          padding: 10px 0;
          text-align: center;
          word-wrap: break-word;
        }
      }
    }
  }
</style>
