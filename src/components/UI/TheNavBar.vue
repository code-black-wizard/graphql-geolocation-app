<template>
  <div>
    <div class="navbar bg-base">
      <div class="navbar__inner">
        <p class="navbar__title">GeoIP</p>
        <div class="navbar__select">
          <div @click="showDropdown = !showDropdown" class="navbar__select-inner">
            <span class="navbar__select-title">{{ $i18n.locale }}</span>
            <i class="fas fa-sort-up navbar__icon"></i>
          </div>
          <div v-show="showDropdown" class="navbar__dropdown">
            <ul class="title-base navbar__dropdown-list">
              <li class="navbar__dropdown-list-item" @click="changeLang(lang)" v-for="(lang, index) in langs" :key="index">{{ lang }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheNavBar',
  data() {
    return {
      showDropdown: false,
      langs: ['en', 'ru']
    }
  },
  methods: {
    changeLang (lang) {
      if (this.$i18n.locale !== lang) {
        this.$i18n.locale = lang
      }
      this.showDropdown = false
    }
  }
}
</script>

<style scoped lang="scss">

  .navbar {
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 60px;
    &__inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
    }
    &__title {
      font-weight: 800;
      font-size: 18px;
      line-height: 25px;
      color: #FFFFFF;
      text-align: center;
    }
    &__dropdown {
      background: #FFFFFF;
      box-shadow: 0px 20px 50px rgba(229, 229, 229, 0.8);
      border-radius: 8px;
      position: absolute;
      &-list {
        padding: 15px;
        cursor: pointer;
        margin: 0;
        &-item {
          transition: color .2s;
          &:hover {
            color: #656BF2;
          }
        }  
      }
    }
    &__icon {
      padding-top: 10px;
    }
    &__select {
      margin-right: 250px;
      font-size: 18px;
      line-height: 25px;
      color: #ffffff;
      position: relative;
      &-inner {
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      &-title {
        margin-right: 5px;
      }
    }
  }

</style>
