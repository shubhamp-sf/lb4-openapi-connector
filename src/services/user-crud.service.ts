import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {UserRemoteDataSource} from '../datasources';

type User = {
  firstName: string;
  lastName: string;
};
export interface UserCrud {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.

  fetchAll(): Promise<User[]>;
}

export class UserCrudProvider implements Provider<UserCrud> {
  constructor(
    // UserRemote must match the name property in the datasource json file
    @inject('datasources.UserRemote')
    protected dataSource: UserRemoteDataSource = new UserRemoteDataSource(),
  ) {}

  value(): Promise<UserCrud> {
    return getService(this.dataSource);
  }
}
