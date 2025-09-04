import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GameCardProps {
  children: ReactNode;
  variant?: "default" | "hero" | "points" | "coins" | "badges";
  className?: string;
  onClick?: () => void;
}

export const GameCard = ({ 
  children, 
  variant = "default", 
  className,
  onClick 
}: GameCardProps) => {
  const variants = {
    default: "game-card",
    hero: "game-card-hero",
    points: "points-card",
    coins: "coins-card", 
    badges: "badges-card"
  };

  return (
    <div 
      className={cn(
        variants[variant],
        onClick && "cursor-pointer hover-lift",
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};