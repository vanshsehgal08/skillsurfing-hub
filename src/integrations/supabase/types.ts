export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      certifications: {
        Row: {
          credential_url: string | null
          expiry_date: string | null
          id: string
          issue_date: string | null
          issuing_organization: string
          name: string
          profile_id: string | null
        }
        Insert: {
          credential_url?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization: string
          name: string
          profile_id?: string | null
        }
        Update: {
          credential_url?: string | null
          expiry_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization?: string
          name?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "certifications_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      education: {
        Row: {
          board: Database["public"]["Enums"]["board_type"] | null
          cgpa: number | null
          degree: Database["public"]["Enums"]["degree_type"] | null
          field_of_study: string | null
          id: string
          institution_name: string
          level: Database["public"]["Enums"]["education_level"]
          percentage: number | null
          profile_id: string | null
          stream: string | null
          year_of_passing: number
        }
        Insert: {
          board?: Database["public"]["Enums"]["board_type"] | null
          cgpa?: number | null
          degree?: Database["public"]["Enums"]["degree_type"] | null
          field_of_study?: string | null
          id?: string
          institution_name: string
          level: Database["public"]["Enums"]["education_level"]
          percentage?: number | null
          profile_id?: string | null
          stream?: string | null
          year_of_passing: number
        }
        Update: {
          board?: Database["public"]["Enums"]["board_type"] | null
          cgpa?: number | null
          degree?: Database["public"]["Enums"]["degree_type"] | null
          field_of_study?: string | null
          id?: string
          institution_name?: string
          level?: Database["public"]["Enums"]["education_level"]
          percentage?: number | null
          profile_id?: string | null
          stream?: string | null
          year_of_passing?: number
        }
        Relationships: [
          {
            foreignKeyName: "education_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      job_preferences: {
        Row: {
          max_salary: number | null
          min_salary: number | null
          preferred_location: string | null
          preferred_role: string | null
          profile_id: string
          work_type: Database["public"]["Enums"]["work_preference"] | null
        }
        Insert: {
          max_salary?: number | null
          min_salary?: number | null
          preferred_location?: string | null
          preferred_role?: string | null
          profile_id: string
          work_type?: Database["public"]["Enums"]["work_preference"] | null
        }
        Update: {
          max_salary?: number | null
          min_salary?: number | null
          preferred_location?: string | null
          preferred_role?: string | null
          profile_id?: string
          work_type?: Database["public"]["Enums"]["work_preference"] | null
        }
        Relationships: [
          {
            foreignKeyName: "job_preferences_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profile_skills: {
        Row: {
          is_primary: boolean | null
          profile_id: string
          skill_id: string
        }
        Insert: {
          is_primary?: boolean | null
          profile_id: string
          skill_id: string
        }
        Update: {
          is_primary?: boolean | null
          profile_id?: string
          skill_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profile_skills_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profile_skills_skill_id_fkey"
            columns: ["skill_id"]
            isOneToOne: false
            referencedRelation: "skills"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          city: string | null
          country: string | null
          created_at: string
          full_name: string | null
          id: string
          is_profile_complete: boolean | null
          phone: string | null
          state: string | null
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          full_name?: string | null
          id: string
          is_profile_complete?: boolean | null
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          city?: string | null
          country?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          is_profile_complete?: boolean | null
          phone?: string | null
          state?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          description: string | null
          github_url: string | null
          id: string
          live_url: string | null
          name: string
          profile_id: string | null
        }
        Insert: {
          description?: string | null
          github_url?: string | null
          id?: string
          live_url?: string | null
          name: string
          profile_id?: string | null
        }
        Update: {
          description?: string | null
          github_url?: string | null
          id?: string
          live_url?: string | null
          name?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      skills: {
        Row: {
          id: string
          name: string
        }
        Insert: {
          id?: string
          name: string
        }
        Update: {
          id?: string
          name?: string
        }
        Relationships: []
      }
      work_experience: {
        Row: {
          company_name: string
          end_date: string | null
          id: string
          is_current: boolean | null
          job_title: string
          profile_id: string | null
          responsibilities: string | null
          start_date: string
        }
        Insert: {
          company_name: string
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          job_title: string
          profile_id?: string | null
          responsibilities?: string | null
          start_date: string
        }
        Update: {
          company_name?: string
          end_date?: string | null
          id?: string
          is_current?: boolean | null
          job_title?: string
          profile_id?: string | null
          responsibilities?: string | null
          start_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "work_experience_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      board_type: "CBSE" | "ICSE" | "State Board" | "Other"
      degree_type:
        | "B.Tech"
        | "B.E."
        | "B.Sc"
        | "B.Com"
        | "BBA"
        | "BCA"
        | "M.Tech"
        | "M.E."
        | "M.Sc"
        | "M.Com"
        | "MBA"
        | "MCA"
      education_level: "10th" | "12th" | "undergraduate" | "postgraduate"
      work_preference: "remote" | "hybrid" | "on-site"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
