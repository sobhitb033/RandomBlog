import { notFound } from "next/navigation";
import { PostGrid } from "@/components/post-grid";
import { CategoryHeader } from "@/components/category-header";

// This would typically come from a database
const categories = {
  development: {
    title: "Development",
    description: "Latest articles about web development, best practices, and coding tutorials.",
    posts: [
      {
        title: "Understanding React Server Components",
        excerpt: "A deep dive into React Server Components and their benefits.",
        category: "Development",
        readTime: "10 min read",
        date: "Apr 3, 2024",
        image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800&h=400",
      },
      {
        title: "Modern CSS Techniques",
        excerpt: "Explore the latest CSS features and how to use them effectively.",
        category: "Development",
        readTime: "8 min read",
        date: "Apr 2, 2024",
        image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=800&h=400",
      },
      // Add more posts as needed
    ],
  },
  technology: {
    title: "Technology",
    description: "Stay up to date with the latest technology trends and innovations.",
    posts: [
      {
        title: "The Rise of AI in Healthcare",
        excerpt: "How artificial intelligence is transforming healthcare delivery.",
        category: "Technology",
        readTime: "7 min read",
        date: "Apr 3, 2024",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800&h=400",
      },
      {
        title: "5G Technology Impact",
        excerpt: "Understanding the implications of 5G on various industries.",
        category: "Technology",
        readTime: "6 min read",
        date: "Apr 2, 2024",
        image: "https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80&w=800&h=400",
      },
    ],
  },
  programming: {
    title: "Programming",
    description: "Programming tutorials, tips, and best practices for developers.",
    posts: [
      {
        title: "Advanced TypeScript Patterns",
        excerpt: "Learn advanced TypeScript patterns for better code organization.",
        category: "Programming",
        readTime: "12 min read",
        date: "Apr 3, 2024",
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=400",
      },
      {
        title: "Python Data Structures",
        excerpt: "A comprehensive guide to Python data structures and their usage.",
        category: "Programming",
        readTime: "9 min read",
        date: "Apr 2, 2024",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800&h=400",
      },
    ],
  },
};

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  let param = await params;

  const category = categories[param.slug as keyof typeof categories];
 
  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <CategoryHeader
        title={category.title}
        description={category.description}
      />
      <PostGrid posts={category.posts} />
    </div>
  );
}

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}