import request from '@/utils/request'

// ajax 请求以ajax 开头
export function ajaxReqUserInfo(data) {
  return request({
    url: '/userInfo',
    method: 'post',
    data
  })
}