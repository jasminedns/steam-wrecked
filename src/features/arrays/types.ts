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
  { id: 'frontend developer', name: 'FRONT-END DEVS'},
  { id: 'designer', name: 'DESIGNERS' },
  { id: 'artist', name: 'ARTISTS' },
  { id: 'programmer', name: 'PROGRAMMERS' },
  { id: 'project manager', name: 'Project Management' }
];

export const people: Person[] = [

  {
    id: 1,
    name: "ALFRED P. ANKARSTRAND",
    subrole: "LEVEL",
    category: "designer",
    email: "#"
  },
    {
    id: 2,
    name: "BRIAN BARIKHAN",
    subrole: "SYSTEM",
    subrole2: "TECH",
    subrole3: "LEAD",
    category: "designer",
    email: "#"
  },
  {
    id: 3,
    name: "DAVID RUNNDING",
    subrole: "LEVEL",
    subrole2: "NARRATIVE",
    category: "designer",
    email: "#"
  },
  {
    id: 4,
    name: "ISABELLE H. HELSKANEN",
    subrole: "TECH",
    subrole2: "SYSTEM UI",
    subrole3: "PRODUCT OWNER",
    category: "designer",
    email: "#"
  },
  {
    id: 5,
    name: "EMILIA MOLANDER",
    subrole: "CHARACTER",
    category: "artist",
    email: "#"  
  },
    {
    id: 6,
    name: "LUKE LÖFGREN",
    subrole: "PROP",
    subrole2: "2D",
    category: "artist",
    email: "#"  
  },
  {
    id: 7,
    name: "YULIA FEDOROVA",
    subrole: "ENVIRONMENTAL",
    subrole2: "ART DIRECTOR",
    category: "artist",
    email: "#"  
  },
  {
    id: 8,
    name: "ILYAS KAYA",
    subrole: "SYSTEM",
    subrole2: "LEAD",
    category: "programmer",
    email: "#"  
  },
  {
    id: 9,
    name: "ISAK SIGVARDSSON",
    subrole: "GAMEPLAY",
    category: "programmer",
    email: "#"  
  },
  {
    id: 10,
    name: "MARCUS PERSSON",
    subrole: "AI",
    category: "programmer",
    email: "#"  
  },
  {
    id: 11,
    name: "YONGQIN YU",
    subrole: "GAMEPLAY TOOLS",
    subrole2: "SYSTEM ANIMATIONS",
    subrole3: "VFX",
    category: "programmer",
    email: "#"  
  },
  {
    id: 12,
    name: "DAVID HULT",
    subrole: "VFX",
    category: "programmer",
    email: "#"  
  },
  {
    id: 13,
    name: "JOVAN IVANOVIC",
    subrole: "ANIMATOR",
    category: "programmer",
    email: "#"  
  },
  {
    id: 14,
    name: "LEVON SHAYA",
    subrole: "RELEASE MANAGER",
    category: "project manager",
    email: "#"
  },
  {
    id: 15,
    name: "SHERMARKE OSMAN",
    subrole: "RELEASE MANAGER",
    category: "project manager",
    email: "#"
  },
  {
    id: 16,
    name: "TAMARA DALIC",
    subrole: "PROJECT MANAGER",
    subrole2: "SCRUM MASTER",
    category: "project manager",
    email: "#"
  },
  {
    id: 17,
    name: "VILLE SÖDERBERG",
    subrole: "PRODUCER",
    category: "project manager",
    email: "#"
  },
  {
    id: 18,
    name: "JASMINE DANESE",
    subrole: "FRONT-END DEV",
    subrole2: "SCRUM MASTER",
    category: "frontend developer",
    email: "#"
  },
  {
    id: 19,
    name: "PRIYADHARSHINI SEETHA RAM",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "#"
  },
  {
    id: 20,
    name: "André Torabpour",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "#"
  },
  {
    id: 21,
    name: "Mustafa Larhnimi",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "#"
  },
    {
    id: 22,
    name: "Maedeh Zandieh",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "#"
  },
  {
    id: 23,
    name: "Meaza Efrem",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "#"
  },
];



//types for navigation links 

export type PagesType = string[];

export const Pages:PagesType = ["the game","the team","media"]