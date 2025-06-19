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
  { id: 'project manager', name: 'Project Management' },
  { id: 'vfx/animator', name: 'VFX/ANIMATOR' }
];

export const people: Person[] = [

  {
    id: 1,
    name: "ALFRED P. ANKARSTRAND",
    subrole: "LEVEL",
    category: "designer",
    email: "Alfred.Ankarstrand@edu.futuregames.se"
  },
    {
    id: 2,
    name: "BRIAN BARIKHAN",
    subrole: "SYSTEM",
    subrole2: "TECH",
    subrole3: "LEAD",
    category: "designer",
    email: "Brian.Barikhan@edu.futuregames.se"
  },
  {
    id: 3,
    name: "DAVID RUNNDING",
    subrole: "LEVEL",
    subrole2: "NARRATIVE",
    category: "designer",
    email: "Davidrunnding@gmail.com"
  },
  {
    id: 4,
    name: "ISABELLE H. HELSKANEN",
    subrole: "TECH",
    subrole2: "SYSTEM UI",
    subrole3: "PRODUCT OWNER",
    category: "designer",
    email: "Isabelledatseriholjer@gmail.com"
  },
  {
    id: 5,
    name: "EMILIA MOLANDER",
    subrole: "CHARACTER",
    category: "artist",
    email: "emmol0208@gmail.com"  
  },
    {
    id: 6,
    name: "LUKE LÖFGREN",
    subrole: "PROP",
    subrole2: "2D",
    category: "artist",
    email: "Luke.lofgren@edu.futuregames.se"  
  },
  {
    id: 7,
    name: "YULIA FEDOROVA",
    subrole: "ENVIRONMENTAL",
    subrole2: "ART DIRECTOR",
    category: "artist",
    email: "shauniraven@gmail.com"  
  },
  {
    id: 8,
    name: "ILYAS KAYA",
    subrole: "SYSTEM",
    subrole2: "LEAD",
    category: "programmer",
    email: "Ilyaskaya03@hotmail.com"  
  },
  {
    id: 9,
    name: "ISAK SIGVARDSSON",
    subrole: "GAMEPLAY",
    category: "programmer",
    email: "Sigvardsson.Isak@hotmail.com"  
  },
  {
    id: 10,
    name: "MARCUS PERSSON",
    subrole: "AI",
    category: "programmer",
    email: "Marcus.persson@edu.futuregames.se"  
  },
  {
    id: 11,
    name: "YONGQIN YU",
    subrole: "GAMEPLAY",
    subrole2: "TOOLS",
    subrole3: "SYSTEM",
    category: "programmer",
    email: "yuyongqin2002@gmail.com"  
  },
  {
    id: 12,
    name: "DAVID HULT",
    subrole: "VFX",
    subrole2: "SFX",
    subrole3: "CINEMATIC",
    category: "vfx/animator",
    email: "David.hult@edu.futuregames.se"  
  },
  {
    id: 13,
    name: "JOVAN IVANOVIC",
    subrole: "ANIMATOR",
    category: "vfx/animator",
    email: "Jovan.Ivanovic@edu.futuregames.se"  
  },
  {
    id: 14,
    name: "LEVON SHAYA",
    subrole: "RELEASE MANAGER",
    category: "project manager",
    email: "Levonshaya@gmail.com"
  },
  {
    id: 15,
    name: "SHERMARKE OSMAN",
    subrole: "RELEASE MANAGER",
    category: "project manager",
    email: "Sharmarke.osman@edu.futuregames.se"
  },
  {
    id: 16,
    name: "TAMARA DALIC",
    subrole: "PROJECT MANAGER",
    subrole2: "SCRUM MASTER",
    category: "project manager",
    email: "tamara.dalic@edu.futuregames.se"
  },
  {
    id: 17,
    name: "VILLE SÖDERBERG",
    subrole: "PRODUCER",
    subrole2: "MUSIC",
    category: "project manager",
    email: "villesoderberg@gmail.com"
  },
  {
    id: 18,
    name: "JASMINE DANESE",
    subrole: "FRONT-END DEV",
    subrole2: "SCRUM MASTER",
    category: "frontend developer",
    email: "jasminedanese@icloud.com"
  },
  {
    id: 19,
    name: "PRIYADHARSHINI SEETHA RAM",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "svpriyaa2808@gmail.com"
  },
  {
    id: 20,
    name: "André Torabpour",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "Andre.torabpour@gmail.com"
  },
  {
    id: 21,
    name: "Mustafa Larhnimi",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "mustafa.alarhnimi@gmail.com"
  },
    {
    id: 22,
    name: "Maedeh Zandieh",
    subrole: "FRONT-END DEV",
    category: "frontend developer",
    email: "maedeh.zandieh@gmail.com"
  }
];

//types for navigation links 

export type PagesType = string[];


export const Pages:PagesType = ["the game","the team","media"]

