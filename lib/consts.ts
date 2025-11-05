import type {
  NavbarItemDataType,
  Brand,
  Testimonial as TestimonialType,
} from "@/types/home";

const NavbarItemsData: NavbarItemDataType[] = [
  {
    name: "Home",
    href: "/",
    btnType: "link",
  },
  {
    name: "About me",
    href: "/about",
    btnType: "link",
  },
  {
    name: "Projects",
    href: "/projects",
    btnType: "link",
  },
  {
    name: "Blogs",
    href: "/blogs",
    btnType: "link",
  },
  {
    name: "Pricing",
    href: "/pricing",
    btnType: "link",
  },
  {
    name: "Status",
    href: "https://stats.uptimerobot.com/aneVByWNsv",
    btnType: "link",
  },
  // {
  //   name: "Get Started",
  //   href: "/get-started",
  //   btnType: "default",
  // },
];
const brands: Array<Brand> = [
  {
    name: "Meta",
    image: "/brands/meta-logo.svg",
  },
  {
    name: "MongoDB",
    image: "/brands/mongodb-logo.svg",
  },
  {
    name: "Scrimba",
    image: "/brands/scrimba-logo.svg",
  },
  {
    name: "FreeCodeCamp",
    image: "/brands/freecodecamp-logo.svg",
  },
  {
    name: "Turkcell",
    image: "/brands/turkcell-logo.svg",
  },
];
const testimonials: Array<TestimonialType> = [
  {
    avatar: "/media/ertugrulaksel.webp",
    name: "Ertugrul Aksel",
    role: "Founder at @Serapore",
    comment:
      "Thanks to Ayberk’s innovative policies, development-oriented efforts, and time-saving solutions, our company has gained a significant market position since its inception. I extend my gratitude to them",
    links: [
      {
        name: "Phone",
        link: "tel:+905324214816",
      },
      {
        name: "Email",
        link: "mailto:ertugrul@serapore.com.tr",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/ertugrul-aksel-18445969/",
      },
    ],
  },
  {
    avatar: "/media/muratalbuz.webp",
    name: "Murat Albuz",
    role: "Plant Manager at @Newarc",
    comment:
      "Kudos to Ayberk for driving our frontend development with creativity and efficiency. Their solutions have made a real impact!",
    links: [
      {
        name: "Phone",
        link: "tel:+905056814460",
      },
      {
        name: "Email",
        link: "mailto:murat@serapore.com.tr",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/murat-albuz-20372b57/",
      },
    ],
  },
  {
    avatar: "/media/burakerarslan.webp",
    name: "Burak Erarslan",
    role: "Co-Founder at @Reform Marine",
    comment:
      "He has developed himself in web services and has a strong communication skills",
    links: [
      {
        name: "Phone",
        link: "tel:05373442566",
      },
      {
        name: "Email",
        link: "mailto:burak.erarslan@pinyin-marine.com",
      },
      {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/burak-erarslan/",
      },
    ],
  },
  {
    avatar: "/media/doganisleyen.webp",
    name: "Dogan Isleyen",
    role: "General Manager at @Efor",
    comment:
      "He is a very ambitious and determined person, there is nothing he cannot do in the job he loves",
    links: [
      {
        name: "Phone",
        link: "tel:+905336874545",
      },
    ],
  },
];
export { NavbarItemsData, brands, testimonials };
