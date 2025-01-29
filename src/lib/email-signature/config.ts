
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

    phoneEnabled: boolean;
    emailEnabled: boolean;
    websiteEnabled: boolean;
    socialMediaEnabled: boolean;
    bannerEnabled: boolean;
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

export type AllVariables = ThemeVariables & ContentVariables;

export const ICON_SIZES = {
    sm: 'sm',
    md: 'md',
    lg: 'lg',
} as const;
export type IconSize = typeof ICON_SIZES[keyof typeof ICON_SIZES];

export const SIZES = {
    profileImage: {
        [ICON_SIZES.sm]: {
            height: '50px',
            width: '50px',
        },
        [ICON_SIZES.md]: {
            height: '65px',
            width: '65px',
        },
        [ICON_SIZES.lg]: {
            height: '75px',
            width: '75px',
        },
    },
    contactIcon: {
        [ICON_SIZES.sm]: {
            height: '18px',
            width: '18px',
        },
        [ICON_SIZES.md]: {
            height: '20px',
            width: '20px',
        },
        [ICON_SIZES.lg]: {
            height: '20px',
            width: '20px',
        },
    },
    socialIcon: {
        [ICON_SIZES.sm]: {
            height: '30px',
            width: '30px',
        },
        [ICON_SIZES.md]: {
            height: '36px',
            width: '36px',
        },
        [ICON_SIZES.lg]: {
            height: '42px',
            width: '42px',
        },
    },
    banner: {
        [ICON_SIZES.sm]: {
            height: 'auto',
            width: '300px',
        },
        [ICON_SIZES.md]: {
            height: 'auto',
            width: '390px',
        },
        [ICON_SIZES.lg]: {
            height: 'auto',
            width: '460px',
        },
    }
}

export const getVariablesWithSize = (size: IconSize) => (themeVariables: ThemeVariables): ThemeVariables => {
    return {
        ...themeVariables,

        profileImageWidth: SIZES.profileImage[size].width,
        profileImageHeight: SIZES.profileImage[size].height,

        phoneIconHeight: SIZES.contactIcon[size].height,
        phoneIconWidth: SIZES.contactIcon[size].width,

        emailIconHeight: SIZES.contactIcon[size].height,
        emailIconWidth: SIZES.contactIcon[size].width,

        websiteIconHeight: SIZES.contactIcon[size].height,
        websiteIconWidth: SIZES.contactIcon[size].width,

        linkedinIconHeight: SIZES.socialIcon[size].height,
        linkedinIconWidth: SIZES.socialIcon[size].width,

        instagramIconHeight: SIZES.socialIcon[size].height,
        instagramIconWidth: SIZES.socialIcon[size].width,

        xIconHeight: SIZES.socialIcon[size].height,
        xIconWidth: SIZES.socialIcon[size].width,

        githubIconHeight: SIZES.socialIcon[size].height,
        githubIconWidth: SIZES.socialIcon[size].width,

        facebookIconHeight: SIZES.socialIcon[size].height,
        facebookIconWidth: SIZES.socialIcon[size].width,

        bannerImageStyleHeight: SIZES.banner[size].height,
        bannerImageStyleWidth: SIZES.banner[size].width,
    } satisfies ThemeVariables;
};
