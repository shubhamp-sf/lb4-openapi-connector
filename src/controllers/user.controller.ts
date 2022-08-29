// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {get} from '@loopback/rest';
import {
  UserOpenApi,
  UserOpenApiProvider,
} from '../services/user-open-api.service';

export class UserController {
  constructor(
    @service(UserOpenApiProvider)
    protected userCrud: UserOpenApi,
  ) {}

  @get('/users')
  async find() {
    console.log(this.userCrud);
    const result = await this.userCrud.apis.UserController.find({});
    return result.body;
  }
}
