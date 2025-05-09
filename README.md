# Contracts Website

My website that helps find, educate, and manage my clients. View live at [benbdev.com](https://benbdev.com).

## Motivation

This project was built to:
- Help my clients understand tech, plan projects, and ask questions.
- Streamline client and project management.
- Practice and refine my development skills.

## Outcome

The result is a clean, responsive, and accessible website that:
- Meets my needs as a developer and contractor.
- Is easy to update and maintain.
- Is hosted on [Vercel](https://vercel.com/) with a custom domain: [benbdev.com](https://benbdev.com).
- Uses static content stored as Markdown (`.md`) files and dynamic content stored as JSON.

---

## Features

### Contact Form with [Nodemailer](https://nodemailer.com/)
- A secure and customizable contact form powered by **Nodemailer**.
- Sends emails directly to my inbox for client inquiries.
- Includes validation using [validator](https://www.npmjs.com/package/validator) to ensure proper input.

### [MongoDB](https://www.mongodb.com/) and [Mongoose](https://mongoosejs.com/) ODM
- **MongoDB** is used as the database to store dynamic content such as user-submitted data.
- **Mongoose** provides an Object Data Modeling (ODM) layer for schema-based data validation and interaction.

### Content Management
- **Static Content**: Stored as Markdown (`.md`) files.
  - Rendered on the **server** using [react-markdown](https://github.com/remarkjs/react-markdown).
  - Rendered on the **client** using [markdown-to-jsx](https://github.com/probablyup/markdown-to-jsx).
- **Dynamic Content**: Stored as JSON for flexibility and ease of updates.

### State Management with [Zustand](https://github.com/pmndrs/zustand)
- **Zustand** is used for lightweight and efficient state management.
- Manages application state for features like the FAQ accordion and journey builder.

### Linting
- **ESLint** is configured with [eslint-config-next](https://nextjs.org/docs/basic-features/eslint) to enforce coding standards and ensure code quality.

---

## Architecture

The project follows a **Model-View-Controller (MVC)** architecture:
- **Model**: Handles data and business logic using Mongoose schemas and MongoDB.
- **View**: Built with [React](https://react.dev/) and [Next.js](https://nextjs.org/), ensuring a responsive and accessible user interface.
- **Controller**: Manages user interactions, API routes, and server-side logic.

---

## Key Components

### FAQ Accordion
- A customizable accordion app for displaying FAQs.
- Features:
  - Define headings and content (e.g., questions and answers) using simple JSON.
  - Toggle to show/hide all items.
  - Search functionality to quickly find relevant items.
  - Built-in form for users to submit or request new items.
  - Responsive design ensures it looks great on any device.
- **Use Case**: I use this accordion to build an FAQ section on my website, helping clients understand tech, plan projects, and ask questions.

### Journey Builder
- A customizable "journey builder" for creating and managing user journeys.
- Features:
  - Define steps and choices using simple JSON.
  - Create a "choose-your-own-adventure" style flow by deciding what happens after each step or choice.
  - Include optional help for each step and choice, which users can toggle to show or hide.
  - Steps can include either choices or forms for user input.
  - Responsive design ensures it works well on any device.
- **Use Case**: I use this app to guide clients through the steps needed for me to provide a project quote. It educates users while gathering the necessary information.

---

## Tech Stack

### Frontend
- **[React](https://react.dev/)**: For building interactive user interfaces.
- **[Next.js](https://nextjs.org/)**: For server-side rendering, static site generation, and routing.
- **CSS Modules**: For scoped and maintainable styles.

### Backend
- **[Node.js](https://nodejs.org/)**: For server-side logic.
- **[Nodemailer](https://nodemailer.com/)**: For handling email functionality.

### Database
- **[MongoDB](https://www.mongodb.com/)**: For storing dynamic content.
- **[Mongoose](https://mongoosejs.com/)**: For schema-based data modeling.

### State Management
- **[Zustand](https://github.com/pmndrs/zustand)**: For managing application state.

### Deployment
- **[Vercel](https://vercel.com/)**: For hosting the website with a custom domain.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/contracts-website.git
   cd contracts-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     MONGO_URI=your_mongodb_connection_string
     EMAIL_USER=your_email_address
     EMAIL_PASS=your_email_password
     ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

- `npm run dev`: Start the development server with Turbopack.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Run ESLint to check for code quality issues.

---

## Folder Structure

```
/app
  /components       # Reusable React components
  /data             # JSON and Markdown content
  /pages            # Next.js pages
  /styles           # Global and modular CSS
  /utils            # Utility functions
```

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

---

## Contact

If you have any questions or feedback, feel free to reach out:
- **Email**: ben@example.com
- **Website**: [benbdev.com](https://benbdev.com)