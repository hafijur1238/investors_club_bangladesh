<template>
	<!-- Featured Post - Full Width -->
	<div class="bg-gray-200 py-16 px-4 md:px-12 shadow-lg">
		<div
			class="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-8 pt-20"
		>
			<div class="flex flex-col justify-center text-center lg:text-left">
				<p class="text-blue-500 font-medium text-sm">New Post</p>
				<h1 class="text-4xl sm:text-5xl font-bold mt-4 leading-tight">
					Understanding the Basics of Investing
				</h1>
				<p class="text-gray-500 mt-4 text-lg">March 15, 2025 · 8 min read</p>
				<p class="text-gray-600 mt-6 text-lg leading-relaxed">
					Understanding the basics of investment is key to growing your wealth
					over time. Here's a simplified breakdown of the key concepts:
				</p>
			</div>
			<div>
				<img
					src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Blog image"
					class="rounded-lg w-full h-auto object-cover shadow-md"
				/>
			</div>
		</div>
	</div>

	<!-- Recent Posts Section -->
	<div
		class="max-w-[1520px] mx-auto flex flex-col items-center px-4 md:px-8 py-16"
	>
		<div
			class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4 sm:px-8 justify-center"
		>
			<NuxtLink
				v-for="(post, index) in posts"
				:key="index"
				:to="'/blog/' + post.slug"
				class="flex justify-center w-full"
			>
				<BlogCard :post="post" class="h-full w-full sm:w-[90%] md:w-[80%]" />
			</NuxtLink>
		</div>

		<!-- Load More Button -->
		<div class="mt-12 flex justify-center mb-20">
			<NuxtLink to="/blog-upload">
				<button
					class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
				>
					Create Blog
				</button>
			</NuxtLink>
		</div>
	</div>

	<!-- Subscription Part - Full Width -->
	<div
		class="bg-gray-900 py-16 px-5 flex flex-col items-center text-center w-full"
	>
		<h2 class="text-white text-2xl font-semibold">Stay Updated</h2>
		<p class="text-gray-400 mt-2">
			Get the latest articles and news straight to your inbox.
		</p>
		<div class="mt-4 flex flex-col sm:flex-row w-full sm:w-auto items-center">
			<input
				v-model="email"
				type="email"
				placeholder="Enter your email"
				class="px-4 py-3 rounded-md focus:outline-none w-full sm:w-[450px]"
			/>
			<button
				@click="subscribe"
				class="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md mt-4 sm:mt-0 sm:ml-2"
			>
				Subscribe
			</button>
		</div>
	</div>
</template>

<script setup>
import BlogCard from "@/components/BlogCard.vue";
import { ref } from "vue";

const email = ref("");

const subscribe = () => {
	if (email.value) {
		alert(`Subscribed with: ${email.value}`);
		email.value = "";
	} else {
		alert("Please enter a valid email");
	}
};

const posts = ref([
	{
		title: "What is Investment ?",
		slug: "what-is-Investment",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1568359415705-47e98104af04?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "What is Investment Crowdfunding?",
		slug: "what-is-investment-crowdfunding",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "How to invest in a halal way ?",
		slug: "how-to-invest-in-a-halal-way",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		image:
			"https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"It is a long established fact that a reader will be distracted by the readable content of its layout.",
	},
	{
		title: "How ICB Works what is ICB",
		slug: "how-icb-works-what-is-icb",
		date: "Oct 25, 2024",
		readTime: "10 min read",
		image:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Understanding how to start investing in stocks with simple strategies and tips.",
	},
	{
		title: "Work environment ICB",
		slug: "work-environment-icb",
		date: "Nov 01, 2024",
		readTime: "15 min read",
		image:
			"https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Exploring different cryptocurrency investment strategies for long-term success.",
	},
	{
		title: "Know about ICB Project",
		slug: "know-about-icb-project",
		date: "Nov 05, 2024",
		readTime: "14 min read",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Learn how to minimize risks by building a diversified investment portfolio.",
	},
	{
		title: "ICB Franchise Model",
		slug: "icb-franchise-model",
		date: "Oct 25, 2024",
		readTime: "10 min read",
		image:
			"https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Understanding how to start investing in stocks with simple strategies and tips.",
	},
	{
		title: "Real Estate Investments",
		slug: "real-estate-investments",
		date: "Nov 01, 2024",
		readTime: "15 min read",
		image:
			"https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Exploring different cryptocurrency investment strategies for long-term success.",
	},
	{
		title: "Business Buy and Selling",
		slug: "business-buy-and-selling",
		date: "Nov 05, 2024",
		readTime: "14 min read",
		image:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		excerpt:
			"Learn how to minimize risks by building a diversified investment portfolio.",
	},
]);
</script>

<style scoped>
.grid-cols-3 > * {
	display: flex;
	flex-direction: column;
}
</style>
