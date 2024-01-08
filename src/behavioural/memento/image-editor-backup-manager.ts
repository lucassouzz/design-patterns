import { Memento } from './memento';
import { ImageEditor } from './image-editor';

export class ImageEditorBackupManager {
  private mementos: Memento[] = [];

  constructor(private readonly imageEditor: ImageEditor) {}

  backup(): void {
    console.log(`Backup: Saving ImageEditor status`);
    this.mementos.push(this.imageEditor.save());
  }

  restore(): void {
    const memento = this.mementos.pop();

    if (!memento) {
      console.log(`Backup is empty`);
      return;
    }

    this.imageEditor.restore(memento);
    console.log(`Restore: Success in restoring ${memento.getName()}`);
  }

  showMementos(): void {
    this.mementos.forEach((item) => console.log(item));
  }
}
