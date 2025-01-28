
export type ContentVariables = {
    profileImageUrl: string;

    name: string;
    position: string;
    companyName: string;

    phone: string;
    email: string;
    website: string;

    linkedinUrl: string;
    instagramUrl: string;
    xUrl: string;
    githubUrl: string;
    facebookUrl: string;

    bannerUrl: string;
    bannerImageUrl: string;
};

export type ThemeVariables = {
    tableBackground: string;
    tableBorder: string;

    // Profile Image

    profileImageWidth: string;
    profileImageHeight: string;

    // Header

    headerTableColor: string;

    nameColor: string;
    nameFontSize: string;

    positionColor: string;
    positionFontSize: string;

    companyColor: string;
    companyFontSize: string;

    // Contact Info

    contactTableColor: string;

    phoneIconUrl: string;
    phoneIconHeight: string;
    phoneIconWidth: string;
    phoneTextColor: string;
    phoneTextFontSize: string;

    emailIconUrl: string;
    emailIconHeight: string;
    emailIconWidth: string;
    emailTextColor: string;
    emailTextFontSize: string;

    websiteIconUrl: string;
    websiteIconHeight: string;
    websiteIconWidth: string;
    websiteTextColor: string;
    websiteTextFontSize: string;

    // Social Media

    linkedinIconUrl: string;
    linkedinIconHeight: string;
    linkedinIconWidth: string;

    instagramIconUrl: string;
    instagramIconHeight: string;
    instagramIconWidth: string;

    xIconUrl: string;
    xIconHeight: string;
    xIconWidth: string;

    githubIconUrl: string;
    githubIconHeight: string;
    githubIconWidth: string;

    facebookIconUrl: string;
    facebookIconHeight: string;
    facebookIconWidth: string;

    // Banner

    bannerImageWidth: string;
    bannerImageStyleWidth: string;
    bannerImageStyleHeight: string;
};

export const LOGO_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;

export const SIZES = {
    profileImage: {
        [LOGO_SIZES.sm]: {
            height: '50px',
            width: '50px',
        },
        [LOGO_SIZES.md]: {
            height: '65',
            width: '65',
        },
        [LOGO_SIZES.lg]: {
            height: '75px',
            width: '75px',
        },
    },
    contactIcon: {
        [LOGO_SIZES.sm]: {
            height: '10px',
            width: '10px',
        },
        [LOGO_SIZES.md]: {
            height: '15px',
            width: '15px',
        },
        [LOGO_SIZES.lg]: {
            height: '20px',
            width: '20px',
        },
    },
    socialIcon: {
        [LOGO_SIZES.sm]: {
            height: '25px',
            width: '25px',
        },
        [LOGO_SIZES.md]: {
            height: '30px',
            width: '30px',
        },
        [LOGO_SIZES.lg]: {
            height: '35px',
            width: '35px',
        },
    },
    banner: {
        [LOGO_SIZES.sm]: {
            height: 'auto',
            width: '300px',
        },
        [LOGO_SIZES.md]: {
            height: 'auto',
            width: '390px',
        },
        [LOGO_SIZES.lg]: {
            height: 'auto',
            width: '460px',
        },
    }
}
