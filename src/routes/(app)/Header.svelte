<script lang="ts">
	import type {Theme} from '$lib/types'
	import Logotype from '$lib/components/Logotype.svelte'
	import ThemeToggleIcon from '$lib/components/ThemeToggleIcon.svelte'
	import {theme} from '$lib/stores/theme'
	import {browser} from '$app/environment'
	import {enhance} from '$app/forms'

	const deriveNextTheme = (currentTheme: Theme): Theme => {
		if (!browser) return currentTheme

		if (currentTheme === 'auto') {
			return window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'light'
				: 'dark'
		}

		return currentTheme === 'dark' ? 'light' : 'dark'
	}

	$: nextTheme = deriveNextTheme($theme)
</script>

<header class="container flex items-center px-2 py-4">
	<h1 class="mr-2">
		<Logotype />
	</h1>
	<nav class="mr-4 flex grow">
		<ul class="flex gap-2 md:gap-4">
			<li><a class="hidden no-underline sm:inline" href="/#demos">Demos</a></li>
			<li><a class="no-underline" href="/#testimonials">Testimonials</a></li>
			<li><a class="no-underline" href="/#pricing">Pricing</a></li>
		</ul>
		<span class="grow text-center text-copy-muted">|</span>
		<ul class="flex gap-2 md:gap-4">
			<li class="hidden sm:block">
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/get-started">Get started</a>
			</li>
		</ul>
	</nav>
	<form
		class="flex"
		method="POST"
		action="/theme"
		use:enhance={() => {
			$theme = nextTheme

			return () => {}
		}}
	>
		<input type="hidden" name="theme" value={nextTheme} />

		<button
			class="transition-colors hover:text-primary-400"
			label="toggle theme from {$theme} to {nextTheme}"
			aria-live="polite"
		>
			<ThemeToggleIcon />
		</button>
	</form>
</header>
