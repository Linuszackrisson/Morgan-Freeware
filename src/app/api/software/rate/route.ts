import { NextResponse } from 'next/server';
import { rateSoftware } from '@/utils/software-service';

export async function POST(request: Request) {
  try {
    const { softwareId, rating } = await request.json();

    if (!softwareId || typeof rating !== 'number' || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: 'Invalid rating data. Rating must be a number between 1 and 5' },
        { status: 400 }
      );
    }

    const result = await rateSoftware(softwareId, rating);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Software rating error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 