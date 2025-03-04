export default interface YelpReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  content: string;
  location: string;
  avatarUrl?: string;
  helpful: number;
  images?: string[];
}
