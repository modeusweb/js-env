# JS-Env Utility

A comprehensive utility module to detect the execution environment (Node.js, Browser, Web Worker) and platform information.

## Demo

[View live Demo](https://js-env-eta.vercel.app/)

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Functions](#functions)
- [Running Tests](#running-tests)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
`JS-Env` is a utility module designed to help developers quickly detect the environment in which their JavaScript code is running, whether it be Node.js, a web browser, or even a Web Worker. This module provides detailed information about the platform, browser, operating system, and support for various web APIs.

## Features
- Detect if the environment is Node.js, a web browser, or a Web Worker.
- Identify the operating system in Node.js or browser.
- Recognize popular browsers (e.g., Chrome, Firefox, Safari).
- Check support for various web APIs (e.g., `Service Worker`, `localStorage`, `fetch`).
- Retrieve network information, such as connection type and speed.
- Provide a comprehensive overview of the current environment.

## Installation
```bash
npm install js-env-utility
```

## Usage

### Importing the Module

Ensure you have Node.js installed on your system. To use `JS-Env`, import the module in your JavaScript code.

```javascript
import { 
    isNode, 
    isBrowser, 
    detectPlatform, 
    detectOperatingSystem, 
    detectBrowser, 
    detectApiSupport, 
    detectNetworkInfo, 
    getEnvironmentInfo 
} from 'js-env-utility';
```

## Functions

- `isNode()`: returns `true` if the code is running in a Node.js environment.
- `isBrowser()`: returns `true` if the code is running in a browser environment.
- `detectPlatform()`: returns the string `Node.js` or `Browser` based on the detected environment.
- `detectOperatingSystem()`: identifies the operating system and returns values like `Windows`, `MacOS`, `Linux`, etc.
- `detectBrowser()`: identifies the browser and returns values like `Chrome`, `Firefox`, `Safari`, etc.
- `detectApiSupport()`: returns an object indicating support for web APIs, such as `serviceWorker`, `webGL`, `localStorage`, and more.
- `detectNetworkInfo()`: provides network-related information (e.g., connection type, downlink speed, RTT).
- `getEnvironmentInfo()`: returns an object containing all the above information.

## Running Tests

To ensure the module works as expected, you can run the provided test script:

1. Make sure you are in the project directory:

```bash
cd js-env-utility
```

2. Run the test script with Node.js:

```bash
npm run test
```

### Sample Output

The output should log various information about the environment, such as:

```bash
Platform: Browser
Operating System: Windows
Browser: Chrome
API Support: { serviceWorker: true, webGL: true, ... }
Network Info: { type: '4g', downlink: 10, rtt: 50, saveData: false }
Full Environment Info: { ... }
```

## Project Structure

The project is structured as follows:

- `src/jsEnv.js`: The main module containing the utility functions.
- `test/test.js`: The test script for running the tests.
- `package.json`: The project's package configuration.
- `README.md`: The project's README file.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue.

## License

This project is licensed under the MIT License.