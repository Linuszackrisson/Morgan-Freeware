import { NextResponse } from 'next/server';
import { getAllSoftware, getSoftwareById, getCategories, updateSoftwareRating } from '@/utils/software-service';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    if (id) {
      const software = await getSoftwareById(id);
      return NextResponse.json(software);
    }

    if (category === 'list') {
      const categories = await getCategories();
      return NextResponse.json(categories);
    }

    const software = await getAllSoftware(category || undefined);
    return NextResponse.json(software);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch software' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const { id, rating } = await request.json();

    if (!id || rating === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await updateSoftwareRating(id, rating);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update rating' },
      { status: 500 }
    );
  }
} 