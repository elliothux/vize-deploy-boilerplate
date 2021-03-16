import * as path from 'path';
import { VizeCGIConfig } from '@vize/cgi';
import { login } from './middlewares/login';
import { user } from './middlewares/user';

export const config: VizeCGIConfig = {
  workspacePath: path.resolve(process.cwd(), 'workspace'),
  port: 4001,
  db: {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '2333',
    database: 'vize',
  },
  middlewares: {
    login,
    user,
  },
};
