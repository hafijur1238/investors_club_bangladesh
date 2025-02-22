<template>
	<div class="flex justify-center items-center min-h-screen bg-gray-100">
		<div class="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg">
			<h2 class="text-2xl font-semibold text-center">Set new password</h2>
			<p class="text-gray-500 text-center text-sm mt-1">
				Password must be 8 characters
			</p>

			<form @submit.prevent="handleSubmit" class="mt-6">
				<div class="mb-4">
					<label for="newPassword" class="block text-gray-700 font-medium"
						>New password</label
					>
					<input
						id="newPassword"
						v-model="newPassword"
						type="password"
						placeholder="Enter new password"
						class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<div class="mb-4">
					<label for="confirmPassword" class="block text-gray-700 font-medium"
						>Confirm password</label
					>
					<input
						id="confirmPassword"
						v-model="confirmPassword"
						type="password"
						placeholder="Confirm new password"
						class="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
					/>
				</div>

				<p v-if="errorMessage" class="text-red-500 text-sm mb-3">
					{{ errorMessage }}
				</p>

				<button
					type="submit"
					class="w-full bg-blue-600 text-white py-3 rounded-lg text-lg hover:bg-blue-700 transition"
				>
					Submit
				</button>
			</form>

			<p class="text-center text-gray-600 mt-4">
				Don’t have an account?
				<nuxt-link to="/registration" class="text-blue-500 hover:underline"
					>Register here</nuxt-link
				>
			</p>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const newPassword = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");

// Handle form submission
const handleSubmit = () => {
	if (newPassword.value.length < 8) {
		errorMessage.value = "Password must be at least 8 characters long.";
		return;
	}
	if (newPassword.value !== confirmPassword.value) {
		errorMessage.value = "Passwords do not match.";
		return;
	}

	// Reset error message
	errorMessage.value = "";

	// Redirect to dashboard after successful password update
	router.push("/dashboard");
};
</script>
