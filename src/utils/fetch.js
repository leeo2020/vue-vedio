import axios from 'axios'

const instance =axios.create({
  baseUrl:'http://localhost:8080',
  timeout:7000,
  headers:{}
})

instance.interceptors.request.use(config=>{
  config.headers.Authorization = localStorage.getItem('vue3shoptoken')
  return config
},err=>Promise.reject(err))

instance.interceptors.reponse.use(res=>{
  let rst=null
  if(res.data && (res.data.code===0 || res.data.err===0)){
    rst=res.data.data
  }else if(res.data && (res.data.code===-1 || res.data.err===-1){
    console.log('未登录')
  }
  return rst
},err=>Promise.reject(err))
