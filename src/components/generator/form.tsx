import { GeneratorActionT, GeneratorReducerState } from "@spx/lib";
import { Input } from "../generic"
import { ActionDispatch } from "react";

type InputDetails = {
    label: string;
    id: string;
    autoComplete: string;
    type: string;
    placeholder: string;
}

type InputFieldKey = keyof GeneratorReducerState['formValues'];

const MAIN_INPUTS = {
    name: {
        label: "Name",
        id: "name",
        autoComplete: "name",
        type: "text",
        placeholder: "John Doe",
    },
    position: {
        label: "Position",
        id: "position",
        autoComplete: "position",
        type: "text",
        placeholder: "Software Engineer",
    },
    company: {
        label: "Company Name",
        id: "companyName",
        autoComplete: "companyName",
        type: "text",
        placeholder: "Company Inc.",
    },
    email: {
        label: "Email",
        id: "email",
        autoComplete: "email",
        type: "email",
        placeholder: "xyz@email.com",
    },
    phone: {
        label: "Phone",
        id: "phone",
        autoComplete: "phone",
        type: "tel",
        placeholder: "+1 234 567 890",
    },
    profileImageUrl: {
        label: "Profile Image Url",
        id: "profileImageUrl",
        autoComplete: "profileImage",
        type: "text",
        placeholder: "https://example.com/profile.jpg",
    },
    website: {
        label: "Website",
        id: "website",
        autoComplete: "website",
        type: "url",
        placeholder: "https://example.com",
    }
} as Readonly<Record<InputFieldKey, InputDetails>>;

const SOCIAL_MEDIA_INPUTS = {
    githubUrl: {
        label: "Github Profile",
        id: "githubUrl",
        autoComplete: "githubUrl",
        type: "url",
        placeholder: "https://github.com/username",
    },
    linkedinUrl: {
        label: "Linkedin Profile",
        id: "linkedinUrl",
        autoComplete: "linkedinUrl",
        type: "url",
        placeholder: "https://linkedin.com/in/username",
    },
    xUrl: {
        label: "X Profile",
        id: "xUrl",
        autoComplete: "xUrl",
        type: "url",
        placeholder: "https://x.com/username",
    },
    instagramUrl: {
        label: "Instagram Profile",
        id: "instagramUrl",
        autoComplete: "instagramUrl",
        type: "url",
        placeholder: "https://instagram.com/username",
    }
} as Readonly<Record<InputFieldKey, InputDetails>>;

const BANNER_INPUTS = {
    bannerUrl: {
        label: "Banner Url",
        id: "bannerUrl",
        autoComplete: "bannerUrl",
        type: "url",
        placeholder: "https://github.com/username",
    },
    bannerImageUrl: {
        label: "Banner Image Url",
        id: "bannerImageUrl",
        autoComplete: "bannerImageUrl",
        type: "url",
        placeholder: "https://linkedin.com/in/username",
    },
} as Readonly<Record<InputFieldKey, InputDetails>>;

export const Form = ({
    dispatch,
    emailEnabled,
    phoneEnabled,
    websiteEnabled,
    socialMediaEnabled,
    bannerEnabled,
    ...values
}: GeneratorReducerState['config'] & GeneratorReducerState['formValues'] & {
    dispatch: ActionDispatch<[action: GeneratorActionT]>;
}) => {
    return (
        <form className="flex-1 h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 form">
            <Input
                {...MAIN_INPUTS.name}
                value={values.name}
                onChange={(e) => dispatch({ event: 'NameUpdated', payload: e.target.value })}
            />

            <Input
                {...MAIN_INPUTS.position}
                value={values.position}
                onChange={(e) => dispatch({ event: 'PositionUpdated', payload: e.target.value })}
            />

            <Input
                {...MAIN_INPUTS.company}
                value={values.company}
                onChange={(e) => dispatch({ event: 'CompanyUpdated', payload: e.target.value })}
            />

            {emailEnabled ? (
                <Input
                    {...MAIN_INPUTS.email}
                    value={values.email}
                    onChange={(e) => dispatch({ event: 'EmailUpdated', payload: e.target.value })}
                />
            ) : null}

            {phoneEnabled ? (
                <Input
                    {...MAIN_INPUTS.phone}
                    value={values.phone}
                    onChange={(e) => dispatch({ event: 'PhoneUpdated', payload: e.target.value })}
                />
            ) : null}

            <Input
                {...MAIN_INPUTS.profileImageUrl}
                value={values.profileImageUrl}
                onChange={(e) => dispatch({ event: 'ProfileImageUrlUpdated', payload: e.target.value })}
            />

            {websiteEnabled ? (
                <Input
                    {...MAIN_INPUTS.website}
                    value={values.website}
                    onChange={(e) => dispatch({ event: 'WebsiteUpdated', payload: e.target.value })}
                />
            ) : null}

            {socialMediaEnabled ? (
                <div className="col-span-2 grid grid-cols-1 gap-4">
                    <div className="pt-4 pb-2 border-b border-zinc-800">
                        <h2 className="text-lg font-semibold">Social Media</h2>
                    </div>

                    <Input
                        {...SOCIAL_MEDIA_INPUTS.githubUrl}
                        value={values.githubUrl}
                        onChange={(e) => dispatch({ event: 'GithubUrlUpdated', payload: e.target.value })}
                    />

                    <Input
                        {...SOCIAL_MEDIA_INPUTS.linkedinUrl}
                        value={values.linkedinUrl}
                        onChange={(e) => dispatch({ event: 'LinkedinUrlUpdated', payload: e.target.value })}
                    />

                    <Input
                        {...SOCIAL_MEDIA_INPUTS.xUrl}
                        value={values.xUrl}
                        onChange={(e) => dispatch({ event: 'XUrlUpdated', payload: e.target.value })}
                    />

                    <Input
                        {...SOCIAL_MEDIA_INPUTS.instagramUrl}
                        value={values.instagramUrl}
                        onChange={(e) => dispatch({ event: 'InstagramUrlUpdated', payload: e.target.value })}
                    />
                </div>
            ) : null}

            {bannerEnabled ? (
                <div className="col-span-2 grid grid-cols-1 gap-4">
                    <div className="pt-4 pb-2 border-b border-zinc-800">
                        <h2 className="text-lg font-semibold">Banner</h2>
                    </div>

                    <Input
                        {...BANNER_INPUTS.bannerUrl}
                        value={values.githubUrl}
                        onChange={(e) => dispatch({ event: 'BannerUrlUpdated', payload: e.target.value })}
                    />

                    <Input
                        {...BANNER_INPUTS.bannerImageUrl}
                        value={values.linkedinUrl}
                        onChange={(e) => dispatch({ event: 'BannerImageUrlUpdated', payload: e.target.value })}
                    />
                </div>
            ) : null}
        </form>
    )
}