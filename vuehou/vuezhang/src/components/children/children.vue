<template>
  <div>
    child
    {{ isNum }}
    <router-link to="/index">首页index</router-link>
    <router-link to="/fakes">父fakes</router-link>
    <router-link to="/children">子children</router-link>
  </div>
</template>
<script>
export default {
  props: ["isNum"],
  components: {},
  data() {
    return {
      chiNum: "",
    };
  },
  methods: {},
  mounted() {
    this.chiNum = "子传父的值";
    this.$emit("isChildFun", this.chiNum);
  },
};
</script>
<style scoped>
</style>