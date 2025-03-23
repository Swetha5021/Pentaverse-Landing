const words = ["Chatbot", "Image Generation", "Music Generation", "Code Generation", "Text-to-Speech"];
let i = 0;
let textElement = document.getElementById("dynamic-text");

function typeWriterEffect() {
    let word = words[i];
    let j = 0;
    textElement.innerHTML = "";

    let typingInterval = setInterval(() => {
        if (j < word.length) {
            textElement.innerHTML += word[j];
            j++;
        } else {
            clearInterval(typingInterval);
            setTimeout(() => deleteEffect(word), 1500); // Wait before deleting
        }
    }, 100);
}

function deleteEffect(word) {
    let j = word.length;

    let deletingInterval = setInterval(() => {
        if (j > 0) {
            textElement.innerHTML = word.substring(0, j - 1);
            j--;
        } else {
            clearInterval(deletingInterval);
            i = (i + 1) % words.length; // Move to next word
            setTimeout(typeWriterEffect, 500); // Wait before typing next word
        }
    }, 50);
}

// Start the effect on page load
document.addEventListener("DOMContentLoaded", typeWriterEffect);
