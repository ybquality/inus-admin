import axios from "axios";
import router from "../router";

//请求拦截
axios.interceptors.request.use((config:any) => {
    // 发起请求携带token
    //如果你存在token，发起请求时同步传一个token
    if(localStorage.token){
        config.headers.Authorization = localStorage.token
    }
    return config;
},(error) => {
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {

    return response;
},(error) => {
    //如果token失效会拿到一个error，通过error里面的status判断然后移除失效的token
    const {status} = error.response

    if(status === 401){
        localStorage.removeItem("token")
        router.push("/login")
    }
    return Promise.reject(error)
})

export default axios;