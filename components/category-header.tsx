interface CategoryHeaderProps {
  title: string;
  description: string;
}

export function CategoryHeader({ title, description }: CategoryHeaderProps) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
        <p className="mt-4 text-xl text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}