<script setup lang="ts">
	interface Props {
		quote: string
		author: string
	}
	const props = defineProps<Props>()
	const id = props.author.toLowerCase().replace(' ', '-')
</script>

<template>
	<section :id="id" class="flex flex-col items-center">
		<img :src="`/${id}.jpg`" :alt="'Face of ' + props.author" width="128px" class="rounded-full" />
		<blockquote>
			<p>{{ props.quote }}</p>
		</blockquote>
		<cite>- {{ props.author }}</cite>
	</section>
</template>

<style scoped></style>
