export default {
    aupdateinfo(context,payload){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                context.commit('updateinfo');
                console.log(payload);
                resolve('完成了')
            },1000)
        })
    }

}