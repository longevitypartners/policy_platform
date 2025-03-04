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
      policies: {
        Row: {
          category: string | null
          country: string | null
          created_at: string | null
          description: string | null
          entry_into_force: string | null
          implications: string | null
          last_amended: string | null
          policy_id: number
          policy_type: string | null
          provision_ids: number[] | null
          risk_rating: number | null
          title: string
          updated_at: string | null
          url_implications: string | null
          url_regulation: string | null
        }
        Insert: {
          category?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          entry_into_force?: string | null
          implications?: string | null
          last_amended?: string | null
          policy_id?: number
          policy_type?: string | null
          provision_ids?: number[] | null
          risk_rating?: number | null
          title: string
          updated_at?: string | null
          url_implications?: string | null
          url_regulation?: string | null
        }
        Update: {
          category?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          entry_into_force?: string | null
          implications?: string | null
          last_amended?: string | null
          policy_id?: number
          policy_type?: string | null
          provision_ids?: number[] | null
          risk_rating?: number | null
          title?: string
          updated_at?: string | null
          url_implications?: string | null
          url_regulation?: string | null
        }
        Relationships: []
      }
      provisions: {
        Row: {
          asset_class: string | null
          best_practice: string | null
          building_status: string | null
          country: string | null
          created_at: string | null
          description: string | null
          minimum_requirement: string | null
          policy: string | null
          policy_id: number
          provision_id: number
          requirement: string | null
          subject_to_obligation: string | null
          topic: string | null
          updated_at: string | null
          url_best_practice: string | null
          url_minimum_standards: string | null
          year_in_force: string | null
          year_of_enforcement: string | null
        }
        Insert: {
          asset_class?: string | null
          best_practice?: string | null
          building_status?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          minimum_requirement?: string | null
          policy?: string | null
          policy_id: number
          provision_id?: number
          requirement?: string | null
          subject_to_obligation?: string | null
          topic?: string | null
          updated_at?: string | null
          url_best_practice?: string | null
          url_minimum_standards?: string | null
          year_in_force?: string | null
          year_of_enforcement?: string | null
        }
        Update: {
          asset_class?: string | null
          best_practice?: string | null
          building_status?: string | null
          country?: string | null
          created_at?: string | null
          description?: string | null
          minimum_requirement?: string | null
          policy?: string | null
          policy_id?: number
          provision_id?: number
          requirement?: string | null
          subject_to_obligation?: string | null
          topic?: string | null
          updated_at?: string | null
          url_best_practice?: string | null
          url_minimum_standards?: string | null
          year_in_force?: string | null
          year_of_enforcement?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "provisions_policy_id_fkey"
            columns: ["policy_id"]
            isOneToOne: false
            referencedRelation: "policies"
            referencedColumns: ["policy_id"]
          },
        ]
      }
      user_notification_settings: {
        Row: {
          created_at: string
          email_notifications: boolean
          policy_digest: string
          risk_alerts: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean
          policy_digest?: string
          risk_alerts?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_notifications?: boolean
          policy_digest?: string
          risk_alerts?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      users: {
        Row: {
          companyname: string | null
          created_at: string
          id: string
          updated_at: string
          username: string
        }
        Insert: {
          companyname?: string | null
          created_at?: string
          id: string
          updated_at?: string
          username: string
        }
        Update: {
          companyname?: string | null
          created_at?: string
          id?: string
          updated_at?: string
          username?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
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
