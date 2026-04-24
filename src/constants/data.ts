/**
 * Import All Images & Icons
 */
import BannerArrow from "../assets/icons/brArrow.png";
import fbIcon from "../assets/icons/facebook.png";
import linkedinIcon from "../assets/icons/linkedin.png";
import twitterIcon from "../assets/icons/twitter.png";
import CapIcon from "../assets/icons/Cap.png";
import Crown from "../assets/icons/Crown.png";
import Envlope from "../assets/icons/Envlope.png";
import Flag from "../assets/icons/Flag.png";
import Mask from "../assets/icons/Mask.png";
import Person from "../assets/icons/Person.png";
import Phone from "../assets/icons/Phone.png";
import Wheel from "../assets/icons/Wheel.png";
import david from "../assets/imgs/David.webp";
import emily from "../assets/imgs/Emily.webp";
import jessica from "../assets/imgs/Jessica.webp";
import michael from "../assets/imgs/Michael.webp";
import william from "../assets/imgs/William.webp";
import energy from "../assets/icons/energy.png";
import MissionIcon from "../assets/icons/mission.png";
import sarah from "../assets/imgs/sarah.webp";
import VisionIcon from "../assets/icons/vision.png";
import ArtsandCrafts from "../assets/imgs/Arts.webp";
import LanguageArts from "../assets/imgs/LanguageArts.webp";
import Mathematics from "../assets/imgs/Mathematics.webp";
import PhysicalEducation from "../assets/imgs/Physical.webp";
import Science from "../assets/imgs/Science.webp";
import SocialStudies from "../assets/imgs/SocialStudies.webp";
import BookIcon from "../assets/icons/book.png";
import BuzzleIcon from "../assets/icons/buzzle.png";
import PenIcon from "../assets/icons/pen.png";
import SignalIcon from "../assets/icons/signal.png";
import Star from "../assets/icons/star.png";
import SunIcon from "../assets/icons/sun.png";
import clock from "../assets/icons/clock.png";
import David from "../assets/icons/david.png";
import { default as Emily, default as Jason } from "../assets/icons/emily.png";
import Jennifer from "../assets/icons/jennifer.png";
import Locat from "../assets/icons/location.png";
import AnnualSportsDay from "../assets/imgs/AnnualSportsDay.webp";
import ArtExhibitions from "../assets/imgs/ArtExhibitions.webp";
import CulturalFestivals from "../assets/imgs/CulturalFestivals.webp";
import GraduationCeremony from "../assets/imgs/GraduationCeremony.webp";
import InternationalDay from "../assets/imgs/InternationalDay.webp";
import ScienceFair from "../assets/imgs/ScienceFair.webp";
import bottle from "../assets/icons/bottle.png";
import lamp from "../assets/icons/lamp.png";
import parenticon from "../assets/icons/parent.png";
import stars from "../assets/icons/stars.png";
import tone from "../assets/icons/tone.png";
import Room1 from "../assets/imgs/ClassroomsOne.webp";
import Room2 from "../assets/imgs/ClassroomsTwo.webp";
import Room3 from "../assets/imgs/ClassroomsThree.webp";
import Room4 from "../assets/imgs/ClassroomsFour.webp";
import Librar1 from "../assets/imgs/LibraryOne.webp";
import Librar2 from "../assets/imgs/LibraryTwo.webp";
import Librar3 from "../assets/imgs/LibraryThree.webp";
import Librar4 from "../assets/imgs/LibraryFour.webp";
import ScienceLab1 from "../assets/imgs/ScienceLab1.webp";
import ScienceLab2 from "../assets/imgs/ScienceLab2.webp";
import ScienceLab3 from "../assets/imgs/ScienceLab3.webp";
import ScienceLab4 from "../assets/imgs/ScienceLab4.webp";
import ComputerLab1 from "../assets/imgs/ComputerLab1.webp";
import ComputerLab2 from "../assets/imgs/ComputerLab2.webp";
import ComputerLab3 from "../assets/imgs/ComputerLab3.webp";
import ComputerLab4 from "../assets/imgs/ComputerLab4.webp";
import Garden1 from "../assets/imgs/Garden1.webp";
import Garden2 from "../assets/imgs/Garden2.webp";
import Garden3 from "../assets/imgs/Garden3.webp";
import Garden4 from "../assets/imgs/Garden4.webp";
import chart from "../assets/icons/chart.png";

import type {
  IAdditionalService,
  IContactItem,
  IFAQ,
  ICardItem,
  IFee,
  IFooterLinkGroup,
  IFormFieldProps,
  IHeroData,
  IHistory,
  INavigationPage,
  INavLink,
  IProgramOption,
  IRoom,
  ISectionHeader,
  ISocialLink,
  ITeam,
  ITestimonial,
  ITopBanner,
  PageHeroMap,
} from "../types/index.ts";

/**
 ************************************ >>>>>>>> Top Banner / Navbar / Heros / Header for Sections /  >>>>>>>> ************************************
 */
/**
 * Data for the Top Banner
 */
export const TOP_BANNER_DATA: ITopBanner = {
  text: "Admission is Open, Grab your seat now",
  link: "/admissions",
  icon: BannerArrow,
};
/**
 * Data for the Main Navigation Bar
 */
export const NAV_LINKS: INavLink[] = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About Us",
    path: "/about",
  },
  {
    id: 3,
    label: "Academics",
    path: "/academics",
  },
  {
    id: 4,
    label: "Admissions",
    path: "/admissions",
  },
  {
    id: 5,
    label: "Student Life",
    path: "/studentlife",
  },
  {
    id: 6,
    label: "Contact",
    path: "/contact",
  },
];

/**
 * Data for the Hero Section
 *
 */
export const HERO_DATA: IHeroData = {
  subTitle: "Welcome to Little Learners Academy",
  titlePart1: "Where Young Minds Blossom and",
  titlePart2: "Dreams Take Flight.",
  description:
    "Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  stats: [
    { id: 1, label: "Students Passed Out", value: 7000 },
    { id: 2, label: "Awards & Recognitions", value: 37 },
    { id: 3, label: "Experience Educators", value: 15 },
  ],
};

/**
 * Data for Heros (About, Academic, Addmission, Student Life, Contact)
 */
export const PAGE_HEROES_DATA: PageHeroMap = {
  about: {
    badge: "Overview",
    title: "Welcome to Little Learners Academy",
    description:
      "A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.",
  },
  academics: {
    badge: "Academics",
    title: "Nurturing Young Minds for Success",
    description:
      "Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration.",
  },
  admissions: {
    badge: "Admissions",
    title: "Join Our Family of Young Learners",
    description:
      "At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school.",
  },
  studentlife: {
    badge: "Student Life",
    title: "Embracing Learning with Discovery and Joy",
    description:
      "Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development.",
  },
  contact: {
    badge: "Contact Us",
    title: "Feel Free To Connect With Us",
    description:
      "We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods",
    contactItems: [
      {
        id: 1,
        icon: Envlope,
        text: "hello@littlelearners.com",
        type: "email",
      },

      {
        id: 2,
        icon: Phone,
        text: "+91 91813 23 2309",
        type: "phone",
      },

      {
        id: 3,
        icon: Locat,
        text: "Somewhere in the World",
        type: "address",
      },
      {
        id: 4,
        icon: clock,
        text: "Office Hours - 9am - 6pm",
        type: "time",
      },
    ],
  },
};

/**
 * Data for Header of sections for (benefits,testimonials,faq,navigation)
 */
export const SECTION_HEADERS: { [key: string]: ISectionHeader } = {
  benefits: {
    subTitle: "Children Deserve Bright Future",
    title: "Our Benefits",
    description:
      "With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.",
  },
  testimonials: {
    subTitle: "Their Happy Words 🤗",
    title: "Our Testimonials",
    description:
      "Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally.",
  },
  faq: {
    subTitle: "Solutions For The Doubts",
    title: "Frequently Asked Questions",
    description:
      "Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education.",
  },
  navigation: {
    subTitle: "Explore More",
    title: "Navigate through our Pages",
    description:
      "Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school",
  },
  MissionVision: {
    subTitle: "Mission & Visions",
    title: "Our Mission & Visions",
    description:
      "We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.",
  },
  Awards: {
    subTitle: "Our Achievements",
    title: "Our Awards and Recognitions",
    description:
      "Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students.",
  },
  OurHistory: {
    subTitle: "Our Progressive Journey",
    title: "Our History",
    description:
      "Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment",
  },
  TeamMembers: {
    subTitle: "Our Teachers With Experties",
    title: "Our Team Members",
    description:
      "At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.",
  },
  SpecialFeature: {
    subTitle: "Our Features",
    title: "Our Special Features",
    description:
      "Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!",
  },
  StudentLearn: {
    subTitle: "Our Features",
    title: "What Students Learn",
    description:
      "At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include",
  },
  OurRoomsGallery: {
    subTitle: "Our Gallery",
    title: "Our Rooms Gallery",
    description:
      "Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.",
  },
  AdmissionProcess: {
    subTitle: "Process",
    title: "Admission Process",
    description:
      "Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school",
  },
  FeeStructure: {
    subTitle: "Our Features",
    title: "Fee Structure",
    description:
      "Our fee structure is transparent, and we strive to keep our fees competitive within the education sector. The fees vary based on the program, age group, and any additional services chosen.",
  },
  Extracurricular: {
    subTitle: "Our Features",
    title: "Extracurricular Activities",
    description:
      "At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including",
  },
  Events: {
    subTitle: "Our Features",
    title: "Events & Celebrations",
    description:
      "At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include",
  },
  StudentSupport: {
    subTitle: "Our Achievements",
    title: "Student Support",
    description:
      "At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include",
  },
  contactHeader: {
    subTitle: "Contact Form",
    title: "Student Information",
    description:
      "If you have specific questions or wish to request more information about Little Learners Academy, please complete the contact form below. Kindly provide the following details to help us better understand your needs.",
  },
};

/**
 ******************************************************* >>>>>>>> Home Page >>>>>>>> **********************************************************
 */
/**
 * Data for "Our Benefits" section
 */
export const BENEFITS_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Holistic Learning Approach",
    description:
      "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
    icon: CapIcon,
  },
  {
    id: 2,
    title: "Experienced Educators",
    description:
      "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
    icon: Crown,
  },
  {
    id: 3,
    title: "Nurturing Environment",
    description:
      "We prioritize safety and provide a warm and caring atmosphere for every child.",
    icon: Mask,
  },
  {
    id: 4,
    title: "Play-Based Learning",
    description:
      "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
    icon: Flag,
  },
  {
    id: 5,
    title: "Individualized Attention",
    description:
      "Our small class sizes enable personalized attention, catering to each child's unique needs.",
    icon: Wheel,
  },
  {
    id: 6,
    title: "Parent Involvement",
    description:
      "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
    icon: Person,
  },
];

/**
 * Data for "Our Testimonials" section
 */
export const TESTIMONIALS_DATA: ITestimonial[] = [
  {
    id: 1,
    name: "Jennifer B",
    avatar: Jennifer,
    rating: 5,
    content:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    id: 2,
    name: "David K",
    avatar: David,
    rating: 5,
    content:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 3,
    name: "Emily L",
    avatar: Emily,
    rating: 5,
    content:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    id: 4,
    name: "Hayyan",
    avatar: Emily,
    rating: 3,
    content:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    id: 5,
    name: "Jason",
    avatar: Jason,
    rating: 2,
    content:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
];

/**
 * Data for FAQ section
 */
export const FAQ_DATA: IFAQ[][] = [
  [
    {
      id: 1,
      question: "What are the school hours at Little Learners Academy?",
      answer:
        "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up.",
    },
    {
      id: 3,
      question: "Is there a uniform policy for students?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
    {
      id: 5,
      question: "What extracurricular activities are available for students?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
    {
      id: 7,
      question: "What extracurricular activities are available for students?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
  ],
  [
    {
      id: 2,
      question: "How do you handle food allergies and dietary restrictions?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
    {
      id: 6,
      question:
        "What is the teacher-to-student ratio at Little Learners Academy?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
    {
      id: 4,
      question: "How do you handle discipline and behavior management?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
    {
      id: 8,
      question: "How do I apply for admission to Little Learners Academy?",
      answer:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim perferendis impedit eligendi assumenda earum ab laboriosam, magni magnam, laborum adipisci explicabo nemo repellat maiores asperiores?",
    },
  ],
];
/**
 * Data for "Navigate through our Pages" section
 */
export const NAVIGATION_PAGES_DATA: INavigationPage[] = [
  {
    id: 1,
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    link: "/about",
  },
  {
    id: 2,
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    link: "/academics",
  },
  {
    id: 3,
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    link: "/studentlife",
  },
  {
    id: 4,
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    link: "/admissions",
  },
];

/**
 ************************************************ >>>>>>>> End of Home Page >>>>>>>> ***************************************************
 */

/**
 ****************************************************** >>>>>>>>  About Page >>>>>>>> ***************************************************
 */
export const MISSION_VISION_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Mission",
    description:
      "At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.",
    icon: MissionIcon,
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.",
    icon: VisionIcon,
  },
];
/**
 * Data for "Our Awards" section
 */
export const OUR_AWARDS_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Outstanding Early Childhood Education Awar",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: chart,
  },
  {
    id: 2,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: SignalIcon,
  },
  {
    id: 3,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon: energy,
  },
  {
    id: 4,
    title: "Outstanding Early Childhood Education Awar",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: CapIcon,
  },
  {
    id: 5,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: chart,
  },
  {
    id: 6,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: SignalIcon,
  },
  {
    id: 7,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: energy,
  },
];
export const OUR_HISTORY_DATA: IHistory[] = [
  {
    id: 1,
    title: "Resilience and Future Horizons",
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
    year: "2023",
  },
  {
    id: 2,
    title: "Innovation and Technology",
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
    year: "2017",
  },
  {
    id: 3,
    title: "Expansion and Recognition",
    description:
      "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
    year: "2012",
  },
  {
    id: 4,
    title: "Inception and Growth",
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
    year: "2005",
  },
];

export const OUR_TEAM_DATA: ITeam[] = [
  {
    id: 1,
    name: "Ms. Sarah Anderson",
    img: sarah,
    qualification:
      "Qualification:Bachelor's Degree in Early Childhood Education",
    description:
      "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
  },
  {
    id: 2,
    name: "Mr. David Roberts",
    img: david,
    qualification: "Qualification: Master's Degree in Elementary Education",
    description:
      "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
  },
  {
    id: 3,
    name: "Ms. Emily Hernandez",
    img: emily,
    qualification: "Qualification: Diploma in Child Psychology",
    description:
      "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
  },
  {
    id: 4,
    name: "Mr. Michael Turner",
    img: michael,
    qualification: "Qualification: Bachelor's Degree in Physical Education",
    description:
      "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
  },
  {
    id: 5,
    name: "Ms. Jessica Lee",
    img: jessica,
    qualification: "Qualification: Master's Degree in Special Education",
    description:
      "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
  },
  {
    id: 6,
    name: "Mr. William Parker",
    img: william,
    qualification: "Qualification: Bachelor's Degree in Fine Arts",
    description:
      "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
  },
];
/**
 ************************************************ >>>>>>>> End of About Page >>>>>>>> ***************************************************
 */

/**
 ************************************************ >>>>>>>> Academics Page >>>>>>>> ***************************************************
 */
/**
 * Data for "Our SPECIAL_FEATURES" section
 */
export const SPECIAL_FEATURES_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
    icon: BookIcon,
  },
  {
    id: 2,
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
    icon: SignalIcon,
  },
  {
    id: 3,
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
    icon: BuzzleIcon,
  },
  {
    id: 4,
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
    icon: PenIcon,
  },
  {
    id: 5,
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
    icon: SunIcon,
  },
  {
    id: 6,
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
    icon: Star,
  },
];

export const STUDENT_LEARN_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
    img: LanguageArts,
  },
  {
    id: 2,
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
    img: Mathematics,
  },
  {
    id: 3,
    title: "Science",
    description:
      "Exploring the natural world through hands-on experiments and investigations.",
    img: Science,
  },
  {
    id: 4,
    title: "Social Studies",
    description:
      "Cultivating an understanding of diverse cultures and communities.",
    img: SocialStudies,
  },
  {
    id: 5,
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
    img: ArtsandCrafts,
  },
  {
    id: 6,
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
    img: PhysicalEducation,
  },
];

export const ROOMS_DATA: IRoom[] = [
  {
    id: 1,
    category: "Classrooms",
    title: "Classrooms",
    description:
      "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: [Room1, Room2, Room3, Room4, Room1, Room2, Room3, Room4],
  },
  {
    id: 2,
    category: "Library",
    title: "Library",
    description:
      "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: [
      Librar1,
      Librar2,
      Librar3,
      Librar4,
      Librar1,
      Librar2,
      Librar3,
      Librar4,
    ],
  },
  {
    id: 3,
    category: "Science Lab",
    title: "Science Lab",
    description:
      "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: [
      ScienceLab1,
      ScienceLab2,
      ScienceLab3,
      ScienceLab4,
      ScienceLab1,
      ScienceLab2,
      ScienceLab3,
      ScienceLab4,
    ],
  },
  {
    id: 4,
    category: "Computer Lab",
    title: "Computer Lab",
    description:
      "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills.",
    images: [
      ComputerLab1,
      ComputerLab2,
      ComputerLab3,
      ComputerLab4,
      ComputerLab1,
      ComputerLab2,
      ComputerLab3,
      ComputerLab4,
    ],
  },
  {
    id: 5,
    category: "Garden and Nature Area",
    title: "Garden and Nature Area",
    description:
      "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: [
      Garden1,
      Garden2,
      Garden3,
      Garden4,
      Garden1,
      Garden2,
      Garden3,
      Garden4,
    ],
  },
];
export const classroomsImages: string[] = [Room1, Room2, Room3, Room4];

export const libraryImages: string[] = [Librar1, Librar2, Librar3, Librar4];

/**
 ************************************************ >>>>>>>> End of Academics Page >>>>>>>> ***************************************************
 */
/**
 ************************************************ >>>>>>>> Admissions Page >>>>>>>> ***************************************************
 */

export const ADDMISSION_PROCESS_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Inquiry",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    icon: "01",
  },
  {
    id: 2,
    title: "School Tour",
    description:
      "Schedule a personalized school tour to explore our campus, meet our staff, and gain insights into our nurturing learning environment.",
    icon: "02",
  },
  {
    id: 3,
    title: "Application Form",
    description:
      "Complete the application form and provide the required documents, including your child's birth certificate, medical records, and any previous academic records (if applicable).",
    icon: "03",
  },
  {
    id: 4,
    title: "Parent Interview",
    description:
      "Submit an inquiry form through our website or contact our admissions office to express your interest in Little Learners Academy.",
    icon: "04",
  },
  {
    id: 5,
    title: "School Tour",
    description:
      "For certain age groups, a student assessment may be conducted to understand their developmental progress and ensure the best placement.",
    icon: "05",
  },
  {
    id: 6,
    title: "Acceptance",
    description:
      "Once the admission process is complete, you will receive an official acceptance letter from Little Learners Academy.",
    icon: "06",
  },
];

/**
 * Data for  Fees Table
 */
export const FEES_DATA: IFee[] = [
  {
    id: 1,
    program: "Nursery",
    ageGroup: "2 - 3 Years",
    annualTuition: "$1,686",
    registrationFee: "$162",
    activityFee: "$12",
  },
  {
    id: 2,
    program: "Pre - Kindergartens",
    ageGroup: "3 - 4 Years",
    annualTuition: "$2,686",
    registrationFee: "$220",
    activityFee: "$16",
  },
  {
    id: 3,
    program: "Kindergarten",
    ageGroup: "4 - 5 Years",
    annualTuition: "$3,686",
    registrationFee: "$340",
    activityFee: "$20",
  },
];

/**
 * Data for Additional Services Table
 */
export const ADDITIONAL_SERVICES_DATA: IAdditionalService[] = [
  {
    id: 1,
    service: "Before and After-School Care",
    cost: "$120 / per month",
  },
  {
    id: 2,
    service: "Language Immersion Program",
    cost: "$60 / per semester",
  },
  {
    id: 3,
    service: "Transportation (optional)",
    cost: "$80 / per month",
  },
];

/**
 ************************************************ >>>>>>>> End of Admissions Page >>>>>>>> ***************************************************
 */
/**
 ************************************************ >>>>>>>> Student Life Page >>>>>>>> ***************************************************
 */

/**
 * Data for "Extracurricular Activities" section
 */
export const EXTRACURRICULAR_ACTIVITIES_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Sports and Athletics",
    description:
      "Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline.",
    icon: energy,
  },
  {
    id: 2,
    title: "Art and Creativity",
    description:
      "Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms.",
    icon: PenIcon,
  },
  {
    id: 3,
    title: "Music and Performing Arts",
    description:
      "Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances.",
    icon: tone,
  },
  {
    id: 4,
    title: "Language Clubs",
    description:
      "Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness.",
    icon: BuzzleIcon,
  },
  {
    id: 5,
    title: "Science Club",
    description:
      "The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning.",
    icon: bottle,
  },
  {
    id: 6,
    title: "Cooking and Culinary Arts",
    description:
      "Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals.",
    icon: stars,
  },
];

/**
 * Data for "Events & Celebrations" section
 */
export const EVENTS_CELEB_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Annual Sports Day",
    description:
      "A day filled with friendly competition, team spirit, and sportsmanship.",
    img: AnnualSportsDay,
  },
  {
    id: 2,
    title: "Cultural Festivals",
    description:
      "Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation.",
    img: CulturalFestivals,
  },
  {
    id: 3,
    title: "Art Exhibitions",
    description:
      "Showcasing our students' artistic talents through exhibitions and displays.",
    img: ArtExhibitions,
  },
  {
    id: 4,
    title: "Science Fair",
    description:
      "A platform for budding scientists to present their innovative projects and experiments.",
    img: ScienceFair,
  },
  {
    id: 5,
    title: "International Day",
    description:
      "A vibrant celebration of our diverse community, embracing cultures from around the world.",
    img: InternationalDay,
  },
  {
    id: 6,
    title: "Graduation Ceremony",
    description:
      "A significant milestone as our Kindergarten students prepare to embark on their academic journey.",
    img: GraduationCeremony,
  },
];
/**
 * Data for "Student Support" section
 */
export const STUDENT_SUPPORT_DATA: ICardItem[] = [
  {
    id: 1,
    title: "Counseling",
    description:
      "Professional counselors offer guidance and support to students, addressing their emotional and social well-being.",
    icon: lamp,
  },
  {
    id: 2,
    title: "Learning Support",
    description:
      "Our educators provide additional assistance to students who may require extra support in their academic journey.",
    icon: BookIcon,
  },
  {
    id: 3,
    title: "Parent-Teacher Collaboration",
    description:
      "We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development.",
    icon: parenticon,
  },
];
/**
 ************************************************ >>>>>>>> End of Student Life Page >>>>>>>> ***************************************************
 */
/**
 ************************************************ >>>>>>>> Contact Page >>>>>>>> ***************************************************
 */
export const FORM_FIELDS: IFormFieldProps[] = [
  {
    label: "Parent Name",
    name: "parentName",
    placeholder: "Enter Parent Name",
  },
  {
    label: "Email Address",
    name: "email",
    type: "email",
    placeholder: "Enter Email Address",
  },
  {
    label: "Phone Number",
    name: "phone",
    type: "tel",
    placeholder: "Enter Phone Number",
  },
  {
    label: "Student Name",
    name: "studentName",
    placeholder: "Enter Student Name",
  },
  {
    label: "Student Age",
    name: "studentAge",
    type: "number",
    placeholder: "Enter Student Age",
  },
];

export const PROGRAM_OPTIONS: IProgramOption[] = [
  { label: "OPTION1", value: "OPTION1" },
  { label: "OPTION2", value: "OPTION2" },
  { label: "OPTION3", value: "OPTION3" },
];

/**
 ************************************************ >>>>>>>> End of Contact Page >>>>>>>> ***************************************************
 */
/**
 ************************************************ >>>>>>>> Footer Section >>>>>>>> ***************************************************
 */
/**
 * Data for Footer / Navigation
 */
export const FOOTER_NAV_DATA: IFooterLinkGroup[] = [
  {
    id: 1,
    title: "Home",
    links: [
      { label: "Features", path: "#features" },
      { label: "Our Testimonials", path: "#testimonials" },
      { label: "FAQ", path: "#FAQ" },
    ],
  },
  {
    id: 2,
    title: "About Us",
    links: [
      { label: "Our Mission", path: "#mission" },
      { label: "Our Vision", path: "#mission" },
      { label: "Awards and Recognitions", path: "#awards" },
      { label: "History", path: "#history" },
      { label: "Teachers", path: "#teachers" },
    ],
  },
  {
    id: 3,
    title: "Academics",
    links: [
      { label: "Special Features", path: "#specialFeatures" },
      { label: "Gallery", path: "#gallery" },
    ],
  },
  {
    id: 4,
    title: "Contact Us",
    links: [
      { label: "Information", path: "#" },
      { label: "Map & Direction", path: "#" },
    ],
  },
];

/**
 *  Data for Footer / Social Media Links
 */
export const SOCIAL_LINKS: ISocialLink[] = [
  {
    id: 1,
    platform: "facebook",
    icon: fbIcon,
    path: "https://facebook.com",
  },
  {
    id: 2,
    platform: "twitter",
    icon: twitterIcon,
    path: "https://twitter.com",
  },
  {
    id: 3,
    platform: "linkedin",
    icon: linkedinIcon,
    path: "https://linkedin.com",
  },
];

export const CONTACT_ITEMS: IContactItem[] = [
  {
    id: 1,
    icon: Envlope,
    text: "hello@littlelearners.com",
    type: "email",
  },
  { id: 2, icon: Phone, text: "+91 91813 23 2309", type: "phone" },
  {
    id: 3,
    icon: Locat,
    text: "Somewhere in the World",
    type: "address",
  },
];

export const LEGAL_LINKS = [
  { label: "Terms of Service", path: "/" },
  { label: "Privacy Policy", path: "/" },
  { label: "Cookie Policy", path: "/" },
];
/**
 ************************************************ >>>>>>>> End of Footer Section >>>>>>>> ***************************************************
 */
