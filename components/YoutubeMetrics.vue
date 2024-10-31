<script setup lang="ts">
	import { ref, onMounted } from 'vue'
	import axios from 'axios'

	interface Props {
		channelName: string
		channelId: string
	}

	interface Statistics {
		subscriberCount?: number
		viewCount?: number
		videoCount?: number
	}

	const props = defineProps<Props>()
	const statistics = ref<Statistics | null>(null)
	const error = ref<string | null>(null)

	const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY as string

	const fetchChannelStats = async () => {
		const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${props.channelId}&key=${API_KEY}`

		try {
			const { data } = await axios.get(url)
			if (data.items && data.items.length > 0) {
				statistics.value = data.items[0].statistics
				console.log(statistics.value)
			} else {
				error.value = 'No statistics found for the provided channel ID'
			}
		} catch (err) {
			console.error('Error fetching YouTube channel stats:', err)
			error.value = 'Failed to load channel statistics'
		}
	}

	onMounted(() => {
		fetchChannelStats()
	})
</script>

<template>
	<div class="flex flex-col items-center gap-6">
		<h2 class="text-4xl font-extrabold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text pb-1">
			{{ props.channelName }}
		</h2>

		<div v-if="error" class="text-red-500">
			{{ error }}
		</div>

		<div class="flex flex-wrap gap-4 justify-center">
			<StatCard v-if="statistics" title="Videos" :stat="Number(statistics.videoCount) || 0" />
			<StatCard v-if="statistics" title="Subscribers" :stat="Number(statistics.subscriberCount) || 0" />
			<StatCard v-if="statistics" title="Views" :stat="Number(statistics.viewCount) || 0" />
		</div>
	</div>
</template>
