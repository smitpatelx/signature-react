import type { GeneratorActionT, GeneratorReducerState } from "@spx/lib/client";
import { Divider, Input } from "@spx/components";
import type { ActionDispatch } from "react";

type InputDetails = {
  label: string;
  id: string;
  autoComplete: string;
  type: string;
  placeholder: string;
};

type InputFieldKey = keyof GeneratorReducerState["formValues"];

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
  companyName: {
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
  },
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
  },
  facebookUrl: {
    label: "Facebook Profile",
    id: "facebookUrl",
    autoComplete: "facebookUrl",
    type: "url",
    placeholder: "https://facebook.com/username",
  },
} as Readonly<Record<InputFieldKey, InputDetails>>;

const BANNER_INPUTS = {
  bannerUrl: {
    label: "Banner Url",
    id: "bannerUrl",
    autoComplete: "bannerUrl",
    type: "url",
    placeholder: "https://yourwebsite.com/contact",
  },
  bannerImageUrl: {
    label: "Banner Image Url",
    id: "bannerImageUrl",
    autoComplete: "bannerImageUrl",
    type: "url",
    placeholder: "https://static.yourwebsite.com/banner.jpg",
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
}: GeneratorReducerState["config"] &
  GeneratorReducerState["formValues"] & {
    dispatch: ActionDispatch<[action: GeneratorActionT]>;
  }) => {
  return (
    <div className="flex-1 h-full p-4 form overflow-y-auto">
      <form className="h-full grid grid-cols-1 gap-4">
        <div className="col-span-full grid grid-cols-1 xl:grid-cols-2 gap-4">
          <Input
            {...MAIN_INPUTS.name}
            value={values.name}
            onChange={(e) => dispatch({ event: "NameUpdated", payload: e.target.value })}
          />

          <Input
            {...MAIN_INPUTS.position}
            value={values.position}
            onChange={(e) => dispatch({ event: "PositionUpdated", payload: e.target.value })}
          />

          <Input
            {...MAIN_INPUTS.companyName}
            value={values.companyName}
            onChange={(e) => dispatch({ event: "CompanyNameUpdated", payload: e.target.value })}
          />

          {emailEnabled ? (
            <Input
              {...MAIN_INPUTS.email}
              value={values.email}
              onChange={(e) => dispatch({ event: "EmailUpdated", payload: e.target.value })}
            />
          ) : null}

          {phoneEnabled ? (
            <Input
              {...MAIN_INPUTS.phone}
              value={values.phone}
              onChange={(e) => dispatch({ event: "PhoneUpdated", payload: e.target.value })}
            />
          ) : null}

          <Input
            {...MAIN_INPUTS.profileImageUrl}
            value={values.profileImageUrl}
            onChange={(e) => dispatch({ event: "ProfileImageUrlUpdated", payload: e.target.value })}
          />

          {websiteEnabled ? (
            <Input
              {...MAIN_INPUTS.website}
              value={values.website}
              onChange={(e) => dispatch({ event: "WebsiteUpdated", payload: e.target.value })}
            />
          ) : null}
        </div>

        {socialMediaEnabled ? (
          <div className="col-span-full grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="col-span-full pt-4 pb-2 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-zinc-100">Social Media</h2>

              <Divider />
            </div>

            <Input
              {...SOCIAL_MEDIA_INPUTS.githubUrl}
              value={values.githubUrl}
              onChange={(e) => dispatch({ event: "GithubUrlUpdated", payload: e.target.value })}
            />

            <Input
              {...SOCIAL_MEDIA_INPUTS.linkedinUrl}
              value={values.linkedinUrl}
              onChange={(e) => dispatch({ event: "LinkedinUrlUpdated", payload: e.target.value })}
            />

            <Input
              {...SOCIAL_MEDIA_INPUTS.xUrl}
              value={values.xUrl}
              onChange={(e) => dispatch({ event: "XUrlUpdated", payload: e.target.value })}
            />

            <Input
              {...SOCIAL_MEDIA_INPUTS.instagramUrl}
              value={values.instagramUrl}
              onChange={(e) => dispatch({ event: "InstagramUrlUpdated", payload: e.target.value })}
            />

            <Input
              {...SOCIAL_MEDIA_INPUTS.facebookUrl}
              value={values.facebookUrl}
              onChange={(e) => dispatch({ event: "FacebookUrlUpdated", payload: e.target.value })}
            />
          </div>
        ) : null}

        {bannerEnabled ? (
          <div className="col-span-full grid grid-cols-1 xl:grid-cols-2 gap-4">
            <div className="col-span-full pt-4 pb-2 flex flex-col gap-2">
              <h2 className="text-lg font-semibold text-zinc-100">Banner</h2>

              <Divider />
            </div>

            <Input
              {...BANNER_INPUTS.bannerUrl}
              value={values.bannerUrl}
              onChange={(e) => dispatch({ event: "BannerUrlUpdated", payload: e.target.value })}
            />

            <Input
              {...BANNER_INPUTS.bannerImageUrl}
              value={values.bannerImageUrl}
              onChange={(e) => dispatch({ event: "BannerImageUrlUpdated", payload: e.target.value })}
            />
          </div>
        ) : null}
      </form>
    </div>
  );
};
