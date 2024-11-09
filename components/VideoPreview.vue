<script setup lang="ts">
	type Props = {
		source: string
		label: string
	}

	const props = defineProps<Props>()
</script>

<template>
	<video
		:src="props.source"
		autoplay
		loop
		muted
		playsinline
		class="w-full rounded-lg shadow-lg border border-orange-900/50 hover:border-orange-500/50 transition-colors duration-300"
		:aria-label="props.label" />
</template>
