<script setup lang="ts">
	import Testimonial from './components/Testimonial.vue'
	import YoutubeMetrics from './components/YoutubeMetrics.vue'
	import SocialLink from './components/SocialLink.vue'

	const socialLinks: { url: string; label: string; icon: string }[] = [
		{
			url: 'https://www.instagram.com/luccas.ghosst',
			label: 'Follow on Instagram,',
			icon: 'ri:instagram-line',
		},
		{
			url: 'mailto:ghosstbusiness@gmail.com',
			label: 'Send email',
			icon: 'ri:mail-add-line',
		},
		{
			url: 'https://x.com/Gh0ssT_',
			label: 'Follow on X (Twitter)',
			icon: 'ri:twitter-x-fill',
		},
	]

	const channels: { name: string; id: string; started: number; ended: number | 'Present' }[] = [
		{
			name: 'Gh0ssT Highlights',
			id: 'UCdKv-5cDhkrkUxQnV1VuHpQ',
			started: 2015,
			ended: 'Present',
		},
		{
			name: 'Krabs04',
			id: 'UCnkJW9eS4y-0f6lrcpkJatA',
			started: 2022,
			ended: 2023,
		},
		{
			name: 'Grayson Loupas',
			id: 'UC9QYz22gCEb9-mYmZn9d4aQ',
			started: 2023,
			ended: 2024,
		},
	]

	const testimonials: { quote: string; author: string }[] = [
		{
			quote: "The dynamic transitions and pacing completely transformed our story. Your editing style didn't just enhance the video - it crushed it. The final cut exceeded all expectations.",
			author: 'Grayson Loupas',
		},
		{
			quote: 'Super impressed with how you handled the gameplay footage and reaction shots. The edit kept the suspense high and the energy flowing. Our viewers stayed glued to every moment.',
			author: 'Dan Suchomel',
		},
		{
			quote: 'Amazing work with the latest video!',
			author: 'Clay Erickson',
		},
	]

	const videoPreviews: { source: string; label: string }[] = [
		{
			source: '/grayson-loupas.webm',
			label: 'Video preview for the Grayson Loupas project',
		},
		{
			source: '/dan-suchomel.webm',
			label: 'Video preview for the Dan Suchomel project',
		},
	]
</script>

<template>
	<div class="h-screen overflow-y-scroll snap-y snap-mandatory">
		<main class="h-screen w-full flex flex-col items-center snap-start">
			<header class="w-full flex flex-col items-center">
				<div class="flex flex-col items-center">
					<img
						src="/ghosst.png"
						alt="Logo of Ghosst Productions"
						width="128"
						height="128"
						loading="eager"
						class="shadow-2xl rounded-xl mb-6 hover:scale-105 transition-transform duration-300" />
					<h1 class="text-xl font-medium mb-4 tracking-wide">Luccas - Ghosst Productions</h1>
					<p
						class="flex items-center justify-center gap-2 text-gray-400 hover:text-orange-400 transition-colors duration-300 hover:cursor-default">
						<Icon name="ri:user-location-line" size="20" aria-hidden="true" />
						<span class="font-medium">Dubnica, Slovakia</span>
					</p>
					<nav class="flex items-center justify-center md:space-x-6 sm:space-x-3 mt-12" aria-label="Social media links">
						<SocialLink v-for="link in socialLinks" :key="link.url" v-bind="link" />
					</nav>
				</div>
			</header>

			<section class="flex flex-col items-center text-center px-4" aria-labelledby="hero-heading">
				<h2 id="hero-heading" class="mb-6">
					Is it time to turn <span class="text-white">your idea</span> to <span class="text-white">reality?</span>
				</h2>

				<p class="text-lg md:text-2xl text-center leading-relaxed max-w-2xl mb-8">
					Let me utilize my experience of several years working under multiple content creators to craft bespoke video
					editing solutions for you.
				</p>

				<div class="flex flex-col md:flex-row gap-4 md:gap-6">
					<button
						class="text-xl rounded-full font-bold drop-shadow-2xl transition-all hover:scale-105 duration-300 hover:border-orange-400 hover:text-orange-400 border-solid border-4 border-gray-300 text-center px-8 py-3">
						<a href="mailto:ghosstbusiness@gmail.com" class="font-semibold">Contact me!</a>
					</button>

					<a
						class="text-xl font-bold drop-shadow-2xl transition-all hover:scale-105 duration-300 hover:border-orange-400 hover:text-orange-400 text-center px-8 py-3"
						href="#about"
						>Learn more <span class="sr-only">about my services</span></a
					>
				</div>
			</section>
		</main>

		<section
			id="about"
			class="min-h-screen w-full flex flex-col items-center px-4 py-16 snap-start"
			aria-labelledby="about-heading">
			<h2 class="mb-8">About Me</h2>
			<div class="space-y-6 text-xl max-w-2xl overflow-y-auto mb-12">
				<p>
					As a seasoned Video Editor and Motion Designer with over 5 years of professional experience, I transform raw
					footage into compelling narratives across platforms. From crafting engaging YouTube content to producing viral
					TikToks and dynamic gameplay videos, I've mastered the art of digital storytelling.
				</p>
				<p>
					My journey began as the dedicated editor for an up-and-coming live-streamer, where I honed my craft through
					countless hours of unpaid work during my high school years. This dedication paid off as I developed my own channel,
					which has now amassed over 28,000 subscribers and garnered more than 19,500,000 views.
				</p>
				<p>
					Every project benefits from my proven track record of success and technical mastery. With an insatiable appetite
					for learning and a commitment to staying ahead of emerging trends, I've spent over five years continuously refining
					my craft and expanding my capabilities.
				</p>
			</div>
			<NuxtPicture src="/luccas.png" width="256" height="256" alt="Portrait of Luccas" loading="lazy" />
		</section>

		<section
			id="metrics"
			class="min-h-screen w-full flex flex-col items-center px-4 py-16 snap-start"
			aria-labelledby="metrics-heading">
			<h2 class="mb-8">Projects I worked on</h2>
			<div class="space-y-6 text-xl overflow-y-auto mb-12">
				<YoutubeMetrics v-for="channel in channels" :key="channel.id" v-bind="channel" />
			</div>
		</section>

		<section
			id="testimonials"
			class="min-h-screen w-full flex flex-col items-center px-4 py-16 snap-start"
			aria-labelledby="testimonials-heading">
			<h2 id="testimonials-heading">Trusted by</h2>
			<div class="overflow-y-auto space-y-16 w-full max-w-4xl">
				<Testimonial v-for="testimonial in testimonials" :key="testimonial.author" v-bind="testimonial" />
			</div>
		</section>
	</div>
</template>

<style scoped>
	h2 {
		@apply text-6xl font-extrabold bg-gradient-to-bl from-orange-500 to-red-500 text-transparent bg-clip-text pb-1 text-left leading-tight tracking-tight max-w-2xl;
	}
</style>

<style scoped>
	h2 {
		@apply text-6xl font-extrabold bg-gradient-to-bl from-orange-500 to-red-500 text-transparent bg-clip-text pb-1 text-left leading-tight tracking-tight max-w-2xl;
	}

	section {
		@apply flex flex-col items-center;
	}
</style>
