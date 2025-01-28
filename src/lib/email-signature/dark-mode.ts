import { getOtherMediaUrl, getSocialMediaUrl } from "../config";
import { ThemeVariables } from "./config";

export const DarkModeVariables: ThemeVariables = {
    tableBackground: '#333333',
    tableBorder: '#333333',

    // Profile Image

    profileImageWidth: '65',
    profileImageHeight: '65',

    // Header

    headerTableColor: 'rgb(78, 75, 76)',

    nameColor: 'rgb(255, 255, 255)',
    nameFontSize: '20px',

    positionColor: 'rgb(255, 255, 255)',
    positionFontSize: '14px',

    companyColor: 'rgb(255, 255, 255)',
    companyFontSize: '14px',

    // Contact Info

    contactTableColor: 'rgb(78, 75, 76)',

    phoneIconUrl: getOtherMediaUrl('phone-dark.png'),
    phoneIconHeight: '15px',
    phoneIconWidth: '15px',
    phoneTextColor: 'rgb(255, 255, 255)',
    phoneTextFontSize: '14px',

    emailIconUrl: getOtherMediaUrl('at-dark.png'),
    emailIconHeight: '15px',
    emailIconWidth: '15px',
    emailTextColor: 'rgb(255, 255, 255)',
    emailTextFontSize: '14px',

    websiteIconUrl: getOtherMediaUrl('user-dark.png'),
    websiteIconHeight: '15px',
    websiteIconWidth: '15px',
    websiteTextColor: 'rgb(255, 255, 255)',
    websiteTextFontSize: '14px',

    // Social Media

    linkedinIconUrl: getSocialMediaUrl('linkedin-dark.png'),
    linkedinIconHeight: '30px',
    linkedinIconWidth: '30px',

    instagramIconUrl: getSocialMediaUrl('instagram-dark.png'),
    instagramIconHeight: '30px',
    instagramIconWidth: '30px',

    xIconUrl: getSocialMediaUrl('x-dark.png'),
    xIconHeight: '30px',
    xIconWidth: '30px',

    githubIconUrl: getSocialMediaUrl('github-dark.png'),
    githubIconHeight: '30px',
    githubIconWidth: '30px',

    facebookIconUrl: getSocialMediaUrl('facebook-dark.png'),
    facebookIconHeight: '30px',
    facebookIconWidth: '30px',

    // Banner

    bannerImageWidth: '75%',
    bannerImageStyleWidth: '390px',
    bannerImageStyleHeight: 'auto',
};