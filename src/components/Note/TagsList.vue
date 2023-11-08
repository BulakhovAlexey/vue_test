<template>
	<div class="tags" :class="{ isNoClickable: isNoClickable }">
		<div
			class="tags__item"
			:class="{
				isNoClickable: isNoClickable,
				selected: isSelected(item),
				last: isDone,
			}"
			@click="toggleClass(item)"
			:key="item"
			v-for="item in items"
		>
			{{ item }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		items: {
			type: Array,
			required: true,
		},
		isNoClickable: {
			type: Boolean,
			default: false,
		},
		selectedTags: {
			type: Array,
			default: [],
		},
		isDone: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		toggleClass(item) {
			if (this.isSelected(item)) {
				const index = this.selectedTags.indexOf(item)
				this.selectedTags.splice(index, 1)
			} else {
				this.selectedTags.push(item)
			}

			this.$emit('addTag', this.selectedTags)
		},
		isSelected(item) {
			return this.selectedTags.includes(item)
		},
	},
}
</script>

<style lang="scss" scoped>
.tags {
	padding: 10px 0;
	display: flex;
	justify-content: center;
	align-items: center;
	&.isNoClickable {
		justify-content: flex-start;
	}

	&__item {
		text-transform: uppercase;
		border-radius: 45px;
		border: 1px solid #0b5107;
		padding: 10px 20px;
		cursor: pointer;
		transition: all 0.3s ease 0s;
		transform: scale(0.9);
		&:not(:last-child) {
			margin-right: 20px;
		}
		&:hover {
			background-color: #4d5f4c;
			color: white;
			transform: scale(1);
		}
		&.selected {
			background-color: #1e481a;
			color: white;
			transform: scale(1);
		}
		&.isNoClickable {
			pointer-events: none;
			cursor: default;
		}
		&.isActive {
			background-color: #1e481a;
			color: white;
		}
		&.last {
			transition: all 0.3s ease 0s;
			background-color: #fff;
		}
	}
}
</style>
