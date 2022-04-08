<template>
  <div class="wrap" @scroll="hanldeScroll">
    <div class="content">
      <div
        class="box"
        style="height: 65px; font-size: 18px; font-weight: 600; color: #f94e5f"
      >
        <div>中奖时间</div>
        <div>所中奖品</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      list: [],
      pageSize: 12,
      pageNo: 1,
      totalPageNum: 0,
      timer: "",
    };
  },
  methods: {
    created() {
      window.addEventListener("scroll", this.hanldeScroll); // 滚动到底部，再加载的处理事件
    },
    // 触底刷新
    hanldeScroll(e) {
      console.log(e);
      clearTimeout(this.timer);
      let clientHeight = e.target.body.clientHeight;
      let scrollHeight = e.target.body.scrollHeight;
      let scrollTop = scrollHeight - clientHeight;
      console.log(clientHeight);
      console.log(scrollHeight);
      console.log(scrollTop);
      console.log(e.target.body);
      console.log(e.target.body.scrollTop);
      let top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      console.log(top);
    },
  },
  mounted() {
    this.created();
  },
};
</script>


<style scoped>
.wrap {
  min-width: 100%;
  min-height: 100vh;
  background: -webkit-linear-gradient(top, #fa5163, #fad49d);
  overflow: hidden;
  overflow-y: scroll;
}
.nav {
  width: 95%;
  margin: 0 auto;
  margin-top: 20px;
  z-index: -1;
}
.nav img {
  width: 100%;
  margin: 0 auto;
  z-index: -1;
}
.content {
  width: 88%;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 2px;
  margin-top: -5px;
  z-index: 2;
  margin-bottom: 10px;
  position: relative;
}
.box {
  width: 90%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #ccc;
  text-align: left;
}
.time {
  flex: 1.8;
}
.txt {
  flex: 1;
}
</style>
