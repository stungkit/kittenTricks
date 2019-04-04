import { Profile } from './profile.model';

export interface Article {
  title: string;
  description: string;
  image: string;
  author: Profile;
  date: string;
  tips: number;
  comments: number;
  likes: number;
}