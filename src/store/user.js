import {defineStore} from 'pinia'

export const userinfo = defineStore('user',() => {
    const usermsg = reactive({
        userid:'',
        username:'',
        nickname:'',
        account:''
    })
    return {
        usermsg
    }

})