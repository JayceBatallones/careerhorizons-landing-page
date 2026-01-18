import { NextResponse } from 'next/server';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export async function POST(request: Request) {
  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
    }

    const body = (await request.json()) as {
      full_name: string;
      university: string;
      degree: string;
      graduation_year: number;
      location: string;
      interests: string[];
    };

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: body.full_name,
        university: body.university,
        degree: body.degree,
        graduation_year: body.graduation_year,
        location: body.location,
        interests: body.interests,
        onboarding_completed: true,
      })
      .eq('id', user.id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { error: e instanceof Error ? e.message : 'Unexpected error' },
      { status: 500 }
    );
  }
}
