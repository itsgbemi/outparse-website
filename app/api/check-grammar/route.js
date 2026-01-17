import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function POST(request) {
  try {
    const { text } = await request.json();
    
    if (!text || text.trim().length === 0) {
      return Response.json({ 
        success: false, 
        message: 'No text provided' 
      }, { status: 400 });
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
      Analyze the following text for grammar errors. Return a JSON array of errors with this exact structure:
      [
        {
          "word": "the incorrect word or phrase",
          "index": starting_position_in_text,
          "reason": "explanation of the grammar error",
          "suggestion": "corrected word or phrase"
        }
      ]
      
      Only include actual grammar errors. Be precise with the index position.
      
      Text to analyze: "${text}"
      
      Return only the JSON array, no other text.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const rawText = response.text();
    
    // Extract JSON from response
    const jsonMatch = rawText.match(/\[.*\]/s);
    let errors = [];
    
    if (jsonMatch) {
      try {
        errors = JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.error('Error parsing JSON:', e);
      }
    }

    return Response.json({ 
      success: true, 
      errors 
    });

  } catch (error) {
    console.error('Error checking grammar:', error);
    
    return Response.json({ 
      success: false, 
      message: 'Error processing request',
      error: error.message 
    }, { status: 500 });
  }
}
