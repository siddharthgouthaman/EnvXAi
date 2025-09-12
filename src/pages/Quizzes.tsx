import { Layout } from "@/components/layout/Layout";
import { GameCard } from "@/components/dashboard/GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Search, Filter, BookOpen, Play, Trophy, Users, Target } from "lucide-react";

const Quizzes = () => {
  const categories = ["All", "Assigned", "Public", "Completed"];
  
  const quizzes = [
    {
      id: 1,
      title: "Renewable Energy Basics",
      description: "Test your knowledge about solar, wind, and hydroelectric power",
      duration: "15 minutes",
      questions: 20,
      difficulty: "Easy",
      grade: "Grade 8",
      topic: "Energy",
      completed: false,
      assigned: true,
      image: "⚡",
      participants: 234,
      averageScore: 78
    },
    {
      id: 2,
      title: "Ocean Pollution Quiz",
      description: "Learn about marine ecosystems and pollution prevention",
      duration: "12 minutes", 
      questions: 15,
      difficulty: "Medium",
      grade: "Grade 8",
      topic: "Water",
      completed: true,
      assigned: true,
      image: "🌊",
      participants: 189,
      averageScore: 82,
      yourScore: 85
    },
    {
      id: 3,
      title: "Biodiversity Challenge",
      description: "Explore different ecosystems and species conservation",
      duration: "20 minutes",
      questions: 25, 
      difficulty: "Hard",
      grade: "Grade 8-9",
      topic: "Biodiversity",
      completed: false,
      assigned: false,
      image: "🦋",
      participants: 156,
      averageScore: 71
    },
    {
      id: 4,
      title: "Waste Management Mastery",
      description: "Advanced concepts in recycling and waste reduction",
      duration: "18 minutes",
      questions: 22,
      difficulty: "Medium", 
      grade: "Grade 8",
      topic: "Waste",
      completed: false,
      assigned: false,
      image: "♻️",
      participants: 298,
      averageScore: 76
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-emerald-100 text-emerald-700";
      case "Medium": return "bg-amber-100 text-amber-700";
      case "Hard": return "bg-rose-100 text-rose-700";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Quizzes</h1>
          <p className="text-muted-foreground">
            Test your knowledge and compete with peers
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search quizzes..." className="pl-10" />
          </div>
          <Button variant="outline" className="w-fit">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Category Tabs */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Quizzes</TabsTrigger>
            <TabsTrigger value="assigned">Assigned</TabsTrigger>
            <TabsTrigger value="public">Public</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.map((quiz) => (
                <GameCard key={quiz.id} className="hover-lift">
                  <div className="relative">
                    {quiz.completed && (
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                          Completed
                        </Badge>
                      </div>
                    )}
                    
                    {quiz.assigned && !quiz.completed && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="default" className="text-xs">
                          Assigned
                        </Badge>
                      </div>
                    )}

                    <div className="text-center mb-4">
                      <div className="text-5xl mb-4">{quiz.image}</div>
                      <h3 className="font-semibold text-lg mb-2">{quiz.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {quiz.description}
                      </p>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{quiz.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Target className="h-3 w-3" />
                          <span>{quiz.questions} questions</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getDifficultyColor(quiz.difficulty)}`}
                        >
                          {quiz.difficulty}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {quiz.topic}
                        </Badge>
                      </div>

                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-3 w-3" />
                          <span>{quiz.participants} took this</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Trophy className="h-3 w-3" />
                          <span>Avg: {quiz.averageScore}%</span>
                        </div>
                      </div>

                      {quiz.completed && quiz.yourScore && (
                        <div className="text-center text-sm">
                          <span className="text-muted-foreground">Your score: </span>
                          <span className="font-semibold text-primary">{quiz.yourScore}%</span>
                        </div>
                      )}
                    </div>

                    <Button 
                      className="w-full" 
                      variant={quiz.completed ? "outline" : "default"}
                    >
                      {quiz.completed ? (
                        <>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Review Quiz
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Take Quiz
                        </>
                      )}
                    </Button>
                  </div>
                </GameCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="assigned" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.filter(quiz => quiz.assigned).map((quiz) => (
                <GameCard key={quiz.id} className="hover-lift">
                  {/* Same card content as above */}
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">{quiz.image}</div>
                    <h3 className="font-semibold text-lg mb-2">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {quiz.description}
                    </p>
                  </div>
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Take Quiz
                  </Button>
                </GameCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="public" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.filter(quiz => !quiz.assigned).map((quiz) => (
                <GameCard key={quiz.id} className="hover-lift">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">{quiz.image}</div>
                    <h3 className="font-semibold text-lg mb-2">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {quiz.description}
                    </p>
                  </div>
                  <Button className="w-full">
                    <Play className="h-4 w-4 mr-2" />
                    Take Quiz
                  </Button>
                </GameCard>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="completed" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quizzes.filter(quiz => quiz.completed).map((quiz) => (
                <GameCard key={quiz.id} className="hover-lift">
                  <div className="text-center mb-4">
                    <div className="text-5xl mb-4">{quiz.image}</div>
                    <h3 className="font-semibold text-lg mb-2">{quiz.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {quiz.description}
                    </p>
                  </div>
                  {quiz.yourScore && (
                    <div className="text-center text-sm mb-4">
                      <span className="text-muted-foreground">Your score: </span>
                      <span className="font-semibold text-primary">{quiz.yourScore}%</span>
                    </div>
                  )}
                  <Button className="w-full" variant="outline">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Review Quiz
                  </Button>
                </GameCard>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Quizzes;