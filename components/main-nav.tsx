"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export function MainNav() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 hidden md:flex">
          <Link href="/" className="text-xl font-bold">
            RandomBlogs
          </Link>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuItem>
                <Link href="/">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/articles">Articles</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/categories">Categories</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">About</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/" ? "text-primary" : "text-muted-foreground"
              )}
            >
              Home
            </Link>
            <Link
              href="/articles"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/articles"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Articles
            </Link>
            <Link
              href="/categories"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/categories"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === "/about"
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            {isSearchOpen ? (
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search articles..."
                  className="w-[200px] sm:w-[300px]"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setIsSearchOpen(false)}
                >
                  ✕
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}