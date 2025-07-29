export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

export interface ChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}
