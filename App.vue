<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!--路由外链-->
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue';

  export default {
    components: {
      'v-header': header
    }
  };

</script>

<style>
  #app .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: saddlebrown solid 1px;
  }
  
  #app .tab .tab-item {
    flex: 1;
    text-align: center;
  }

  #app .tab .tab-item .router-link-active{
    color: red;
  }

</style>
