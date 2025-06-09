export interface Person {
  id: number;
  name: string;
  subrole: string;
  subrole2?: string;
  subrole3?: string;
  email: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
}

export interface PersonCardProps {
  person: Person;
}

export interface CategorySelectionProps {
  onCategorySelect: (category: string) => void;
}

export interface PeopleCardsProps {
  category: string;
  onBack: () => void;
}

export const categories: Category[] = [
  { id: 'frontend developer', name: 'FRONT-END DEVELOPERS'},
  { id: 'designer', name: 'DESIGNERS' },
  { id: 'artist', name: 'ARTISTS' },
  { id: 'programmer', name: 'PROGRAMMERS' },
  { id: 'project manager', name: 'Project Management' }
];

export const people: Person[] = [

    {
        id: 1,
        name: "Carl Åberg",
        subrole: "frontend developer",
        subrole2:"potato enjoyer",
        category: "frontend developer",
        email: "caaberg99@gmail.com"
    }
];

//types for navigation links 

export type PagesType = string[];


export const Pages:PagesType = ["the game","the team","media"]

