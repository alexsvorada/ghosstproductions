<script setup lang="ts">
	import Testimonial from './components/Testimonial.vue'
	import MetricCard from './components/MetricCard.vue'
</script>

<template>
	<div class="min-h-screen flex flex-col border-2 border-blue-500">
		<header class="w-full py-4 border-2 border-red-500 flex flex-col items-center">
			<!-- Header content -->
			<p>Luccas Ghosst</p>
			<img src="/ghosst.png" alt="Logo of Ghosst Productions" width="71.5" />
			<p>Mastering Visual Success</p>
			<p>Delivering high-impact videos that communicate complex concepts and captivate audiences</p>
		</header>

		<main class="flex-1">
			<section id="call-to-action" class="w-full py-12 border-2 border-yellow-500 flex flex-col items-center">
				<button class="text-xl font-semibold">Let's start a project together! {iconPlaceholder}</button>
			</section>

			<section id="hero" class="w-full py-12 border-2 border-green-500">
				<div class="h-48 flex items-center justify-center">
					<p class="text-gray-600">Hero Section</p>
				</div>
			</section>

			<section id="about-me" class="w-full py-12 border-2 border-purple-500">
				<div class="h-48 flex items-center justify-center">
					<p class="text-gray-600">About Me Section</p>
				</div>
			</section>

			<section id="metrics" class="w-full py-12 border-2 border-orange-500">
				<div class="container mx-auto flex flex-wrap justify-center gap-6">
					<MetricCard :metric="100">Projects completed</MetricCard>
					<MetricCard :metric="20">M views</MetricCard>
					<MetricCard :metric="5">Years of experience</MetricCard>
				</div>
			</section>

			<section id="testimonials" class="w-full py-12 border-2 border-pink-500">
				<div class="container mx-auto flex flex-col gap-6">
					<Testimonial quote="Just watched the video. Freaking crushed it!" author="Grayson Loupas" />
					<Testimonial quote="Super good edit on this video, thank you." author="Dan Suchomel" />
					<Testimonial quote="Amazing work with the latest video!" author="Clay Erickson" />
				</div>
			</section>
		</main>
	</div>
</template>

<style scoped></style>
