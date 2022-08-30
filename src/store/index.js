import {defineStore, storeToRefs} from 'pinia'
import {userinfo} from './user'
// import { computed, reactive, ref } from 'vue'
// import { ref } from 'vue'

// export const useStore = defineStore('main',{
//     state:() => {
//         return {
//             count:0,
//             person:{
//                 name:'张三',
//                 age:20,
//                 hobby:['唱','跳','rap','打篮球']
//             },
//             usermsg:userinfo()
//         }
//     },
//     getters:{
//         count2(state){return state.count+10}
//     },
//     actions:{
//         changCount(){
//             this.count++
//         }
//     }
// })

export const useStore = defineStore('main',()=> {
    const count = ref(0)
    const person = reactive({
        name:'张三',
        age:20,
        hobby:['唱','跳','rap','打篮球']
    })
    const {usermsg} = storeToRefs(userinfo())
    const numValue = ref('')
    const todolist = reactive([])
    const changCount = () =>{
        count.value++
    }
    let listLength = computed(() => todolist.length)
    const changPerson = () => {
        person.name = '李四',
        person.age = 30,
        person.hobby = ['歪歪歪']
    }
    const addTodoList = () => {
        todolist.push({
            id:count.value++,
            value:numValue.value
        })
        numValue.value = ''
    }
    const removeList = (val) => {
        console.log('val',val);
        const index = todolist.indexOf(val)
        todolist.splice(index,1)
    }
    return {
        count,
        person,
        numValue,
        todolist,
        changCount,
        changPerson,
        addTodoList,
        removeList,
        listLength,
        usermsg
    }
})