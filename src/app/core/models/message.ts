
export interface Message {
  id?: string;
  message?: string;
  created_at?: string;
  user?: string;
}

export interface NewMessage {
  user_id: String;
  message: String;
}
