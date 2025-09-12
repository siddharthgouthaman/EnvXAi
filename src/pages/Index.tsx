import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/dashboard/HeroSection";
import { NextUpCard } from "@/components/dashboard/NextUpCard";
import { QuickActions } from "@/components/dashboard/QuickActions";
import { FeedCards } from "@/components/dashboard/FeedCards";
import { Leaderboard } from "@/components/dashboard/Leaderboard";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <HeroSection />
        <NextUpCard />
        <QuickActions />
        <FeedCards />
        <Leaderboard />
      </div>
    </Layout>
  );
};

export default Index;
