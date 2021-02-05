import {
  CGIMiddlewareItem,
  MiddlewareNextFunction,
  MiddlewareRequest,
  MiddlewareRequestMethod,
  MiddlewareResponse,
} from '@vize/cgi';

export const login: CGIMiddlewareItem = {
  apply: (
    _req: MiddlewareRequest,
    _res: MiddlewareResponse,
    next: MiddlewareNextFunction,
  ) => {
    console.log(_req);
    next();
  },
  forRoutes: [{ path: '/cgi/login', method: MiddlewareRequestMethod.ALL }],
};
