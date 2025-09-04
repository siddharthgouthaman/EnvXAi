import { GameCard } from "./GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, MapPin, CheckCircle } from "lucide-react";

export const FeedCards = () => {
  const feedItems = [
    {
      type: "lesson",
      title: "Renewable Energy Sources",
      description: "Learn about solar, wind, and hydroelectric power systems",
      duration: "8 minutes",
      topic: "Energy",
      difficulty: "Grade 8",
      status: "new"
    },
    {
      type: "quiz", 
      title: "Water Conservation Quiz",
      description: "Test your knowledge about saving water at home",
      duration: "5 minutes",
      topic: "Water", 
      difficulty: "Grade 8",
      status: "assigned"
    },
    {
      type: "challenge",
      title: "School Garden Challenge",
      description: "Plant and maintain a garden at your school",
      duration: "1 week",
      topic: "Biodiversity",
      difficulty: "All Grades",
      status: "active",
      location: "Local Schools"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "new":
        return <Badge className="bg-emerald-100 text-emerald-700">New</Badge>;
      case "assigned": 
        return <Badge className="bg-blue-100 text-blue-700">Assigned</Badge>;
      case "active":
        return <Badge className="bg-purple-100 text-purple-700">Active</Badge>;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch(type) {
      case "lesson":
        return "📚";
      case "quiz":
        return "🧠";
      case "challenge":
        return "🌱";
      default:
        return "📝";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <h2 className="text-xl font-bold mb-4">Your Learning Feed</h2>
        <div className="space-y-4">
          {feedItems.map((item, index) => (
            <GameCard key={index}>
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{getTypeIcon(item.type)}</span>
                  <span className="text-sm font-medium text-muted-foreground capitalize">
                    {item.type}
                  </span>
                </div>
                {getStatusBadge(item.status)}
              </div>
              
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{item.description}</p>
              
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{item.duration}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {item.topic}
                </Badge>
                <span>{item.difficulty}</span>
                {item.location && (
                  <div className="flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
              
              <Button size="sm" className="w-full">
                {item.type === "lesson" && "Start Lesson"}
                {item.type === "quiz" && "Take Quiz"}
                {item.type === "challenge" && "Join Challenge"}
              </Button>
            </GameCard>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Leaderboard Preview</h2>
        <GameCard>
          <div className="text-center mb-4">
            <h3 className="font-semibold mb-2">Global Grade 8</h3>
            <p className="text-sm text-muted-foreground">Top 5 Students</p>
          </div>
          
          <div className="space-y-3">
            {[
              { rank: 1, name: "Emma Chen", school: "Green Valley School", points: 3200 },
              { rank: 2, name: "Aarya (You)", school: "Eco Academy", points: 2450 },
              { rank: 3, name: "James Wilson", school: "Nature High", points: 2380 },
              { rank: 4, name: "Sofia Rodriguez", school: "Earth School", points: 2290 },
              { rank: 5, name: "Alex Thompson", school: "Sustainable Academy", points: 2156 }
            ].map((student) => (
              <div key={student.rank} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  student.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                  student.rank === 2 ? 'bg-emerald-100 text-emerald-800' : 
                  'bg-gray-100 text-gray-600'
                }`}>
                  {student.rank}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${student.name.includes('You') ? 'text-primary' : ''}`}>
                    {student.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{student.school}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-sm">{student.points.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">pts</p>
                </div>
              </div>
            ))}
          </div>
          
          <Button variant="outline" className="w-full mt-4">
            View Full Leaderboard
          </Button>
        </GameCard>
      </div>
    </div>
  );
};