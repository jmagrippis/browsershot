import {test, expect} from '@playwright/test'

test('Can navigate around the website', async ({page}) => {
	// start at the home page
	await page.goto('/')

	await expect(page).toHaveTitle(/Browser Cat/)
	await expect(page.locator('role=heading[level=1]')).toContainText(
		'Browser Cat'
	)

	// click hero button to get to the registration flow
	await page.locator('role=link[name="Get started"]').click()

	await expect(page).toHaveTitle(/Register/)
	await expect(page.locator('role=heading[level=1]')).toContainText(
		'Get started for free'
	)

	// can go to the login page
	await page.locator('role=link[name="Sign in"]').click()

	await expect(page).toHaveTitle(/Login/)
	await expect(page.locator('role=heading[level=1]')).toContainText(
		'Login with Magic Link'
	)

	// can go back to register
	await page.locator('role=link[name="Register today"]').click()

	await expect(page).toHaveTitle(/Register/)
	await expect(page.locator('role=heading[level=1]')).toContainText(
		'Get started for free'
	)

	// can go back to the home page
	await page.locator('role=link[name="navigate home"]').click()

	await expect(page).toHaveTitle(/Browser Cat/)
	await expect(page.locator('role=heading[level=1]')).toContainText(
		'Browser Cat'
	)
})
