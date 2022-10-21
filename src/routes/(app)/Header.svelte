<script lang="ts">
	import Logotype from '$lib/components/Logotype.svelte'
</script>

<header class="container flex items-center px-2 py-4">
	<h1 class="mr-2">
		<Logotype />
	</h1>
	<nav class="flex grow">
		<ul class="flex gap-2 md:gap-4">
			<li><a class="no-underline" href="/#demos">Demos</a></li>
			<li><a class="no-underline" href="/#testimonials">Testimonials</a></li>
			<li><a class="no-underline" href="/#pricing">Pricing</a></li>
		</ul>
		<span class="grow text-center text-gray-400">|</span>
		<ul class="flex gap-2 md:gap-4">
			<li class="hidden sm:block">
				<a href="/login">Login</a>
			</li>
			<li>
				<a href="/get-started">Get started</a>
			</li>
		</ul>
	</nav>
</header>
