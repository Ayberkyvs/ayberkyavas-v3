export interface ProfileSidebarContextType
  extends Pick<AboutMe, "name" | "title"> {
  socials?: AboutMe["socials"];
}
