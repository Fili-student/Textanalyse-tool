import { question } from "readline-sync";

// Function to get user input for text
function getText() {
    console.log("Bitte gib einen Text ein:");
    return question('> ');
}

// Function to analyze the text and calculate statistics
function analyzeText(text) {
    // Split the text into words
    let words = text.split(/\s+/).filter(word => word.length > 0);

    // Calculate statistics
    let wordCount = words.length;
    let uniqueWordCount = new Set(words).size;

    // Find the longest word
    let longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');

    // Display the statistics
    console.log(`Anzahl der Wörter im Text: ${wordCount}`);
    console.log(`Anzahl unterschiedlicher Wörter: ${uniqueWordCount}`);
    console.log(`Längstes Wort im Text: ${longestWord}`);
}

// Get user input for text
let userText = getText();

// Analyze the text and calculate statistics
analyzeText(userText);