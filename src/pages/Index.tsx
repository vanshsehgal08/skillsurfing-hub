
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:pt-24 sm:pb-16">
            <div className="text-center space-y-8 animate-fade-up">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Find Your Perfect Job Match with
                <span className="text-primary block mt-2">AI-Powered Precision</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
                SkillSync uses advanced AI to match your skills and preferences with the perfect job opportunities. Let's find your next career move together.
              </p>

              <div className="flex items-center justify-center gap-4 pt-4">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Smart Matching</h3>
                <p className="text-muted-foreground">
                  Our AI analyzes your skills and experience to find the most relevant job opportunities.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Easy Profile Setup</h3>
                <p className="text-muted-foreground">
                  Create your professional profile in minutes with our intuitive interface.
                </p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-2">Real-time Updates</h3>
                <p className="text-muted-foreground">
                  Get instant notifications when new matching opportunities arise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
