import mdx from '@next/mdx'

const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = withMDX({
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
})

export default nextConfig
