<template>
	<div class="flex justify-center items-center min-h-screen bg-gray-100 my-16">
		<!-- Larger container -->
		<div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-12">
			<h2 class="text-3xl font-bold text-center text-gray-800">
				Login to your account
			</h2>
			<p class="text-center text-lg text-gray-600 mt-4">
				Don't have an account?
				<nuxt-link to="/registration" class="text-blue-500 hover:underline"
					>Register here</nuxt-link
				>
			</p>
			<form @submit.prevent="handleSubmit" class="mt-8">
				<div class="mb-6">
					<label for="userId" class="block text-lg font-medium text-gray-700"
						>User ID</label
					>
					<input
						id="userId"
						v-model="userId"
						type="text"
						placeholder="Enter your User ID"
						class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
					/>
				</div>
				<div class="mb-6">
					<label for="password" class="block text-lg font-medium text-gray-700"
						>Password</label
					>
					<input
						id="password"
						v-model="password"
						type="password"
						placeholder="Enter your password"
						class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
					/>
				</div>
				<div class="flex justify-end">
					<!-- Forgot Password link navigates to another page -->
					<nuxt-link
						to="/forgot-password"
						class="text-lg text-blue-500 hover:underline"
					>
						Forgot password? Click here
					</nuxt-link>
				</div>
				<button
					type="submit"
					class="mt-8 w-full bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Login
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userId: "",
			password: "",
		};
	},
	methods: {
		handleSubmit() {
			// Perform login logic here
			if (this.userId && this.password) {
				console.log("Logging in with:", this.userId, this.password);
			} else {
				alert("Please fill in both fields.");
			}
		},
	},
};
</script>

<style>
/* Optional custom styles can go here */
</style>
