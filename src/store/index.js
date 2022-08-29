import {defineStore} from 'pinia'

export const useStore = defineStore('main',{
    state:() => {
        return {
            count:0,
            person:{
                name:'张三',
                age:20,
                hobby:['唱','跳','rap','打篮球']
            }
        }
    },
    getters:{
        count2(state){return state.count+10}
    },
    actions:{
        changCount(){
            this.count++
        }
    }
})