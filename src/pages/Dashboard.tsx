
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Dashboard = () => {
  // TODO: Add Supabase auth check
  const isAuthenticated = false;

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome to Your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards - we'll implement these properly in the next iteration */}
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
            <p className="text-muted-foreground">Complete your profile to get better job matches.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Job Recommendations</h2>
            <p className="text-muted-foreground">Your personalized job matches will appear here.</p>
          </div>
          
          <div className="p-6 bg-card rounded-lg border">
            <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
            <p className="text-muted-foreground">Track your job applications and saved positions.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
