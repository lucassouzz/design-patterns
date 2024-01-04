import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientCode() {
  const user = new SystemUserProxy('Lucas', 'lucassouzz');
  console.log('wait two seconds');
  console.log(await user.getAddresses());

  console.log('repeat five times (cached)');
  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
