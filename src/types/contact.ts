export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  message?: string;
  error?: string;
} 