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
      business_orders: {
        Row: {
          cost: number
          delivered: boolean
          id: string
          item_description: string
          notes: string | null
          order_date: string
          payment_status: string
          quantity: number
          total_amount: number | null
          vendor_name: string
        }
        Insert: {
          cost: number
          delivered?: boolean
          id?: string
          item_description: string
          notes?: string | null
          order_date?: string
          payment_status?: string
          quantity?: number
          total_amount?: number | null
          vendor_name: string
        }
        Update: {
          cost?: number
          delivered?: boolean
          id?: string
          item_description?: string
          notes?: string | null
          order_date?: string
          payment_status?: string
          quantity?: number
          total_amount?: number | null
          vendor_name?: string
        }
        Relationships: []
      }
      jerseys: {
        Row: {
          created_at: string
          expense: number
          id: string
          image_url: string | null
          name: string
          price: number
          profit: number | null
          tag: string | null
        }
        Insert: {
          created_at?: string
          expense: number
          id?: string
          image_url?: string | null
          name: string
          price: number
          profit?: number | null
          tag?: string | null
        }
        Update: {
          created_at?: string
          expense?: number
          id?: string
          image_url?: string | null
          name?: string
          price?: number
          profit?: number | null
          tag?: string | null
        }
        Relationships: []
      }
      orders: {
        Row: {
          customer_name: string
          delivered: boolean
          id: string
          jersey_id: string
          order_date: string
          ordered: boolean
          paid: boolean
          profit: number
        }
        Insert: {
          customer_name: string
          delivered?: boolean
          id?: string
          jersey_id: string
          order_date?: string
          ordered?: boolean
          paid?: boolean
          profit: number
        }
        Update: {
          customer_name?: string
          delivered?: boolean
          id?: string
          jersey_id?: string
          order_date?: string
          ordered?: boolean
          paid?: boolean
          profit?: number
        }
        Relationships: [
          {
            foreignKeyName: "orders_jersey_id_fkey"
            columns: ["jersey_id"]
            isOneToOne: false
            referencedRelation: "jerseys"
            referencedColumns: ["id"]
          },
        ]
      }
      reports: {
        Row: {
          download_url: string | null
          generated_at: string
          id: string
          total_expense: number
          total_profit: number
          total_sales: number
          type: string
        }
        Insert: {
          download_url?: string | null
          generated_at?: string
          id?: string
          total_expense?: number
          total_profit?: number
          total_sales?: number
          type: string
        }
        Update: {
          download_url?: string | null
          generated_at?: string
          id?: string
          total_expense?: number
          total_profit?: number
          total_sales?: number
          type?: string
        }
        Relationships: []
      }
      sales: {
        Row: {
          customer_name: string | null
          id: string
          jersey_id: string
          profit: number
          sale_date: string
          selling_price: number
        }
        Insert: {
          customer_name?: string | null
          id?: string
          jersey_id: string
          profit: number
          sale_date?: string
          selling_price: number
        }
        Update: {
          customer_name?: string | null
          id?: string
          jersey_id?: string
          profit?: number
          sale_date?: string
          selling_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "sales_jersey_id_fkey"
            columns: ["jersey_id"]
            isOneToOne: false
            referencedRelation: "jerseys"
            referencedColumns: ["id"]
          },
        ]
      }
      settings: {
        Row: {
          accent_color: string
          auto_backup_enabled: boolean
          backup_frequency: string
          created_at: string
          id: string
          logo_url: string | null
          report_time: string
          theme: string
          user_id: string
          whatsapp_number: string | null
        }
        Insert: {
          accent_color?: string
          auto_backup_enabled?: boolean
          backup_frequency?: string
          created_at?: string
          id?: string
          logo_url?: string | null
          report_time?: string
          theme?: string
          user_id?: string
          whatsapp_number?: string | null
        }
        Update: {
          accent_color?: string
          auto_backup_enabled?: boolean
          backup_frequency?: string
          created_at?: string
          id?: string
          logo_url?: string | null
          report_time?: string
          theme?: string
          user_id?: string
          whatsapp_number?: string | null
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
