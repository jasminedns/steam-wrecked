export interface Person {
  id: number;
  name: string;
  jobrole: string;
  subrole: string;
  subrole2?: string;
  subrole3?: string;
  email?: string;
}

export const people: Person [] = [

    {
        id: 1,
        name: "Carl Åberg",
        jobrole: "Designer",
        subrole: "system",
        email: "caaberg99@gmail.com"
    }
];

//types for navigation links 

export type PagesType = string[];

export const Pages:PagesType = ["the game","the team","media"]