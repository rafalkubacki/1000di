'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { NewsletterForm } from './newsletter-form';

export default function Newsletter() {
  return (
    <div className="container flex flex-wrap items-center justify-between">
      <div className="mb-8 grid w-full gap-4 lg:mb-0 lg:max-w-3xl lg:flex-auto">
        <h2 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The bells are ringing
        </h2>
        <p className="leading-7">
          Get new ideas a week before they are published. Directly to your inbox.
        </p>
      </div>
      <Card className="w-full lg:max-w-lg">
        <CardContent>
          <NewsletterForm />
        </CardContent>
      </Card>
    </div>
  );
}
