<script setup>
import { useRouter } from "#imports";
import { reactive, ref } from "vue";

// Router instance for navigation
const router = useRouter();

// Authorization token
const TOKEN =
	"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJJQ0JBRDAyMjIyMDkiLCJpYXQiOjE3NDQ0ODI1MTYsInJvbGVzIjoiUk9MRV9BRE1JTiIsImV4cCI6MTc0NDQ4NTUxNn0.9r5YboAoUqLe3jDsFW_riJS1CFxOXrMzBPoKNjPGp-Q";

// Division, District, Thana, PaymentMethod options
const divisions = [
	{ id: 1, name: "Dhaka" },
	{ id: 2, name: "Chattogram" },
	{ id: 3, name: "Sylhet" },
];

const districts = [
	{ id: 10, name: "Dhaka District" },
	{ id: 11, name: "Gazipur" },
	{ id: 12, name: "Narayanganj" },
];

const thanas = [
	{ id: 100, name: "Banani" },
	{ id: 101, name: "Gulshan" },
	{ id: 102, name: "Dhanmondi" },
];

const paymentMethods = [
	{ id: 1, name: "Mobile Wallet" },
	{ id: 2, name: "Bank Transfer" },
	{ id: 3, name: "Cash Payment" },
];

// Form data reactive object
const form = reactive({
	fullName: "",
	email: "",
	nid: "",
	nidImage: "",
	phone: "",
	passport: "",
	passportImage: "",
	image: "",
	division: "",
	district: "",
	thana: "",
	address: "",
	paymentMethod: "",
	transactionId: "",
});

const touched = reactive({});
const errors = reactive({});
const isSubmitting = ref(false);

// Modal control
const showModal = ref(false);
const toggleModal = () => {
	showModal.value = !showModal.value;
};

// Validation rules for each field
const validators = {
	fullName: (value) => (!value ? "Full Name is required" : null),
	email: (value) =>
		!value
			? "Email is required"
			: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
			? "Invalid email"
			: null,
	nid: (value) =>
		!value
			? "NID is required"
			: value.length !== 10
			? "NID must be exactly 10 digits"
			: null,
	phone: (value) =>
		!value
			? "Phone number is required"
			: value.length !== 10
			? "Phone number must be exactly 11 digits"
			: null,
	passport: (value) =>
		value && value.length < 9
			? "Passport number must be at least 9 digits"
			: null,
	transactionId: (value) => (!value ? "Transaction ID is required" : null),
	division: (value) => (!value ? "Division is required" : null),
	district: (value) => (!value ? "District is required" : null),
	thana: (value) => (!value ? "Thana is required" : null),
	address: (value) => (!value ? "Address is required" : null),
	paymentMethod: (value) => (!value ? "Payment method is required" : null),
};

// Validate a single field on blur
const validateField = (fieldName) => {
	touched[fieldName] = true;
	const error = validators[fieldName](form[fieldName]);
	if (error) errors[fieldName] = error;
	else delete errors[fieldName];
};

// Validate all fields (for form submission)
const validateAllFields = () => {
	let isValid = true;
	Object.keys(validators).forEach((field) => {
		const error = validators[field](form[field]);
		if (error) {
			errors[field] = error;
			touched[field] = true;
			isValid = false;
		} else {
			delete errors[field];
		}
	});
	return isValid;
};

// Upload file and set URL
const handleFileUpload = async (event, fieldName) => {
	const file = event.target.files?.[0];
	if (!file) return;
	try {
		const res = await startUpload([file]);
		console.log("Upload result:", res);
		form[fieldName] = res?.[0]?.url || "";
	} catch (err) {
		console.error("Upload error:", err);
		form[fieldName] = ""; // fallback if upload fails
		alert("Upload failed!");
	}
};

// Handle form submission
const handleSubmit = async () => {
	isSubmitting.value = true;

	const isValid = validateAllFields();
	if (!isValid) {
		isSubmitting.value = false;
		return;
	}

	try {
		const response = await $fetch("http://103.174.50.71:8080/member", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${TOKEN}`,
				"Content-Type": "application/json",
			},
			body: {
				fullName: form.fullName,
				nid: form.nid,
				nidUrl: form.nidImage || "https://example.com/default-nid.jpg",
				passPortSizePhoto:
					form.image || "https://example.com/default-profile.jpg",
				passportNumber: form.passport,
				passportPhotoUrl:
					form.passportImage || "https://example.com/default-passport.jpg",
				phoneNumber: form.phone,
				email: form.email,
				divisionId: Number(form.division),
				districtId: Number(form.district),
				thanaId: Number(form.thana),
				address: form.address,
				paymentMethodId: Number(form.paymentMethod),
				transactionId: form.transactionId,
				bankStatementUrl: "",
			},
		});

		console.log("Success:", response);
		alert("Form submitted successfully!");
		router.push("/thank-you");
	} catch (err) {
		console.error("Submission error:", err);
		alert("Submission failed!");
	} finally {
		isSubmitting.value = false;
	}
};

// Go back
const goBack = () => {
	router.go(-1);
};
</script>

<template>
	<div class="max-w-6xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-28 mb-20">
		<!-- Back Button -->
		<div class="mb-6">
			<button
				@click="goBack"
				class="text-blue-600 hover:text-blue-800 font-semibold"
			>
				← Back
			</button>
		</div>

		<!-- Header -->
		<div class="text-center mb-8">
			<h2 class="text-2xl font-semibold text-gray-800">
				Join us today to connect with great ventures and <br />
				make the most of your investments!
			</h2>
		</div>

		<!-- Registration Notice -->
		<div class="bg-[#AEA491] p-6 rounded-lg mb-6">
			<h3 class="font-semibold text-white">*Registration Notice</h3>
			<p class="text-sm text-white">
				Payment of [amount] required. You can make this payment through:
			</p>
			<ul class="list-disc text-sm text-white pl-4">
				<li>Mobile Wallet</li>
				<li>Bank Transfer</li>
				<li>Cash Payment</li>
			</ul>
		</div>

		<!-- Form -->
		<form
			@submit.prevent="handleSubmit"
			class="grid grid-cols-1 sm:grid-cols-2 gap-6"
		>
			<!-- Full Name -->
			<div>
				<label class="block text-gray-700">Full Name</label>
				<input
					v-model="form.fullName"
					@blur="validateField('fullName')"
					type="text"
					class="input-field"
					placeholder="Enter full name"
				/>
				<p
					v-if="touched.fullName && errors.fullName"
					class="text-red-500 text-sm"
				>
					{{ errors.fullName }}
				</p>
			</div>

			<!-- Email -->
			<div>
				<label class="block text-gray-700">Email Address</label>
				<input
					v-model="form.email"
					@blur="validateField('email')"
					type="email"
					class="input-field"
					placeholder="Enter email"
				/>
				<p v-if="touched.email && errors.email" class="text-red-500 text-sm">
					{{ errors.email }}
				</p>
			</div>

			<!-- NID -->
			<div>
				<label class="block text-gray-700">NID Number</label>
				<input
					v-model="form.nid"
					@blur="validateField('nid')"
					type="number"
					@input="form.nid = $event.target.value.slice(0, 10)"
					class="input-field"
					placeholder="Enter NID number"
				/>
				<p v-if="touched.nid && errors.nid" class="text-red-500 text-sm">
					{{ errors.nid }}
				</p>
			</div>

			<!-- Phone -->
			<div>
				<label class="block text-gray-700">Phone Number</label>
				<input
					v-model="form.phone"
					@blur="validateField('phone')"
					type="number"
					@input="form.phone = $event.target.value.slice(0, 10)"
					class="input-field"
					placeholder="Enter phone number"
				/>
				<p v-if="touched.phone && errors.phone" class="text-red-500 text-sm">
					{{ errors.phone }}
				</p>
			</div>

			<!-- Passport -->
			<div>
				<label class="block text-gray-700">Passport Number</label>
				<input
					v-model="form.passport"
					type="text"
					@input="form.passport = $event.target.value.slice(0, 9)"
					class="input-field"
					placeholder="Enter passport number (optional)"
				/>
			</div>

			<!-- Upload NID Image -->
			<div>
				<label class="block text-gray-700">Upload NID Image</label>
				<input
					type="file"
					class="file-input"
					@change="(e) => handleFileUpload(e, 'nidImage')"
				/>
			</div>

			<!-- Upload Passport Image -->
			<div>
				<label class="block text-gray-700">Upload Passport Image</label>
				<input
					type="file"
					class="file-input"
					@change="(e) => handleFileUpload(e, 'passportImage')"
				/>
			</div>

			<!-- Upload Profile Image -->
			<div>
				<label class="block text-gray-700">Upload Profile Image</label>
				<input
					type="file"
					class="file-input"
					@change="(e) => handleFileUpload(e, 'image')"
				/>
			</div>

			<!-- Division -->
			<div>
				<label class="block text-gray-700">Division</label>
				<select
					v-model="form.division"
					@blur="validateField('division')"
					class="input-field"
				>
					<option value="" disabled selected>Select Division</option>
					<option
						v-for="division in divisions"
						:key="division.id"
						:value="division.id"
					>
						{{ division.name }}
					</option>
				</select>
			</div>

			<!-- District -->
			<div>
				<label class="block text-gray-700">District</label>
				<select
					v-model="form.district"
					@blur="validateField('district')"
					class="input-field"
				>
					<option value="" disabled selected>Select District</option>
					<option
						v-for="district in districts"
						:key="district.id"
						:value="district.id"
					>
						{{ district.name }}
					</option>
				</select>
			</div>

			<!-- Thana -->
			<div>
				<label class="block text-gray-700">Thana</label>
				<select
					v-model="form.thana"
					@blur="validateField('thana')"
					class="input-field"
				>
					<option value="" disabled selected>Select Thana</option>
					<option v-for="thana in thanas" :key="thana.id" :value="thana.id">
						{{ thana.name }}
					</option>
				</select>
			</div>

			<!-- Address -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Full Address</label>
				<textarea
					v-model="form.address"
					@blur="validateField('address')"
					class="input-field"
					placeholder="Enter full address"
				></textarea>
				<p
					v-if="touched.address && errors.address"
					class="text-red-500 text-sm"
				>
					{{ errors.address }}
				</p>
			</div>

			<!-- Payment Method -->
			<div>
				<label class="block text-gray-700">Payment Method</label>
				<select
					v-model="form.paymentMethod"
					@blur="validateField('paymentMethod')"
					class="input-field"
				>
					<option value="" disabled selected>Select Payment Method</option>
					<option
						v-for="payment in paymentMethods"
						:key="payment.id"
						:value="payment.id"
					>
						{{ payment.name }}
					</option>
				</select>
				<p
					v-if="touched.paymentMethod && errors.paymentMethod"
					class="text-red-500 text-sm"
				>
					{{ errors.paymentMethod }}
				</p>
			</div>

			<!-- Transaction ID -->
			<div>
				<label class="block text-gray-700">Transaction ID</label>
				<input
					v-model="form.transactionId"
					type="text"
					class="input-field"
					placeholder="Enter transaction ID"
				/>
				<p
					v-if="touched.transactionId && errors.transactionId"
					class="text-red-500 text-sm"
				>
					{{ errors.transactionId }}
				</p>
			</div>

			<!-- Submit Button -->
			<div class="col-span-1 sm:col-span-2 text-center mt-6">
				<button
					type="submit"
					:disabled="isSubmitting"
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
				>
					<span v-if="isSubmitting">Submitting...</span>
					<span v-else>Submit</span>
				</button>
			</div>
		</form>
	</div>
</template>

<style scoped>
.input-field {
	@apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}
.file-input {
	@apply w-full px-4 py-2 border border-dashed border-gray-400 rounded-lg cursor-pointer;
}
</style>
