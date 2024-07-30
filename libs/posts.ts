import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

export interface FrontmatterPost {
	title: string
	date: string
	tags: string[]
}

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

interface GetAllPostsOptions {
	newest?: boolean
	page?: number
	limit?: number
	tags?: string[]
}

export const getAllPosts = async ({
	newest = true,
	page = 1,
	limit = 10,
	tags,
}: GetAllPostsOptions) => {
	const files = fs.readdirSync(path.join(process.cwd(), 'contents'))
	const posts = await Promise.all(
		files.map(async (file) => {
			const post = await getPost(file)

			if (!post) {
				return null
			}

			const { frontmatter } = post

			return {
				frontmatter: frontmatter as unknown as FrontmatterPost,
				slug: file.replace('.mdx', ''),
			}
		}),
	)
	let filteredPosts = posts.filter((post) => post !== null)

	if (tags) {
		filteredPosts = filteredPosts.filter((post) =>
			post.frontmatter.tags?.some((tag) => tags.includes(tag)),
		)
	}
	filteredPosts = filteredPosts.sort((a, b) => {
		const dateA = new Date(a.frontmatter.date)
		const dateB = new Date(b.frontmatter.date)

		if (newest) {
			return dateB.getTime() - dateA.getTime()
		}

		return dateA.getTime() - dateB.getTime()
	})

	return filteredPosts
}
