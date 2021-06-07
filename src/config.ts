import * as path from 'path';
import { VizeCGIConfig } from '@vize/cgi';
import { user } from './middlewares/user';
import { upgrade } from './middlewares/upgrade';

export function getConfig(): VizeCGIConfig {
  const workspacePath = path.resolve(__dirname, '../workspace');

  return {
    port: 4001,
    workspacePath,
    npmRegistry: 'https://registry.npm.taobao.org',
    db: {
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '2333',
      database: 'vize',
    },
    middlewares: {
      user,
      upgrade,
    },
  };
}
