import { NextResponse } from 'next/server';
import { getAllSoftware, getSoftwareById, getCategories } from '@/utils/software-service';

// denna fil tar hand om alla requests som har med software att göra
// den kan hämta all software, specifik software via id, eller lista kategorier
// tänk på den som en receptionist som tar emot olika frågor om vår software

export const dynamic = 'force-static'; // gör att sidan är statisk, nextjs bråkade med mig så behövde lägga till detta
export const revalidate = false; // gör att sidan inte revalideras, samma gäller här, 

// I vår route har vi flera olika returscenaiar, nexts kan ibland ha svårt att avgöra hur den ska hantera sådana här routes.
// därför ska tydligen dom övre raderna göra det lite mer tydligt. 
// Det fungerade lokalt innan, men inte när jag deployade..

// annars är det handlers som vanligt
export async function GET(request: Request) {
  try {
    // här kollar vi vad användaren vill ha genom att titta på url:en
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const id = searchParams.get('id');

    // om någon frågar efter specifik software via id
    if (id) {
      const software = await getSoftwareById(id);
      if (!software) {
        // hittade ingen software med det id:t :( då är det kört
        return NextResponse.json(
          { error: 'Software not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(software);
    }

    // om någon vill ha en lista på alla kategorier vi har
    if (category === 'list') {
      const categories = await getCategories();
      return NextResponse.json(categories);
    }

    // om inget speciellt efterfrågas, ge all software
    // eller filtrera på kategori om det angetts
    const software = await getAllSoftware(category || undefined);
    return NextResponse.json(software);

  } catch (error) {
    // något gick fel, vilket aldrig lär hända! Eller?
    console.error('Software fetch error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "An unexpected error occurred" },
      { status: 500 }
    );
  }
} 