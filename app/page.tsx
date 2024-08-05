import Features from '@/components/Features';
import Newsletter from '@/components/Newsletter';
import Hero from '@/components/Hero';
import List from '@/components/List';

export default function Page() {
  return (
    <div className="grid gap-40 py-20">
      <Hero />
      <Features />
      <List />
      <Newsletter />
    </div>
  );
}
