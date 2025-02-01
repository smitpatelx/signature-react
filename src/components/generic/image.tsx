'use client';

import { useState } from 'react';
import NextImage, { ImageProps } from 'next/image';
import { APP_CONFIG, cn } from '@spx/lib';

type DImageProps = ImageProps & {
    src: string,
    fallbackSrc?: string,
};

export const Image = ({
    src,
    fallbackSrc = APP_CONFIG.fallbackImage,
    className,
    ...rest
}: DImageProps) => {
    const [imgSrc, setImgSrc] = useState(src);

    const setImgSrcOnError = (x: string) => {
        setImgSrc(x);
    };

    return (
        <NextImage
            {...rest}
            blurDataURL={APP_CONFIG.fallbackImage}
            className={cn(
                className,
                'h-auto w-auto',
            )}
            onError={() => {
                setImgSrcOnError(fallbackSrc);
            }}
            onLoadingComplete={(result) => {
                if (result.naturalWidth === 0) {
                    // Broken image
                    setImgSrcOnError(fallbackSrc);
                }
            }}
            placeholder='blur'
            loader={({ src }) => src}
            src={imgSrc}
        />
    );
};