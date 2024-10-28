import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface Post {
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
}

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
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
  );
}