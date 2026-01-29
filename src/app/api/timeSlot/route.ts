// app/api/timeSlot/route.ts
import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export async function GET() {
  try {
    const res = await fetch(`${API_BASE_URL}/time`, {
      cache: 'no-store',
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching timeslot:', error);
    return NextResponse.json({ error: 'Failed to fetch timeslot' }, { status: 500 });
  }
}
