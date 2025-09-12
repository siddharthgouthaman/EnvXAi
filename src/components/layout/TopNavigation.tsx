import { Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProfileStats } from "@/components/dashboard/ProfileStats";
import { useState } from "react";

export const TopNavigation = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <>
      <ProfileStats open={isProfileOpen} onOpenChange={setIsProfileOpen} />
    <header className="h-16 border-b bg-white flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input 
            placeholder="Search lessons, quizzes, challenges..."
            className="pl-10 w-80"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-medium px-3 py-1">
            Student
          </Badge>
          
          <Badge variant="outline" className="font-medium text-xs px-2 py-1 bg-emerald-50 text-emerald-700 border-emerald-200">
            Grade 8
          </Badge>
        </div>
        
        <Button variant="ghost" size="sm" className="relative hover:bg-muted/50 rounded-full">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full border-2 border-white"></span>
        </Button>
        
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setIsProfileOpen(true)}
          className="hover:bg-muted/50 rounded-full p-2"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-emerald-600 rounded-full flex items-center justify-center">
            <User className="h-4 w-4 text-white" />
          </div>
        </Button>
      </div>
    </header>
    </>
  );
};