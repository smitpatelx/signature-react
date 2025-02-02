export const APP_CONFIG = {
  staticHostName: "https://static.smitpatelx.com",
  projectRepo: "https://github.com/smitpatelx/signature-react",
  authorPortfolio: "https://smitpatelx.com",
  authorEmail: "mailto:inspire@smitpatelx.com",
  fallbackImage: "https://static.smitpatelx.com/smitpatelx-v2/fallback.svg",
};

export const getStaticUrl = (pathWithForwardSlash: string) => {
  return `${APP_CONFIG.staticHostName}${pathWithForwardSlash}` as const;
};

export const getSocialMediaUrl = (socialMediaPath: string) => {
  return `${APP_CONFIG.staticHostName}/signature-gen/social/${socialMediaPath}` as const;
};
export const getOtherMediaUrl = (socialMediaPath: string) => {
  return `${APP_CONFIG.staticHostName}/signature-gen/other/${socialMediaPath}` as const;
};
export const getBannerUrl = (socialMediaPath: string) => {
  return `${APP_CONFIG.staticHostName}/signature-gen/banner/${socialMediaPath}` as const;
};
