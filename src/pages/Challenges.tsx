import { Layout } from "@/components/layout/Layout";
import { GameCard } from "@/components/dashboard/GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Camera, Users, Coins, Calendar } from "lucide-react";

const Challenges = () => {
  const challenges = [
    {
      id: 1,
      title: "School Garden Challenge",
      description: "Start and maintain a garden at your school or home. Document your progress with photos!",
      location: "Local Schools",
      participants: 1248,
      reward: 250,
      badgeReward: "Tree Guardian",
      deadline: "2 weeks left",
      status: "active",
      category: "Biodiversity"
    },
    {
      id: 2,
      title: "Plastic-Free Week",
      description: "Go plastic-free for one week and share alternatives you discover",
      location: "Global",
      participants: 3456,
      reward: 180,
      badgeReward: "Waste Warrior",
      deadline: "5 days left", 
      status: "active",
      category: "Waste"
    },
    {
      id: 3,
      title: "Water Conservation Challenge",
      description: "Track and reduce your water usage at home for one month",
      location: "Global",
      participants: 892,
      reward: 300,
      badgeReward: "Water Saver",
      deadline: "Starting soon",
      status: "upcoming",
      category: "Water"
    }
  ];

  const evidenceUploads = [
    {
      id: 1,
      challenge: "School Garden Challenge", 
      image: "🌱",
      description: "Day 5: Seedlings are growing!",
      status: "verified",
      points: 50,
      submittedAt: "2 hours ago"
    },
    {
      id: 2,
      challenge: "Plastic-Free Week",
      image: "🥤", 
      description: "Using my reusable water bottle",
      status: "pending",
      points: 25,
      submittedAt: "1 day ago"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "active":
        return <Badge className="bg-emerald-100 text-emerald-700">Active</Badge>;
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-700">Starting Soon</Badge>;
      case "completed":
        return <Badge className="bg-gray-100 text-gray-700">Completed</Badge>;
      default:
        return null;
    }
  };

  const getEvidenceStatus = (status: string) => {
    switch(status) {
      case "verified":
        return <Badge className="status-verified">✓ Verified</Badge>;
      case "pending":
        return <Badge className="status-pending">⏳ Pending</Badge>;
      case "rejected":
        return <Badge className="status-rejected">✗ Rejected</Badge>;
      default:
        return null;
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Challenges</h1>
          <p className="text-muted-foreground">
            Take on real-world eco-challenges and earn rewards for your actions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Challenges */}
          <div>
            <h2 className="text-xl font-bold mb-4">Available Challenges</h2>
            <div className="space-y-4">
              {challenges.map((challenge) => (
                <GameCard key={challenge.id} className="hover-lift">
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="outline" className="text-xs">
                      {challenge.category}
                    </Badge>
                    {getStatusBadge(challenge.status)}
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{challenge.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {challenge.description}
                  </p>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{challenge.location}</span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span>{challenge.participants.toLocaleString()} joined</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1 text-amber-600">
                        <Coins className="h-4 w-4" />
                        <span className="font-semibold">{challenge.reward} coins</span>
                      </div>
                      <div className="flex items-center gap-1 text-purple-600">
                        <span className="font-semibold">"{challenge.badgeReward}" Badge</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{challenge.deadline}</span>
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    disabled={challenge.status === "upcoming"}
                  >
                    {challenge.status === "upcoming" ? "Coming Soon" : "Join Challenge"}
                  </Button>
                </GameCard>
              ))}
            </div>
          </div>

          {/* Evidence Uploads */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Your Evidence</h2>
              <Button className="bg-primary">
                <Camera className="h-4 w-4 mr-2" />
                Upload Evidence
              </Button>
            </div>
            
            <div className="space-y-4">
              {evidenceUploads.map((evidence) => (
                <GameCard key={evidence.id}>
                  <div className="flex gap-4">
                    <div className="text-3xl">{evidence.image}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-sm">{evidence.challenge}</h4>
                        {getEvidenceStatus(evidence.status)}
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        {evidence.description}
                      </p>
                      <div className="flex justify-between items-center text-xs text-muted-foreground">
                        <span>{evidence.submittedAt}</span>
                        {evidence.status === "verified" && (
                          <span className="text-emerald-600 font-semibold">
                            +{evidence.points} points earned
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </GameCard>
              ))}
              
              {/* Upload Tips */}
              <GameCard className="bg-blue-50 border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">📸 Upload Tips</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Take clear, well-lit photos</li>
                  <li>• Enable GPS for location verification</li>
                  <li>• Include yourself in eco-actions</li>
                  <li>• Review takes 24 hours typically</li>
                </ul>
              </GameCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Challenges;