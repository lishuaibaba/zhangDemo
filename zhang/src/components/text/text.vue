<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="info.addShow">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日期时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker
              placeholder="选择时间"
              v-model="form.date"
              style="width: 100%"
            ></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="info.addShow = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["info"],
  data() {
    return {
      form: {
        name: "",
        date: "",
        address: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    add() {
      this.info.addShow = false;
      var a = new Date(this.form.date).getFullYear();
      var b = new Date(this.form.date).getMonth() + 1;
      var c = new Date(this.form.date).getDate();
      var str = `${a}-${b}-${c}`;
      this.form.date = str;
      this.$emit("aaa", this.form);
      this.form = {
        name: "",
        date: "",
        address: "",
      }
    },
  },
  mounted() {},
};
</script>