import { Camera, Trophy, Gift, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GameCard } from "./GameCard";

export const QuickActions = () => {
  const actions = [
    {
      icon: Camera,
      title: "Upload Evidence",
      description: "Share your eco-actions",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Trophy,
      title: "View Leaderboard", 
      description: "See how you rank",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Gift,
      title: "Redeem Rewards",
      description: "Spend your coins",
      color: "text-purple-600", 
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {actions.map((action, index) => (
        <GameCard key={index} className="text-center">
          <div className={`mx-auto w-12 h-12 ${action.bgColor} rounded-lg flex items-center justify-center mb-3`}>
            <action.icon className={`h-6 w-6 ${action.color}`} />
          </div>
          <h3 className="font-semibold mb-1">{action.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{action.description}</p>
          <Button variant="outline" size="sm" className="w-full">
            Go
          </Button>
        </GameCard>
      ))}
    </div>
  );
};