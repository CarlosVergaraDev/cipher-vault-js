/**
 * Caesar Cipher Engine
 * Processes text by shifting Unicode character codes.
 * * @param {string} text - Input string to be processed.
 * @param {number} shift - Number of positions to shift each character.
 * @param {boolean} encrypt - True to add shift, false to subtract.
 * @returns {string} - The resulting processed string.
 */
function processText(text, shift, encrypt = true) {
    const direction = encrypt ? 1 : -1;
    
    return text
        .split('') 
        .map(char => {
            const charCode = char.charCodeAt(0);
            return String.fromCharCode(charCode + (shift * direction));
        })
        .join(''); 
}

/* --- DOM Element Selectors --- */
const messageInput = document.getElementById('message');
const shiftInput = document.getElementById('shift');
const resultOutput = document.getElementById('result');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const clearBtn = document.getElementById('clearBtn');

/* --- Event Handlers --- */

/**
 * Handles the encryption flow.
 * Reads from the top input and outputs to the bottom field.
 */
encryptBtn.addEventListener('click', () => {
    const text = messageInput.value;
    const shift = parseInt(shiftInput.value);
    
    if (!text) return alert("Input field is empty. Please enter a message.");
    
    resultOutput.value = processText(text, shift, true);
});

/**
 * Handles the decryption flow.
 * Checks the bottom field first, then the top field.
 */
decryptBtn.addEventListener('click', () => {
    const shift = parseInt(shiftInput.value);

    // If there is text in the bottom box, decrypt it to the top
    if (resultOutput.value) {
        messageInput.value = processText(resultOutput.value, shift, false);
    } 
    // If the bottom is empty but the top has text, decrypt it to the bottom
    else if (messageInput.value) {
        resultOutput.value = processText(messageInput.value, shift, false);
    } 
    else {
        alert("Please enter text in either field to decrypt.");
    }
});

/**
 * Resets the application state.
 * Clears all text areas and restores focus to the main input.
 */
clearBtn.addEventListener('click', () => {
    messageInput.value = "";
    resultOutput.value = "";
    messageInput.focus();
});