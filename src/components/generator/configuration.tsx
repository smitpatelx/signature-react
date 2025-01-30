import { OptionsT, Select, Switch } from "@spx/components"
import { GeneratorActionT, GeneratorReducerState, IconSize } from "@spx/lib"
import { ICON_SIZES } from "@spx/lib";
import { ActionDispatch } from "react";

const ICON_SIZE_LABELS = {
    [ICON_SIZES.sm]: 'Small',
    [ICON_SIZES.md]: 'Medium',
    [ICON_SIZES.lg]: 'Large',
} satisfies Record<IconSize, string>;

const ICON_SIZE_OPTIONS: OptionsT<IconSize> = Object.values(ICON_SIZES).map((size) => ({
    label: ICON_SIZE_LABELS[size],
    value: size,
}));

export const Configuration = ({
    emailEnabled,
    phoneEnabled,
    websiteEnabled,
    socialMediaEnabled,
    bannerEnabled,
    lightModeEnabled,
    iconSize,
    dispatch,
}: GeneratorReducerState['config'] & {
    dispatch: ActionDispatch<[action: GeneratorActionT]>;
}) => {
    return (
        <div className="flex flex-col items-center border-b border-zinc-800">
            <div className="flex flex-col lg:flex-row flex-nowrap lg:items-center lg:justify-between gap-6 container px-4 py-4">
                <div className="flex flex-col lg:flex-row flex-nowrap gap-6 lg:items-center lg:justify-start">
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

                <div className="flex flex-col lg:flex-row flex-nowrap gap-6 lg:items-center lg:justify-end">
                    <Switch
                        id="enableLightMode"
                        label="Light Mode"
                        value={lightModeEnabled}
                        onChange={(value) => dispatch({ event: 'LightModeEnabledUpdated', payload: value })}
                    />

                    <Select
                        id="iconSize"
                        label="Icon Size"
                        value={iconSize}
                        onChange={(value) => dispatch({ event: 'IconSizeUpdated', payload: value })}
                        options={ICON_SIZE_OPTIONS}
                    />
                </div>
            </div>
        </div>
    )
}