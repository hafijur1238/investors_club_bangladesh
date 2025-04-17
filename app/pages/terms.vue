<template>
	<div class="max-w-6xl mx-auto px-4 py-16 mt-28">
		<div class="grid grid-cols-1 md:grid-cols-4 gap-10">
			<!-- Left Content -->
			<div class="md:col-span-3 space-y-10">
				<h1 class="text-2xl font-semibold">ICB Terms & Conditions</h1>

				<section v-if="selectedAgreement === 1">
					<h2 class="text-lg font-medium mb-2">Investor</h2>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">1.</span>I agree not to get
						involved in any investment process indirectly with any of ICB listed
						businesses or projects under ICB without consent of ICB. Failure to
						comply to rule, will result in direct termination.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">2.</span>I agree not to get
						involved with any shady, irrelevant or fraudulent investments firms
						for investing.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">3.</span>In a scenario
						where Investors Club Bangladesh (ICB) ceases to operate as an
						investment consultancy platform, they are not directly liable for
						any financial mishaps or fraudulent activities of an investment
						seeker. However, ICB takes full responsibility of the financial
						management of the transaction, providing post relevant services of
						the accident (legal, bureaucratic)
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">4.</span>ICB does not hold
						funds for personal usage. Therefore, ICB holds no claim to the money
						you invest.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">5.</span>I agree that, I
						owe a duty of confidentiality to the Company with regard to: Sharing
						any of the internal operating systems and procedures used by the
						Company, the Agreements provided and Documents shared and any other
						information provided in relation to investment seekers or ICB.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">6.</span>I agree that
						creating any syndicate, groups with consenting ICB is prohibited.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">7.</span>I believe that
						with my clear sane-mindset and conscious mind, I will not violate
						any rules and conditions of ICB and laws and regulations applicable
						in jurisdictions not limited to the People’s republic of Bangladesh.
					</p>
					<p class="text-gray-600 mb-3">
						<span class="text-[20px] pr-2 font-bold">8.</span>I agree that
						company may amend and update the policy from time to time.
					</p>
					<p class="text-gray-600">
						Failure to maintain all of the above conditions, will result in
						termination of contract, relationship and all ongoing financial
						activities.
					</p>
				</section>

				<section v-if="selectedAgreement === 2">
					<h2 class="text-lg font-medium mb-2">Investor Seeker</h2>
					<p class="text-gray-600">
						<span class="text-[20px] pr-2 font-bold">1.</span>I agree to
						cooperate with ICB over transparency of my account details access in
						order to maintain smooth communication and financial activities
						between ICB and the investor.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">2.</span>I agree not to get
						involved with any shady, irrelevant or fraudulent investments firms
						in terms of acquiring capital for my business.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">3.</span>I agree to submit
						ICB collateral (an asset) equivalent to my investment if the sum
						exceeds Taka 50 lakhs.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">4.</span>I agree to share
						5% commission of each investment deal with ICB, in terms of
						investment, investment renewal or new investment.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">5.</span>I agree to be
						transparent with records of previous investment history.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">6.</span>If any business
						owner/investment seeker takes investment from any investors of ICB
						without consent of our management, he or she will be expelled from
						our community without any notice.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">7.</span>I agree that, I
						owe a duty of confidentiality to the Company with regard to: Sharing
						any of the internal operating systems and procedures used by the
						Company, the Agreements provided and Documents shared and any other
						information provided in relation to potential or actual investors or
						ICB.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">8.</span>I agree that
						creating any syndicate or forming groups without consenting ICB is
						prohibited.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">9.</span>I believe that
						with my clear, conscious and sane-mindset, I will not violate any
						rules and conditions of ICB or any law of Bangladesh.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">10.</span>I agree that
						company may amend and update the policy from time to time.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[20px] pr-2 font-bold">10.</span>I agree to
						cooperate with ICB for any kinds accounts auditing, if needed.
					</p>
					<p class="text-gray-600 mt-4">
						Failure to maintain all of the above conditions, will result in
						termination of contract, relationship and all ongoing financial
						activities.
					</p>
				</section>

				<section v-if="selectedAgreement === 3">
					<h2 class="text-lg font-medium mb-2">General Member</h2>
					<p class="text-gray-600 mb-3">
						These terms and conditions govern your membership in Investors Club
						Bangladesh. By becoming a member, you agree to abide by the
						following terms and conditions. If you do not agree, please refrain
						from becoming a member.
					</p>
					<p class="text-gray-600 mb-3">
						To become a member, you must be at least 18 years old and legally
						capable of entering into binding contracts.
					</p>
					<p class="text-gray-600 mb-3">
						Membership is open to individuals or entities who agree to the Terms
						and meet any additional eligibility requirements specified by the
						Organization.
					</p>
					<p class="text-gray-600 mt-4">
						<span class="text-[18px] pr-2 font-bold">Registration:</span>I agree
						to cooperate with ICB for any kinds accounts auditing, if needed.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Account Creation:</span>You
						may be required to create an account and choose a username and
						password. You are responsible for maintaining the confidentiality of
						your account credentials.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Approval:</span>Your
						membership is subject to approval by the Organization, which
						reserves the right to refuse membership without providing a reason.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Fees:</span>Membership may
						involve a one-time or recurring fee, as specified on the
						Organization’s website or in your membership agreement.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Payment Terms:</span
						>Payment must be made in full at the time of registration or
						according to the payment schedule set forth in the membership
						agreement.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Non-refundable:</span
						>Unless otherwise stated, membership fees are non-refundable, even
						if you decide to cancel your membership before the end of the term.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">As a member:</span>You will
						receive benefits, services, and access to resources as outlined by
						the Organization.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Access:</span>Access to
						specific resources or benefits may vary depending on your membership
						level or tier.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Limitations:</span>Services
						and resources provided to members are for personal, non-commercial
						use unless otherwise agreed.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Compliance:</span>You agree
						to comply with all applicable laws, rules, and regulations related
						to your membership.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Behavior:</span>Members are
						expected to behave respectfully and professionally when engaging
						with the Organization and other members.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">Confidentiality:</span>You
						must keep any confidential information provided by the Organization
						private and not disclose it to any third parties without the
						Organization’s prior written consent.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">By Member:</span>You may
						terminate your membership at any time by following the cancellation
						instructions provided by the Organization.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold">By Organization:</span>The
						Organization reserves the right to suspend or terminate your
						membership if you violate any terms of this agreement, fail to pay
						fees, or engage in any behavior deemed inappropriate.
					</p>
					<p class="text-gray-600 mt-3">
						<span class="text-[18px] pr-2 font-bold"
							>Effect of Termination:</span
						>Upon termination, you will lose access to all membership benefits.
						Any unpaid fees owed to the Organization must be paid in full.
					</p>
					<p class="text-gray-600 mb-3">
						The Organization does not guarantee any specific outcomes or
						benefits from membership.
					</p>
					<p class="text-gray-600 mb-3">
						To the fullest extent permitted by law, the Organization is not
						liable for any direct, indirect, incidental, or consequential
						damages resulting from your membership or use of services.
					</p>
					<p class="text-gray-600 mb-3">
						All intellectual property related to the Organization's services,
						including logos, materials, content, and designs, are owned by the
						Organization or its licensors.
					</p>
					<p class="text-gray-600 mb-3">
						Members are granted a limited, non-exclusive license to use the
						Organization's resources for personal use only and may not
						reproduce, distribute, or exploit any content without written
						permission.
					</p>
					<p class="text-gray-600 mb-3">
						The Organization will collect and process your personal information
						as described in our Privacy Policy.
					</p>
					<p class="text-gray-600 mb-3">
						By becoming a member, you consent to the Organization’s use of your
						data as outlined in the Privacy Policy.
					</p>
					<p class="text-gray-600 mb-3">
						The Organization may update these Terms from time to time. Any
						changes will be posted on the Organization's website, and the new
						Terms will be effective immediately upon posting.
					</p>
					<p class="text-gray-600 mb-3">
						Members are encouraged to review the Terms periodically for any
						updates.
					</p>
				</section>

				<!-- Checkbox and Button -->
				<div class="border-t pt-6 space-y-6">
					<div class="flex items-center gap-2">
						<input type="checkbox" id="agree" v-model="agree" class="w-4 h-4" />
						<label for="agree" class="text-sm text-gray-700">
							I agree to the
							<span class="text-blue-600 font-medium"
								>terms and conditions</span
							>
						</label>
					</div>
					<button
						:disabled="!agree"
						@click="goToRegister"
						class="bg-blue-700 text-white px-6 py-2 rounded disabled:opacity-50"
					>
						Create account
					</button>
				</div>
			</div>

			<!-- Right Sidebar -->
			<aside class="space-y-4">
				<h2 class="text-sm font-semibold text-gray-700">
					ICB Terms & Conditions
				</h2>
				<ul
					class="text-sm text-gray-600 space-y-2 border-l border-gray-200 pl-4"
				>
					<li
						:class="{
							'text-blue-600 font-medium': selectedAgreement === 1,
							'cursor-pointer': true,
						}"
						@click="selectedAgreement = 1"
					>
						Investor
					</li>
					<li
						:class="{
							'text-blue-600 font-medium': selectedAgreement === 2,
							'cursor-pointer': true,
						}"
						@click="selectedAgreement = 2"
					>
						Investor Seeker
					</li>
					<li
						:class="{
							'text-blue-600 font-medium': selectedAgreement === 3,
							'cursor-pointer': true,
						}"
						@click="selectedAgreement = 3"
					>
						General Member
					</li>
				</ul>
				<p class="text-xs text-gray-400 mt-4">Updated Oct 19, 2025</p>
			</aside>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const agree = ref(false);
const selectedAgreement = ref(1);
const router = useRouter();

const goToRegister = () => {
	if (agree.value) {
		router.push("/registration");
	}
};
</script>

<style scoped></style>
