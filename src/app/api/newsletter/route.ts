import { NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/utils/newsletter-service';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const result = await subscribeToNewsletter(email);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
