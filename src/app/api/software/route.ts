import { NextResponse } from 'next/server';
import { getAllSoftware, getSoftwareById, getCategories } from '@/utils/software-service';

export const dynamic = 'force-static';
export const revalidate = false;

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    if (id) {
      const software = await getSoftwareById(id);
      if (!software) {
        return NextResponse.json(
          { error: 'Software not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(software);
    }

    if (category === 'list') {
      const categories = await getCategories();
      return NextResponse.json(categories);
    }

    const software = await getAllSoftware(category || undefined);
    return NextResponse.json(software);

  } catch (error) {
    console.error('Software fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 