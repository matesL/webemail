import service from "../config/request"
// 登录
export const login = (data) => service.post('/v2/login', data);
//  插入账号数据
export const insert = (data) => service.post('/Email/install', data);
// 注册
export const singup = (data) => service.post('/v2/inst', data);
// 发送邮件请求
export const request_mail=(data)=>service.post('/Email/sendEmail',data) 
// 查询历史记录
export  const get_listmail=(data)=>service.post('Email/getsendlist',data) 