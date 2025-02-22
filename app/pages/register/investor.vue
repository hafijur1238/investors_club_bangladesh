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
		<div class="bg-[#D1AC69] p-6 rounded-lg mb-6">
			<h3 class="font-semibold text-gray-700">*Registration Notice</h3>
			<p class="text-sm text-gray-600">
				To complete your registration, please note that a payment of [amount] is
				required. You can make this payment through any of the following
				methods:
			</p>
			<ul class="list-disc text-sm text-gray-600 pl-4">
				<li>Mobile Wallet: [Mobile Wallet Number]</li>
				<li>Bank Transfer: [Bank Account Details]</li>
				<li>Cash Payment: [Applicable for offline registration]</li>
			</ul>
			<p class="text-sm text-gray-600">
				Once the payment is made, kindly retain the receipt or transaction ID as
				proof of payment. For any queries or assistance, feel free to contact us
				at [Contact Information].
			</p>
		</div>

		<form
			@submit.prevent="handleSubmit"
			class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
		>
			<!-- Full Name & Email -->
			<div>
				<label class="block text-gray-700">Your Full Name</label>
				<input
					v-model="form.fullName"
					type="text"
					class="input-field w-full"
					placeholder="Enter full name"
				/>
			</div>
			<div>
				<label class="block text-gray-700">Email address</label>
				<input
					v-model="form.email"
					type="email"
					class="input-field w-full"
					placeholder="Enter email"
				/>
			</div>

			<!-- NID Number & NID Image -->
			<div>
				<label class="block text-gray-700">NID number</label>
				<input
					v-model="form.nidNumber"
					type="text"
					class="input-field w-full"
					placeholder="Enter NID number"
				/>
			</div>
			<div>
				<label class="block text-gray-700">NID image/PDF</label>
				<input
					@change="handleFileUpload($event, 'nidImage')"
					type="file"
					class="file-input w-full"
				/>
			</div>

			<!-- Phone Number & Passport Number -->
			<div>
				<label class="block text-gray-700">Phone number</label>
				<input
					v-model="form.phoneNumber"
					type="text"
					class="input-field w-full"
					placeholder="Enter phone number"
				/>
			</div>
			<div>
				<label class="block text-gray-700">Passport number (if any)</label>
				<input
					v-model="form.passportNumber"
					type="text"
					class="input-field w-full"
					placeholder="Enter passport number"
				/>
			</div>

			<!-- Passport Photo & Image -->
			<div>
				<label class="block text-gray-700">Passport size photo</label>
				<input
					@change="handleFileUpload($event, 'passportPhoto')"
					type="file"
					class="file-input w-full"
				/>
			</div>
			<div>
				<label class="block text-gray-700">Passport Image (if any)</label>
				<input
					@change="handleFileUpload($event, 'passportImage')"
					type="file"
					class="file-input w-full"
				/>
			</div>

			<!-- Payment Method & Transaction ID -->
			<div>
				<label class="block text-gray-700">Select payment method</label>
				<select v-model="form.paymentMethod" class="input-field w-full">
					<option value="" disabled selected>Select Payment Method</option>
					<option>Mobile Wallet</option>
					<option>Bank Transfer</option>
					<option>Cash Payment</option>
				</select>
			</div>
			<div>
				<label class="block text-gray-700">Transaction ID</label>
				<input
					v-model="form.transactionId"
					type="text"
					class="input-field w-full"
					placeholder="Enter transaction ID"
				/>
			</div>

			<!-- Division, District, Thana -->
			<div
				class="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4"
			>
				<div>
					<label class="block text-gray-700">Division</label>
					<select
						v-model="form.division"
						@change="updateDistricts"
						class="input-field w-full"
					>
						<option value="" disabled selected>Select Division</option>
						<option
							v-for="division in divisions"
							:key="division"
							:value="division"
						>
							{{ division }}
						</option>
					</select>
				</div>
				<div>
					<label class="block text-gray-700">District</label>
					<select
						v-model="form.district"
						@change="updateThanas"
						class="input-field w-full"
					>
						<option value="" disabled selected>Select District</option>
						<option
							v-for="district in districts"
							:key="district"
							:value="district"
						>
							{{ district }}
						</option>
					</select>
				</div>
				<div>
					<label class="block text-gray-700">Thana</label>
					<select v-model="form.thana" class="input-field w-full">
						<option value="" disabled selected>Select Thana</option>
						<option v-for="thana in thanas" :key="thana" :value="thana">
							{{ thana }}
						</option>
					</select>
				</div>
			</div>

			<!-- Full Address & Investment Amount -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Full Address</label>
				<textarea
					v-model="form.fullAddress"
					class="input-field w-full"
					placeholder="Enter full address"
				></textarea>
			</div>

			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Investment amount</label>
				<input
					v-model="form.investmentAmount"
					type="text"
					class="input-field w-full"
					placeholder="Enter investment amount"
				/>
			</div>

			<!-- Submit Button -->
			<div class="col-span-1 sm:col-span-2 text-center mt-6">
				<button
					type="submit"
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
				>
					Submit
				</button>
			</div>
		</form>

		<!-- Terms and Conditions Link -->
		<div class="text-center mt-6">
			<a href="#" class="text-blue-600" @click.prevent="toggleModal"
				>Read terms and conditions</a
			>
		</div>

		<!-- Terms and Conditions Modal -->
		<div
			v-if="showModal"
			class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
		>
			<div class="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
				<h2 class="text-xl font-semibold mb-4">Terms and Conditions</h2>
				<p class="mb-4 text-sm text-gray-600">
					Here are the terms and conditions...
				</p>
				<button
					@click="toggleModal"
					class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
				>
					Close
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showModal: false,
			form: {
				fullName: "",
				email: "",
				nidNumber: "",
				phoneNumber: "",
				passportNumber: "",
				division: "",
				district: "",
				thana: "",
				fullAddress: "",
				paymentMethod: "",
				transactionId: "",
				investmentAmount: "",
				nidImage: null,
				passportPhoto: null,
				passportImage: null,
			},
			divisions: ["Dhaka", "Chattogram", "Sylhet", "Khulna"],
			districts: [],
			thanas: [],
			divisionData: {
				Dhaka: ["Dhaka", "Gazipur", "Narayanganj"],
				Chattogram: ["Chattogram", "Coxs Bazar", "Bandarban"],
				Sylhet: ["Sylhet", "Moulvibazar", "Habiganj"],
				Khulna: ["Khulna", "Jessore", "Satkhira"],
			},
			thanaData: {
				Dhaka: ["Tejgaon", "Gulshan", "Mohammadpur"],
				Gazipur: ["Tongi", "Kaliakair", "Kapasia"],
				Narayanganj: ["Fatullah", "Siddhirganj", "Sonargaon"],
				Chattogram: ["Pahartali", "Halishahar", "Double Mooring"],
			},
		};
	},
	methods: {
		toggleModal() {
			this.showModal = !this.showModal;
		},
		updateDistricts() {
			this.districts = this.divisionData[this.form.division] || [];
			this.form.district = "";
			this.form.thana = "";
			this.thanas = [];
		},
		updateThanas() {
			this.thanas = this.thanaData[this.form.district] || [];
			this.form.thana = "";
		},
		handleFileUpload(event, field) {
			this.form[field] = event.target.files[0];
		},
		handleSubmit() {
			console.log("Form submitted:", this.form);
			alert("Form submitted successfully!");
		},
		goBack() {
			this.$router.go(-1); // Goes one step back in browser history
		},
	},
};
</script>

<style scoped>
.input-field {
	@apply w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500;
}

.file-input {
	@apply w-full border border-dashed border-gray-400 p-2 rounded-lg cursor-pointer;
}
</style>
