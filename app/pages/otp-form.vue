<template>
	<div class="flex justify-center items-center min-h-screen bg-gray-100 mt-20">
		<div class="w-full max-w-2xl bg-white rounded-lg shadow-lg p-12">
			<h1 class="text-3xl font-bold text-center text-gray-800">
				Verify Your Identity
			</h1>
			<p class="text-lg text-gray-600 text-center mt-4">
				Please enter the OTP provided to continue.
			</p>
			<form @submit.prevent="handleSubmit" class="mt-8">
				<div class="mb-6">
					<label for="otp" class="block text-lg font-medium text-gray-700"
						>OTP Code</label
					>
					<input
						id="otp"
						v-model="otp"
						type="text"
						inputmode="numeric"
						pattern="[0-9]*"
						placeholder="Enter the OTP code"
						required
						class="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-lg"
					/>
				</div>

				<button
					type="submit"
					class="mt-8 w-full bg-blue-600 text-white py-3 px-6 text-lg rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Verify
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { useAuth } from "@/composables/useAuth";
import { useUuid } from "@/composables/useUuid"; // Import the global UUID store
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const { isAuthenticated, isAdmin, getAuthHeader } = useAuth();
const { uuid } = useUuid(); // Get the global UUID

const otp = ref(""); // OTP input from user

// Form submit handler
const handleSubmit = async () => {
	// Check if user is authenticated and has admin role
	if (!isAuthenticated.value || !isAdmin.value) {
		alert("You must be logged in as an admin to verify the OTP.");
		return;
	}

	// Prepare the request data
	const requestData = {
		otp: otp.value,
		uuid: uuid, // Attach the UUID from global state
	};

	try {
		// Send the POST request to validate the OTP
		const response = await $fetch(
			"http://103.174.50.71:8080/forgetPassword/validate-otp",
			{
				method: "POST",
				headers: getAuthHeader(),
				body: requestData,
			}
		);

		if (response.status === "OK") {
			// If OTP is valid, navigate to the next page
			alert("OTP validated successfully!");
			router.push("/set-new-password"); // Redirect to set new password page
		} else {
			alert("Invalid OTP, please try again.");
		}
	} catch (error) {
		console.error("Error validating OTP:", error);
		alert("There was an error validating the OTP. Please try again later.");
	}
};
</script>

<style scoped>
/* Optional styles for customizations can go here */
</style>
