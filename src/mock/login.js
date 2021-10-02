const tokens = {
    admin: "admin-token",
    guest: "guest-token",
    editor: "editor-token",
  };
const users = {
    "admin-token": {
      id: "admin",
      role: "admin",
      name: "管理员",
      avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20191212%2F2346a94b0156406aa20f3a03f2011eef.jpg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635747816&t=8e7aca29954339cbb1b8d871343a10d1",
      description: "拥有系统内所有菜单和路由权限",
    },
    "editor-token": {
      id: "editor",
      role: "editor",
      name: "编辑员",
      avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.5tu.cn%2Fuploads%2Fallimg%2F1503%2F141814084530.jpg&refer=http%3A%2F%2Fpic.5tu.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635747816&t=8ee8873c52cd2f69f3637bf0201539bc",
      description:"可以看到除户管理页面之外的所有页面",
    },
    "guest-token": {
      id: "guest",
      role: "guest",
      name: "游客",
      avatar: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F-vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fwh%253D450%252C600%2Fsign%3Dad29d135573d26972e86005960cb9ecd%2Fd833c895d143ad4bdcd6aa3f84025aafa50f0650.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1635747816&t=c2bc5683ab21963e9afaca36c268e1ce",
      description:"仅能看到Dashboard、开发文档、权限测试和关于作者四个页面",
    },
  };
export default {
    // 登录
    login: config => {
        const { username } = JSON.parse(config.body);
        console.log(`username`, username)
        const token = tokens[username];
        if (!token) {
          return {
            status: 1,
            message: "用户名或密码错误",
          };
        }
        return {
          status: 0,
          token,
        };
    },
    // 登出
    logout: (_) => {
        return {
          status: 0,
          data: "success",
        };
    },
    userInfo: config => {
      const token = config.body;
      const userInfo = users[token];
      if (!userInfo) {
        return {
          status: 1,
          message: "获取用户信息失败",
        };
      }
      return {
        status: 0,
        userInfo,
      };
    }


}