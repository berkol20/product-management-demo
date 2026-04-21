Product Management API (NestJS Enterprise Architecture)
A professional-grade backend demonstration developed with NestJS, focusing on scalable architecture, type-safe data handling, and automated validation. This project serves as a "Pro Starter" for building robust inventory or product management systems.

Key Technical Features
Modular Architecture

The project follows the standard NestJS architecture where logic is strictly separated:

Controllers (app.controller.ts): Handles incoming HTTP requests and routes them to services.

Services (app.service.ts): Contains the core business logic, such as managing the product list and generating unique IDs.

Modules (app.module.ts): Acts as the root to organize and inject dependencies across the application.

Data Integrity & Validation

DTOs (Data Transfer Objects): Uses classes to define the exact shape of data expected in the request body.

Validation Pipes: Automatically validates incoming data at runtime using ValidationPipe. If the data doesn't match the CreateProductDto rules, the API rejects it before it even reaches the logic layer.

 Quality Assurance

Unit Testing (app.controller.spec.ts): Includes automated tests to ensure the controller behaves as expected, a critical requirement for high-quality software development.

Tech Stack
Framework: NestJS (Node.js)

Language: TypeScript (Strictly typed)

Concept: RESTful API Design

Testing: Jest (Default NestJS test runner)
