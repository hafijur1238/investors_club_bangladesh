<template>
	<div class="min-h-screen bg-white">
		<div class="max-w-7xl mx-auto px-4 py-8 lg:flex lg:gap-8">
			<!-- Main Content -->
			<main class="flex-1 lg:max-w-3xl">
				<!-- Article Header -->
				<header class="mb-8">
					<h1 class="text-3xl font-bold text-gray-900 mb-2">
						Beginner’s Guide to Investing: Where to Start in 2025
					</h1>
					<div class="flex items-center text-sm text-gray-500 space-x-4">
						<span>Oct 19, 2025</span>
						<span>•</span>
						<span>10 min read</span>
					</div>
				</header>

				<!-- Featured Image -->
				<div class="mb-8">
					<img
						src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Investing concept"
						class="w-full h-64 object-cover rounded-lg shadow-md"
					/>
				</div>

				<!-- Article Content -->
				<article class="prose lg:prose-lg">
					<section class="mb-8">
						<h2 class="text-2xl font-bold text-gray-900 mb-4">
							Understanding the Basics of Investing
						</h2>
						<p class="text-gray-600 leading-relaxed">
							Lorem ipsum dolor sit amet consectetur. Varius fringilla pulvinar
							cursus id malesuada urna. Tempor risus nec condimentum sit
							vestibulum mauris erat morbi.
						</p>
						<div
							class="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-300"
						>
							<p class="text-gray-700 italic">
								One tactic I’ve found useful is maintaining originality in
								message essence, with unique perspectives infusing life beyond
								words onto pages!
							</p>
						</div>
					</section>
				</article>
			</main>

			<!-- Right Sidebar - Table of Contents -->
			<aside class="lg:w-64 xl:w-72 flex-shrink-0 lg:pl-8">
				<div class="sticky top-8">
					<h3
						class="text-sm font-semibold text-gray-900 uppercase mb-4 tracking-wide"
					>
						In this article
					</h3>
					<nav class="space-y-2">
						<ul class="space-y-2 text-sm">
							<li class="font-medium text-gray-900">
								Understanding the Basics of Investing
							</li>
							<li class="ml-4 text-gray-600">
								Steering Clear of Common AI Writing Pitfalls
							</li>
							<li class="ml-4 text-gray-600">
								First Steps to Making Your Investments
							</li>
						</ul>
					</nav>
				</div>
			</aside>
		</div>
		<section class="bg-[#8f8065] py-12">
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
							<p class="text-gray-400 text-sm mt-1">
								{{ article.description }}
							</p>
							<button
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
					>
						Learn more
						<span class="ml-2">›</span>
					</button>
				</div>
			</div>
		</section>
	</div>
</template>
<script setup lang="ts">
const articles = [
	{
		image:
			"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Releases and product updates",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image:
			"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Releases and product updates",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image:
			"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Releases and product updates",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image:
			"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Releases and product updates",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
];
</script>

<style>
/* Custom bullet styling */
aside ul li {
	position: relative;
	padding-left: 1.25rem;
}

aside ul li:before {
	content: "•";
	position: absolute;
	left: 0;
	color: #cbd5e0;
}

/* Responsive adjustments */
@media (max-width: 1023px) {
	aside {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #f3f4f6;
	}
}
</style>
