# Book Library Web Application

## Overview
The Book Library Web Application is a full-stack web application designed to manage a library of books. It provides functionality for adding, updating, and deleting books from the library, as well as viewing all existing books. The application utilizes modern web development technologies to create a responsive and intuitive user interface.

## Technologies Used
- Spring Boot: Backend framework for building RESTful APIs to handle CRUD operations for books.
- Docker: Containerization tool used to package the application and its dependencies into a standardized unit for deployment.
- MySQL: Relational database management system used to store book data.
- React: Frontend JavaScript library for building user interfaces, providing an interactive and dynamic experience for users.

## Features
- **Add Book:** Users can add new books to the library by providing the title, author, and rating of the book.
- **Update Book:** Users can update existing books by specifying the ID of the book to be updated and providing the new title, author, and rating.
- **Delete Book:** Users can delete books from the library by specifying the ID of the book to be deleted.
- **View All Books:** Users can view a list of all books currently available in the library, including their ID, title, author, and rating.

## How to Run
### Backend (Spring Boot):
1. Clone the repository.
2. Navigate to the backend directory.
3. Build the project using Maven: `mvn clean install`.
4. Run the application: `java -jar target/book-library-backend.jar`.

### Database (MySQL):
1. Ensure that MySQL is installed and running on your system.
2. Create a new database named `bookLibrary`.
3. Update the database connection settings in the `application.properties` file if necessary.

### Frontend (React):
1. Navigate to the frontend directory.
2. Install dependencies: `npm install`.
3. Run the application: `npm start`.

### Access the Application:
Once the backend and frontend servers are running, you can access the application by navigating to http://localhost:3000 in your web browser.
