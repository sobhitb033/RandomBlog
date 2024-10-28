import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold">404 - Page Not Found</h2>
      <p className="mt-4 text-xl text-muted-foreground">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <HomeIcon className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}