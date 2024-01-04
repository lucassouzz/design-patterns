import { AdminUser } from './admin-user';
import {
  SystemUserAddressProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class SystemUserProxy implements SystemUserProtocol {
  private realUser: SystemUserProtocol | null = null;
  private realAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(
    public firstName: string,
    public userName: string,
  ) {}

  private createUser(): SystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.userName);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (this.realAddresses === null) {
      this.realAddresses = await this.realUser.getAddresses();
    }

    return this.realAddresses;
  }
}
