
import { ProfileForm } from "@/components/ProfileForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/80">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="bg-primary/5 rounded-lg p-8 backdrop-blur-sm">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Profile Information
            </h1>
            <p className="text-muted-foreground mt-2">
              Please fill in your profile information to continue
            </p>
          </div>
          <ProfileForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
