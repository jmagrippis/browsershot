import {json} from '@sveltejs/kit'

import {isTheme} from '$lib/types'
import type {RequestHandler} from './$types'

export const ONE_DAY_IN_SECONDS = 24 * 60 * 60
const TEN_YEARS_IN_SECONDS = 10 * 365 * ONE_DAY_IN_SECONDS

// POST /theme
export const POST: RequestHandler = async ({request, cookies}) => {
	const formData = await request.formData()
	const theme = formData.get('theme')

	if (!isTheme(theme)) {
		return json(
			{
				errors: {theme: `not a valid theme value: ${theme}`},
			},
			{status: 400}
		)
	}

	cookies.set('theme', theme, {
		path: '/',
		maxAge: TEN_YEARS_IN_SECONDS,
	})

	return json(theme)
}

// DELETE /theme
export const DELETE: RequestHandler = async ({cookies}) => {
	cookies.delete('theme', {path: '/'})

	return new Response(null, {status: 204})
}
