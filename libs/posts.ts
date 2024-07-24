import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export const loadPost = (file: string) => {
	const markdown = fs.readFileSync(
		path.join(process.cwd(), 'contents', file),
		'utf-8',
	)

	return markdown
}

export const getPost = async (file: string) => {
	try {
		const markdown = loadPost(file)

		const mdxSource = await compileMDX({
			source: markdown,
			options: {
				parseFrontmatter: true,
			},
		})

		return mdxSource
	} catch (error) {
		return null
	}
}

export const getAllPosts = async () => {
	const files = fs.readdirSync(path.join(process.cwd(), 'contents'))
	const posts = await Promise.all(
		files.map(async (file) => {
			const post = await getPost(file)

			if (!post) {
				return null
			}

			const { frontmatter } = post

			return { frontmatter, slug: file.replace('.mdx', '') }
		}),
	)

	return posts
}
