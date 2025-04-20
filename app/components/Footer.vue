<template>
	<footer class="bg-gray-300 pb-10">
		<!-- Footer Top Section -->
		<div class="py-16 md:py-32">
			<div class="container mx-auto px-6">
				<h2
					class="text-center text-3xl md:text-5xl font-extrabold text-black mb-16 md:mb-32"
				>
					Investors Club Bangladesh
				</h2>
				<div
					class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-gray-600 text-sm"
				>
					<!-- Get Started -->
					<div>
						<h3 class="font-semibold text-black mb-4 text-lg">Get started</h3>
						<ul class="space-y-1">
							<li>
								<router-link
									to="/login"
									class="hover:text-gray-500 text-blue-600"
									>Login</router-link
								>
							</li>
							<li>
								<router-link
									to="/registration"
									class="hover:text-gray-500 text-blue-600"
									>Registration</router-link
								>
							</li>
						</ul>
					</div>
					<!-- Services -->
					<div>
						<h3 class="font-semibold text-black mb-4 text-lg">Services</h3>
						<ul class="space-y-1">
							<li>
								<router-link
									to="/invest"
									class="hover:text-gray-500 text-blue-600"
									>Invest in a Business</router-link
								>
							</li>
							<li>
								<router-link
									to="/franchise"
									class="hover:text-gray-500 text-blue-600"
									>Become a part of franchise</router-link
								>
							</li>
							<li>
								<router-link
									to="/sell-business"
									class="hover:text-gray-500 text-blue-600"
									>Sell your Business</router-link
								>
							</li>
							<li>
								<router-link
									to="/apply-investment"
									class="hover:text-gray-500 text-blue-600"
									>Apply for investment</router-link
								>
							</li>
						</ul>
					</div>
					<!-- Resources -->
					<div>
						<h3 class="font-semibold text-black mb-4 text-lg">Resources</h3>
						<ul class="space-y-1">
							<li>
								<router-link
									to="/blog"
									class="hover:text-gray-500 text-blue-600"
									>Blog</router-link
								>
							</li>
							<li>
								<router-link
									to="/help"
									class="hover:text-gray-500 text-blue-600"
									>Help Centre</router-link
								>
							</li>
							<li>
								<router-link
									to="/courses"
									class="hover:text-gray-500 text-blue-600"
									>Courses</router-link
								>
							</li>
							<li>
								<router-link
									to="/about"
									class="hover:text-gray-500 text-blue-600"
									>About Us</router-link
								>
							</li>
						</ul>
					</div>
					<!-- For Investment Seekers -->
					<div>
						<h3 class="font-semibold text-black mb-4 text-lg">
							For Investment seekers
						</h3>
						<ul class="space-y-1">
							<li>
								<router-link
									to="/investment-overview"
									class="hover:text-gray-500 text-blue-600"
									>Overview</router-link
								>
							</li>
						</ul>
					</div>
					<!-- For Investors -->
					<div>
						<h3 class="font-semibold text-black mb-4 text-lg">For Investors</h3>
						<ul class="space-y-1">
							<li>
								<router-link
									to="/venture-funds"
									class="hover:text-gray-500 text-blue-600"
									>Venture funds</router-link
								>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<!-- Footer Bottom Section -->
		<div class="py-6 border-gray-200">
			<div class="container mx-auto px-6">
				<!-- Navigation Links -->
				<div
					class="border-t-2 border-b-2 flex flex-col md:flex-row md:justify-between items-center text-gray-600 text-sm mb-8"
				>
					<ul
						class="flex flex-wrap justify-center md:justify-start space-x-6 py-6"
					>
						<li>
							<router-link to="/terms" class="hover:text-blue-500 text-base"
								>Terms & conditions</router-link
							>
						</li>
						<li>
							<router-link to="/privacy" class="hover:text-blue-500 text-base"
								>Privacy</router-link
							>
						</li>
						<li>
							<router-link
								to="/disclosures"
								class="hover:text-blue-500 text-base"
								>Disclosures</router-link
							>
						</li>
						<li>
							<router-link to="/cookies" class="hover:text-blue-500 text-base"
								>Cookie settings</router-link
							>
						</li>
					</ul>
					<!-- Social Media Icons -->
					<div
						class="flex justify-center md:justify-end space-x-4 text-2xl md:text-3xl"
					>
						<a
							href="https://linkedin.com"
							target="_blank"
							class="hover:text-blue-500"
						>
							<i class="fab fa-linkedin"></i>
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							class="hover:text-blue-500"
						>
							<i class="fab fa-twitter"></i>
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							class="hover:text-blue-500"
						>
							<i class="fab fa-facebook"></i>
						</a>
					</div>
				</div>

				<!-- Disclaimer Section -->
				<div
					class="text-gray-500 text-xs leading-relaxed text-center md:text-left"
				>
					<h3 class="font-semibold text-gray-800 mb-2">Disclaimer</h3>
					<p>
						Investors Club Bangladesh is a community-driven platform designed to
						promote financial literacy, investment education, and networking
						among investors in Bangladesh. The content provided on this website
						— including articles, market analysis, opinions, tools, and
						resources — is for informational and educational purposes only.
					</p>
				</div>

				<!-- Footer End -->
				<div class="text-center text-sm text-gray-600 mt-6 mb-0">
					<p>© 2025 NEXILY. All Rights Reserved.</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");
</style>
