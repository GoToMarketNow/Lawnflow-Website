import { Link } from "react-router-dom";
import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CompareFinalCTA() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center">
          <Link to="/screens">
            <Button
              size="lg"
              className="bg-[var(--primary-green)] hover:bg-[var(--dark-green)] text-white text-lg h-14 px-10 w-full sm:w-auto group"
            >
              See LawnFlow in Action
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
