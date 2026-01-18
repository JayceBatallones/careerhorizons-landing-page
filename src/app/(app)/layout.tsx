import Link from 'next/link';
import { Compass, User, LayoutDashboard, LogOut } from 'lucide-react';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient();
  const { data } = await supabase.auth.getUser();
  const user = data.user;

  return (
    <div className="min-h-screen bg-[#0c0c0f]">
      <header className="sticky top-0 z-50 bg-[#0c0c0f]/80 backdrop-blur-xl border-b border-[#1a1a21]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-semibold">Career<span className="text-indigo-400">Horizons</span></span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/opportunities" className="text-sm text-[#8a8a9a] hover:text-white transition-colors flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              Opportunities
            </Link>
            <Link href="/profile" className="text-sm text-[#8a8a9a] hover:text-white transition-colors flex items-center gap-2">
              <User className="w-4 h-4" />
              Profile
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <span className="hidden sm:block text-sm text-[#6a6a7a]">{user?.email}</span>
            <form action="/auth/sign-out" method="post">
              <button className="w-9 h-9 rounded-lg border border-[#2a2a35] bg-[#0f0f14] hover:bg-[#1a1a21] transition-colors flex items-center justify-center" aria-label="Sign out">
                <LogOut className="w-4 h-4 text-[#a0a0b0]" />
              </button>
            </form>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {children}
      </main>
    </div>
  );
}
