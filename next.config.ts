import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  webpack: (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {
            test: /\.eta$/,
            loader: "raw-loader",
          },
        ],
      },
    };
  },
  experimental: {
    turbo: {
      rules: {
        '*.eta': {
          loaders: ['raw-loader'],
          as: '*.ts',
        }
      },
    },
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: 'static.smitpatelx.com',
        protocol: 'https',
      }
    ],
  }
};

export default nextConfig;
