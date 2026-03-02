import { NextRequest, NextResponse } from 'next/server';

const TRUCE_INDEX_API = 'https://truce-index.vercel.app/api';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const queryString = searchParams.toString();

  try {
    const res = await fetch(`${TRUCE_INDEX_API}/leaderboard?${queryString}`, {
      headers: {
        'User-Agent': 'TrucePortal/1.0 (server-side)',
      },
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch leaderboard data' },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });
  } catch (error) {
    console.error('Leaderboard proxy error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard data' },
      { status: 500 }
    );
  }
}
