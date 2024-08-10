import Image from 'next/image';
import HeroImage from '../public/hero.jpeg';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';

const components: { title: string; href: string }[] = [
  {
    title: 'Ideas',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'Contribute',
    href: '/contribute',
  },
];

export default function NavBar() {
  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full backdrop-blur">
      <div className="container mx-auto flex h-14 items-center">
        <Link className="mr-4 flex items-center space-x-2 lg:mr-6" href="/">
          <span className="hidden font-bold lg:inline-block">1000 dead ideas</span>
        </Link>
        <NavigationMenu>
          <NavigationMenuList>
            {components.map((component) => (
              <NavigationMenuItem key={component.title}>
                <Link href={component.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {component.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
