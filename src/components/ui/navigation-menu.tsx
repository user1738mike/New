"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu-utils";
import { Code2, Layers, Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "AI Code Assistant",
    href: "/products/ai-assistant",
    description: "Intelligent code completion and suggestions powered by AI.",
    icon: <Code2 className="h-6 w-6" />,
  },
  {
    title: "Component Library",
    href: "/products/components",
    description: "Pre-built, customizable UI components for rapid development.",
    icon: <Layers className="h-6 w-6" />,
  },
  {
    title: "Performance Tools",
    href: "/products/performance",
    description: "Optimize your applications with advanced performance insights.",
    icon: <Zap className="h-6 w-6" />,
  },
];

const resources = [
  {
    title: "Documentation",
    href: "/docs",
    description: "Comprehensive guides and API references.",
  },
  {
    title: "Tutorials",
    href: "/tutorials",
    description: "Step-by-step tutorials to get you started.",
  },
  {
    title: "Blog",
    href: "/blog",
    description: "Latest insights and updates from our team.",
  },
  {
    title: "Community",
    href: "/community",
    description: "Join our developer community and get support.",
  },
];

function ProductItem({
  title,
  href,
  description,
  icon,
}: {
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-3">
            <div className="text-blue-600 group-hover:text-blue-700">{icon}</div>
            <div>
              <div className="text-sm font-medium leading-none">{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {description}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function ResourceItem({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Component() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/0">
      <div className="container flex h-36 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 -ml-4 md:-ml-8 ">
          <Image
            src="/creator-plus-logo-optimized.png"
            alt="Creator Plus Logo"
            width={82}
            height={82}
            className="rounded "
            priority
          />
          
        </Link>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex -mr-56">
          <NavigationMenuList>
            {/* Products */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none">
                Products
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4">
                  <ul className="grid gap-1">
                    {products.map((product) => (
                      <ProductItem key={product.title} {...product} />
                    ))}
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Link
                      href="/products"
                      className="group inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
                    >
                      View all products
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solutions */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/solutions"
                className={navigationMenuTriggerStyle()}
              >
                Solutions
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Resources */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="h-9 px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] p-4">
                  <ul className="grid gap-1">
                    {resources.map((resource) => (
                      <ResourceItem key={resource.title} {...resource} />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Pricing */}
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/pricing"
                className={navigationMenuTriggerStyle()}
              >
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right side actions */}
        <div className="flex items-center space-x-4 -mr-14">
          <Button
            variant="ghost"
            size="sm"
            asChild
            className="hidden md:inline-flex"
          >
            <Link href="/auth/signin">Sign in</Link>
          </Button>
          <Button
            size="sm"
            asChild
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0"
          >
            <Link href="/auth/signup">Get Started</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
