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
	const markdown = loadPost(file)

	const mdxSource = await compileMDX({
		source: markdown,
		options: {
			parseFrontmatter: true,
		},
	})

	return mdxSource
}
