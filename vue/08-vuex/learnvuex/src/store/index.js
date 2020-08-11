import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)


const state = {
    count:100,
    students:[
    {id:'1',name:'kobe',age:'18'},
    {id:'2',name:'louis',age:'20'},
    {id:'3',name:'villain',age:'26'},
    {id:'4',name:'tom',age:'30'},
    ],
    info:
    {
        id:'16',
        name:'zimin',
        age:'22'
    }
}
const store = new Vuex.Store({
    //保存共享状态 单一状态树
    state,
    mutations,
    //异步操作时
    actions,
    //类似于组件中的computed属性
    getters: {
        more23stu(state){
            return state.students.filter(s => s.age >= 23)
        },
        more23stuLength(state,getters){
            return  getters.more23stu.length
        }
    },
    //分出模块，可以抽离以上的属性
    modules: {}

})

export default store