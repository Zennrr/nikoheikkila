import withMDX from '@next/mdx';

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  devIndicators: false
};

export default withMDX({
  extension: /\.mdx?$/,
})(nextConfig);