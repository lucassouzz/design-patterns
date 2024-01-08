import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/assets/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('csv');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor);

backupManager.restore();
console.log(imageEditor);

console.log();
backupManager.showMementos();
