import withBundleAnalyzer from "@next/bundle-analyzer";
import withMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // swcMinify: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["i.ytimg.com"],
  },
  reactStrictMode: true,
  pageExtensions: ["md", "tsx", "ts", "jsx", "js", "mdx"],
  experimental: {
    optimizeCss: false,
    mdxRs: true,
    turbo: { enabled: true },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default withMDX({
  extension: /\.mdx$/,
})(
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === "true",
  })(nextConfig),
);
