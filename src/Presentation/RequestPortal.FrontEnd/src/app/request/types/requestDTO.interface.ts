export interface RequestDTO {
  id: string;
  theme: string;
  description: string;
  createdAt: Date;
}

export interface CreateRequestDTO {
  theme: string;
  description: string;
}
