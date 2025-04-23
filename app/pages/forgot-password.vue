<template>
	<div class="flex justify-center items-center min-h-screen bg-gray-100">
		<!-- Larger container -->
		<div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-12">
			<h1 class="text-3xl font-bold text-center text-gray-800">
				Forgot Password
			</h1>
			<p class="text-lg text-gray-600 text-center mt-4">
				Enter your email address and username below, and we'll send you a link
				to reset your password.
			</p>
			<form @submit.prevent="handleSubmit" class="mt-8">
				<div class="mb-6">
					<label for="username" class="block text-lg font-medium text-gray-700"
						>Username</label
					>
					<input
						id="username"
						v-model="username"
						type="text"
						placeholder="Enter your username"
						class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
					/>
				</div>

				<div class="mb-6">
					<label for="email" class="block text-lg font-medium text-gray-700"
						>Email Address</label
					>
					<input
						id="email"
						v-model="email"
						type="email"
						placeholder="Enter your email address"
						class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
					/>
				</div>

				<button
					type="submit"
					class="mt-8 w-full bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Send Reset Link
				</button>

				<div class="mt-6 text-center">
					<nuxt-link to="/login" class="text-lg text-blue-500 hover:underline">
						Back to Login
					</nuxt-link>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth";
import { useUuid } from "@/composables/useUuid"; // Import the global state
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const username = ref(""); // Adding username input
const auth = useAuth();
const { setUuid } = useUuid(); // Access the global store for UUID

// Handle form submission
const handleSubmit = async () => {
	// First, check if the user is authenticated and is an admin
	if (!auth.isAuthenticated.value || !auth.isAdmin.value) {
		alert("You must be logged in as an admin to request a password reset");
		return;
	}

	// Prepare the data
	const formData = {
		email: email.value,
		username: username.value, // Including username in the request
	};

	try {
		// Send POST request to the API
		const response = await $fetch(
			"http://103.174.50.71:8080/forgetPassword/send-otp",
			{
				method: "POST",
				headers: auth.getAuthHeader(),
				body: formData,
			}
		);

		// Handle the API response
		if (response.status === "OK") {
			setUuid(response.body); // Store UUID in the global state
			console.log("OTP UUID:", response.body); // Check the response body (UUID)
			alert("OTP has been sent to your email address");
			router.push("/OTPForm"); // Redirect the user to the OTP form page
		} else {
			alert("Failed to send OTP");
		}
	} catch (error) {
		console.error("Error submitting the form:", error);
		alert("An error occurred while sending the OTP");
	}
};
</script>

<style scoped>
/* Optional styles for customizations */
</style>
