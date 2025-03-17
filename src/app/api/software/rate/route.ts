import { NextResponse } from 'next/server';
import { rateSoftware } from '@/utils/software-service';
// handler for software rating
export async function POST(request: Request) {
  try {
    const { softwareId, rating } = await request.json();
    // kontrollerar om softwareId är ifylld och om rating är ett tal mellan 1 och 5
    // Varför egentligen? Man kan ju inte rösta om något inte finns, eller?
    // Men du rätt ska va rätt, ska vi ha formulärvalidering så ska vi väl ha någon form av kontroll här.
    // Finns säkert något som hade lyckats mata in ett värde som inte existerar :)
    if (!softwareId || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Invalid rating data. Rating must be a number between 1 and 5' },
        { status: 400 }
      );
    }
    // skickar in softwareId och rating till rateSoftware
    const result = await rateSoftware(softwareId, rating);
    return NextResponse.json(result);
    // skickar ett felmeddelande om att något gick åt pipan
  } catch (error) {
    console.error('Software rating error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 