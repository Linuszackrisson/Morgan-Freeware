import { NextResponse } from 'next/server';
import { subscribeToNewsletter } from '@/utils/newsletter-service';
// handler for newsletter subscription
export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    // kontrollerar om email är ifylld
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }
    // skickar in email till newsletterService
    const result = await subscribeToNewsletter(email);
    // skickar tillbaka resultatet
    return NextResponse.json(result);

  } catch (error) {
    // skickar ett felmeddelande om att något gick åt pipan
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
