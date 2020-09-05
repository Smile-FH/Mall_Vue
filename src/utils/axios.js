import axios from 'axios'
import { Toast } from "vant";

// jwt 和 token区别https://blog.csdn.net/m19123456789/article/details/85010509
// 前端登录状态保持https://www.jianshu.com/p/79225bd8a9c9
// axios.defaults.headers.common[]和axios.defaults.headers[]区别是啥、

// 这里是配置不同的环境中axios请求的地址不同问题，主要是开发和线上发布环境的接口不同
axios.defaults.baseURL = process.env.NODE_ENV == 'development' ? '//localhost:28888/mall/api' : 'localhost:28888/mall/api';

// 跨域请求的时候是否携带cookie信息，需要在后端配置CORS跨域
axios.defaults.withCredentials = true;
// 同步请求和异步请求的区别，为什么会分同步和异步？异步是解决什么问题的？
// 标识当前axios的请求是否为异步请求，如果是以下值则为异步请求
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
// 请求之前先看自己的库里边是否含有token，有的话就带上
axios.defaults.headers['token'] = localStorage.getItem('token') || '';
// the Content-Type of all post methods set to "application/json"
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.response.use(res=>{
    console.log("服务器有响应了-------");
    if (typeof res.data !== 'object') {
        Toast.fail("服务器端异常");
        return Promise.reject(res);
    }
    if (res.data.resultCode !== 200 ) {
        if (res.data.message) {
            Toast.fail(res.data.message);
        }
        if (res.data.resultCode === 416) {
            window.VRouter.replace({path:'/login'});
        }
        return Promise.reject(res.data)
    }
    return res.data;
});

export default axios;