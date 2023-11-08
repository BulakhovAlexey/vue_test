<template>
	<div class="container">
		<div class="notes">
			<div class="notes__list" v-if="items.length > 0">
				<div
					class="notes__item item"
					v-for="(item, index) in items"
					:key="item.title"
					:class="{ last: item.done }"
				>
					<div class="item__inner">
						<div class="item__top">
							<div class="item__text">{{ item.title }}</div>
							<div class="item__done" @click="$emit('doneNote', index)">
								<span v-if="!item.done">Выполнить</span>
								<span v-else>Отменить выполнение</span>
							</div>
							<span class="item__remove" @click="$emit('removeNote', index)"
								>&#10008;</span
							>
						</div>
						<TagsList
							v-if="item.tags && item.tags.length > 0"
							isNoClickable
							:items="item.tags"
						/>
					</div>
				</div>
			</div>
			<div class="item__empty" v-else>Add ur first Note!</div>
		</div>
	</div>
</template>

<script>
import TagsList from '@/components/Note/TagsList'
export default {
	components: { TagsList },
	props: {
		items: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			last: false,
		}
	},
}
</script>

<style lang="scss" scoped>
.notes {
	margin-top: 10px;

	&__list {
		display: flex;
		flex-direction: column;
	}

	&__item {
		padding: 15px 20px;
		border: 1px solid rgb(96, 144, 25);
		border-radius: 20px;
		margin-bottom: 20px;
	}
}
.item {
	&__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	&__text {
		font-size: 24px;
	}

	&__remove {
		cursor: pointer;
	}

	&__empty {
		font-size: 30px;
	}
	&__done {
		margin-left: auto;
		margin-right: 40px;
		cursor: pointer;
	}
	&.last {
		order: 1;
		background-color: #3cb42a;
	}
}
</style>
