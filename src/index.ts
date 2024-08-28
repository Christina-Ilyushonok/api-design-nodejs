import * as dotenv from 'dotenv'
dotenv.config()

// export const {
//   MONGODB_DEV_HOST,
//   JWT_SECRET,
//   FACEBOOK_API_KEY,
// } = process.env as {
//   [key: string]: string;
// };

import app from "./server"

app.listen(3001, () => {})
