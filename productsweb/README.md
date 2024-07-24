# E-Commerce Spring Boot and React Application

This project is an e-commerce application built with a Spring Boot backend and a React frontend. It allows users to add, view, update, and delete products.

## Prerequisites

- Java 17 or higher
- Node.js and npm

## Setup

### Backend (Spring Boot)

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ecommerce-springboot-react.git
    cd ecommerce-springboot-react/backend
    ```

2. **Configure the database:**

    The project is configured to use the H2 in-memory database. The configuration is located in the `application.properties` file in `src/main/resources`. The default settings are:
    ```properties
    spring.datasource.url=jdbc:h2:mem:testdb
    spring.datasource.driverClassName=org.h2.Driver
    spring.datasource.username=sa
    spring.datasource.password=password
    spring.jpa.database-platform=org.hibernate.dialect.H2Dialect
    spring.h2.console.enabled=true
    ```

3. **Build and run the application:**
    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```

    The backend server will start on `http://localhost:8080`.

4. **Access H2 Console:**
    Navigate to `http://localhost:8080/h2-console` and use the following settings to connect:
    - JDBC URL: `jdbc:h2:mem:testdb`
    - Username: `sa`
    - Password: `password`

### Frontend (React)

1. **Navigate to the frontend directory:**
    ```bash
    cd ../frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the React application:**
    ```bash
    npm start
    ```

    The frontend server will start on `http://localhost:3000`.

## Usage

- **Home Page:** Displays a welcome message.
- **Add Product:** Allows you to add a new product to the inventory.
- **View Products:** Displays a list of all products. You can update or delete products from this list.

## API Endpoints

- **GET /api/products:** Retrieve all products.
- **GET /api/products/{id}:** Retrieve a product by ID.
- **POST /api/products:** Create a new product.
- **PUT /api/products/{id}:** Update a product by ID.
- **DELETE /api/products/{id}:** Delete a product by ID.

