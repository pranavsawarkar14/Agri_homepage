
import { cn } from "@/lib/utils";

export interface TestimonialAuthor {
  name: string;
  handle?: string;
  avatar?: string;
}

interface TestimonialCardProps {
  author: TestimonialAuthor;
  text: string;
  href?: string;
}

export function TestimonialCard({ author, text, href }: TestimonialCardProps) {
  const Card = href ? "a" : "div";

  return (
    <Card
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "flex w-80 flex-col gap-3 rounded-lg bg-card p-5 shadow-sm transition-all",
        href && "cursor-pointer hover:shadow-md hover:-translate-y-1"
      )}
    >
      <p className="flex-1 text-sm text-foreground">{text}</p>
      <div className="flex items-center gap-3">
        {author.avatar && (
          <img
            src={author.avatar}
            alt={author.name}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground">{author.name}</span>
          {author.handle && (
            <span className="text-xs text-muted-foreground">{author.handle}</span>
          )}
        </div>
      </div>
    </Card>
  );
}
