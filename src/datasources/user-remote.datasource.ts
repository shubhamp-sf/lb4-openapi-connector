import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

import config from './user-remote.datasource.config.json';

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UserRemoteDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'UserRemote';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.UserRemote', {optional: true})
    dsConfig: object = config,
  ) {
    Object.assign(dsConfig, {
      options: {baseUrl: process.env.USER_CRUD_BASE},
    });
    console.log('USER_CRUD_BASE', process.env.USER_CRUD_BASE);
    super(dsConfig);
  }
}
