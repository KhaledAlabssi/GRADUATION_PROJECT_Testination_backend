## Graduation Project: Testination Backend

This is the backend project of my Full-stack Developer Bootcamp at WBS Coding School.

### Features

- **Create Groups:** Allows teachers to create and manage groups.
- **Manage Tests:** Enables teachers to create, evaluate, and grade tests.
- **Teacher Profiles:** Provides functionality for managing teacher profiles.
- **Participant Profiles:** Provides functionality for managing participant profiles.
- **User Management:** Includes login and logout functionalities.
- **Email Notifications:** Sends email notifications for new tests.

### Tech Stack

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Nodemailer**: Module for sending emails.
- **MySQL**: Relational database management system.
- **Nodemon**: Utility that monitors for changes and automatically restarts the server.
- **CORS**: Middleware for enabling Cross-Origin Resource Sharing.
- **dotenv**: Module for loading environment variables.

### Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/graduation-project-backend.git
    cd graduation-project-backend
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Create a `.env` file**
    ```bash
    touch .env
    ```

4. **Configure your environment variables in `.env`**
    ```
    PORT=3000
    DB_HOST=your_db_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=your_db_name
    EMAIL_SERVICE=your_email_service
    EMAIL_USER=your_email_user
    EMAIL_PASS=your_email_password
    ```

5. **Run the server**
    ```bash
    npm start
    ```

### API Endpoints

- **Groups**
    - `POST /groups` - Create a new group
    - `GET /groups` - Get all groups
    - `GET /groups/:id` - Get group by ID
    - `PUT /groups/:id` - Update group by ID
    - `DELETE /groups/:id` - Delete group by ID

- **Tests**
    - `POST /tests` - Create a new test
    - `GET /tests` - Get all tests
    - `GET /tests/:id` - Get test by ID
    - `PUT /tests/:id` - Update test by ID
    - `DELETE /tests/:id` - Delete test by ID

- **Evaluations**
    - `POST /evaluations` - Evaluate a test
    - `GET /evaluations` - Get all evaluations
    - `GET /evaluations/:id` - Get evaluation by ID

- **User Profiles**
    - `GET /teachers` - Get all teacher profiles
    - `GET /teachers/:id` - Get teacher profile by ID
    - `GET /participants` - Get all participant profiles
    - `GET /participants/:id` - Get participant profile by ID

- **Authentication**
    - `POST /auth/login` - Login
    - `POST /auth/logout` - Logout
