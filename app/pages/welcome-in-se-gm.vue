<template>
	<!-- Welcome Section -->
	<section class="bg-white py-16 px-6 md:px-16 mt-20">
		<div class="max-w-7xl mx-auto">
			<!-- Welcome Text -->
			<div class="text-start">
				<h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
					Welcome, MD. Akram
				</h1>
				<p class="text-lg text-gray-600">Here's what's new for you</p>
			</div>

			<!-- New Features Announcement -->
			<div class="bg-gray-100 p-6 rounded-lg mt-8">
				<div class="flex items-center">
					<div class="bg-yellow-400 p-2 rounded-full mr-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-white"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h1v4zm0 4h-1v-2h1v2zm-1-14h-1v6h1V6z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800">
							Exciting new features launching soon
						</h3>
						<p class="text-gray-600 mt-1">
							We're excited to announce that our latest features are coming
							soon. Stay tuned for more details!
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Latest Articles Section -->
	<section class="bg-[#6E5C3B] py-12">
		<div class="max-w-7xl mx-auto px-6">
			<!-- Section Header -->
			<h2 class="text-white text-2xl font-semibold mb-6">Latest articles</h2>

			<!-- Articles Grid -->
			<div
				class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
			>
				<div
					v-for="(article, index) in articles"
					:key="index"
					class="rounded-lg overflow-hidden shadow-lg"
				>
					<img
						:src="article.image"
						alt="Article Image"
						class="w-full h-48 object-cover"
					/>
					<div class="p-4">
						<p class="text-gray-300 text-sm">
							{{ article.date }} -
							<span class="text-yellow-400">{{ article.readTime }}</span>
						</p>
						<h3 class="text-white font-semibold text-lg mt-2">
							{{ article.title }}
						</h3>
						<p class="text-gray-400 text-sm mt-1">{{ article.description }}</p>
						<button
							@click="navigateToArticle(article.slug)"
							class="mt-4 w-full border border-gray-400 text-white py-2 rounded-md hover:bg-white hover:text-black transition duration-300"
						>
							Read more
						</button>
					</div>
				</div>
			</div>

			<!-- Learn More Button -->
			<div class="text-right mt-6">
				<button
					class="text-white text-lg font-medium flex items-center hover:underline"
					@click="navigateToLearnMore"
				>
					Learn more
					<span class="ml-2">›</span>
				</button>
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// Articles Data
const articles = ref([
	{
		image:
			"https://images.unsplash.com/photo-1596477602393-486ea2ded625?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual local image path
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "How to invest in a halal way",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
		slug: "how-to-invest-in-a-halal-way", // Add slug for routing
	},
	{
		image:
			"https://images.unsplash.com/photo-1657639028182-24e11504c7c1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual local image path
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "How ICB Works what is ICB",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
		slug: "how-icb-works",
	},
	{
		image:
			"https://images.unsplash.com/photo-1657639039662-9edac2e6a40b?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual local image path
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Work environment at ICB",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
		slug: "work-environment-at-icb",
	},
	{
		image:
			"https://images.unsplash.com/photo-1640161339501-760e73bc2a9c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Replace with actual local image path
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Business Buy and Selling",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
		slug: "business-buy-and-selling",
	},
]);

// Navigation Methods
const router = useRouter();

// Method to navigate to the individual article page
const navigateToArticle = (slug) => {
	router.push(`/blog/${slug}`);
};

// Method for the "Learn more" button
const navigateToLearnMore = () => {
	// You can define a specific path for 'learn more' if required
	console.log("Redirecting to learn more...");
};
</script>

<style scoped>
/* You can add custom styles here if needed */
</style>
