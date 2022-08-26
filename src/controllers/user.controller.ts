// Uncomment these imports to begin using these cool features!

import {service} from '@loopback/core';
import {get} from '@loopback/rest';
import {UserCrud, UserCrudProvider} from '../services';

export class UserController {
  constructor(
    @service(UserCrudProvider)
    protected userCrud: UserCrud,
  ) {}

  @get('/users')
  async find() {
    const result = await this.userCrud.fetchAll();
    return result;
  }
}
