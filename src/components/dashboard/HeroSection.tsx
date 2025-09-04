import { GameCard } from "./GameCard";
import { ProgressRing } from "./ProgressRing";
import { Coins, Star, Trophy, Zap } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">
          Hello, Aarya! 👋
        </h1>
        <p className="text-muted-foreground">
          Keep up the great work! You're making a real difference for our planet.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Points Card */}
        <GameCard variant="points">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Star className="h-5 w-5 text-amber-600" />
                <span className="font-semibold text-amber-900">Points</span>
              </div>
              <p className="text-2xl font-bold text-amber-900">2,450</p>
              <p className="text-sm text-amber-700">+120 this week</p>
            </div>
            <ProgressRing 
              progress={73} 
              size={60} 
              strokeWidth={6}
              color="hsl(var(--accent-amber))"
            >
              <span className="text-xs font-bold text-amber-600">73%</span>
            </ProgressRing>
          </div>
        </GameCard>

        {/* Coins Card */}
        <GameCard variant="coins">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Coins className="h-5 w-5 text-yellow-600" />
                <span className="font-semibold text-yellow-900">Coins</span>
              </div>
              <p className="text-2xl font-bold text-yellow-900">156</p>
              <p className="text-sm text-yellow-700">+24 today</p>
            </div>
            <ProgressRing 
              progress={62} 
              size={60} 
              strokeWidth={6}
              color="hsl(43 96% 56%)"
            >
              <span className="text-xs font-bold text-yellow-600">62%</span>
            </ProgressRing>
          </div>
        </GameCard>

        {/* Badges Card */}
        <GameCard variant="badges">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Trophy className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-purple-900">Badges</span>
              </div>
              <p className="text-2xl font-bold text-purple-900">12</p>
              <p className="text-sm text-purple-700">3 new this month</p>
            </div>
            <ProgressRing 
              progress={85} 
              size={60} 
              strokeWidth={6}
              color="hsl(var(--accent-purple))"
            >
              <span className="text-xs font-bold text-purple-600">85%</span>
            </ProgressRing>
          </div>
        </GameCard>
      </div>
    </div>
  );
};