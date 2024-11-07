<script setup lang="ts">
	import Testimonial from './components/Testimonial.vue'
	import CallToAction from './components/CallToAction.vue'
	import YoutubeMetrics from './components/YoutubeMetrics.vue'
</script>

<template>
	<div class="min-h-screen w-screen flex flex-col items-center">
		<header class="flex flex-col items-center">
			<h1>Luccas - Ghosst Productions</h1>
			<img src="/ghosst.png" alt="Logo of Ghosst Productions" width="128" class="shadow-lg" />
			<p>Mastering Visual Success</p>
			<p className="flex items-center justify-center gap-2"><Icon name="ri:user-location-line" size="20" />Dubnica, Slovakia</p>
		</header>

		<section id="call-to-action" class="flex flex-col items-center justify-center text-center">
			<CallToAction />
		</section>

		<section id="about" class="flex flex-col items-center">
			<h2 aria-label="about heading" class="font-bold mb-8 text-orange-500 text-6xl">About Me</h2>
			<div class="space-y-6 text-gray-400 text-left max-w-prose text-xl">
				<p>
					- I am an experienced Video Editor and Motion Designer with over 5 years of experience. I specialize in various
					content types, from YouTube videos to TikToks, gameplays and more. My passion for video editing started years ago
					and I have been improving my skills ever since.
				</p>
				<p>
					- Formerly only an editor for a small live-streamer. Editing only in my free time for free since high-school until
					my channel gained 28,000+ subscribers and over 19,500,000 views over the years.
				</p>
				<p>
					- I bring that experience and expertise to every project I undertake. I am creative and responsible. I like to
					learn new things and skills. I have been working in the field of editing for over 5 years and I am constantly
					trying to improve.
				</p>
			</div>
		</section>

		<section id="metrics " class="flex flex-col items-center">
			<h2 aria-label="metrics heading" class="font-bold mb-8 text-orange-500 text-6xl">Projects I worked on</h2>
			<YoutubeMetrics channel-name="Gh0ssT Highlights" channel-id="UCdKv-5cDhkrkUxQnV1VuHpQ" started="2015" ended="Present" />
			<YoutubeMetrics channel-name="Krabs04" channel-id="UCnkJW9eS4y-0f6lrcpkJatA" started="2022" ended="2023" />
			<YoutubeMetrics channel-name="Grayson Loupas" channel-id="UC9QYz22gCEb9-mYmZn9d4aQ" started="2023" ended="2024" />
		</section>

		<section aria-label="testimonial section" class="flex flex-col items-center">
			<h2 aria-label="testimonial heading" class="font-bold text-orange-500 text-6xl">Testimonials</h2>
			<div class="">
				<Testimonial quote="Just watched the video. Your editing style crushed it!" author="Grayson Loupas" />
			</div>

			<div class="">
				<Testimonial quote="Super good edit on this video, thank you." author="Dan Suchomel" />
			</div>

			<div class="flex items-center justify-center">
				<Testimonial quote="Amazing work with the latest video!" author="Clay Erickson" />
			</div>
		</section>

		<section aria-label="work overview section" class="flex flex-col items-center">
			<h2 aria-label="work overview heading" class="font-bold mb-8 text-orange-500 text-6xl">Work Overview</h2>
			<div class="">
				<video
					src="/grayson-loupas.webm"
					autoplay
					loop
					muted
					playsinline
					class="w-full rounded-lg shadow-lg border border-orange-900/50 hover:border-orange-500/50 transition-colors duration-300"
					aria-label="Video preview for Grayson Loupas project" />
			</div>

			<div class="">
				<video
					src="/dan-suchomel.webm"
					autoplay
					loop
					muted
					playsinline
					class="w-full rounded-lg shadow-lg border border-orange-900/50 hover:border-orange-500/50 transition-colors duration-300"
					aria-label="Video preview for Dan Suchomel project" />
			</div>
		</section>
	</div>
</template>
