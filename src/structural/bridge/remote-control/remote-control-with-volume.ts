import { RemoteControl } from './remote-control';

export class RemoteControlWithVolume extends RemoteControl {
  volumeUp(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() + 10);
    console.log(`Volume anterior: ${oldVolume}`);
    console.log(`Volume atual: ${this.device.getVolume()}`);
  }

  volumeDown(): void {
    const oldVolume = this.device.getVolume();
    this.device.setVolume(this.device.getVolume() - 10);
    console.log(`Volume anterior: ${oldVolume} (${this.device.getName})`);
    console.log(
      `Volume atual: ${this.device.getVolume()} (${this.device.getName})`,
    );
  }
}
