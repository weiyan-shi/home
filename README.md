# Weiyan Shi's Homepage

Welcome to the repository for Weiyan Shi's personal homepage. Below are the instructions on how to set up the project for development and deployment.

## Prerequisites

Before you begin, ensure that you have the following installed:

- **Node.js**: The JavaScript runtime required to run the project. Download and install it from [nodejs.org](https://nodejs.org/).
- **npm**: The Node Package Manager, which is used for installing dependencies and running scripts. It comes bundled with Node.js.

To verify that Node.js and npm are properly installed, you can run the following commands in your terminal:

```bash
node --version
npm --version
```

## Installing Dependencies
After cloning the repo, navigate to the project directory and install the necessary node modules:
```bash
npm install
```

## Development
To start the development server, run the following command:
```bash
npm start
```
This will launch the application in your default web browser at `http://localhost:3000`.

## Deployment
To deploy the application to GitHub Pages, run the following command:
```bash
npm run deploy
```
After running this script, the React app will be built and pushed to the `gh-pages` branch of your repository. GitHub will then automatically deploy the updates to your site.
