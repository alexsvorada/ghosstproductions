<script setup lang="ts">
	type Props = {
		quote: string
		author: string
	}

	const props = defineProps<Props>()
	const id = props.author.toLowerCase().replace(' ', '-')
</script>

<template>
	<div :id="id" class="flex flex-col items-center">
		<img :src="`/${id}.jpg`" :alt="'Face of ' + props.author" width="256px" class="rounded-full" />
		<blockquote class="italic font-thin tracking-wide max-w-prose">
			<p>{{ props.quote }}</p>
		</blockquote>
		<cite class="font-bold">- {{ props.author }}</cite>
	</div>
</template>

<style scoped></style>
