/* eslint-disable no-console */
import { Server } from 'http';
import mongoose from 'mongoose';
import app from './app';
import config from './config/index';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});
let server: Server;
// Connect to database
async function bootstap() {
  try {
    await mongoose.connect(config.database__url as string);
    console.log(`🛫 Database is connected 🎉 successfully`);
    server = app.listen(config.port, () => {
      console.log(`👻 Application  listening on🪝 port ${config.port}`);
    });
  } catch (err) {
    console.log('🛑 Failed to connect  ☢️  Database ☣️', err);
  }

  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstap();
// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM is Recived');
  if (server) {
    server.close();
  }
});
