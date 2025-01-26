"use client"

import { Switch } from "@spx/components"

export const Configuration = () => {
    return (
        <div className="flex flex-col items-center px-6 py-4 border-b border-zinc-800">
            <div className="flex flex-nowrap items-center justify-between gap-6 container">
                <div className="flex flex-nowrap gap-6">
                    <Switch
                        id="enableEmail"
                        label="Email"
                        value={true}
                        onChange={() => { }}
                    />

                    <Switch
                        id="enablePhone"
                        label="Phone"
                        value={true}
                        onChange={() => { }}
                    />

                    <Switch
                        id="enableWebsite"
                        label="Website"
                        value={true}
                        onChange={() => { }}
                    />

                    <Switch
                        id="enableSocialMedia"
                        label="Social Media"
                        value={true}
                        onChange={() => { }}
                    />
                </div>

                <Switch
                    id="enableLightMode"
                    label="Light Mode"
                    value={false}
                    onChange={() => { }}
                />
            </div>
        </div>
    )
}