export const images = {
  yourlogo: "/assets/yourlogo.svg",
  check: "/assets/check.svg",
  check2: "/assets/check-02.svg",
  loading1: "/assets/loading-01.svg",
  play: "/assets/play.svg",
  gradient: "/assets/gradient.png",
  smallSphere: "/assets/4-small.png",
  grid: "/assets/grid.png",
  homeSmile: "/assets/home-smile.svg",
  file02: "/assets/file-02.svg",
  searchMd: "/assets/search-md.svg",
  plusSquare: "/assets/plus-square.svg",
  recording03: "/assets/recording-03.svg",
  recording01: "/assets/recording-01.svg",
  disc02: "/assets/disc-02.svg",
  chromecast: "/assets/chrome-cast.svg",
  sliders04: "/assets/sliders-04.svg",
  loading: "/assets/loading.png",
  background: "/assets/background.jpg",
  curve: "/assets/hero/curve.png",
  robot: "/assets/hero/robot.jpg",
  heroBackground: "/assets/hero/hero-background.jpg",
  curve1: "/assets/collaboration/curve-1.svg",
  curve2: "/assets/collaboration/curve-2.svg",
  discord: "/assets/collaboration/discord.png",
  figma: "/assets/collaboration/figma.png",
  framer: "/assets/collaboration/framer.png",
  notion: "/assets/collaboration/notion.png",
  photoshop: "/assets/collaboration/photoshop.png",
  protopie: "/assets/collaboration/protopie.png",
  raindrop: "/assets/collaboration/raindrop.png",
  slack: "/assets/collaboration/slack.png",
  service1: "/assets/services/service-1.png",
  service2: "/assets/services/service-2.png",
  service3: "/assets/services/service-3.png",
  lines: "/assets/pricing/lines.svg",
  stars: "/assets/pricing/stars.svg",
  coins: "/assets/roadmap/coins.png",
  done: "/assets/roadmap/done.svg",
  hero: "/assets/roadmap/hero.png",
  roadmap1: "/assets/roadmap/image-1.png",
  roadmap2: "/assets/roadmap/image-2.png",
  roadmap3: "/assets/roadmap/image-3.png",
  roadmap4: "/assets/roadmap/image-4.png",
  undone: "/assets/roadmap/undone.svg",
  notification1: "/assets/notification/image-1.png",
  notification2: "/assets/notification/image-2.png",
  notification3: "/assets/notification/image-3.png",
  notification4: "/assets/notification/image-4.png",
  benefitCard1: "/assets/benefits/card-1.svg",
  benefitCard2: "/assets/benefits/card-2.svg",
  benefitCard3: "/assets/benefits/card-3.svg",
  benefitCard4: "/assets/benefits/card-4.svg",
  benefitCard5: "/assets/benefits/card-5.svg",
  benefitCard6: "/assets/benefits/card-6.svg",
  benefitIcon1: "/assets/benefits/icon-1.svg",
  benefitIcon2: "/assets/benefits/icon-2.svg",
  benefitIcon3: "/assets/benefits/icon-3.svg",
  benefitIcon4: "/assets/benefits/icon-4.svg",
  benefitImage2: "/assets/benefits/image-2.png",
  discordBlack: "/assets/socials/discord.svg",
  facebook: "/assets/socials/facebook.svg",
  instagram: "/assets/socials/instagram.svg",
  telegram: "/assets/socials/telegram.svg",
  twitter: "/assets/socials/twitter.svg",
};

const {
  homeSmile,
  file02,
  searchMd,
  plusSquare,
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
  discord,
  figma,
  framer,
  notion,
  photoshop,
  protopie,
  raindrop,
  slack,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  notification2,
  notification3,
  notification4,
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  discordBlack,
  facebook,
  instagram,
  telegram,
  twitter,
} = images;

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    title: "How it works",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Create account",
    url: "/signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "/signin",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [
  "/assets/companies/company-1.svg",
  "/assets/companies/company-2.svg", 
  "/assets/companies/company-3.svg",
  "/assets/companies/company-4.svg",
  "/assets/companies/company-5.svg"
];

export const brainwaveServices = ["Resume Builder", "ATS Checker", "Mock Interviews", "Portfolio Generator", "Course Recommendations"];

export const brainwaveServicesIcons = [recording03, recording01, disc02, chromecast, sliders04];

export const roadmap = [
  {
    id: "0",
    title: "AI Mock Interviews",
    text: "Practice your interview skills with our AI-powered mock interviews, providing real-time feedback and suggestions to help you improve your performance.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Portfolio Generator",
    text: "Create professional portfolios that showcase your skills and experiences, customized for your industry to help you stand out to potential employers.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Course Recommendations",
    text: "Receive personalized course and project recommendations based on your career goals and skill gaps to enhance your employability.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Scholarship Finder",
    text: "Access our database of available scholarships and funding opportunities to support your educational and career development journey.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Job Pilot integrates with major job platforms to streamline your job search, automatically applying your optimized resume and tracking your applications in one place.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Application Tracking",
    text: "Keep track of all your job applications, interviews, and follow-ups in one centralized dashboard for better organization.",
  },
  {
    id: "2",
    title: "Automated Applications",
    text: "Save time by automatically applying to jobs that match your profile with a single click across multiple platforms.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "LinkedIn",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Indeed",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Glassdoor",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Monster",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "ZipRecruiter",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Dice",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "CareerBuilder",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "SimplyHired",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Resume builder, ATS checker, basic interview tips",
    price: "0",
    features: [
      "Automated resume builder with templates",
      "Basic ATS compatibility check",
      "Limited access to interview preparation resources",
    ],
  },
  {
    id: "1",
    title: "Professional",
    description: "Advanced resume tools, mock interviews, portfolio builder",
    price: "9.99",
    features: [
      "Advanced resume optimization with industry-specific keywords",
      "Unlimited AI mock interviews with feedback",
      "Professional portfolio generator with templates",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Complete career development suite, personalized coaching",
    price: null,
    features: [
      "Complete access to all Job Pilot features",
      "Personalized career coaching and strategy",
      "Priority access to new features and updates",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Resume Builder",
    text: "Create professional, ATS-friendly resumes with our automated builder that highlights your skills and experiences effectively.",
    backgroundUrl: "assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "ATS Checker",
    text: "Ensure your resume passes Applicant Tracking Systems with our analysis tool that optimizes keywords and formatting.",
    backgroundUrl: "assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Mock Interviews",
    text: "Practice with AI-powered interviews that simulate real scenarios and provide constructive feedback to improve your performance.",
    backgroundUrl: "assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Portfolio Generator",
    text: "Showcase your work with professionally designed portfolios that highlight your projects and achievements to potential employers.",
    backgroundUrl: "assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Course Recommendations",
    text: "Receive personalized suggestions for courses and projects that will enhance your skills and make you more competitive in the job market.",
    backgroundUrl: "assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Market Insights",
    text: "Stay informed about industry trends, salary benchmarks, and in-demand skills to strategically position yourself in the job market.",
    backgroundUrl: "assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
