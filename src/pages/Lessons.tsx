import { Layout } from "@/components/layout/Layout";
import { GameCard } from "@/components/dashboard/GameCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Clock, Search, Filter, BookOpen, Play } from "lucide-react";

const Lessons = () => {
  const topics = ["All", "Waste", "Water", "Energy", "Biodiversity", "Climate"];
  
  const lessons = [
    {
      id: 1,
      title: "Introduction to Recycling",
      description: "Learn the basics of recycling and how to sort materials properly",
      duration: "8 minutes",
      topic: "Waste",
      grade: "Grade 6-8",
      completed: true,
      thumbnail: "♻️"
    },
    {
      id: 2, 
      title: "Solar Energy Systems",
      description: "Discover how solar panels work and their environmental benefits",
      duration: "12 minutes",
      topic: "Energy", 
      grade: "Grade 8-10",
      completed: false,
      thumbnail: "☀️"
    },
    {
      id: 3,
      title: "Ocean Conservation",
      description: "Explore marine ecosystems and learn about ocean protection",
      duration: "15 minutes",
      topic: "Water",
      grade: "Grade 7-9", 
      completed: false,
      thumbnail: "🌊"
    },
    {
      id: 4,
      title: "Biodiversity in Forests",
      description: "Understanding forest ecosystems and wildlife protection",
      duration: "10 minutes", 
      topic: "Biodiversity",
      grade: "Grade 6-8",
      completed: false,
      thumbnail: "🌲"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Lessons</h1>
          <p className="text-muted-foreground">
            Interactive lessons tailored to your grade level
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search lessons..." className="pl-10" />
          </div>
          <Button variant="outline" className="w-fit">
            <Filter className="h-4 w-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Topic Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {topics.map((topic) => (
            <Badge 
              key={topic}
              variant={topic === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-white transition-colors"
            >
              {topic}
            </Badge>
          ))}
        </div>

        {/* Lessons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson) => (
            <GameCard key={lesson.id} className="hover-lift">
              <div className="relative">
                {lesson.completed && (
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                      Completed
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{lesson.thumbnail}</div>
                  <h3 className="font-semibold text-lg mb-2">{lesson.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {lesson.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{lesson.duration}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {lesson.topic}
                  </Badge>
                  <span>{lesson.grade}</span>
                </div>

                <Button 
                  className="w-full" 
                  variant={lesson.completed ? "outline" : "default"}
                >
                  {lesson.completed ? (
                    <>
                      <BookOpen className="h-4 w-4 mr-2" />
                      Review
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Start Lesson
                    </>
                  )}
                </Button>
              </div>
            </GameCard>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Lessons;