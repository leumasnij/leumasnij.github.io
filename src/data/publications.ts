export type PublicationLink = {
  label: string;
  href: string;
};

export type Author = {
  name: string;
  href?: string;
  isSelf?: boolean;
  equalContribution?: boolean;
};

export type Publication = {
  title: string;
  venue: string;
  year: number;
  image: string;
  imageAlt: string;
  authors: Author[];
  links: PublicationLink[];
  award?: string;
  tags: string[];
};

export const publications: Publication[] = [
  {
    title:
      "Learning to Double Guess: An Active Perception Approach for Estimating the Center of Mass of Arbitrary Objects",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2025,
    image: "/images/active_t.png",
    imageAlt: "Robot actively estimating the center of mass of an object.",
    authors: [
      { name: "Shengmiao Jin", isSelf: true },
      {
        name: "Yuchen Mo",
        href: "https://scholar.google.com/citations?user=zzpPyQwAAAAJ&hl=en",
      },
      {
        name: "Wenzhen Yuan",
        href: "https://siebelschool.illinois.edu/about/people/all-faculty/yuanwz",
      },
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2502.02663" },
      { label: "Project", href: "https://leumasnij.github.io/double_guessing/" },
      { label: "Video", href: "https://youtu.be/ZNsIUE29w_c" },
    ],
    tags: ["active perception", "tactile sensing", "manipulation"],
  },
  {
    title: "Sensor-Invariant Tactile Representation",
    venue: "International Conference on Learning Representations (ICLR)",
    year: 2025,
    image: "/images/sitr.png",
    imageAlt: "Sensor-invariant tactile representation overview.",
    authors: [
      { name: "Harsh Gupta", href: "https://hgupt3.github.io", equalContribution: true },
      {
        name: "Yuchen Mo",
        href: "https://scholar.google.com/citations?user=zzpPyQwAAAAJ&hl=en",
        equalContribution: true,
      },
      { name: "Shengmiao Jin", isSelf: true },
      {
        name: "Wenzhen Yuan",
        href: "https://siebelschool.illinois.edu/about/people/all-faculty/yuanwz",
      },
    ],
    links: [
      { label: "Paper", href: "https://arxiv.org/pdf/2502.19638" },
      { label: "Project", href: "https://hgupt3.github.io/sitr/" },
    ],
    tags: ["representation learning", "tactile sensing", "sim-to-real"],
  },
  {
    title: "An Intelligent Robotic System for Perceptive Pancake Batter Stirring and Precise Pouring",
    venue: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)",
    year: 2024,
    image: "/images/pouring.gif",
    imageAlt: "Robot pouring pancake batter.",
    authors: [
      { name: "Xinyuan Luo", href: "https://luoxinyuan.github.io", equalContribution: true },
      { name: "Shengmiao Jin", isSelf: true, equalContribution: true },
      { name: "Hung-Jui Huang", href: "https://joehjhuang.github.io/" },
      {
        name: "Wenzhen Yuan",
        href: "https://siebelschool.illinois.edu/about/people/all-faculty/yuanwz",
      },
    ],
    links: [
      { label: "Paper", href: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=10802841" },
      {
        label: "YouTube",
        href: "https://www.youtube.com/watch?si=ikU3lOzVro_94tGz&v=-295mNAnFLk&feature=youtu.be",
      },
      { label: "Bilibili", href: "https://www.bilibili.com/video/BV1qChee8Ewg" },
      { label: "Project", href: "https://luoxinyuan.github.io/pancake/" },
    ],
    award: "Best Entertainment and Amusement Papers Finalist",
    tags: ["robot cooking", "manipulation", "system integration"],
  },
  {
    title:
      "DoorBot: Closed-Loop Task Planning and Manipulation for Door Opening in the Wild with Haptic Feedback",
    venue: "IEEE International Conference on Robotics and Automation (ICRA)",
    year: 2025,
    image: "/images/doorbot.gif",
    imageAlt: "DoorBot opening a door with haptic feedback.",
    authors: [
      { name: "Zhi Wang", href: "https://tx-leo.github.io", equalContribution: true },
      {
        name: "Yuchen Mo",
        href: "https://scholar.google.com/citations?user=zzpPyQwAAAAJ&hl=en",
        equalContribution: true,
      },
      { name: "Shengmiao Jin", isSelf: true },
      {
        name: "Wenzhen Yuan",
        href: "https://siebelschool.illinois.edu/about/people/all-faculty/yuanwz",
      },
    ],
    links: [
      { label: "Paper", href: "https://tx-leo.github.io/data/ICRA2025_DoorBot.pdf" },
      { label: "Project", href: "https://tx-leo.github.io/DoorBot/" },
    ],
    tags: ["haptic feedback", "task planning", "manipulation"],
  },
];
