import {inject, Provider} from '@loopback/core';
import {getService} from '@loopback/service-proxy';
import {OpenapiDataSource} from '../datasources';

export interface UserOpenApi {
  // this is where you define the Node.js methods that will be
  // mapped to REST/SOAP/gRPC operations as stated in the datasource
  // json file.
  apis: {UserController: {[k: string]: Function}};
}

export class UserOpenApiProvider implements Provider<UserOpenApi> {
  constructor(
    // openapi must match the name property in the datasource json file
    @inject('datasources.openapi')
    protected dataSource: OpenapiDataSource = new OpenapiDataSource(),
  ) {}

  value(): Promise<UserOpenApi> {
    return getService(this.dataSource);
  }
}
