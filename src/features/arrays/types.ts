export interface Person {
  id: number;
  name: string;
  job: string;
  email?: string;
}

export const people: Person [] = [

    {
        id: 1,
        name: "Carl Åberg",
        job: "insane gamer",
        email: "caaberg99@gmail.com"
    }
];