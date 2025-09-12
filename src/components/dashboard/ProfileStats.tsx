import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ProgressRing } from "./ProgressRing";
import { Star, Trophy, Coins, Calendar, School, GraduationCap, Download, Settings } from "lucide-react";

interface ProfileStatsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfileStats = ({ open, onOpenChange }: ProfileStatsProps) => {
  const badges = [
    { name: "Tree Guardian", level: "Gold", description: "Completed 10 biodiversity challenges", color: "bg-yellow-100 text-yellow-800" },
    { name: "Water Saver", level: "Silver", description: "Finished water conservation course", color: "bg-blue-100 text-blue-800" },
    { name: "Waste Warrior", level: "Bronze", description: "Uploaded 5 recycling evidence photos", color: "bg-amber-100 text-amber-800" },
    { name: "Energy Expert", level: "Bronze", description: "Aced renewable energy quiz", color: "bg-purple-100 text-purple-800" }
  ];

  const achievements = [
    { title: "First Quiz Completed", date: "2 weeks ago", points: 50 },
    { title: "School Garden Challenge", date: "1 week ago", points: 120 },
    { title: "Perfect Score - Water Quiz", date: "3 days ago", points: 75 },
    { title: "Evidence Verified", date: "Yesterday", points: 30 }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
                A
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-bold">Aarya Sharma</h2>
              <p className="text-sm text-muted-foreground">Grade 8 • Eco Academy</p>
            </div>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          {/* Stats Overview */}
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-primary/5 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <ProgressRing 
                  progress={73} 
                  size={50} 
                  strokeWidth={4}
                  color="hsl(var(--primary))"
                >
                  <Star className="h-4 w-4 text-primary" />
                </ProgressRing>
              </div>
              <p className="text-2xl font-bold text-primary">2,450</p>
              <p className="text-xs text-muted-foreground">Total Points</p>
            </div>
            
            <div className="text-center p-4 bg-accent-amber/10 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <ProgressRing 
                  progress={62} 
                  size={50} 
                  strokeWidth={4}
                  color="hsl(var(--accent-amber))"
                >
                  <Coins className="h-4 w-4 text-amber-600" />
                </ProgressRing>
              </div>
              <p className="text-2xl font-bold text-amber-600">156</p>
              <p className="text-xs text-muted-foreground">Coins</p>
            </div>
            
            <div className="text-center p-4 bg-accent-purple/10 rounded-lg">
              <div className="flex items-center justify-center mb-2">
                <ProgressRing 
                  progress={85} 
                  size={50} 
                  strokeWidth={4}
                  color="hsl(var(--accent-purple))"
                >
                  <Trophy className="h-4 w-4 text-purple-600" />
                </ProgressRing>
              </div>
              <p className="text-2xl font-bold text-purple-600">12</p>
              <p className="text-xs text-muted-foreground">Badges</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="grid grid-cols-2 gap-4 p-4 bg-muted/30 rounded-lg">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Grade 8</span>
            </div>
            <div className="flex items-center gap-2">
              <School className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Eco Academy</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Member since Sept 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Rank #2 in Grade 8</span>
            </div>
          </div>

          {/* Badges */}
          <div>
            <h3 className="font-semibold mb-3">Badges Earned</h3>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge, index) => (
                <div key={index} className="p-3 border rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-sm">{badge.name}</h4>
                    <Badge variant="secondary" className={badge.color}>
                      {badge.level}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{badge.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Achievements */}
          <div>
            <h3 className="font-semibold mb-3">Recent Achievements</h3>
            <div className="space-y-2">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                  <div>
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-sm text-primary">+{achievement.points}</p>
                    <p className="text-xs text-muted-foreground">pts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-4 border-t">
            <Button variant="outline" className="flex-1">
              <Download className="h-4 w-4 mr-2" />
              Download Certificate
            </Button>
            <Button variant="outline" className="flex-1">
              <Settings className="h-4 w-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};