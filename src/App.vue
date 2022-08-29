<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import HelloWorld from './components/HelloWorld.vue'
// import News from '@/pages/news.vue'
// import Container from '@/pages/container.vue'
// import {ref,readonly,inject} from 'vue'
// const getValue = (val) => {
//   // console.log('val',val)
// }
// const themeColor = inject('setThemeColor')
// const theme = ref('#42b883aa')
// console.log(themeColor);
// const cont = ref(10)
// const num = readonly(cont)
</script>

<template>
  <!-- <HelloWorld msg="Vite + Vue3" is-show :num="cont" text="这是一段文本" @getChild="getValue" >
  <template #[ko]>
    <h2>这是插槽内容</h2>
  </template>
  <template #momo>
  <h3>插槽内容2</h3>
  </template>
  <template v-slot="jojo">
  <h3>{{jojo.text}}</h3>
  <h4>{{jojo.msg}}</h4>
  </template>
  <template #mom="{text}">
    <div :style="{'color':themeColor,'textAlign': 'left'}">
      <p>姓名：{{text.name}}</p>
      <p>年龄：{{text.age}}</p>
      <p>爱好：<span v-for="(item,index) in text.hobby" :key="index">{{item + '、'}}</span></p>
    </div>
  </template>
  </HelloWorld> -->

  <!-- <News></News> -->
  <!-- <Container /> -->
  <router-view></router-view>
</template>

<style>

:root {
  --color:#42b883aa
}
/* body{
  background-color: v-bind(--color);
} */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  /* color:v-bind(theme) */
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
@media screen and (min-width: 750px){
  body {
    font-size: 16px;
  }
}
</style>
