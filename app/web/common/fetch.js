import axios from 'axios';
import _ from 'lodash';
import qs from 'qs'
import Cookie from 'js-cookie';
import {MessageBox} from 'element-ui';

axios.defaults.baseURL = '/api';
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true; // `withCredentials` 表示跨域请求时是否需要使用凭证

axios.interceptors.request.use((config) => {
    if (!EASY_ENV_IS_NODE) {
        let token = Cookie.get('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
    if (response.status === 200) {
        if (!EASY_ENV_IS_NODE) {
            let token = response.headers.token;
            if (token) {
                Cookie.set('token', token);
            }
        }
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, (error) => {
    // 浏览器的请求报错， 404 500  请求头: Status Code: 404 Not Found
    return Promise.reject(error);
});

/**
 * config: axios支持的全部配置,一般不需要设置
 * **/

export const fetch = async (url = '', data = {}, method = 'get', config = {}) => {
    if (url.includes('?')) {
        url = `${url}&t=${Date.now()}`;
    } else {
        url = `${url}?t=${Date.now()}`;
    }

    let configure = {
        method: method,
        url: url,
    };
    if (Object.keys(config).length) {
        _.assignWith(configure, config, (objVal, srcVal) => srcVal ? srcVal : objVal);
    }

    if (method === 'get') {
        configure.params = data;
    } else {
        configure.data = data;
    }

    try {
        const response = await axios(configure);
        const res = response.data;
        if (res.code !== 200) {
            if (res.code === 401) {
                MessageBox.alert('未登录或超时退出', '提示', {
                    type: 'error',
                    callback: () => {
                        MessageBox.close();
                        window.location.href = '/login/';
                    },
                });
                return Promise.reject('服务器出错');
            } else if (res.code === 600) {
                window.location.href = '/limit/access/third';
            }
        }
        return res;
    } catch (e) {
        // 浏览器报的错，比如: Status Code: 502 Bad Gateway
        return e.response;
    }
}
