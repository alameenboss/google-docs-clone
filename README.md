# Google Docs Clone

This project is a Google Docs clone built with **Angular** for the frontend, **Angular Material Design** for the UI components, **Quill.js** for the rich text editor, and a backend API developed using **ASP.NET Core** with the repository pattern. The API is documented using **Swagger OpenAPI** documentation, and **Entity Framework Core** is used for database access with **SQLite** as the underlying database engine.

## Features

- ~~User registration and authentication~~
- Create, edit, and delete documents
- ~~Collaborative real-time editing~~
- Rich text formatting using Quill.js
- ~~Document sharing and permissions management~~
- ~~Revision history and version control~~
- ~~Search functionality~~

## Prerequisites

Before running the application, make sure you have the following installed:

- **Node.js** (version X.X.X)
- **Angular CLI** (version X.X.X)
- **.NET Core SDK** (version X.X.X)
- **SQLite** database engine (version X.X.X)

## Installation

1. Clone the repository:

```
git clone https://github.com/alameenboss/google-docs-clone.git
```

2. Frontend setup:
- Navigate to the `frontend` directory:
```bash
cd google-docs-clone/frontend
```
- Install dependencies:
```
npm install
```

3. Backend setup:
- Navigate to the backend directory:
```
cd ../backend
```
- Install dependencies:
```
dotnet restore
```

4. Database setup:
- Open the appsettings.json file in the backend directory.
- Update the ConnectionStrings section to configure the SQLite database path.
- Apply migrations to create the database:

```
dotnet ef database update
```

## Usage
1. Start the frontend:
- Navigate to the frontend directory:
```
cd google-docs-clone/frontend
```
- Run the development server:
```
ng serve
```
Access the frontend application at http://localhost:4200.

2. Start the backend:
- Navigate to the backend directory:
```console
cd google-docs-clone/backend
```
- Run the API server:
```console
dotnet run
```

The API server will be available at http://localhost:5000.

3. Access Swagger API documentation:
Open your browser and navigate to http://localhost:5000/swagger.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and commit them.
- Push your changes to your fork.
- Submit a pull request.

## License
This project is licensed under the MIT License.