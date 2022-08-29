<script setup>
// import { ref,reactive, computed } from 'vue'

const props = defineProps({
  msg: String,
  text:String,
  num:Number,
  isShow:Boolean
})
const list = reactive({
  name:'张三',
  age:20,
  hobby:['打篮球','游泳','下棋']
})
console.log(props.isShow);
const proxynum = ref(props.num)
const count = ref(0)
const emits = defineEmits(['getChild'])
const increase = () => {
  count.value++
  proxynum.value++
  console.log(props.num,proxynum.value);
  emits('getChild',['koko',count.value])
}

const modify = () => {
  list.name = '李四'
  console.log(list)
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <p v-if="isShow">{{text}}</p>
  <p v-else>{{proxynum}}</p>
  <div class="card">
    <button type="button" @click="increase">count is {{ count }}</button>
    <slot name="mom" :text="list" msg="作用域插槽内容"></slot>
    <button @click="modify">修改插槽内容</button>
  </div>
  
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
