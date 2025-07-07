// require("dotenv").config({ path: "./env" });

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    const server = app.listen(PORT, () => {
      console.log(`✅ Server is running at port ${PORT}`);
    });

    // Attach event listeners to the server instance, not the app
    server.on("error", (error) => {
      console.error("❌ Server Error:", error);
      throw error;
    });

    server.on("listening", () => {
      console.log("📡 Server is ready to accept connections");
    });
  })
  .catch((err) => {
    console.log("❌ MongoDB connection failed!!!!", err);
  });

// const app = express();

// (async () => {
//   try {
//     // if all good

//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error :", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on PORT : ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error", error);
//     throw error;
//   }
// })();
