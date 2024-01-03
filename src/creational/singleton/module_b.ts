import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Lucas', age: 28 });
myDatabaseClassic.add({ name: 'de', age: 27 });
myDatabaseClassic.add({ name: 'Souza', age: 26 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseFromModuleA);
