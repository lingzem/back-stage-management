import request from '@/utils/request'
// 登录
export function ajaxQeqLogin(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}
// 登出
export function ajaxQeqLogout(data) {
    return request({
        url: '/logout',
        method: 'post',
        data
    })
}