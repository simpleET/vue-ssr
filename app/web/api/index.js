import {fetch} from '../common/fetch';


export const getBannerList=()=>fetch('https://rcdata.com.cn/xmofficial/banner/bannerList',{},'get');
export const getArtList=(data)=>fetch('/xmofficial/article/artList/1/10',data,'get');