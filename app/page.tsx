import { ArrowRight, BookOpen, Clock, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const featuredPosts = [
  {
    title: "Getting Started with Web Development in 2024",
    excerpt: "A comprehensive guide to modern web development tools and practices.",
    category: "Development",
    readTime: "8 min read",
    date: "Apr 2, 2024",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "The Future of Artificial Intelligence",
    excerpt: "Exploring the latest trends and innovations in AI technology.",
    category: "Technology",
    readTime: "6 min read",
    date: "Apr 1, 2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=400",
  },
  {
    title: "Mastering TypeScript Best Practices",
    excerpt: "Learn how to write better TypeScript code with these pro tips.",
    category: "Programming",
    readTime: "10 min read",
    date: "Mar 30, 2024",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800&h=400",
  },
];

const categories = [
  { name: "Development", count: 12, icon: BookOpen },
  { name: "Technology", count: 8, icon: TrendingUp },
  { name: "Programming", count: 15, icon: Clock },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60 mix-blend-multiply" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Welcome to RandomBlogs
          </h1>
          <p className="mt-6 max-w-2xl text-xl">
            Discover the latest in technology, development, and programming. Expert insights, tutorials, and industry news.
          </p>
          <Button className="mt-8" size="lg">
            Start Reading <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight">Featured Posts</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.title} className="overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-3 text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex items-center justify-between">
                <span className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  {post.readTime}
                </span>
                <Button variant="ghost">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight">Categories</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ name, count, icon: Icon }) => (
              <Link key={name} href={`/category/${name.toLowerCase()}`}>
                <Card className="transition-colors hover:bg-muted">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="rounded-lg bg-primary/10 p-3">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle>{name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{count} articles</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}