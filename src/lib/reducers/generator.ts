import { useReducer } from "react";
import { assertNeverThrow, Lens } from "@spx/lib";

export type GeneratorReducerState = {
    config: {
        emailEnabled: boolean;
        phoneEnabled: boolean;
        websiteEnabled: boolean;
        socialMediaEnabled: boolean;
        bannerEnabled: boolean;
        lightModeEnabled: boolean;
    },
    formValues: {
        name: string;
        position: string;
        company: string;
        email: string;
        phone: string;
        profileImageUrl: string;
        website: string;
        githubUrl: string;
        linkedinUrl: string;
        xUrl: string;
        instagramUrl: string;
        facebookUrl: string;
        bannerUrl: string;
        bannerImageUrl: string;
    }
};

const DEFAULT_STATE: GeneratorReducerState = {
    config: {
        emailEnabled: true,
        phoneEnabled: true,
        websiteEnabled: true,
        socialMediaEnabled: true,
        bannerEnabled: false,
        lightModeEnabled: false,
    },
    formValues: {
        name: 'Smit',
        position: 'Software Engineer',
        company: 'Company Inc.',
        email: 'smit@company.com',
        phone: '+1 000-000-0000',
        profileImageUrl: 'https://avatars.githubusercontent.com/u/36929408?v=4',
        website: 'https://smitpatelx.com',
        githubUrl: 'https://github.com/smitpatelx',
        linkedinUrl: 'https://linkedin.com/in/smitpatelx',
        xUrl: 'https://x.com/smitpatelx',
        instagramUrl: 'https://instagram.com/smit.dev',
        facebookUrl: '',
        bannerUrl: '',
        bannerImageUrl: '',
    }
};

const GeneratorLens = {
    config: Lens.fromProp<GeneratorReducerState>()('config'),

    emailEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'emailEnabled']),
    phoneEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'phoneEnabled']),
    websiteEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'websiteEnabled']),
    socialMediaEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'socialMediaEnabled']),
    lightModeEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'lightModeEnabled']),
    bannerEnabled: Lens.fromPath<GeneratorReducerState>()(['config', 'bannerEnabled']),

    formValues: Lens.fromProp<GeneratorReducerState>()('formValues'),

    profileImageUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'profileImageUrl']),
    name: Lens.fromPath<GeneratorReducerState>()(['formValues', 'name']),
    position: Lens.fromPath<GeneratorReducerState>()(['formValues', 'position']),
    company: Lens.fromPath<GeneratorReducerState>()(['formValues', 'company']),
    email: Lens.fromPath<GeneratorReducerState>()(['formValues', 'email']),
    phone: Lens.fromPath<GeneratorReducerState>()(['formValues', 'phone']),
    website: Lens.fromPath<GeneratorReducerState>()(['formValues', 'website']),

    githubUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'githubUrl']),
    linkedinUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'linkedinUrl']),
    xUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'xUrl']),
    instagramUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'instagramUrl']),
    facebookUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'facebookUrl']),

    bannerUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'bannerUrl']),
    bannerImageUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'bannerImageUrl']),
}

export type GeneratorActionT =
    { event: 'ConfigUpdated', payload: Partial<GeneratorReducerState['config']> } |
    { event: 'FormValuesUpdated', payload: Partial<GeneratorReducerState['formValues']> } |
    { event: 'EmailEnabledUpdated', payload: boolean } |
    { event: 'PhoneEnabledUpdated', payload: boolean } |
    { event: 'WebsiteEnabledUpdated', payload: boolean } |
    { event: 'SocialMediaEnabledUpdated', payload: boolean } |
    { event: 'BannerEnabledUpdated', payload: boolean } |
    { event: 'LightModeEnabledUpdated', payload: boolean } |
    { event: 'NameUpdated', payload: string } |
    { event: 'PositionUpdated', payload: string } |
    { event: 'CompanyUpdated', payload: string } |
    { event: 'EmailUpdated', payload: string } |
    { event: 'PhoneUpdated', payload: string } |
    { event: 'ProfileImageUrlUpdated', payload: string } |
    { event: 'WebsiteUpdated', payload: string } |
    { event: 'GithubUrlUpdated', payload: string } |
    { event: 'LinkedinUrlUpdated', payload: string } |
    { event: 'XUrlUpdated', payload: string } |
    { event: 'InstagramUrlUpdated', payload: string } |
    { event: 'FacebookUrlUpdated', payload: string } |
    { event: 'BannerUrlUpdated', payload: string } |
    { event: 'BannerImageUrlUpdated', payload: string } |
    { event: 'Reset', payload: undefined };

export type GeneratorActionEvent = GeneratorActionT['event'];
export type GeneratorActionPayload = GeneratorActionT['payload'];

const reducer = (state: GeneratorReducerState, action: GeneratorActionT): GeneratorReducerState => {
    switch (action.event) {
        case 'ConfigUpdated':
            return GeneratorLens.config.set({
                ...state.config,
                ...action.payload
            })(state);
        case 'FormValuesUpdated':
            return GeneratorLens.formValues.set({
                ...state.formValues,
                ...action.payload
            })(state);
        case 'EmailEnabledUpdated':
            return GeneratorLens.emailEnabled.set(action.payload)(state);
        case 'PhoneEnabledUpdated':
            return GeneratorLens.phoneEnabled.set(action.payload)(state);
        case 'WebsiteEnabledUpdated':
            return GeneratorLens.websiteEnabled.set(action.payload)(state);
        case 'SocialMediaEnabledUpdated':
            return GeneratorLens.socialMediaEnabled.set(action.payload)(state);
        case 'BannerEnabledUpdated':
            return GeneratorLens.bannerEnabled.set(action.payload)(state);
        case 'LightModeEnabledUpdated':
            return GeneratorLens.lightModeEnabled.set(action.payload)(state);
        case 'NameUpdated':
            return GeneratorLens.name.set(action.payload)(state);
        case 'PositionUpdated':
            return GeneratorLens.position.set(action.payload)(state);
        case 'CompanyUpdated':
            return GeneratorLens.company.set(action.payload)(state);
        case 'EmailUpdated':
            return GeneratorLens.email.set(action.payload)(state);
        case 'PhoneUpdated':
            return GeneratorLens.phone.set(action.payload)(state);
        case 'ProfileImageUrlUpdated':
            return GeneratorLens.profileImageUrl.set(action.payload)(state);
        case 'WebsiteUpdated':
            return GeneratorLens.website.set(action.payload)(state);
        case 'GithubUrlUpdated':
            return GeneratorLens.githubUrl.set(action.payload)(state);
        case 'LinkedinUrlUpdated':
            return GeneratorLens.linkedinUrl.set(action.payload)(state);
        case 'XUrlUpdated':
            return GeneratorLens.xUrl.set(action.payload)(state);
        case 'InstagramUrlUpdated':
            return GeneratorLens.instagramUrl.set(action.payload)(state);
        case 'FacebookUrlUpdated':
            return GeneratorLens.facebookUrl.set(action.payload)(state);
        case 'BannerUrlUpdated':
            return GeneratorLens.bannerUrl.set(action.payload)(state);
        case 'BannerImageUrlUpdated':
            return GeneratorLens.bannerImageUrl.set(action.payload)(state);
        case 'Reset':
            return DEFAULT_STATE;
        default:
            return assertNeverThrow(action);
    }
}


export const useGeneratorReducer = () => {
    const [state, dispatch] = useReducer(reducer, DEFAULT_STATE);
    return [state, dispatch] as const;
};