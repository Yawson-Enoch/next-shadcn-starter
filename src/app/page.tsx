import type { Metadata } from 'next';

import ThemeSwitcher from '@/components/common/theme-switcher';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
  },
};

export default function Page() {
  return <ThemeSwitcher />;
}
