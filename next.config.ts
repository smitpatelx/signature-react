import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    }
  }
};

export default nextConfig;
