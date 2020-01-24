<template>
  <div>
    <div class="main">
      <div class="wrapper">
        <GetInfo />
        <Result />
        <History />
      </div>
    </div>
  </div>
</template>

<script>
import GetInfo from '@/components/GetInfo'
import Result from '@/components/Result'
import History from '@/components/History'

export default {
  name: 'Wrapper',
  components: {
    GetInfo,
    Result,
    History
  }
}
</script>

<style scoped lang="scss">
  .main {
    display: flex;
    justify-content: center;
  }

  .wrapper {
    background: #FFFFFF;
    box-shadow: 0px 0px 50px rgba(230, 230, 230, 0.8);
    padding: 50px;
    width: 70%;
  }
</style>
