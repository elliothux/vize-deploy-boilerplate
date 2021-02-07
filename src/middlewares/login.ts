import * as path from 'path';
import {
  CGIMiddleware,
  getUserService,
  MiddlewareRequestMethod,
} from '@vize/cgi';

export const login: CGIMiddleware = {
  apply: async (_request, response) => {
    const userService = getUserService();
    if (!(await userService.checkUserExists('tourist'))) {
      await userService.createUserEntity({
        name: 'tourist',
        isAdmin: 1,
        bizs: [],
      });
    }
    response.cookie('vize_user_name', 'tourist');
    response.sendFile(path.resolve(__dirname, '../pages/login/index.html'), {
      cacheControl: false,
    });
  },
  forRoutes: [{ path: '/login', method: MiddlewareRequestMethod.ALL }],
};
