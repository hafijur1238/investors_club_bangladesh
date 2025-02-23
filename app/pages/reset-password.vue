<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-2xl bg-white p-12 rounded-lg shadow-lg">
			<h2 class="text-4xl font-semibold text-center">Set new password</h2>
			<p class="text-gray-500 text-center text-sm">
				Password must be 8 characters
			</p>
			<form @submit.prevent="resetPassword" class="mt-10">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm mb-2">New password</label>
					<input
						type="password"
						v-model="newPassword"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						required
						minlength="8"
					/>
				</div>
				<div class="mb-8">
					<label class="block text-gray-700 text-sm mb-2"
						>Confirm password</label
					>
					<input
						type="password"
						v-model="confirmPassword"
						class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
						required
						minlength="8"
					/>
				</div>
				<button
					type="submit"
					class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
				>
					Reset password
				</button>
			</form>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const newPassword = ref("");
const confirmPassword = ref("");

const resetPassword = () => {
	if (newPassword.value !== confirmPassword.value) {
		alert("Passwords do not match!");
		return;
	}
	alert("Password has been reset successfully!");
};
</script>
