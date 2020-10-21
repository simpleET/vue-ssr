import {fetch} from '../common/fetch';


export const login = (data) => fetch('/security/login', data, 'post',);

export const getBannerList = () => fetch('https://rcdata.com.cn/xmofficial/banner/bannerList', {}, 'get');
export const getArtList = () => fetch('/talent-map/proTemplate/index', {}, 'get',);