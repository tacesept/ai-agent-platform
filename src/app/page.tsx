import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div>
      <Button variant="outline" className="text-xl text-blue-600">
        Monkey
      </Button>
      <Button variant="outline" className="text-xl text-blue-600">
        Monkey
      </Button>
      <Button variant="outline" className="text-xl text-blue-600">
        Monkey
      </Button>
      <Button variant="outline" className="text-xl text-blue-600">
        Monkey
      </Button>
      <p className={cn('text-6xl bg-accent-foreground')}>hey</p>
      <p>hey</p>
    </div>
  );
}
