import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search, Trophy, Medal, Award } from "lucide-react";

export const Leaderboard = () => {
  const globalLeaderboard = [
    { rank: 1, name: "Emma Chen", school: "Green Valley School", points: 3200, grade: "Grade 8", badges: 15 },
    { rank: 2, name: "Aarya (You)", school: "Eco Academy", points: 2450, grade: "Grade 8", badges: 12 },
    { rank: 3, name: "James Wilson", school: "Nature High", points: 2380, grade: "Grade 8", badges: 11 },
    { rank: 4, name: "Sofia Rodriguez", school: "Earth School", points: 2290, grade: "Grade 8", badges: 10 },
    { rank: 5, name: "Alex Thompson", school: "Sustainable Academy", points: 2156, grade: "Grade 8", badges: 9 },
    { rank: 6, name: "Maya Patel", school: "Climate Central", points: 2098, grade: "Grade 8", badges: 8 },
    { rank: 7, name: "Ryan Foster", school: "Eco Elementary", points: 1987, grade: "Grade 8", badges: 7 },
    { rank: 8, name: "Zoe Chang", school: "Green Future", points: 1876, grade: "Grade 8", badges: 8 },
    { rank: 9, name: "Luis Garcia", school: "Planet Primary", points: 1745, grade: "Grade 8", badges: 6 },
    { rank: 10, name: "Aisha Khan", school: "Environmental Excellence", points: 1698, grade: "Grade 8", badges: 7 }
  ];

  const schoolLeaderboard = [
    { rank: 1, name: "Aarya (You)", school: "Eco Academy", points: 2450, grade: "Grade 8", badges: 12 },
    { rank: 2, name: "Priya Sharma", school: "Eco Academy", points: 2200, grade: "Grade 9", badges: 10 },
    { rank: 3, name: "Dev Kumar", school: "Eco Academy", points: 2100, grade: "Grade 7", badges: 9 },
    { rank: 4, name: "Anita Singh", school: "Eco Academy", points: 1950, grade: "Grade 8", badges: 8 },
    { rank: 5, name: "Raj Gupta", school: "Eco Academy", points: 1800, grade: "Grade 6", badges: 7 }
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-4 w-4 text-yellow-600" />;
    if (rank === 2) return <Medal className="h-4 w-4 text-gray-500" />;
    if (rank === 3) return <Award className="h-4 w-4 text-amber-600" />;
    return null;
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "bg-yellow-100 text-yellow-800";
    if (rank === 2) return "bg-gray-100 text-gray-800";
    if (rank === 3) return "bg-amber-100 text-amber-800";
    return "bg-muted text-muted-foreground";
  };

  const LeaderboardTable = ({ data }: { data: typeof globalLeaderboard }) => (
    <div className="space-y-3">
      {data.map((student) => (
        <div 
          key={student.rank} 
          className={`flex items-center gap-4 p-3 rounded-lg border ${
            student.name.includes('You') ? 'bg-primary/5 border-primary/20' : 'bg-card'
          }`}
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getRankBadge(student.rank)}`}>
            {getRankIcon(student.rank) || student.rank}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`font-medium truncate ${student.name.includes('You') ? 'text-primary' : ''}`}>
              {student.name}
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="truncate">{student.school}</span>
              <span>•</span>
              <span>{student.grade}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm">
            <div className="text-right">
              <p className="font-semibold">{student.points.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
            <div className="text-right">
              <p className="font-semibold">{student.badges}</p>
              <p className="text-xs text-muted-foreground">badges</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Leaderboards</h1>
        <p className="text-muted-foreground">
          See how you rank among your peers and school
        </p>
      </div>

      <GameCard>
        <Tabs defaultValue="global" className="w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
            <TabsList className="grid w-full lg:w-auto grid-cols-2">
              <TabsTrigger value="global">Global Grade 8</TabsTrigger>
              <TabsTrigger value="school">My School</TabsTrigger>
            </TabsList>
            
            <div className="relative max-w-sm">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search students..."
                className="pl-10"
              />
            </div>
          </div>

          <TabsContent value="global" className="mt-0">
            <LeaderboardTable data={globalLeaderboard} />
          </TabsContent>

          <TabsContent value="school" className="mt-0">
            <LeaderboardTable data={schoolLeaderboard} />
          </TabsContent>
        </Tabs>
      </GameCard>
    </div>
  );
};