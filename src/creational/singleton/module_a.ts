import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Joao', age: 30 });
myDatabaseClassic.add({ name: 'Manoel', age: 31 });
myDatabaseClassic.add({ name: 'Souza', age: 32 });

export { myDatabaseClassic };
