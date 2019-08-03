<template>
  <div class="box">
    <div class="con">
      <router-view></router-view>
    </div>
    <footer>
      <router-link to="/home/delivery" tag="span">配送到家</router-link>
      <router-link to="/home/classify" tag="span">分类</router-link>
      <router-link to="/home/vip" tag="span">会员</router-link>
      <router-link to="/home/gocar" tag="span">购物车</router-link>
      <router-link to="/home/my" tag="span">我的</router-link>
    </footer>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.con {
  flex: 1;
}
footer {
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  span {
    flex: 1;
    text-align: center;
    line-height: 50px;
    &.router-link-active {
      color: #fff;
      background: red;
    }
  }
}
</style>
