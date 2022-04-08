<template>
  <div>
    fakes
    <v-child :isNum="num" @isChildFun="isChildFun"></v-child>
    <button @click="_toChild">父传值</button>
    <router-link to="/index">首页index</router-link>
    <router-link to="/fakes">父fakes</router-link>
    <router-link to="/children">子children</router-link>
  </div>
</template>
<script>
import vChild from "../children/children.vue";
export default {
  components: {
    vChild,
  },
  data() {
    return {
      num: "",
    };
  },
  methods: {
    _toChild(){
        this.num = "父传过去的值 123321";
    },
    isChildFun(e){
        console.log(e);
    }
  },
  mounted() {
      console.log(this.$router);
      console.log(this.$route);
  },
};
</script>
<style scoped>
</style>