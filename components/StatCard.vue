<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import { formatNumber } from '~/utils/formatNumber'

	interface Props {
		title: string
		stat: number
	}

	const props = defineProps<Props>()
	const count = ref(0)
	const duration = 1.5

	onMounted(() => {
		const increment = props.stat / ((duration * 1000) / 16)
		const interval = setInterval(() => {
			if (count.value >= props.stat) {
				count.value = props.stat
				clearInterval(interval)
			} else {
				count.value += increment
			}
		}, 16)
	})
</script>

<template>
	<div class="p-8 transition-colors duration-300 hover:cursor-default flex flex-col border-2 border-orange-500 rounded-xl">
		<h3 class="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-500 to-red-500 inline-block text-transparent bg-clip-text">
			<p>{{ title }}</p>
		</h3>
		<p
			class="text-5xl font-extrabold bg-gradient-to-bl from-orange-500 to-red-500 inline-block text-transparent bg-clip-text w-60">
			{{ formatNumber(count) }}
		</p>
	</div>
</template>
