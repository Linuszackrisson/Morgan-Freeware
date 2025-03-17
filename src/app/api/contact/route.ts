import { NextResponse } from 'next/server';
import { contactService } from '@/utils/contact-service';
import { ContactFormData } from '@/types/contact';
// handler for contact form
export async function POST(request: Request) {
  try {
    const data: ContactFormData = await request.json();
// kontrollerar om alla fält är ifyllda
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    // skickar in data till contactService
    const result = await contactService.submitContactForm(data);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }
    // skickar tillbaka ett meddelande om att formuläret har skickats
    return NextResponse.json({ message: result.message });

  } catch (error) {
    // skickar ett felmeddelande om att något gick åt pipan
    console.error('Contact form submission error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
