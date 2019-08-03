<template>
  <div class="dvy">
    <nav>
      <div class="nav">
        <router-link to="/home/delivery/multipoint" tag="span">多点超市</router-link>
        <router-link to="/home/delivery/handpick" tag="span">全球精选</router-link>
      </div>
    </nav>
    <div class="con1">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.dvy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
nav {
  width: 100%;
  height: 50px;
  border-bottom: 10px solid #eee;
  .nav {
    width: 70%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    span {
      flex: 1;
      text-align: center;
      line-height: 40px;
      &.router-link-exact-active {
        color: #fff;
        background: red;
      }
    }
  }
}
.con1 {
  flex: 1;
}
</style>

