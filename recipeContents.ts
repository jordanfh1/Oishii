export interface Recipe {
    id: string;
    title: string;
    description: string;
    ingredients: string[];
    steps: string[];
    tags?: string[];
    prepTime?: number;
    cookTime?: number;
    image?: string; // Optional image URL
  }
  