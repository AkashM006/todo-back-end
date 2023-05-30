import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Express adpp made with ",
      version: "1.0.0",
      description: "This is a simple CRUD API for maintaining todo list",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
const swaggerSpecs = swaggerUi.setup(specs);

export default swaggerSpecs;
