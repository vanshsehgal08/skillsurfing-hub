
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { supabase } from "@/lib/supabase";
import { useToast } from "@/components/ui/use-toast";

export const ProfileForm = ({ isEditing = false }: { isEditing?: boolean }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    full_name: user?.user_metadata?.full_name || "",
    phone: "",
    city: "",
    state: "",
    country: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase
        .from("profiles")
        .upsert({
          id: user?.id,
          ...formData,
          is_profile_complete: true,
          updated_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: isEditing ? "Profile updated" : "Profile created",
        description: isEditing 
          ? "Your profile has been updated successfully." 
          : "Your profile has been created successfully.",
      });

      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error saving your profile. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="p-6 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium mb-2">
            Full Name *
          </label>
          <Input
            id="full_name"
            value={formData.full_name}
            onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            Phone Number *
          </label>
          <Input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium mb-2">
            City *
          </label>
          <Input
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium mb-2">
            State *
          </label>
          <Input
            id="state"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
            required
          />
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium mb-2">
            Country *
          </label>
          <Input
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            required
          />
        </div>

        <Button type="submit" className="w-full">
          {isEditing ? "Update Profile" : "Create Profile"}
        </Button>
      </form>
    </Card>
  );
};
