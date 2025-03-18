export default interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  location: string;
  avatarUrl?: string;
  helpful?: number;
  images?: string[];
}
