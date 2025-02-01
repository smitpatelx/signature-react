import { useMemo, useReducer } from "react";
import { getStorageInstance, STORAGE_KEYS, STORAGE_TYPE } from "../storage";
import { ICON_SIZES, IconSize, E, trim, pipe, assertNeverThrow, Lens, getBannerUrl, safeParseJson } from "@spx/lib/common";

export type GeneratorReducerState = {
    config: {
        emailEnabled: boolean;
        phoneEnabled: boolean;
        websiteEnabled: boolean;
        socialMediaEnabled: boolean;
        bannerEnabled: boolean;
        lightModeEnabled: boolean;
        iconSize: IconSize;
    },
    formValues: {
        name: string;
        position: string;
        companyName: string;
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
        bannerEnabled: true,
        lightModeEnabled: false,
        iconSize: ICON_SIZES.lg,
    },
    formValues: {
        name: 'Smit',
        position: 'Software Engineer',
        companyName: 'Company Inc.',
        email: 'smit@company.com',
        phone: '+1 000-000-0000',
        profileImageUrl: 'https://avatars.githubusercontent.com/u/36929408?v=4',
        website: 'https://smitpatelx.com',
        githubUrl: 'https://github.com/smitpatelx',
        linkedinUrl: 'https://linkedin.com/in/smitpatelx',
        xUrl: 'https://x.com/username',
        instagramUrl: 'https://instagram.com/username',
        facebookUrl: 'https://facebook.com/username',
        bannerUrl: 'https://smitpatelx.com',
        bannerImageUrl: getBannerUrl('email-banner100.png'),
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
    iconSize: Lens.fromPath<GeneratorReducerState>()(['config', 'iconSize']),

    formValues: Lens.fromProp<GeneratorReducerState>()('formValues'),

    profileImageUrl: Lens.fromPath<GeneratorReducerState>()(['formValues', 'profileImageUrl']),
    name: Lens.fromPath<GeneratorReducerState>()(['formValues', 'name']),
    position: Lens.fromPath<GeneratorReducerState>()(['formValues', 'position']),
    companyName: Lens.fromPath<GeneratorReducerState>()(['formValues', 'companyName']),
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
    { event: 'IconSizeUpdated', payload: IconSize } |
    { event: 'LightModeEnabledUpdated', payload: boolean } |
    { event: 'NameUpdated', payload: string } |
    { event: 'PositionUpdated', payload: string } |
    { event: 'CompanyNameUpdated', payload: string } |
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
    { event: 'StateUpdated', payload: GeneratorReducerState } |
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
        case 'IconSizeUpdated':
            return GeneratorLens.iconSize.set(action.payload)(state);
        case 'LightModeEnabledUpdated':
            return GeneratorLens.lightModeEnabled.set(action.payload)(state);
        case 'NameUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.name.set(payload)(state));
        case 'PositionUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.position.set(payload)(state));
        case 'CompanyNameUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.companyName.set(payload)(state));
        case 'EmailUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.email.set(payload)(state));
        case 'PhoneUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.phone.set(payload)(state));
        case 'ProfileImageUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.profileImageUrl.set(payload)(state));
        case 'WebsiteUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.website.set(payload)(state));
        case 'GithubUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.githubUrl.set(payload)(state));
        case 'LinkedinUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.linkedinUrl.set(payload)(state));
        case 'XUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.xUrl.set(payload)(state));
        case 'InstagramUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.instagramUrl.set(payload)(state));
        case 'FacebookUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.facebookUrl.set(payload)(state));
        case 'BannerUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.bannerUrl.set(payload)(state));
        case 'BannerImageUrlUpdated':
            return pipe(action.payload, trim, (payload) => GeneratorLens.bannerImageUrl.set(payload)(state));
        case 'StateUpdated':
            return action.payload;
        case 'Reset':
            return DEFAULT_STATE;
        default:
            return assertNeverThrow(action);
    }
}


export const useGeneratorReducer = () => {
    const defaultState = useMemo(() => {
        const generateStorageInstance = getStorageInstance(STORAGE_TYPE.local, STORAGE_KEYS.generator);
        const value = generateStorageInstance.get();

        if (value) {
            const parsedValue = safeParseJson<GeneratorReducerState>(value);

            if (E.isLeft(parsedValue)) {
                // dispatch({ event: 'StateUpdated', payload: DEFAULT_STATE });
                return DEFAULT_STATE;
            }
            // dispatch({ event: 'StateUpdated', payload: parsedValue.right });
            return parsedValue.right;
        }

        // dispatch({ event: 'StateUpdated', payload: DEFAULT_STATE });
        return DEFAULT_STATE;
    }, []);

    const [state, dispatch] = useReducer(reducer, defaultState);

    return [state, dispatch] as const;
};