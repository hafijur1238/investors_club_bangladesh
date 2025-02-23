<template>
	<div
		class="max-w-3xl mx-auto p-6 bg-gray-100 min-h-screen mt-24 mb-24 relative z-10"
	>
		<h2 class="text-center text-xl font-semibold mb-6">Create a new blog</h2>

		<div>
			<label class="block text-gray-700 text-sm mb-2">Blog Title</label>
			<input
				type="text"
				v-model="blogTitle"
				placeholder="Give your new blog a title"
				class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
			/>
		</div>

		<div class="mt-4">
			<label class="block text-gray-700 text-sm mb-2">Blog Photo</label>
			<div
				class="w-full h-48 border-dashed border-2 border-gray-300 flex items-center justify-center cursor-pointer rounded-md"
				@click="uploadImage"
			>
				<span v-if="!image" class="text-gray-500">Add photo</span>
				<img
					v-else
					:src="image"
					class="h-full w-full object-cover rounded-md"
				/>
				<input
					type="file"
					ref="fileInput"
					class="hidden"
					@change="onFileChange"
				/>
			</div>
		</div>

		<div class="mt-6" v-for="(section, index) in sections" :key="index">
			<label class="block text-gray-700 text-sm mb-2">Blog content</label>
			<input
				type="text"
				v-model="section.title"
				placeholder="Section title"
				class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
			/>
			<textarea
				v-model="section.content"
				class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				rows="4"
				placeholder="Write your blog content here..."
			></textarea>
		</div>

		<button
			@click="addSection"
			class="flex items-center justify-center w-full mt-4 p-2 border rounded-md text-gray-700 bg-white hover:bg-gray-200"
		>
			+
		</button>

		<div class="mt-6 flex justify-end">
			<button class="px-4 py-2 bg-gray-300 rounded-md mr-2" @click="cancel">
				Cancel
			</button>
			<button
				class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
				@click="publish"
			>
				Publish
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

const blogTitle = ref("");
const image = ref(null);
const fileInput = ref(null);
const sections = ref([{ title: "", content: "" }]);

const uploadImage = () => {
	fileInput.value.click();
};

const onFileChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();
		reader.onload = (e) => {
			image.value = e.target.result;
		};
		reader.readAsDataURL(file);
	}
};

const addSection = () => {
	sections.value.push({ title: "", content: "" });
};

const cancel = () => {
	blogTitle.value = "";
	image.value = null;
	sections.value = [{ title: "", content: "" }];
};

const publish = () => {
	console.log("Publishing blog:", {
		title: blogTitle.value,
		image: image.value,
		sections: sections.value,
	});
};
</script>

<style scoped></style>
