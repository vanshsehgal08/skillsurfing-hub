
import { Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Star,
  Bell,
  MessageSquare,
  FileText 
} from "lucide-react";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

const Dashboard = () => {
  const { user, session } = useAuth();
  const [isProfileComplete, setIsProfileComplete] = useState<boolean | null>(null);

  useEffect(() => {
    const checkProfile = async () => {
      if (user) {
        const { data, error } = await supabase
          .from("profiles")
          .select("is_profile_complete")
          .eq("id", user.id)
          .single();

        if (!error && data) {
          setIsProfileComplete(data.is_profile_complete);
        }
      }
    };

    checkProfile();
  }, [user]);

  if (!session) {
    return <Navigate to="/" replace />;
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (isProfileComplete === false) {
    return <Navigate to="/profile" replace />;
  }

  if (isProfileComplete === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="bg-primary/5 rounded-lg p-8 backdrop-blur-sm">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Welcome back, {user.user_metadata.full_name}!
            </h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Job Matches</h2>
                  <p className="text-muted-foreground">View jobs that match your skills and preferences</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Skills</h2>
                  <p className="text-muted-foreground">Update your skills and certifications</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Saved Jobs</h2>
                  <p className="text-muted-foreground">Access your bookmarked positions</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Notifications</h2>
                  <p className="text-muted-foreground">Stay updated with job alerts</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Messages</h2>
                  <p className="text-muted-foreground">Check your recruiter messages</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">Applications</h2>
                  <p className="text-muted-foreground">Track your job applications</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
