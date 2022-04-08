<template>
  <div class="naaaaa">
    <el-steps :active="active" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-button style="margin-top: 12px" @click="next">下一步</el-button>
    <div>{{ hoole }}</div>
    <el-button @click="adad">按钮</el-button>
    <v-chilren :myMessage="msg"></v-chilren>

    <el-button @click="namead">{{ showCode }}</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px" v-if="haha">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">
          <img
            src="https://img0.baidu.com/it/u=3122136587,3938996930&fm=26&fmt=auto"
            alt=""
          />
        </div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">
          <ul>
            <li
              v-for="(item, index) in 5"
              :key="item"
              :class="{ active: index == cid }"
              @click="aaa(index)"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </transition>
    </div>

    <el-button style="position: absolute; top: 2000px" @click="click"
      >按钮</el-button
    >
  </div>
</template>

<script>
import vChilren from "./fade.vue";
export default {
  components: {
    vChilren,
  },
  data() {
    return {
      active: 1,
      msg: "12321",
      hoole: "1",
      show: true,
      showCode: "点击隐藏",
      cid: 0,
      haha: false,
    };
  },
  methods: {
    next() {
      if (this.active++ > 2) this.active = 0;
      this.hoole = this.active;
    },
    adad() {
      this.msg = "哈哈哈哈哈哈";
    },
    namead() {
      this.show = !this.show;
      if (this.show) {
        this.showCode = "点击隐藏";
      } else {
        this.showCode = "点击显示";
      }
    },
    aaa(index) {
      this.cid = index;
    },
    click() {
        document.documentElement.scrollTop = 0;
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  list-style: none;
}
li {
  width: 100px;
  height: 30px;
  border: 1px solid red;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
}
.active {
  background: red;
  color: #fff;
}

.naaaaa {
  height: 3000px;
}
</style>
