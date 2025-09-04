import { 
  Home, 
  BookOpen, 
  HelpCircle, 
  Trophy, 
  Camera, 
  Users, 
  Gift,
  Leaf 
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavLink } from "react-router-dom";

const studentMenuItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Lessons", url: "/lessons", icon: BookOpen },
  { title: "Quizzes", url: "/quizzes", icon: HelpCircle },
  { title: "Challenges", url: "/challenges", icon: Camera },
  { title: "Leaderboard", url: "/leaderboard", icon: Trophy },
  { title: "Rewards", url: "/rewards", icon: Gift },
];

export const AppSidebar = () => {
  return (
    <Sidebar className="w-64">
      <SidebarContent>
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Leaf className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="font-semibold text-lg">EcoLearn</h2>
              <p className="text-xs text-muted-foreground">Platform</p>
            </div>
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel>Student Portal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {studentMenuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => 
                        isActive 
                          ? "flex items-center gap-3 bg-sidebar-accent text-sidebar-primary font-medium" 
                          : "flex items-center gap-3 hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};