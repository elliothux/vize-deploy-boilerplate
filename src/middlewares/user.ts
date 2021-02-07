import {
  CGIMiddleware,
  CGIResponse,
  getUserService,
  MiddlewareRequestMethod,
} from '@vize/cgi';

export const user: CGIMiddleware = {
  apply: async (_request, response) => {
    const userService = getUserService();
    const result = await userService.getBizEntityByName('tourist');
    response.send(CGIResponse.success(result));
  },
  forRoutes: [{ path: '/cgi/user/my', method: MiddlewareRequestMethod.GET }],
};
