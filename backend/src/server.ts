// Import the 'express' module along with 'Request' and 'Response' types from express
import express, { Request, Response,NextFunction, Application  }from "express";
import router from "./api/routes";

// Create an Express application
const app :Application = express();

// Specify the port number for the config
import { port, Database, environment } from "./config";
 
Database.connection();

//Routes
app.use("/api/v1", router);


//Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: err.message,
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(
    `Server is running on http://localhost:${port} on ${environment} server`
  );
});
