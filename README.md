# cipher-vault-js

A minimalist symmetric encryption engine built with Vanilla JavaScript. It features real-time Unicode displacement logic with a modern, terminal-style interface.

## Overview

cipher-vault-js is a lightweight client-side web application that demonstrates the mechanics of a basic symmetric encryption algorithm inspired by the classical Caesar cipher. The system operates by shifting Unicode character codes using a configurable displacement key.

The project focuses on clarity and minimalism. It avoids frameworks and external libraries, relying entirely on Vanilla JavaScript to handle the encryption logic, DOM interaction, and application flow.

The interface adopts a terminal-inspired visual style to reinforce the technical nature of the tool while keeping the user experience simple and intuitive.

This project primarily illustrates:

- Symmetric encryption concepts
- Unicode character manipulation
- Event-driven JavaScript programming
- Modular front-end architecture using HTML, CSS, and JavaScript

## Features

- Symmetric encryption and decryption
- Configurable displacement key (shift value)
- Unicode-based character transformation
- Minimalist terminal-style interface
- Responsive layout
- Zero dependencies (pure Vanilla JavaScript)
- Bidirectional encryption and decryption workflow

## How It Works

The encryption engine processes each character of the input string individually by shifting its Unicode code point based on a user-defined key.

Encryption logic:

    `encrypted_char = charCode + shift`

Decryption logic:

    `original_char = charCode - shift`

Each character is transformed using the following JavaScript methods:

- `charCodeAt()` to obtain the Unicode value
- `String.fromCharCode()` to reconstruct the shifted character

This approach demonstrates the mechanics behind substitution-based ciphers while keeping the algorithm intentionally simple.

## Project Structure

```
    cipher-vault-js
    │
    ├── index.html
    │   Application layout and structure
    │
    ├── style.css
    │   Visual design, theme variables, and UI styling
    │
    ├── script.js
    │   Encryption engine and DOM interaction logic
    │
    └── README.md
        Project documentation
```

## Usage

1. Open the application in a modern web browser.
2. Enter a message in the **Message Original** field.
3. Select a displacement key using the shift input.
4. Click **Encrypt** to generate the encrypted output.
5. Click **Decrypt** to reverse the transformation.
6. Click **Clear** to reset the interface.

The application supports decrypting either from the result field or directly from the original input field.

## Installation

Clone the repository:

    git clone https://github.com/CarlosVergaraDev/cipher-vault-js

Navigate to the project directory:

    cd cipher-vault-js

Open the application:

    open index.html

Alternatively, open `index.html` manually in any modern browser.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts

The project intentionally avoids frameworks and build tools to maintain transparency in the underlying logic.

## Limitations

This implementation is intended for educational and demonstrational purposes only. The displacement cipher used here does not provide cryptographic security and should not be used for protecting sensitive or confidential information.

## License

MIT License