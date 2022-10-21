import {error} from '@sveltejs/kit'

import {PUBLIC_API_BASE_URL} from '$env/static/public'
import {API_API_KEY} from '$env/static/private'

import type {RequestHandler} from './$types'

export const GET: RequestHandler = async ({fetch}) => {
	const response = await fetch(
		`${PUBLIC_API_BASE_URL}/?url=https://techy-cat-git-color-emoji-jmagrippis.vercel.app/meta/social-thumbnail?title=%F0%9F%99%8CThe%20social%20previews%20you%20deserve%20%F0%9F%99%8C%26subtitle=Provide%20your%20title,%20subtitle,%20the%20theme%20you%20want%20to%20use,%20even%20attach%20AI%20generated%20images%20we%20make%20for%20you%20with%20the%20power%20of%20Dall-E%202%20%F0%9F%A4%96%26heartCount=701`,
		{
			headers: {
				'X-API-Key': API_API_KEY,
			},
		}
	)

	if (!response.body || !response.ok) {
		return error(500)
	}

	return new Response(response.body, {
		headers: new Headers({
			'Content-Type': 'image/png',
		}),
	})
}
