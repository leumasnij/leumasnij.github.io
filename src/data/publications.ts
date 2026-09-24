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
};

export const publications: Publication[] = [{
  title: "From Hand to Hand: A Shared Wearable Interface and Functional Benchmark for Dexterous Manipulation",
  venue: "In Submission",
  year: 2026,
  image: "/images/wudi.gif",
  imageAlt: "A Wearable Unified Dexterous Interface (WUDI) for In-the-wild Data Collection.",
  authors: [
    { name: "Qiandao Liu", href: "https://qiandao-liu.github.io/", equalContribution: true },
    { name: "Shengmiao Samuel Jin", isSelf: true, equalContribution: true },
    { name: "Laura Ren", href: "https://www.linkedin.com/in/laura-ren-0b66b42bb/" },
    { name: "Tapomayukh Bhattacharjee", href: "https://sites.google.com/site/tapomayukh",},
  ],
  links: [ ],
},
{
  title: "KITE: Decoupling Kinematics and Interaction for Zero-Shot Cross-Embodiment Manipulation",
  venue: "In Submission",
  year: 2026,
  image: "/images/kite.gif",
  imageAlt: "Cross-embodiment manipulation with KITE.",
  authors: [
    { name: "Qianxu Wang", href: "https://qianxu.wang/" },
    { name: "Shengmiao Samuel Jin", isSelf: true, },
    { name: "Kuan Fang", href: "https://kuanfang.github.io/",},
  ],
  links: [ ],
},
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
      { label: "Website", href: "https://leumasnij.github.io/double_guessing/" },
      { label: "Video", href: "https://youtu.be/ZNsIUE29w_c" },
    ],
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
      { label: "Website", href: "https://luoxinyuan.github.io/pancake/" },
    ],
    award: "Best Entertainment and Amusement Papers Finalist",
  },
];
