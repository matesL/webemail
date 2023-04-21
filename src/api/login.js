import service from "../config/request"
// 登录
export const login = (data) => service.post('/v2/login', data);
//  插入账号数据
export const insert = (data) => service.post('/Email/install', data);
// 注册
export const singup = (data) => service.post('/v2/inst', data);