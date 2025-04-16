<template>
	<div class="max-w-4xl mx-auto px-4 py-12 mt-28">
		<!-- Header -->
		<div class="flex items-center justify-between mb-8">
			<button
				@click="goBack"
				class="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 text-gray-600 text-xl"
			>
				&#8592;
			</button>
			<h1 class="text-xl font-semibold">Register as an Admin</h1>
			<span class="w-8"></span>
		</div>

		<!-- Form -->
		<form class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div>
				<label class="block mb-1 text-sm font-medium">Your Full Name</label>
				<input v-model="form.fullName" type="text" class="input-field" />
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium">Email address</label>
				<input v-model="form.email" type="email" class="input-field" />
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium">NID number</label>
				<input v-model="form.nid" type="text" class="input-field" />
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium">NID Image/PDF</label>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'nidImage')"
				/>
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium">Phone number</label>
				<input v-model="form.phone" type="text" class="input-field" />
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium"
					>Passport number (if any)</label
				>
				<input v-model="form.passport" type="text" class="input-field" />
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium"
					>Passport size photo</label
				>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'passportSize')"
				/>
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium"
					>Passport Image (if any)</label
				>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'passportImage')"
				/>
			</div>

			<div class="md:col-span-2">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div>
						<label class="block mb-1 text-sm font-medium">Division</label>
						<select v-model="form.division" class="input-field">
							<option value="">Select</option>
							<option value="Dhaka">Dhaka</option>
							<option value="Chattogram">Chattogram</option>
							<option value="Sylhet">Sylhet</option>
						</select>
					</div>
					<div>
						<label class="block mb-1 text-sm font-medium">District</label>
						<select v-model="form.district" class="input-field">
							<option value="">Select</option>
							<option value="Gazipur">Gazipur</option>
							<option value="Cumilla">Cumilla</option>
						</select>
					</div>
					<div>
						<label class="block mb-1 text-sm font-medium">Thana</label>
						<select v-model="form.thana" class="input-field">
							<option value="">Select</option>
							<option value="Gazipur Sadar">Gazipur Sadar</option>
							<option value="Tongi">Tongi</option>
						</select>
					</div>
				</div>
			</div>

			<div class="md:col-span-2">
				<label class="block mb-1 text-sm font-medium">Full Address</label>
				<input v-model="form.address" type="text" class="input-field" />
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium">TIN number</label>
				<input v-model="form.tin" type="text" class="input-field" />
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium"
					>TIN certificate image</label
				>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'tinImage')"
				/>
			</div>

			<div>
				<label class="block mb-1 text-sm font-medium"
					>Chairman certificate (if any)</label
				>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'chairmanCert')"
				/>
			</div>
			<div>
				<label class="block mb-1 text-sm font-medium"
					>Previous audit experience document</label
				>
				<input
					type="file"
					class="file-input"
					@change="handleFileUpload($event, 'auditDoc')"
				/>
			</div>

			<div class="md:col-span-2 flex justify-end mt-4">
				<button type="submit" class="bg-blue-700 text-white px-6 py-2 rounded">
					Submit
				</button>
			</div>
		</form>
	</div>
</template>

<script setup>
import { ref } from "vue";
const form = ref({
	fullName: "",
	email: "",
	nid: "",
	phone: "",
	passport: "",
	division: "",
	district: "",
	thana: "",
	address: "",
	tin: "",
});

const handleFileUpload = (e, field) => {
	const file = e.target.files[0];
	if (file) {
		console.log(`File uploaded for ${field}:`, file);
	}
};

const goBack = () => {
	history.back();
};
</script>

<style scoped>
.input-field {
	@apply w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.file-input {
	@apply w-full border border-dashed border-gray-400 rounded px-3 py-3 text-gray-500 cursor-pointer;
}
</style>
