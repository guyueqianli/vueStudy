<template>
  <div>
    <form v-if="!isReg">
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="psd">
      <div>
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else>
      <div>用户名：</div>
      <input type="text" v-model="name">
      <div>密码：</div>
      <input type="password" v-model="psd">
      <div>再次输入密码：</div>
      <input type="password" v-model="repeat">
      <div>
        <button type="button" @click="addUser()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data() {
      return {
        isReg: false,
        name: '',
        psd: '',
        repeat: ''
      }
    },
    methods: {
      login() {
        if(localStorage.getItem("name") === this.name && localStorage.getItem("psd") === this.psd) {
          this.name = ''
          this.psd = ''
          this.$router.push('/home/list')
        } else {
          alert('用户名密码不正确！')
        }
      },
      reg() {
        this.isReg = true
      },
      cancel() {
        this.isReg = false
      },
      addUser() {
        if(this.psd === this.repeat) {
          localStorage.setItem("name", this.name)
          localStorage.setItem("psd", this.psd)
          this.name = ''
          this.psd = ''
          this.isReg = false
        } else {
          alert('两次密码输入不一致')
        }
      }
    }
  }
</script>

<style scoped>
</style>
