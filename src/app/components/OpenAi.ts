"use server";

const fetchChatGPT = async (messages: { role: string; content: string }[]) => {
  try {
      // Retrieve the OpenAI API key from environment variables
      const apiKey = process.env.OPEN_AI_API_KEY;
      // Set the API URL for the Chat API
      const apiUrl = 'https://api.openai.com/v1/chat/completions';
      // Make a POST request to the OpenAI API with the provided messages
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo-1106',
          messages,
        }),
      });

      console.log("hi" , apiKey)
      // Check if the API request was successful
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Parse the response JSON and extract the generated content
      const data = await response.json();
      return { role: 'system', content: data.choices[0].message.content.trim()};
    } catch (error) {
      // Handle any errors that occur during the API request
      console.error('Error fetching from ChatGPT API:', error);
      return null;
    }
  };

// Export the function for use in other parts of the application
export default fetchChatGPT;