<template>
    <div class="container">
        <div class="top">top</div>
        <div class="main">
            <div class="main-left">main-left</div>
            <div class="main-content">
                <HelloWorld msg='父组件内容' text="父组件文本" is-show >
                    <template #mom="{text}">
                        <div>{{text.hobby}}</div>
                    </template>
                </HelloWorld>
                <hr />
                <div>
                    <h3>{{count}}</h3>
                    <h4>{{count2}}</h4>
                    <ul>
                        <li>{{person.name}}</li>
                        <li>{{person.age}}</li>
                        <li>{{person.hobby}}</li>
                    </ul>
                    <button @click="changcount">修改count</button>
                    <button @click="changperson">修改state</button>
                    <div>
                        <h5>一共{{listLength}}条</h5>
                        <input type="text" v-model="numValue">
                        <button @click="addList">add</button>
                    </div>
                    <ul>
                        <li v-for="item in todolist" :key="item.id">
                            {{item.value}}
                            <button @click="remove(item)">remove</button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-right">main-right</div>
        </div>
        <div class="footer">footer</div>
    </div>
</template>

<script setup>
import HelloWorld from '../components/HelloWorld.vue';
import {useStore} from '../store'
import {storeToRefs} from 'pinia'

const mainStore = useStore()

const {count,person,count2,numValue,todolist,listLength,usermsg} = storeToRefs(mainStore)
const changperson = ()=> {
    // mainStore.$patch({
    //     // person.name:'李四',
    //     // person.age:30
    //     name:mainStore.person.name = '李四'
    // })
    mainStore.changPerson()
    console.log('usermsg',usermsg);
}
const changcount = ()=> {
    mainStore.changCount()
}
const addList = () => {
    if(!numValue.value) return
    mainStore.addTodoList()
}
const remove = (item) => {
    mainStore.removeList(item)
}
</script>

<style>
.container {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
}
.main {
    height: 60%;
    /* background: rgb(9, 70, 155); */
    display: flex;
}
.main-left {
    /* width: 20%; */
    flex: 1;
    background: rgb(247, 212, 107);
}
.main-content {
    /* width: 60%; */
    flex: 3;
    background: rgb(60, 111, 109);
}
.main-right {
    /* width: 20%; */
    flex: 1;
    background: red;
}
.top,.footer {
    height: 20%;
    background: rgb(26, 191, 163);
}
</style>