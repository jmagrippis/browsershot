<script lang="ts">
	import {theme} from '$lib/stores/theme'
	import type {LayoutServerData} from './$types'

	export let data: LayoutServerData

	$theme = data.theme
</script>

<div id="theme-container" class={$theme}>
	<div id="app-content">
		<slot />
	</div>
</div>
