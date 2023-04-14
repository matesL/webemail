import service from "../config/request"
// 登录
export const login = (data) => service.post('/v2/login', data);