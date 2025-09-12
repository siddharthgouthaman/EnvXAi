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
      
      <div className="flex items-center gap-4">
        <Badge variant="secondary" className="font-medium">
          Student
        </Badge>
        
        <Badge variant="outline" className="font-medium text-xs">
          Grade 8
        </Badge>
        
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3 w-3 bg-primary rounded-full"></span>
        </Button>
        
        <Button variant="ghost" size="sm" onClick={() => setIsProfileOpen(true)}>
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
    </>
  );
};