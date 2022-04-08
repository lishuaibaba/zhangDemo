<template>
  <div>
    <el-button type="primary" @click="add">添加</el-button>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <v-text v-if="show" :info="info" v-on:aaa="aaa"></v-text>
    <vue-qr :text="text" :size="200" :margin="0" />
  </div>
</template>
<script>
import vText from "./text.vue";
import VueQr from 'vue-qr'
export default {
  components: {
    vText,
    VueQr
  },
  data() {
    return {
      show: false,
      text:'https://baidu.com',
      info: {
        addShow: true,
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    add() {
      this.show = true;
      this.info.addShow = true;
    },
    aaa(obj) {
      this.tableData.push(obj);
    },
  },
  mounted() {},
};
</script>
<style scoped>
</style>