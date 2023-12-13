import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  // password
  default_rentuser_pass: process.env.DEFAULT_PASSWORD,
  default_homeuwner_pass: process.env.DEFAULT_PASSWORD,
  default_admin_pass: process.env.ADMIN_PASS,
  // database
  database__url: process.env.DATABASE_URL,
  default_label: process.env.DEFAULT_LABEL,
  bycrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};



