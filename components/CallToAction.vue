<script setup lang="ts"></script>

<template>
	<button
		class="text-xl rounded-full font-bold drop-shadow-2xl bg-white text-black transition-colors duration-300 hover:bg-black hover:border-orange-400 hover:text-orange-400 border-solid border-4 border-white text-center px-4 py-2">
		<p>Hire me!</p>
	</button>
	<nav class="flex items-center" aria-label="Social media links">
		<NuxtLink
			to="https://www.instagram.com/luccas.ghosst"
			class="text-gray-500 hover:text-orange-400 transition-colors duration-300"
			aria-label="Follow on Instagram">
			<Icon name="ri:instagram-line" size="48" />
		</NuxtLink>
		<NuxtLink
			to="mailto:ghosstbusiness@gmail.com"
			class="text-gray-500 hover:text-orange-400 transition-colors duration-300"
			aria-label="Send email">
			<Icon name="ri:mail-add-line" size="48" />
		</NuxtLink>
		<NuxtLink
			to="https://x.com/Gh0ssT_"
			class="text-gray-500 hover:text-orange-400 transition-colors duration-300"
			aria-label="Follow on X (Twitter)">
			<Icon name="ri:twitter-x-fill" size="48" />
		</NuxtLink>
	</nav>
</template>
