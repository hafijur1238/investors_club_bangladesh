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
				<div v-if="errorMessage" class="text-red-500 text-lg text-center mb-4">
					{{ errorMessage }}
				</div>
				<div class="flex justify-end">
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

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// Example User Data
const validUser = {
	userId: "user123",
	password: "password123",
};

// Form Fields
const userId = ref("");
const password = ref("");
const errorMessage = ref("");

// Handle Login
const handleSubmit = () => {
	if (
		userId.value === validUser.userId &&
		password.value === validUser.password
	) {
		// Redirect to dashboard
		router.push("/set-new-password");
	} else {
		errorMessage.value = "Invalid user ID or password. Please try again.";
	}
};
</script>

<style>
/* Optional custom styles */
</style>
