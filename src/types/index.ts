/**
 ******************************************************* >>>>>>>> Interfaces >>>>>>>> *******************************************************
 */

/**
 * Generic base interface for items with ID and Title
 */
export interface IBaseItem {
  id: number;
  title?: string;
}

/**
 * Interface for items that include a description
 */
export interface IDescriptionItem extends IBaseItem {
  description: string;
}

export interface ICardItem extends IDescriptionItem {
  icon?: string;
  img?: string;
  badge?: string;
  link?: string;
}
export interface ISharedCardProps {
  title?: string;
  description: string;
  img?: string;
  icon?: string;
  className?: string;
}

export interface IHeroData {
  badge?: string;
  subTitle?: string;
  title?: string;
  titlePart1?: string;
  titlePart2?: string;
  description: string;
  stats?: IHeroStat[];
  contactItems?: IContactItem[];
  image?: string;
}

export type PageHeroMap = {
  about: IHeroData;
  academics: IHeroData;
  admissions: IHeroData;
  studentlife: IHeroData;
  contact: IHeroData;
};

export interface IContactFormData {
  parentName: string;
  email: string;
  phoneNumber: string;
  studentName: string;
  studentAge: string;
  programOfInterest: string;
  message: string;
}

export interface IProgramOption {
  label: string;
  value: string;
}

export interface IFormFieldProps {
  label: string;
  type?: "text" | "email" | "tel" | "number" | "textarea";
  placeholder: string;
  name: string;
  isFullWidth?: boolean;
}

/**
 * Interface for fee structure rows
 */
export interface IFee {
  id: number;
  program: string;
  ageGroup: string;
  annualTuition: string;
  registrationFee: string;
  activityFee: string;
}

/**
 * Interface for additional school services
 */
export interface IAdditionalService {
  id: number;
  service: string;
  cost: string;
}

export interface IRoom {
  id: number;
  category: string;
  title: string;
  description: string;
  images: string[];
}

/**
 * Interface for shared section headers (Title, Subtitle, Desc)
 */
export interface ISectionHeader {
  subTitle: string;
  title: string;
  description: string;
}

/**
 * Interface for the Top Header Banner
 */
export interface ITopBanner {
  text: string;
  link: string;
  icon: string;
}

/**
 * Interface for navigation links in the Navbar
 */
export interface INavLink {
  id: number;
  label: string;
  path: string;
}

/**
 * Props for the Navbar component
 */
export interface NavbarProps {
  links: INavLink[];
  logo: string;
}
/**
 * Interface for statistics in the Hero section
 */
export interface IHeroStat {
  id: number;
  label: string;
  value: number;
}

/**
 * Props for the Hero component
 */
export interface HeroProps extends IHeroData {
  image: string;
}
/**
 * Data structure for various page Hero sections
 */
export interface IPageHeroData {
  badge: string;
  title: string;
  description: string;
  contactItems?: IContactItem[];
}

/**
 * Interface for grouping footer links
 */
export interface IFooterLinkGroup {
  id: number;
  title: string;
  links: { label: string; path: string }[];
}

/**
 * Interface for social media platform links
 */
export interface ISocialLink {
  id: number;
  icon: string;
  platform: string;
  path: string;
}

/**
 * Interface for individual contact items with icons
 */
export interface IContactItem {
  id: number;
  icon: string;
  text: string;
  type: "email" | "phone" | "address" | "time";
}

/**
 * Props for the Footer component
 */
export interface FooterProps {
  navData: IFooterLinkGroup[];
  contactItems: IContactItem[];
  socialLinks: ISocialLink[];
  legalLinks: { label: string; path: string }[];
}

/**
 * Props for the Benefits section component
 */
export interface BenefitsSectionProps {
  header: ISectionHeader;
  benefits: ICardItem[];
}

/**
 * Interface for individual testimonials
 */
export interface ITestimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  content: string;
}

/**
 * Props for the Testimonial card component
 */
export interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  content: string;
}

/**
 * Props for the Testimonials section component
 */
export interface TestimonialsSectionProps {
  header: ISectionHeader;
  testimonials: ITestimonial[];
}

/**
 * Interface for FAQ items
 */
export interface IFAQ {
  id: number;
  question: string;
  answer: string;
}

/**
 * Props for the FAQ card component
 */
export interface FaqCardProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Props for the FAQ section (Supports 2-column layout)
 */
export interface FAQSectionProps {
  header: ISectionHeader;
  faqData: IFAQ[][];
}

/**
 * Interface for navigation page cards
 */
export interface INavigationPage extends IDescriptionItem {
  link: string;
}

/**
 * Props for the Navigate section component
 */
export interface NavigateSectionProps {
  pages: INavigationPage[];
}

/**
 * Interface for history timeline items
 */
export interface IHistory extends IDescriptionItem {
  year: string;
  Last?: boolean;
}

/**
 * Interface for team member profiles
 */
export interface ITeam extends IDescriptionItem {
  name: string;
  img: string;
  qualification: string;
}
