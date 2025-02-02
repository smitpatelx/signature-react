import { getOtherMediaUrl, getSocialMediaUrl } from "../config";
import type { ThemeVariables } from "./config";

export const LightModeVariables: ThemeVariables = {
  tableBackground: "#ffffff",
  tableBorder: "#ffffff",

  // Profile Image

  profileImageWidth: "65",
  profileImageHeight: "65",

  // Header

  headerTableColor: "rgb(78, 75, 76)",

  nameColor: "rgb(2, 2, 2)",
  nameFontSize: "20px",

  positionColor: "rgb(51, 51, 51)",
  positionFontSize: "14px",

  companyColor: "rgb(51, 51, 51)",
  companyFontSize: "14px",

  // Contact Info

  contactTableColor: "rgb(78, 75, 76)",

  phoneIconUrl: getOtherMediaUrl("phone-white.png"),
  phoneIconHeight: "15px",
  phoneIconWidth: "15px",
  phoneTextColor: "rgb(51, 51, 51)",
  phoneTextFontSize: "14px",

  emailIconUrl: getOtherMediaUrl("at-white.png"),
  emailIconHeight: "15px",
  emailIconWidth: "15px",
  emailTextColor: "rgb(51, 51, 51)",
  emailTextFontSize: "14px",

  websiteIconUrl: getOtherMediaUrl("user-white.png"),
  websiteIconHeight: "15px",
  websiteIconWidth: "15px",
  websiteTextColor: "rgb(51, 51, 51)",
  websiteTextFontSize: "14px",

  // Social Media

  linkedinIconUrl: getSocialMediaUrl("linkedin-white.png"),
  linkedinIconHeight: "30px",
  linkedinIconWidth: "30px",

  instagramIconUrl: getSocialMediaUrl("instagram-white.png"),
  instagramIconHeight: "30px",
  instagramIconWidth: "30px",

  xIconUrl: getSocialMediaUrl("x-white.png"),
  xIconHeight: "30px",
  xIconWidth: "30px",

  githubIconUrl: getSocialMediaUrl("github-white.png"),
  githubIconHeight: "30px",
  githubIconWidth: "30px",

  facebookIconUrl: getSocialMediaUrl("facebook-white.png"),
  facebookIconHeight: "30px",
  facebookIconWidth: "30px",

  // Banner

  bannerImageWidth: "75%",
  bannerImageStyleWidth: "390px",
  bannerImageStyleHeight: "auto",
};
