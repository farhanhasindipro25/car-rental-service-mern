const app = require("./app");
const config = require("./config/index.js");
const mongoose = require("mongoose");

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url);
    console.log("Database connected!");

    app.listen(config.port, () => {
      console.log(`Application listening to port ${config.port}`);
    });
  } catch (error) {
    console.log("Failed to connect database", error);
  }
}

bootstrap();
