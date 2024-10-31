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
			<p><Icon name="ri:user-location-line" />Dubnica, Slovakia</p>
		</header>

		<main class="flex-1">
			<section id="call-to-action" class="py-8 flex flex-col items-center">
				<CallToAction />
			</section>

			<section aria-label="about section" class="py-8 flex flex-col gap-24 items-center">
				<h2 aria-label="about heading" class="font-bold mb-8 text-orange-500 text-6xl">About Me</h2>
				<div class="space-y-6 text-gray-400 text-left max-w-prose">
					<p>
						- I am an experienced Video Editor and Motion Designer with over 5 years of experience. I specialize in various
						content types, from YouTube videos to TikToks, gameplays and more. My passion for video editing started years
						ago and I have been improving my skills ever since.
					</p>
					<p>
						- Formerly only an editor for a small live-streamer. Editing only in my free time for free since high-school
						until my channel gained 28,000+ subscribers and over 19,500,000 views over the years.
					</p>
					<p>
						- I bring that experience and expertise to every project I undertake. I am creative and responsible. I like to
						learn new things and skills. I have been working in the field of editing for over 5 years and I am constantly
						trying to improve.
					</p>
				</div>
			</section>

			<section aria-label="metrics section" class="py-8 flex flex-col gap-24 items-center">
				<h2 aria-label="metrics heading" class="font-bold mb-8 text-orange-500 text-6xl">Projects I worked on</h2>
				<YoutubeMetrics channel-name="Gh0ssT Highlights" channel-id="UCdKv-5cDhkrkUxQnV1VuHpQ" />
				<YoutubeMetrics channel-name="Krabs04" channel-id="UCnkJW9eS4y-0f6lrcpkJatA" />
				<YoutubeMetrics channel-name="Grayson Loupas" channel-id="UC9QYz22gCEb9-mYmZn9d4aQ" />
			</section>

			<section aria-label="testimonial section" class="py-8 flex flex-col gap-24 items-center">
				<h2 aria-label="testimonial heading" class="font-bold mb-8 text-orange-500 text-6xl">Testimonials</h2>
				<div class="space-y-4">
					<Testimonial quote="Just watched the video. Freaking crushed it!" author="Grayson Loupas" />
				</div>

				<div class="space-y-4">
					<Testimonial quote="Super good edit on this video, thank you." author="Dan Suchomel" />
				</div>

				<div class="flex items-center justify-center">
					<Testimonial quote="Amazing work with the latest video!" author="Clay Erickson" />
				</div>
			</section>

			<section aria-label="work overview section" class="py-8 flex flex-col gap-24 items-center">
				<h2 aria-label="work overview heading" class="font-bold mb-8 text-orange-500 text-6xl">Work Overview</h2>
				<div class="space-y-4">
					<video
						src="/grayson-loupas.webm"
						autoplay
						loop
						muted
						playsinline
						class="w-full rounded-lg shadow-lg border border-orange-900/50 hover:border-orange-500/50 transition-colors duration-300"
						aria-label="Video preview for Grayson Loupas project" />
				</div>

				<div class="space-y-4">
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
		</main>
	</div>
</template>
