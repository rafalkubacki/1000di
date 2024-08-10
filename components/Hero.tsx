import Image from 'next/image';
import HeroImage from '../public/hero.png';
import { Button } from './ui/button';
import { NewsletterForm } from './newsletter-form';

export default function Hero() {
  return (
    <div className="container flex flex-wrap items-center justify-between">
      <div className="mb-8 grid w-full gap-4 lg:mb-0 lg:max-w-3xl lg:flex-auto">
        <p className="text-sm font-medium leading-none">Welcome to 1000 Dead Ideas</p>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Dig up an idea for a side hustle, micro saas, or coding project.
        </h1>
        <p className="leading-7">
          1000 Dead Ideas is a collection of side project concepts that are free to use and build
          upon.
          <br />
          Each idea was previously consulted with potential customers and passed a validation test.
          <br />
          Some of them were even built and launched. Now they are waiting for a new life.
        </p>
      </div>
      <div className="w-full lg:max-w-xs">
        <Image src={HeroImage} alt="1000 Dead Ideas" priority />
      </div>
    </div>
  );
}
