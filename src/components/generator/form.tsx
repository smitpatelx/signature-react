import { Input } from "../generic"

const MAIN_INPUTS = {
    name: {
        label: "Name",
        id: "name",
        autoComplete: "name",
        type: "text",
        placeholder: "John Doe"
    },
    position: {
        label: "Position",
        id: "position",
        autoComplete: "position",
        type: "text",
        placeholder: "Software Engineer"
    },
    companyName: {
        label: "Company Name",
        id: "companyName",
        autoComplete: "companyName",
        type: "text",
        placeholder: "Company Inc."
    },
    email: {
        label: "Email",
        id: "email",
        autoComplete: "email",
        type: "email",
        placeholder: "xyz@email.com"
    },
    phone: {
        label: "Phone",
        id: "phone",
        autoComplete: "phone",
        type: "tel",
        placeholder: "+1 234 567 890"
    },
    profileImage: {
        label: "Profile Image Url",
        id: "profileImage",
        autoComplete: "profileImage",
        type: "text",
        placeholder: "https://example.com/profile.jpg"
    },
    website: {
        label: "Website",
        id: "website",
        autoComplete: "website",
        type: "url",
        placeholder: "https://example.com"
    }
} as const;

const SOCIAL_MEDIA_INPUTS = {
    githubUrl: {
        label: "Github Profile",
        id: "githubUrl",
        autoComplete: "githubUrl",
        type: "url",
        placeholder: "https://github.com/username"
    },
    linkedinUrl: {
        label: "Linkedin Profile",
        id: "linkedinUrl",
        autoComplete: "linkedinUrl",
        type: "url",
        placeholder: "https://linkedin.com/in/username"
    },
    xUrl: {
        label: "X Profile",
        id: "xUrl",
        autoComplete: "xUrl",
        type: "url",
        placeholder: "https://x.com/username"
    },
    instagramUrl: {
        label: "Instagram Profile",
        id: "instagramUrl",
        autoComplete: "instagramUrl",
        type: "url",
        placeholder: "https://instagram.com/username"
    }
} as const;

export const Form = () => {
    return (
        <form className="flex-1 h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4 form">
            {Object.entries(MAIN_INPUTS).map(([key, value]) => (
                <Input key={key} {...value} />
            ))}

            <div className="col-span-2 grid grid-cols-1 gap-4">
                <div className="pt-4 pb-2 border-b border-zinc-800">
                    <h2 className="text-lg font-semibold">Social Media</h2>
                </div>

                {Object.entries(SOCIAL_MEDIA_INPUTS).map(([key, value]) => (
                    <Input key={key} {...value} />
                ))}
            </div>
        </form>
    )
}