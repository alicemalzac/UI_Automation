# Cypress UI Testing with GitHub Actions

[![Checkout](https://github.com/alicemalzac/UI_Automation/actions/workflows/cypress.yml/badge.svg)](https://github.com/alicemalzac/UI_Automation/actions/workflows/cypress.yml)

This repository is dedicated to learning how to set up and use GitHub Actions to automate UI testing with Cypress. Cypress is a powerful tool for end-to-end testing, and GitHub Actions provides an easy way to integrate these tests into your CI/CD workflow.

## Requirements

- Node.js 
- npm ou yarn
- GitHub account

## Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/seu-usuario/cypress-github-actions.git
    cd cypress-github-actions
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Add Cypress to the project:
    ```bash
    npm install cypress --save-dev
    ```

4. Configure Cypress (optional):

    ```bash
    npx cypress open
    ```

## Check the GitHub Actions Workflow

    - Go to the "Actions" tab in this GitHub repository.
    - Check if the workflow has run successfully.

## Project Structure

```plaintext
cypress-github-actions/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── downloads/
│   ├── fixtures/
│   └── screenshots/
│   ├── integration/
│   ├── plugins/
│   └── support/
│   └── videos/
├── node_modules/
├── .gitignore
├── cypress.json
├── package.json
└── README.md
