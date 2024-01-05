import { LightIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

// Receiver
const officeLight = new SmartHouseLight('Office Light');
const bathroomLight = new SmartHouseLight('Bathroom Light');

// Command
const officeLightPowerCommand = new LightPowerCommand(officeLight);
const officeLightIntensityCommand = new LightIntensityCommand(officeLight);

const bathroomLightPowerCommand = new LightPowerCommand(bathroomLight);

// Invoker (Control)
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', officeLightPowerCommand);
smartHouseApp.addCommand('btn-2', bathroomLightPowerCommand);
smartHouseApp.addCommand('btn-3', officeLightIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.executeCommand('btn-3');
smartHouseApp.executeCommand('btn-3');

console.log();

smartHouseApp.undoCommand('btn-1');
smartHouseApp.undoCommand('btn-2');
smartHouseApp.undoCommand('btn-3');
