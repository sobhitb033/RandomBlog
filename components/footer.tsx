import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">About</h3>
            <p className="mt-4 text-sm text-muted-foreground">
              RandomBlogs is your source for the latest technology news, development tutorials, and programming insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/articles" className="text-sm text-muted-foreground hover:text-primary">
                  Articles
                </a>
              </li>
              <li>
                <a href="/categories" className="text-sm text-muted-foreground hover:text-primary">
                  Categories
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm text-muted-foreground hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-muted-foreground hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Categories</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/category/development" className="text-sm text-muted-foreground hover:text-primary">
                  Development
                </a>
              </li>
              <li>
                <a href="/category/technology" className="text-sm text-muted-foreground hover:text-primary">
                  Technology
                </a>
              </li>
              <li>
                <a href="/category/programming" className="text-sm text-muted-foreground hover:text-primary">
                  Programming
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}