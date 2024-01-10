# Code Runner App

This is a simple code runner application built with React, Express, Node.js, and Firebase. Users can register, authenticate, and utilize a C++ code compiler for running code snippets.

## Features

- **User Authentication**: Register and login functionalities using Firebase Authentication.
- **Code Runner**: Execute C++ code snippets. (Note: Only one C++ code compiler is set up in the backend.)

## Setup Instructions

### Prerequisites

- **Node.js**: Make sure Node.js is installed on your machine.
- **GNU G++ Mingw Compiler**: Install the G++ Mingw compiler and add its path to your system environment variables.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/coderunner-app.git
    ```

2. Install dependencies: [Run this command in both frontend and backend]

    ```bash
    npm install
    ```

### Running the Application

1. **Frontend**:

    ```bash
    cd frontend
    npm run dev
    ```

2. **Backend**:

    ```bash
    cd backend
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000` to access the application.
2. Register or log in to start using the code runner functionality.
3. Enter your C++ code and execute it.

## Important Notes

- This app currently supports only one C++ code compiler in the backend.
- Ensure that the G++ Mingw compiler is correctly installed and its path is added to your operating system's environment variables for proper execution of C++ code.



## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
