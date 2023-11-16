import { Category } from "./category.model";
import { Evaluation } from "./evaluation.model";

export class Activity {
  id: number;
  title: string;
  description: string;
  image: string;
  tutorial: string;
  youtube_link: string;
  recommendedAge: number;
  category: Category;
  evaluations: Evaluation[];
  constructor(id: number, title: string, description: string, image: string, tutorial: string, youtube_link: string, recommendedAge: number, category: Category, evaluations: Evaluation[]) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.tutorial = tutorial;
    this.youtube_link = youtube_link;
    this.recommendedAge = recommendedAge;
    this.category = category;
    this.evaluations = evaluations;
  }

}
