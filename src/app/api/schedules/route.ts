// app/api/schedules/route.ts
import { NextResponse } from 'next/server';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const API_URL = `${API_BASE_URL}/schedules`;

export async function GET() {
  try {
    const res = await fetch(API_URL, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error(`Failed to fetch schedules. Status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error fetching schedules:', error);
    return NextResponse.json({ error: 'Failed to fetch schedules' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Failed to save schedule. Status: ${res.status}`);
    }

    const data = await res.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('Error posting schedules:', error);
    return NextResponse.json({ error: 'Failed to save schedule' }, { status: 500 });
  }
}
