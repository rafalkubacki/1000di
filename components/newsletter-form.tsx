'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Checkbox } from './ui/checkbox';
import { useState } from 'react';
import { Label } from './ui/label';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  consent: z.boolean().refine((value) => value, {
    message: 'You must agree to receive our newsletter.',
  }),
});

export function NewsletterForm() {
  const [status, setStatus] = useState(0);
  const [message, setMessage] = useState('');

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('Newsletter signup:', values);

    // e.preventDefault();
    // const res = await fetch('/api/subscribe', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email }),
    // });

    // const data = await res.json();
    // setMessage(data.message);
    // setStatus(res.status);

    // if (res.status === 200) {
    //   setEmail('');

    //   setTimeout(() => {
    //     setMessage('');
    //     setStatus(0);
    //   }, 3000);
    // }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex items-center gap-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="sr-only">Your email address</FormLabel>
                <FormControl>
                  <Input id={field.name} placeholder="Enter your email address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Subscribe</Button>
        </div>
        <FormField
          control={form.control}
          name="consent"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Consent</FormLabel>
              <div className="flex items-center">
                <FormControl>
                  <Checkbox id={field.name} />
                </FormControl>
                <Label className="ml-2" htmlFor={field.name}>
                  I agree to receive your newsletter and accept the privacy policy.
                </Label>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
      {message && (
        <p className={`${status === 200 ? 'text-green-300' : 'text-red-500'} mt-4 text-sm`}>
          {message}
        </p>
      )}
    </Form>
  );
}
