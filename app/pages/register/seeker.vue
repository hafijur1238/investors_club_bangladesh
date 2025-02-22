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
				To complete your registration, please note that a payment of [amount] is
				required. You can make this payment through any of the following
				methods:
			</p>
			<ul class="list-disc text-sm text-white pl-4">
				<li>Mobile Wallet: [Mobile Wallet Number]</li>
				<li>Bank Transfer: [Bank Account Details]</li>
				<li>Cash Payment: [Applicable for offline registration]</li>
			</ul>
			<p class="text-sm text-white">
				Once the payment is made, kindly retain the receipt or transaction ID as
				proof of payment. For any queries or assistance, feel free to contact us
				at [Contact Information].
			</p>
		</div>

		<!-- Form -->
		<form class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
			<!-- Full Name & Email -->
			<div>
				<label class="block text-gray-700">Your Full Name</label>
				<input type="text" class="input-field" placeholder="Enter full name" />
			</div>
			<div>
				<label class="block text-gray-700">Email address</label>
				<input type="email" class="input-field" placeholder="Enter email" />
			</div>

			<!-- NID Number & NID Image -->
			<div>
				<label class="block text-gray-700">NID number</label>
				<input type="text" class="input-field" placeholder="Enter NID number" />
			</div>
			<div>
				<label class="block text-gray-700">NID image/PDF</label>
				<input type="file" class="file-input" />
			</div>

			<!-- Phone Number & Passport Number -->
			<div>
				<label class="block text-gray-700">Phone number</label>
				<input
					type="text"
					class="input-field"
					placeholder="Enter phone number"
				/>
			</div>
			<div>
				<label class="block text-gray-700">Passport number (if any)</label>
				<input
					type="text"
					class="input-field"
					placeholder="Enter passport number"
				/>
			</div>

			<!-- Passport Photo & Image -->
			<div>
				<label class="block text-gray-700">Passport size photo</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">Passport Image (if any)</label>
				<input type="file" class="file-input" />
			</div>

			<!-- Division, District, Thana -->
			<div>
				<label class="block text-gray-700">Division</label>
				<select class="input-field">
					<option selected disabled>Select Division</option>
				</select>
			</div>
			<div>
				<label class="block text-gray-700">District</label>
				<select class="input-field">
					<option selected disabled>Select District</option>
				</select>
			</div>
			<div>
				<label class="block text-gray-700">Thana</label>
				<select class="input-field">
					<option selected disabled>Select Thana</option>
				</select>
			</div>

			<!-- Full Address -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Full Address</label>
				<textarea
					class="input-field"
					placeholder="Enter full address"
				></textarea>
			</div>

			<!-- Payment Method & Transaction ID -->
			<div>
				<label class="block text-gray-700">Select payment method</label>
				<select class="input-field">
					<option selected disabled>Select Payment Method</option>
				</select>
			</div>
			<div>
				<label class="block text-gray-700">Transaction ID</label>
				<input
					type="text"
					class="input-field"
					placeholder="Enter transaction ID"
				/>
			</div>

			<!-- Company Name & Profile -->
			<div>
				<label class="block text-gray-700">Company name</label>
				<input
					type="text"
					class="input-field"
					placeholder="Enter company name"
				/>
			</div>
			<div>
				<label class="block text-gray-700">Company profile</label>
				<input type="file" class="file-input" />
			</div>

			<!-- Trade License -->
			<div class="col-span-1 sm:col-span-2">
				<label class="block text-gray-700">Trade license (updated)</label>
				<input type="file" class="file-input" />
			</div>

			<!-- Additional Information Section -->
			<div
				class="col-span-1 sm:col-span-2 mt-8 bg-gray-100 p-6 rounded-lg text-center"
			>
				<h3 class="font-semibold text-gray-700 mb-3">Additional Information</h3>
				<p class="text-sm text-gray-600">
					The following information is optional at this stage but may help us
					conduct due diligence more quickly. However, these details will be
					required during the verification process.
				</p>
			</div>

			<!-- Additional Information Fields -->
			<div>
				<label class="block text-gray-700">Bank statement (last 2 years)</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">Sales invoice (last 1 year)</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">MOA (if any)</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Vendor payment receipt (last 6 months)</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Investment Proposal (pitch deck)</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">CIB report</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Proprietor/MD/Chairman/CEO's profile</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">Receivable and payables list</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">Rental agreement/Deed</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">BIN (if any)</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700">TIN</label>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Audit report for last 2 years (if any)</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Company valuation report (if any)</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>RJS/JC Incorporation certificate (if any)</label
				>
				<input type="file" class="file-input" />
			</div>
			<div>
				<label class="block text-gray-700"
					>Association membership certificate (if any)</label
				>
				<input type="file" class="file-input" />
			</div>

			<!-- Submit Button -->
			<div class="col-span-1 sm:col-span-2 text-center mt-4">
				<button
					class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full sm:w-auto"
				>
					Submit
				</button>
			</div>
		</form>

		<!-- Terms and Conditions Link -->
		<div class="text-center mt-6">
			<a href="#" class="text-blue-600" @click.prevent="openModal"
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
					@click="closeModal"
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
		};
	},
	methods: {
		openModal() {
			this.showModal = true;
		},
		closeModal() {
			this.showModal = false;
		},
		goBack() {
			// Navigate back (you can modify this to navigate to a specific route)
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
