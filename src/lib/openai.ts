// lib/openai.ts
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateComponentDoc(prompt: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo",
      messages: [{
        role: "user",
        content: prompt
      }],
      temperature: 0.7,
    });

    return completion.choices[0].message.content || 'No documentation generated';
  } catch (error) {
    console.error('OpenAI API Error:', error);
    return 'Failed to generate documentation';
  }
}
