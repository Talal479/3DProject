# 3DProject

## Description

This project is a 3D application built using [Vite](https://vitejs.dev/) and other dependencies. Follow the instructions below to set up and run the project on your local machine.

## Prerequisites

- **Node.js**: Make sure Node.js is installed on your system. If not, download and install it from [Node.js official website](https://nodejs.org/).

## Installation

### Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/3DProject.git
```

Navigate into the project directory:

```bash
cd 3DProject
```

### Step 2: Install Node.js

If you haven't already installed Node.js, download and install it from [Node.js official website](https://nodejs.org/). 

### Step 3: Set Node.js Path (Windows)

#### Option 1: During Installation

1. During the Node.js installation process, make sure to check the option **"Add to PATH"**.

#### Option 2: Manually Adding to PATH

1. Open **System Properties**:
   - Right-click on **This PC** or **My Computer** and select **Properties**.
   - Click on **Advanced system settings** on the left side.

2. Open **Environment Variables**:
   - In the System Properties window, click the **Environment Variables** button.

3. Edit the **Path Variable**:
   - In the Environment Variables window, find the **Path** variable in the **System variables** section and select it.
   - Click the **Edit** button.
   - In the Edit Environment Variable window, click **New** and add the path to the Node.js installation folder (e.g., `C:\Program Files\nodejs\`).
   - Click **OK** to close all windows and apply the changes.
   - Restart your Command Prompt or terminal.

### Step 4: Install Project Dependencies

Install the necessary dependencies using npm:

```bash
npm install
```

### Step 5: Run the Development Server

Start the development server using the following command:

```bash
npm run dev
```

### Step 6: Access the Application

Open your browser and navigate to the provided local URL (usually `http://localhost:3000`) to view the application.

## Troubleshooting

If you encounter any issues during the setup or running of the project, please check the following:
- Ensure Node.js and npm are correctly installed and available in the PATH.
- Verify that all dependencies are installed correctly by running `npm install` again.

Feel free to open an issue on the repository if you need further assistance.
