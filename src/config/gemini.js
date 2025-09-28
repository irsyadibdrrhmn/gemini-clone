// Simulated Gemini API for UI Development
// Replace this with real API when billing is ready

// Array of realistic responses for different types of prompts
const simulatedResponses = {
  creator: [
    "**The person who made this Gemini clone is Irsyad Ibadurrahman.** *He built this* as a web application using React.js and integrated it with AI capabilities. *The project demonstrates* modern web development skills including state management, API integration, and responsive design. *It's a great example* of how to create AI-powered chat interfaces!",
    
    "**This Gemini clone was created by Irsyad Ibadurrahman!** *He developed this application* using cutting-edge web technologies like React and modern JavaScript. *The implementation includes* features like conversation history, real-time responses, and a clean user interface. *It showcases* excellent front-end development skills!",
    
    "**Irsyad Ibadurrahman is the developer behind this Gemini clone.** *He crafted this project* with attention to both functionality and user experience. *The application features* smooth animations, responsive design, and efficient state management. *It's an impressive demonstration* of modern web development capabilities!"
  ],
  
  greetings: [
    "Hello! I'm here to help you with any questions or tasks you have. What would you like to know about today?",
    "Hi there! How can I assist you today? Feel free to ask me anything!",
    "Greetings! I'm ready to help with your questions, provide information, or assist with various tasks."
  ],
  
  questions: [
    "That's an interesting question! **Here's what I can tell you:** Based on current knowledge, there are several key points to consider. *First*, it's important to understand the context. *Second*, we should look at different perspectives. *Third*, practical applications matter most. Would you like me to elaborate on any specific aspect?",
    
    "Great question! **Let me break this down for you:** This topic has multiple dimensions that are worth exploring. *Research shows* that there are several approaches to consider. *In practice*, the most effective method often depends on your specific situation. *Key factors* include timing, resources, and desired outcomes.",
    
    "I'd be happy to help with that! **Here's my response:** This is a complex topic with several important considerations. *From a technical standpoint*, there are proven methodologies. *From a practical perspective*, implementation can vary. *The key insight* is that success often comes from understanding the fundamentals first."
  ],
  
  coding: [
    "**Great coding question!** Here's how I'd approach this: *First*, let's break down the problem into smaller components. *Then*, we can implement each part step by step. *Key considerations* include performance, maintainability, and best practices. Would you like me to show you a specific example?",
    
    "**Excellent programming question!** *The solution involves* several important concepts. *Best practices suggest* starting with a clear structure. *Performance-wise*, there are optimizations we can apply. *For maintainability*, clean code principles are essential.",
    
    "**Good technical question!** *Let me explain the approach:* We need to consider the architecture first. *Implementation details* matter for scalability. *Testing strategies* ensure reliability. *Documentation* helps with future maintenance."
  ],
  
  creative: [
    "**What an creative request!** I love helping with imaginative tasks. *Here's my take:* Creativity often flourishes when we combine different perspectives. *The key elements* include originality, purpose, and audience engagement. *Let's explore* various possibilities together!",
    
    "**Interesting creative challenge!** *Creative work benefits from* exploring multiple approaches. *Inspiration can come* from unexpected sources. *The creative process* involves iteration and refinement. *What specific direction* would you like to explore?",
    
    "**I enjoy creative projects!** *The creative journey* involves both imagination and structure. *Key principles* include authenticity, innovation, and emotional connection. *Different techniques* can enhance the final result."
  ],
  
  general: [
    "**Thank you for your question!** *Let me provide you with* a comprehensive response. *Key points to consider* include multiple perspectives and practical applications. *Research indicates* that understanding the fundamentals is crucial. *In summary*, the most important factor is finding the right approach for your specific needs.",
    
    "**That's a valuable question!** *Based on current understanding*, there are several important aspects to explore. *Evidence suggests* that a systematic approach works best. *Practical experience* shows that success comes from consistent application. *Would you like* more specific details?",
    
    "**I'm glad you asked!** *This topic involves* several interconnected concepts. *Studies have shown* that taking a holistic view is beneficial. *In practice*, the most effective solutions combine theory with real-world application. *The bottom line* is that understanding leads to better outcomes."
  ]
};

// Function to detect prompt type
function detectPromptType(prompt) {
  const lowerPrompt = prompt.toLowerCase();
  
  // Special case for creator question
  if (lowerPrompt.includes('who made this') || lowerPrompt.includes('who created this') || lowerPrompt.includes('who built this') || 
      lowerPrompt.includes('creator') || lowerPrompt.includes('developer') || lowerPrompt.includes('author')) {
    return 'creator';
  } else if (lowerPrompt.includes('hello') || lowerPrompt.includes('hi') || lowerPrompt.includes('hey')) {
    return 'greetings';
  } else if (lowerPrompt.includes('code') || lowerPrompt.includes('program') || lowerPrompt.includes('javascript') || lowerPrompt.includes('css') || lowerPrompt.includes('html')) {
    return 'coding';
  } else if (lowerPrompt.includes('write') || lowerPrompt.includes('create') || lowerPrompt.includes('story') || lowerPrompt.includes('poem')) {
    return 'creative';
  } else if (lowerPrompt.includes('?')) {
    return 'questions';
  } else {
    return 'general';
  }
}

// Function to get random response from category
function getRandomResponse(category) {
  const responses = simulatedResponses[category];
  return responses[Math.floor(Math.random() * responses.length)];
}

// Main simulated function
async function runChat(prompt) {
  // Simulate network delay (realistic experience)
  const delay = Math.random() * 2000 + 1000; // 1-3 seconds
  await new Promise(resolve => setTimeout(resolve, delay));
  
  try {
    // Detect what type of prompt this is
    const promptType = detectPromptType(prompt);
    
    // Get appropriate response
    let response = getRandomResponse(promptType);
    
    // Add some personalization based on the actual prompt
    if (promptType !== 'greetings') {
      response += `\n\n*Regarding your specific question about "${prompt.slice(0, 50)}${prompt.length > 50 ? '...' : ''}"*, I hope this helps! Feel free to ask if you need more clarification or have follow-up questions.`;
    }
    
    return response;
    
  } catch (error) {
    // Even simulation can have "errors" for testing
    console.log("Simulated error (for testing):", error);
    return "I apologize, but I'm having trouble processing your request right now. Please try again in a moment.";
  }
}

export default runChat;