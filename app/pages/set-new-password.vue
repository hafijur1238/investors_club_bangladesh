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
				<p class="text-end text-gray-600 mt-4 mb-10">
					Don’t have an account?
					<nuxt-link to="/registration" class="text-blue-500 hover:underline"
						>Register here</nuxt-link
					>
				</p>
				<div class="flex justify-center item-center">
					<button
						type="submit"
						class="bg-blue-600 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-700 transition"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth"; // import the useAuth composable
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const newPassword = ref("");
const confirmPassword = ref("");
const errorMessage = ref("");
const { isAuthenticated, isAdmin, getAuthHeader } = useAuth(); // using useAuth hook

// Handle form submission
const handleSubmit = async () => {
	// Check if the user is authenticated and is an admin
	if (!isAuthenticated.value || !isAdmin.value) {
		errorMessage.value =
			"You must be logged in as an admin to perform this action.";
		return;
	}

	// Validate the new password
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

	// Prepare the payload for the POST request
	const payload = {
		newPassword: newPassword.value,
	};

	try {
		// Make the POST request to update the password
		const response = await $fetch(
			"http://103.174.50.71:8080/user/setPassword",
			{
				method: "POST",
				headers: {
					...getAuthHeader(), // include the authorization header from useAuth
					"Content-Type": "application/json",
				},
				body: JSON.stringify(payload),
			}
		);

		if (response.status === "OK") {
			alert("Password updated successfully!");
			// Redirect the user to the "/welcome-admin-agent" page
			router.push("/welcome-admin-agent");
		} else {
			errorMessage.value = "Failed to update password. Please try again.";
		}
	} catch (error) {
		console.error("Error:", error);
		errorMessage.value = "An error occurred. Please try again.";
	}
};
</script>

<style scoped>
/* Optional styles for customizations can go here */
/* For example, input styling on validation error */
/* input:invalid {
        border-color: red;
    } */
</style>
