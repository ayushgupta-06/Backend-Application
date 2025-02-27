import dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});
import connectDB from './db/db.js';
import { app } from './app.js';

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error: ', err);
    process.exit(1);
  });
