export default mutations
const mutations = {
    //方法
    increment(state){
        state.count++
    },
    decrement(state){
        state.count--
    },
    updateinfo(state){
        state.info.name='yufan'
    }
}