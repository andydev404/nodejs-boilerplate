import mongoose from 'mongoose';
import variables from './variables';

mongoose.Promise = global.Promise;

try {
  mongoose.connect(variables.DB_URL, { useMongoClient: true });
} catch (error) {
  mongoose.createConnection(variables.DB_URL, { useMongoClient: true });
}

mongoose.connection
  .once('open', () => console.log('  MongoDB running'))
  .once('error', err => { throw err; });
