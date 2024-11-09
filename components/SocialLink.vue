<script setup lang="ts">
	type Props = {
		url: string
		label: string
		icon: string
	}

	const props = defineProps<Props>()
</script>

<template>
	<a
		target="_blank"
		referrerpolicy="no-referrer"
		:href="props.url"
		class="text-gray-500 hover:text-orange-400 transition-all duration-300 hover:scale-105 hover:cursor-pointer"
		:aria-label="props.label">
		<Icon :name="props.icon" size="48" />
	</a>
</template>
