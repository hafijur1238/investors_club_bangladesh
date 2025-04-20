<script setup lang="ts">
import { type RecipeResponse } from "../../types/types";
// Correct import paths
import _imports_0 from "@/assets/image_1.png";
import _imports_1 from "@/assets/image_2.png";
import _imports_3 from "@/assets/image_4.png";

// services img

import _imports_6 from "@/assets/new_com.png";
import _imports_7 from "@/assets/new_div.png";
import _imports_8 from "@/assets/new_equ.png";
import _imports_5 from "@/assets/new_ver.png";

import _imports_9 from "@/assets/new_trust1.jpeg";

import _imports_10 from "@/assets/new_man1.png";
import _imports_11 from "@/assets/new_man2.png";
import _imports_12 from "@/assets/new_man3.png";

import _imports_13 from "@/assets/new_fuel.png";

import myHero from "@/assets/new_hero.png";

import image1 from "@/assets/new_art1_min.png";
import image2 from "@/assets/new_art2_min.png";
import image3 from "@/assets/new_art3_min.png";
import image4 from "@/assets/new_art4_min.png";

const { data, error } = await useFetch<RecipeResponse>(
	"https://dummyjson.com/recipes?limit=12"
);

useSeoMeta({
	title: "Nuxtcipes",
	description: "Recipes for you to cook!",
	ogTitle: "Nuxtcipes",
	ogDescription: "Recipes for you to cook!",
	ogImage: "/nuxt-course-hero.png",
	ogUrl: `http:localhost:3000`,
	twitterTitle: "Nuxtcipes",
	twitterDescription: "Recipes for you to cook!",
	twitterImage: "/nuxt-course-hero.png",
	twitterCard: "summary",
});

// import { useUploadThing } from "@uploadthing/nuxt";

// Initialize the UploadThing hook with the correct endpoint
const { startUpload } = useUploadThing("videoAndImage", {
	onClientUploadComplete(res) {
		console.log("✅ Upload completed:", res);
		if (res && res[0]?.fileUrl) {
			alert(`File uploaded successfully: ${res[0].fileUrl}`);
		}
	},
	onUploadError(error) {
		console.error("❌ Upload failed:", error);
		alert("File upload failed. Please try again.");
	},
});

// Handle the file upload
const handleFileUpload = async (e: Event) => {
	const target = e.target as HTMLInputElement;
	const file = target.files?.[0];
	if (!file) {
		alert("Please select a file.");
		return;
	}

	console.log("Selected file:", file);

	try {
		// Start the upload
		const uploadResult = await startUpload([file]);
		console.log("Upload result:", uploadResult);
	} catch (error) {
		console.error("Upload failed:", error);
		alert("An error occurred during the upload.");
	}
};

const articles = ref([
	{
		image: image1,
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "How to invest in a halal way",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image: image2,
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "How ICB Works/what is ICB",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image: image3,
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Work environment ICB",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
	{
		image: image4,
		date: "Oct 22, 2024",
		readTime: "12 min read",
		title: "Business Buy and Selling",
		description:
			"It is a long established fact that a reader will be distracted by the readable content of a layout.",
	},
]);
</script>

<template>
	<main>
		<section class="bg-white pt-24">
			<div
				class="max-w-[1520px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-16"
			>
				<!-- Left Content -->
				<div
					class="text-center md:text-left md:max-w-lg animate-fade-in-up animate-delay-200 animate-duration-700"
				>
					<h1
						class="text-6xl font-extrabold leading-normal mb-6 animate-slide-in-left animate-duration-1000"
					>
						A Better Way To <br />
						Raise Capital
					</h1>
					<p
						class="text-gray-600 text-lg leading-relaxed mb-8 animate-fade-in animate-delay-500 animate-duration-1000"
					>
						ICB provides investors and innovators with the tools to grow.
					</p>
					<button
						class="bg-blue-700 text-white font-medium px-6 py-3 rounded-md hover:bg-gray-800"
					>
						Contact Us
					</button>
				</div>

				<!-- Right Image -->
				<div
					class="mt-10 md:mt-0 md:ml-8 animate-fade-in animate-duration-1000 animate-delay-300 animate-zoom-in"
				>
					<img
						:src="myHero"
						alt="Hero Section"
						class="w-[600px] h-auto rounded-xl"
					/>
				</div>
			</div>
		</section>

		<!-- Services -->
		<section
			class="bg-white py-16 animate-fade-in-up animate-duration-[1000ms]"
		>
			<div class="max-w-[1200px] mx-auto text-center">
				<!-- Section Heading -->
				<h2
					class="text-gray-500 text-lg font-medium mb-2 animate-slide-in-top animate-delay-[300ms]"
				>
					Our Services
				</h2>
				<h3
					class="text-2xl md:text-3xl font-semibold text-gray-800 mb-12 animate-fade-in animate-duration-[1000ms]"
				>
					Choose what works best for you
				</h3>

				<!-- Cards -->
				<div
					class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 animate-fade-in-up animate-delay-[200ms]"
				>
					<!-- Card 1 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between animate-zoom-in animate-delay-[400ms]"
					>
						<div>
							<img
								:src="_imports_1"
								alt="Invest in a Business"
								class="w-12 h-12 mx-auto mb-4 animate-fade-in animate-delay-[500ms]"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Invest in a Business
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								Discover and invest in lucrative business opportunities to grow
								your wealth.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>

					<!-- Card 2 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out animate-zoom-in animate-delay-[600ms]"
					>
						<img
							:src="_imports_1"
							alt="Become a part of a Franchise"
							class="w-12 h-12 mx-auto mb-4 animate-fade-in animate-delay-[700ms]"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Become a part of a Franchise
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							Join established franchises and benefit from proven success
							models.
						</p>
						<a href="#" class="text-blue-500 font-medium hover:underline">
							Learn More &gt;
						</a>
					</div>

					<!-- Card 3 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between animate-zoom-in animate-delay-[800ms]"
					>
						<div>
							<img
								:src="_imports_3"
								alt="Sell your Business"
								class="w-12 h-12 mx-auto mb-4 animate-fade-in animate-delay-[900ms]"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Sell your Business
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								List your business and connect with serious buyers quickly and
								easily.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>

					<!-- Card 4 -->
					<div
						class="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out flex flex-col justify-between animate-zoom-in animate-delay-[1000ms]"
					>
						<div>
							<img
								:src="_imports_0"
								alt="Apply for Investment"
								class="w-12 h-12 mx-auto mb-4 animate-fade-in animate-delay-[1100ms]"
							/>
							<h4 class="text-lg font-semibold text-gray-800 mb-2">
								Apply for Investment
							</h4>
							<p class="text-gray-600 text-sm mb-4">
								Secure funding by showcasing your vision to trusted investors.
							</p>
						</div>
						<a
							href="#"
							class="text-blue-500 font-medium hover:underline mt-auto"
						>
							Learn More &gt;
						</a>
					</div>
				</div>
			</div>
		</section>

		<!-- Services 2nd part -->

		<section class="bg-white py-16 animate-fade-in animate-duration-[1000ms]">
			<div class="max-w-[1200px] mx-auto">
				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
					<!-- Card 1 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-slide-in-left animate-delay-[200ms]"
					>
						<img
							:src="_imports_5"
							alt="Investor Management"
							class="rounded-lg w-full h-60 object-cover mb-4 animate-zoom-in animate-delay-[400ms]"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Verified Listings
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Trusted investment opportunities</strong> with fully
							verified and authenticated listings.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 2 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-slide-in-top animate-delay-[400ms]"
					>
						<img
							:src="_imports_6"
							alt="Financial Services"
							class="rounded-lg w-full h-60 object-cover mb-4 animate-zoom-in animate-delay-[600ms]"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Community-Driven Trust
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Backed by community-driven trust,</strong> where real
							investors validate every opportunity.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 3 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-slide-in-bottom animate-delay-[600ms]"
					>
						<img
							:src="_imports_7"
							alt="Full Service Funds"
							class="rounded-lg w-full h-60 object-cover mb-4 animate-zoom-in animate-delay-[800ms]"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Diverse Investment Paths
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>ICB offers diverse investment paths,</strong> empowering
							you to choose opportunities that match your goals and risk
							appetite.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>

					<!-- Card 4 -->
					<div
						class="bg-white shadow-md rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 animate-slide-in-right animate-delay-[800ms]"
					>
						<img
							:src="_imports_8"
							alt="Equity Management"
							class="rounded-lg w-full h-60 object-cover mb-4 animate-zoom-in animate-delay-[1000ms]"
						/>
						<h4 class="text-lg font-semibold text-gray-800 mb-2">
							Equity Management
						</h4>
						<p class="text-gray-600 text-sm mb-4">
							<strong>Equity management</strong> made simple and transparent.
						</p>
						<div class="flex items-center justify-end mt-auto"></div>
					</div>
				</div>
			</div>
		</section>

		<!-- Provides Section -->

		<section
			class="bg-[#0F172A] text-white py-12 px-6 animate-fade-in-up animate-duration-[1000ms]"
		>
			<div class="container mx-auto flex flex-col md:flex-row items-center">
				<!-- Text Section -->
				<div
					class="md:w-1/2 text-center md:text-left animate-slide-in-left animate-delay-[200ms]"
				>
					<p
						class="text-sm text-gray-400 animate-fade-in animate-delay-[300ms]"
					>
						ICB provides investors and innovators with the tools to grow.
					</p>
					<h1
						class="text-3xl md:text-4xl font-bold mt-4 leading-tight animate-slide-in-top animate-duration-[800ms]"
					>
						Your trusted platform for unlocking opportunities in venture and
						private equity.
					</h1>
					<ul class="mt-8 space-y-4">
						<li
							class="flex items-center animate-fade-in-up animate-delay-[400ms]"
						>
							<span class="flex-grow border-b border-gray-600 pb-1">
								Attract investors
							</span>
						</li>
						<li
							class="flex items-center animate-fade-in-up animate-delay-[500ms]"
						>
							<span class="flex-grow border-b border-gray-600 pb-1">
								Engage investors
							</span>
						</li>
						<li
							class="flex items-center animate-fade-in-up animate-delay-[600ms]"
						>
							<span class="flex-grow border-b border-gray-600 pb-1">
								Seamless onboarding
							</span>
						</li>
						<li
							class="flex items-center animate-fade-in-up animate-delay-[700ms]"
						>
							<span class="flex-grow border-b border-gray-600 pb-1">
								Optimize portfolio
							</span>
						</li>
					</ul>
				</div>

				<!-- Image Section -->
				<div
					class="md:w-1/2 mt-8 md:mt-0 flex justify-center animate-zoom-in animate-delay-[500ms]"
				>
					<img
						:src="_imports_9"
						alt="Investors working together"
						class="rounded-lg shadow-lg w-full h-auto max-w-md animate-fade-in animate-delay-[800ms]"
					/>
				</div>
			</div>
		</section>

		<!-- Fund Section -->
		<section
			class="bg-[#0F172A] py-16 lg:py-28 animate-fade-in animate-duration-[1000ms]"
		>
			<div class="max-w-7xl mx-auto px-6">
				<!-- Content Wrapper -->
				<div
					class="bg-gray-700 rounded-lg py-10 px-8 flex flex-col lg:flex-row items-center lg:justify-between animate-slide-in-left animate-delay-[300ms]"
				>
					<!-- Text Content -->
					<div
						class="text-center lg:text-left lg:max-w-lg mb-8 lg:mb-0 animate-fade-in-up animate-delay-[400ms]"
					>
						<h2
							class="text-white text-2xl lg:text-3xl font-semibold mb-4 animate-slide-in-top animate-delay-[500ms]"
						>
							Full Service Fund Management
						</h2>
						<p
							class="text-gray-300 text-base lg:text-lg mb-6 animate-fade-in animate-delay-[600ms]"
						>
							ICB provides services to simplify fund management, removing
							barriers and streamlining operations.
						</p>
						<a
							href="#"
							class="text-white font-medium border-b border-white hover:text-gray-300 hover:border-gray-300 transition-all duration-300 ease-in-out animate-pulse animate-delay-[700ms]"
						>
							Explore our fund offerings
						</a>
					</div>

					<!-- Image Section -->
					<div
						class="flex gap-6 lg:gap-8 justify-center lg:justify-end flex-wrap"
					>
						<!-- Image 1 -->
						<div
							class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60 animate-zoom-in animate-delay-[800ms]"
						>
							<img
								:src="_imports_10"
								alt="Person 1"
								class="object-cover w-full h-full"
							/>
						</div>
						<!-- Image 2 -->
						<div
							class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60 animate-zoom-in animate-delay-[1000ms]"
						>
							<img
								:src="_imports_11"
								alt="Person 2"
								class="object-cover w-full h-full"
							/>
						</div>
						<!-- Image 3 -->
						<div
							class="rounded-full overflow-hidden w-24 h-24 lg:w-32 lg:h-60 animate-zoom-in animate-delay-[1200ms]"
						>
							<img
								:src="_imports_12"
								alt="Person 3"
								class="object-cover w-full h-full"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Fueling Section -->
		<section class="bg-white py-20 md:py-32 animate-fade-in duration-1000">
			<div
				class="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
			>
				<!-- Left Content -->
				<div class="animate-slide-in-left delay-300">
					<h2
						class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 md:mb-12"
					>
						Fueling <br />
						innovation
					</h2>
					<p
						class="text-gray-600 text-base md:text-lg mb-8 md:mb-12 animate-fade-in delay-500"
					>
						ICB manages a large number of venture capital deals, leading the way
						in digitalizing the process. This innovation makes investing faster,
						simpler, and more accessible for users.
					</p>
					<img
						:src="_imports_13"
						alt="Chart Display"
						class="w-full rounded-lg shadow-md animate-zoom-in delay-700"
					/>
				</div>

				<!-- Right Stats -->
				<div class="space-y-8 mt-16 md:mt-28 animate-slide-in-right delay-400">
					<hr class="animate-scale-x delay-500" />

					<!-- Main Stat -->
					<div
						class="mb-16 flex flex-col items-center text-center animate-fade-in-up delay-600"
					>
						<h3
							class="text-4xl md:text-6xl lg:text-8xl font-bold text-gray-900"
						>
							৳24 Cr
						</h3>
						<p class="text-gray-600 text-sm mt-2">assets on platform</p>
					</div>

					<hr class="animate-scale-x delay-700" />

					<!-- Stats Grid -->
					<div class="grid grid-cols-2 gap-x-8 gap-y-12 text-center">
						<div class="animate-fade-in-up delay-800">
							<h4 class="text-2xl md:text-4xl font-bold text-gray-900">728</h4>
							<p class="text-gray-600 text-sm mt-1">funds</p>
						</div>
						<div class="animate-fade-in-up delay-900">
							<h4 class="text-2xl md:text-4xl font-bold text-gray-900">122</h4>
							<p class="text-gray-600 text-sm mt-1">investment seekers</p>
						</div>
						<div class="animate-fade-in-up delay-1000">
							<h4 class="text-2xl md:text-4xl font-bold text-gray-900">422</h4>
							<p class="text-gray-600 text-sm mt-1">active investors</p>
						</div>
						<div class="animate-fade-in-up delay-1100">
							<h4 class="text-2xl md:text-4xl font-bold text-gray-900">
								৳21.27 Cr
							</h4>
							<p class="text-gray-600 text-sm mt-1">
								raised by investment seekers
							</p>
						</div>
					</div>

					<hr class="animate-scale-x delay-1200" />
				</div>
			</div>
		</section>

		<!-- Artical -->
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
	</main>
</template>
