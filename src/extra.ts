// Functions

export const randomizeActivity = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let result = "";

  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * numbers.length);

    result += numbers[index];
  }

  return +result;
};

export const trimTitle = (title: string) => {
  const updatedTitle = title.trim().slice(0, 40);

  return title === updatedTitle ? updatedTitle : updatedTitle + "...";
};

// Types
export interface ProfileInfo {
  name: string;
  image: string;
  synths: string;
  followers: string;
  following: string;
  instagram: string;
  description: string;
  isEditable: boolean;
}

export interface Post {
  isShared: boolean;
  shareText: string;
  author: string;
  activity: {
    view: number;
    like: number;
  };
  title: string;
  text: string;
}

// Context
export const activeProfileInfo: ProfileInfo = {
  name: "Yehor Feshchenko",
  image: "images/profile.webp",
  synths: "10",
  followers: "34",
  following: "56",
  instagram: "@web-dev",
  description:
    "Hey! I’m a web dev who wants to do a bunch of stuff and..., oops, wrong platform. Take a look at other pages, too!",
  isEditable: true,
};

export const usersProfileInfo: ProfileInfo[] = [
  {
    name: "Clara Devine",
    image: "images/explore-avatars/scientist.webp",
    synths: "30",
    followers: "7.3k",
    following: "1.5k",
    instagram: "@claradevinescience",
    description:
      "Explorer of the microscopic world and advocate for environmental science. When she's not debating the merits of renewable energy, you can find her conducting experiments in her home lab—often with her loyal lab assistant, a curious golden retriever.",
    isEditable: false,
  },
  {
    name: "Harold Whitmore",
    image: "images/explore-avatars/reader.webp",
    synths: "28",
    followers: "5.6k",
    following: "980",
    instagram: "@haroldwhitmore",
    description:
      "Keeper of dusty old books and ancient gossip. When he's not debating whether the Tudors or the Stuarts had better fashion sense, you can find him giving dramatic reenactments of historical events—usually to his cat.",
    isEditable: false,
  },
  {
    name: "Georgina Ashford",
    image: "images/explore-avatars/designer.webp",
    synths: "42",
    followers: "15k",
    following: "1.5k",
    instagram: "@georgina.ashford",
    description:
      "Designing clothes for the brave, the bold, and occasionally, the absurd. Georgina’s latest collection includes dresses made from recycled umbrellas and hats that double as bird feeders. She promises to make your closet 'historically fabulous.'",
    isEditable: false,
  },
  {
    name: "Nigel Fairbanks",
    image: "images/explore-avatars/chef.webp",
    synths: "55",
    followers: "20k",
    following: "2k",
    instagram: "@chef_nigel",
    description:
      "Serving gourmet cuisine with a side of dad jokes. Specializes in dishes that make your taste buds sing and your waistline sigh. Recently attempted to create a 'bacon-infused ice cream'—it didn’t go exactly as planned, but the dog loved it.",
    isEditable: false,
  },
  {
    name: "Penelope Lancaster",
    image: "images/explore-avatars/writer.webp",
    synths: "31",
    followers: "11k",
    following: "1.2k",
    instagram: "@penelopelancasterwrites",
    description:
      "Writes novels and gets emotionally attached to her own fictional characters. Often found in coffee shops staring dramatically out the window for 'inspiration.' Once spent an entire afternoon debating whether her protagonist should wear a hat or a bonnet.",
    isEditable: false,
  },
  {
    name: "Alastair Worthington",
    image: "images/explore-avatars/architect.webp",
    synths: "46",
    followers: "8.4k",
    following: "1.1k",
    instagram: "@alastair.architect",
    description:
      "Designs buildings that would impress even the snobbiest of pigeons. Has a knack for convincing clients that 'minimalism with a hint of chaos' is a legitimate style. Secretly hopes to design a treehouse worthy of a five-star hotel review.",
    isEditable: false,
  },
];

export const initialCard: Post = {
  isShared: false,
  shareText: "#newInTown",
  author: "You",
  activity: {
    view: 1,
    like: 0,
  },
  title: "",
  text: "",
};

export const publicCards: Post[] = [
  {
    isShared: false,
    shareText: "#discussionabout...",
    author: "Iryna Hryhorenko",
    activity: {
      view: 88,
      like: 24,
    },
    title: "Why did you apply to Swivl?",
    text: "Happiness is when you combine the things that you love as a part of your job. I love development, and when I see a company who does good, I want to contribute. Whether it's to work on new services or add to the old ones, I want to be a part of it",
  },
  {
    isShared: false,
    shareText: "#discussionabout...",
    author: "Iryna Hryhorenko",
    activity: {
      view: 100,
      like: 55,
    },
    title: "How do you see yourself in the future?",
    text: "I would love to continue working on web applications, and delve more in-depth into back-end to later qualify as a full-stack developer. Learning is a committment - long but rewarding. I would love to grow alongside your company",
  },
];

export const privateCards: Post[] = [
  {
    isShared: false,
    shareText: "#let'srolltosuccess",
    author: "Author",
    activity: {
      view: 1,
      like: 0,
    },
    title: "I decided to get a bit creative with this one",
    text: "",
  },
  {
    isShared: false,
    shareText: "#pageguide",
    author: "Author",
    activity: {
      view: 1,
      like: 0,
    },
    title: "Check out feed, explore, and discussions",
    text: "",
  },
  {
    isShared: true,
    shareText: "#let'srolltosuccess",
    author: "Author",
    activity: {
      view: 1,
      like: 0,
    },
    title: "Thanks for reviewing this task.",
    text: "",
  },
  {
    isShared: true,
    shareText: "",
    author: "Author",
    activity: {
      view: 1,
      like: 0,
    },
    title: "Have a lovely day!",
    text: "",
  },
];

export const discussionsCardsInfo: Post[] = [
  {
    isShared: false,
    shareText: "",
    author: "Gregory Watkins",
    activity: {
      view: 88,
      like: 24,
    },
    title: "New air routes that promise cheap flights in",
    text: "",
  },
  {
    isShared: true,
    shareText: "#discussionabout...",
    author: "Gregory Watkins",
    activity: {
      view: 88,
      like: 24,
    },
    title: "New air routes that promise cheap flights in",
    text: "",
  },
  {
    isShared: false,
    shareText: "#discussionabout...",
    author: "Spa Center",
    activity: {
      view: 1500,
      like: 500,
    },
    title: "Want a relaxing day? Here's our spa treatment",
    text: "",
  },
  {
    isShared: true,
    shareText: "",
    author: "ProfOrientation",
    activity: {
      view: 1234,
      like: 100,
    },
    title: "Can't decide what you like? Gotcha",
    text: "",
  },
];

export const navbarIcons = ["notifications", "gifts", "medium"];
export const navbarTabs = ["feed", "explore", "discussions"];

export const accountActivityOptions: (keyof ProfileInfo)[] = [
  "synths",
  "followers",
  "following",
];
export const accountMenuOptions = [
  {
    icon: "report",
    text: "Report User",
  },
  {
    icon: "block",
    text: "Block User",
  },
];
