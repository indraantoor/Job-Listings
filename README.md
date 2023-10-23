# Getting Started with the Project

This README provides a guide on how to set up, build, run tests and run the project. Follow these steps to ensure a successful setup.

## Prerequisites

Before you start, ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Comes with Node.js)
- [MongoDB](https://www.mongodb.com) (NoSql DB)
- [MongoDB_Compass](https://www.mongodb.com/try/download/compass)

## Technologies Used

- React js
- Next js
- Node js
- Express js
- React Query
- Cypress
- Jest
- Typescript
- Husky
- Commitlint
- Prettier
- Eslint
- Axios
- Swagger
- MongoDB

## Project Setup

1. **Clone the Repository**: Clone this repository to your local machine.

   ```bash
   git clone https://github.com/indraantoor/Ecommerce-Assignment
   ```

2. **Navigate to Project Directory**: Go to the project directory using your terminal.

   ```bash
   cd <project_directory>
   ```

3. **Install Dependencies**: Install project dependencies using npm.

   ```bash
   npm install
   ```

   Then Run

   ```bash
   npm run prepare
   ```

   Navigate to "backend" folder and run

   ```bash
   npm install
   ```

## Setting up predefined data in MongoDB

1. **Installing MongoDB Compass**: install MongoDb if you have not installed it

2. **Open MongoDB Compass**: run MongoDB Compass

3. **Create A DB MongoDB Compass**: Using MongoDB compass create a DB with name mentioned below. Make sure the name is exact as mentioned below.

   ```bash
   findJob
   ```

4. **In the findJob DB Create Jobs Descriptions Collection**: In the findJob Db create a collection with name mentioned below if the collection is not present in it. Make sure the name is exact as mentioned below.

   ```bash
   jobdescriptions
   ```

5. **Import Jobs Descriptions Collection Data**: In the findJob Db in collection jobdescriptions click on "Add Data" then click on "Import JSON or CSV File" and navigate to the mongodb data folder in root directory where project is present and import file with below name.

   ```bash
   findjob.jobdescriptions.json
   ```

6. **In the findJob DB Create Jobs Collection**: In the findJob Db create a collection with name mentioned below if the collection is not present in it. Make sure the name is exact as mentioned below.

   ```bash
   jobs
   ```

7. **Import Jobs Collection Data**: In the findJob Db in collection jobdescriptions click on "Add Data" then click on "Import JSON or CSV File" and navigate to the mongodb data folder in root directory where project is present and import file with below name.

   ```bash
   findjob.jobs.json
   ```

## Running the Project In Development Mode

Preview your project in development mode by starting the development server:

1. **Starting backend server**: navigate to backend folder and run the command to start the server - backend server runs on PORT - 5000 by default

   ```bash
   npm run start
   ```

2. **Starting frontend**: navigate to original directory / root directory where project is located run the command to start the server

   ```bash
   npm run dev
   ```

Access your project at `http://localhost:3000` in your browser.

## Building and Running the Project In Production Mode

Before deploying navigate to the original folder where everthing is located, run the command to build the project:

```bash
npm run build
```

This generates an optimized build in the `.next` directory.

### Running in Production Mode

For production, run the project:

1. **Starting backend server**: navigate to backend folder and run the command to start the server - backend server runs on PORT - 5000 by default

   ```bash
   npm run start
   ```

2. **Starting frontend**: navigate to original directory / root directory where project is located run the command to start the server

   ```bash
   npm start
   ```

Access your project at `http://localhost:3000` in your browser.

## Testing

For backend tests are written using "Jest" and for frontend tests are written using "Cypress".

### Running Tests

Navigate to main folder and run the command to start all of the tests.

```bash
 npm run cypress-ui
```

Then click on End To End tests and here you will able able to select spec files in where there are multiple tests differentiated and categorised.

## API DOCUMENTATION

For API documentation "Swagger" is used and here are the steps to access the documentation.

1. **Starting backend server**: navigate to backend folder and run the command to start the server - backend server runs on PORT - 5000 by default

   ```bash
   npm run start
   ```

2. **Accessing API Documentation**: open your browser and navigate to the backend url with port it is running on. By default it will be running on port 5000.

You will be able to access the documentation by typing the following URL.

```bash
http://localhost:5000/api/docs
```

If running the backend on a different port then use that port in the url.

## Github Actions And Workflow / CI

Github actions has also been set to run all of the tests.

In project using "husky" and "commit-lint" to ensure linting and prettier checks are passing before committing any commit and before pushing there is a check to ensure the build always succeeds before pushing the commits else if any of those conditions do not meet it will not let you commit or push it to ensure quality and consistency.

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Node.js Documentation](https://nodejs.org/en/docs/)

## Conclusion

Congratulations! You've successfully set up and run the project. 🚀
