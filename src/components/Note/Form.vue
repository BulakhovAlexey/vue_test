<template>
	<div class="form__inner">
		<form class="form__form" @submit.prevent="onSubmit">
			<textarea
				class="form__textarea"
				v-model="value"
				placeholder="enter our note"
			/>
			<TagsList
				@addTag="handlerAddTag"
				:items="tags"
				:selectedTags="selectedTags"
			/>
			<button class="form__button" type="submit">Add Note</button>
		</form>
	</div>
</template>

<script>
import TagsList from '@/components/Note/TagsList'
export default {
	components: { TagsList },
	data() {
		return {
			value: '',
			tags: ['work', 'study', 'travel', 'rest'],
			selectedTags: [],
		}
	},
	methods: {
		onSubmit() {
			const note = {
				title: this.value,
				tags: this.selectedTags,
				done: false,
			}
			this.$emit('onSubmitForm', note)
			this.value = ''
			this.selectedTags = []
		},
		handlerAddTag(tags) {
			this.selectedTags = tags
		},
	},
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/base/entry.scss';
.form {
	width: 100%;

	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0;
		width: 100%;
	}

	&__textarea {
		flex: 1;
		width: 100%;
		margin-bottom: 10px;
		border: 1px solid black;
		padding: 10px;
		font-size: 18px;
		border-radius: 20px;
		resize: none;
		&::placeholder {
			text-transform: uppercase;
		}
	}

	&__button {
		text-transform: uppercase;
		border-radius: 20px;
		//padding: 10px 30px;
		padding: rem(10) rem(20);
		background-color: #0b5107;
		color: white;
		transition: all 0.3s ease 0s;
		&:hover {
			transform: scale(1.1);
		}
	}
}
</style>
