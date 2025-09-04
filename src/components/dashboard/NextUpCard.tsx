import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Zap } from "lucide-react";

export const NextUpCard = () => {
  return (
    <GameCard variant="hero" className="mb-8">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="h-5 w-5" />
            <span className="font-semibold text-white/90">Next Up - AI Recommended</span>
          </div>
          <h3 className="text-xl font-bold mb-2">Plastic Pollution Basics</h3>
          <p className="text-white/80 mb-4">
            Based on your grade 8 progress, dive into ocean conservation and learn how plastic affects marine life.
          </p>
          <div className="flex items-center gap-4 text-sm text-white/80">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>6 minutes</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>Grade 8 • Water & Ocean</span>
            </div>
          </div>
        </div>
        <div className="ml-6">
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold"
          >
            Start Lesson
          </Button>
        </div>
      </div>
    </GameCard>
  );
};