<template>
  <div>
    index
    <router-link to="/index">首页index</router-link>
    <router-link to="/fakes?num=123">父fakes</router-link>
    <router-link to="/children">子children</router-link>
    <button @click="_toInfoDate">请求数据</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  methods: {
    async _toInfoDate() {
      let info = await this.aioxsFun("/api/getindexgoods");
      let _id = info.data.list[0].content[0].id;
      console.log(_id);
      let shoInfo = await this.aioxsFun("/api/getgoodsinfo",{id:_id});
      console.log(shoInfo);
    },
    aioxsFun(url, data, method="get") {
      return new Promise((resolve, reject) => {
        this.$axios({
          url:this.$basUrl + url,
          params: data || {},
          method: method || "get",
        }).then(res=>{
          resolve(res);
        })
      });
    },
  },
  mounted() {
    console.log(this.$info);
  },
};
</script>
<style scoped></style>
