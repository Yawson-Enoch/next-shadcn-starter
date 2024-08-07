import type { Metadata } from 'next';
import Link from 'next/link';
import { HouseIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Oops! The page you are looking for cannot be found.',
};

export default function NotFound() {
  return (
    <main className="container grid min-h-dvh place-content-center place-items-center gap-4 py-4 md:gap-8 md:py-8">
      <div className="grid place-items-center gap-2">
        <h2 className="text-balance">Oops! Page not found</h2>
      </div>
      <Button asChild size={'lg'}>
        <Link href="/">
          <HouseIcon className="size-4" />
          <span>GO HOME</span>
        </Link>
      </Button>
    </main>
  );
}
