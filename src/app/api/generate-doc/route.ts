import { generateComponentDoc } from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { componentName, componentProps } = await request.json();

  const prompt = `
    Write detailed documentation for a React component named '${componentName}'.
    The component has the following props: ${JSON.stringify(componentProps)}.
    The documentation should include:
    1. A brief description of the component
    2. A description of each prop with its type and usage
    3. Example usage of the component.
  `;

  const documentation = await generateComponentDoc(prompt);
  return NextResponse.json({ documentation });
}
