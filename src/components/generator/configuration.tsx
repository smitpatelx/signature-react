import { Switch } from "@spx/components"
import { GeneratorActionT, GeneratorReducerState } from "@spx/lib"
import { ActionDispatch } from "react";

export const Configuration = ({
    emailEnabled,
    phoneEnabled,
    websiteEnabled,
    socialMediaEnabled,
    bannerEnabled,
    lightModeEnabled,
    dispatch,
}: GeneratorReducerState['config'] & {
    dispatch: ActionDispatch<[action: GeneratorActionT]>;
}) => {
    return (
        <div className="flex flex-col items-center border-b border-zinc-800">
            <div className="flex flex-nowrap items-center justify-between gap-6 container px-4 py-4">
                <div className="flex flex-nowrap gap-6">
                    <Switch
                        id="enableEmail"
                        label="Email"
                        value={emailEnabled}
                        onChange={(value) => dispatch({ event: 'EmailEnabledUpdated', payload: value })}
                    />

                    <Switch
                        id="enablePhone"
                        label="Phone"
                        value={phoneEnabled}
                        onChange={(value) => dispatch({ event: 'PhoneEnabledUpdated', payload: value })}
                    />

                    <Switch
                        id="enableWebsite"
                        label="Website"
                        value={websiteEnabled}
                        onChange={(value) => dispatch({ event: 'WebsiteEnabledUpdated', payload: value })}
                    />

                    <Switch
                        id="enableSocialMedia"
                        label="Social Media"
                        value={socialMediaEnabled}
                        onChange={(value) => dispatch({ event: 'SocialMediaEnabledUpdated', payload: value })}
                    />

                    <Switch
                        id="bannerEnabled"
                        label="Banner"
                        value={bannerEnabled}
                        onChange={(value) => dispatch({ event: 'BannerEnabledUpdated', payload: value })}
                    />
                </div>

                <Switch
                    id="enableLightMode"
                    label="Light Mode"
                    value={lightModeEnabled}
                    onChange={(value) => dispatch({ event: 'LightModeEnabledUpdated', payload: value })}
                />
            </div>
        </div>
    )
}