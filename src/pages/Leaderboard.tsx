import { Layout } from "@/components/layout/Layout";
import { Leaderboard as LeaderboardComponent } from "@/components/dashboard/Leaderboard";

const Leaderboard = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <LeaderboardComponent />
      </div>
    </Layout>
  );
};

export default Leaderboard;