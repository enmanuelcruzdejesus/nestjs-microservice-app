import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://root:MyPa$$w0rd@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false/nestmain'),
  },
];