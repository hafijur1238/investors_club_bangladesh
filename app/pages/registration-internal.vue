<template>
	<div
		class="min-h-screen py-[150px] flex flex-col items-center justify-center bg-gray-100"
	>
		<p class="text-center mb-12">
			<span class="mr-2">Already have an account?</span>
			<nuxt-link to="/login" class="underline decoration-blue-800 text-blue-800"
				>Sign in</nuxt-link
			>
		</p>
		<div class="bg-white p-12 rounded-lg shadow-xl max-w-[500px] w-full">
			<!-- Registration Buttons -->
			<h3 class="text-[18px] font-semibold text-center text-gray-800 mb-10">
				Register for an account
			</h3>

			<div class="flex flex-col gap-[10px]">
				<nuxt-link to="/register/agent">
					<register-button>Register as an Agent</register-button>
				</nuxt-link>

				<nuxt-link to="/register/admin">
					<register-button> Register as an Admin </register-button>
				</nuxt-link>
			</div>
		</div>
	</div>
</template>
