export interface ResumeData {
    header: Header;
    aboutMe: AboutMe;
    workExperience: WorkExperience;
    educationBackground: EducationBackground;
    personalInfo: PersonalInfo;
    notableAchievements: NotableAchievements;
    siteInfo: SiteInfo;
  }
  export interface Header {
    primaryIntro: string;
    secondaryIntro: string;
    occupation: string;
    greetings?: (string)[] | null;
    pictures: Pictures;
  }
  export interface Pictures {
    random: boolean;
    pictureUrls?: (string)[] | null;
  }
  export interface AboutMe {
    intro: string;
  }
  export interface WorkExperience {
    intro: string;
    experiences?: (Experiences)[] | null;
  }
  export interface Experiences {
    company: string;
    parentCompany: string;
    logoUrl: string;
    url: string;
    isRelevant: boolean;
    description: string;
    titles?: (Titles)[] | null;
  }
  export interface Titles {
    title: string;
    description: string;
    dates: Dates;
  }
  export interface Dates {
    start: string;
    end: string;
  }
  export interface EducationBackground {
    acedemicBackground?: (AcedemicBackground)[] | null;
    onlineLearning?: (OnlineLearning)[] | null;
    skillSet?: (Badge)[] | null;
  }
  export interface AcedemicBackground {
    school: string;
    logoUrl: string;
    url: string;
    degree: string;
    major: string;
    gpa: string;
    isRelevant: boolean;
  }
  export interface OnlineLearning {
    platform: string;
    courseTitle: string;
    logoUrl: string;
    courseUrl: string;
    completion: string;
  }
  export interface Badge { // Skillset
    name: string;
    description: string;
  }
  export interface PersonalInfo {
    contactInformation?: (ContactInformation)[] | null;
    hobbies?: (GeneralItem)[] | null;
    pets: Pets;
  }
  export interface ContactInformation {
    platform: string;
    icon: string;
    url: string;
    value: string;
  }
  export interface Pets {
    intro: string;
    petInfo?: (PetInfo)[] | null;
  }
  export interface PetInfo {
    name: string;
    type: string;
    icon: string;
    description: string;
  }
  export interface NotableAchievements {
    professionalAwards?: (GeneralItem)[] | null;
    publicSpeaking?: (GeneralItem)[] | null;
    professionalProjects?: (GeneralItem)[] | null;
    personalProjects?: (GeneralItem)[] | null;
    prototypes?: (string)[] | null;
    implementations?: (Badge)[] | null;
  }
  export interface GeneralItem {
    name: string;
    description: string;
    url: string;
    attendance: number;
  }
  export interface SiteInfo {
  }
  