<template>
	<div class="container">
		<div class="notes" v-if="load">
			<div class="notes__list" v-if="items.length > 0">
				<transition-group name="list" tag="div">
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
									<Transition name="no-mode-fade" mode="out-in">
										<span v-if="!item.done">Выполнить</span>
										<span v-else>Отменить выполнение</span>
									</Transition>
								</div>
								<span class="item__remove" @click="$emit('removeNote', index)"
									>&#10008;</span
								>
							</div>
							<TagsList
								v-if="item.tags && item.tags.length > 0"
								isNoClickable
								:items="item.tags"
								:isDone="item.done"
							/>
						</div>
					</div>
				</transition-group>
			</div>
			<div class="item__empty" v-else>Add ur first Note!</div>
		</div>
		<div v-if="preloader">Loading.......</div>
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
			load: false,
			preloader: true,
		}
	},
	mounted() {
		this.preload()
	},
	methods: {
		preload() {
			this.load = true
			this.preloader = false
		},
	},
}
</script>

<style lang="scss" scoped>
.list-enter-active,
.list-leave-active {
	transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.list-move {
	transition: transform 0.8s ease;
}
.list-leave-active {
	position: absolute;
}
.no-mode-fade-enter-active,
.no-mode-fade-leave-active {
	transition: opacity 0.3s;
}
.no-mode-fade-enter-from,
.no-mode-fade-leave-to {
	opacity: 0;
}
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
	transition: all 0.4s ease 0s;
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
		transition: all 0.4s ease 0s;
		margin-left: auto;
		margin-right: 40px;
		cursor: pointer;
	}
	&.last {
		transition: all 0.3s ease 0s;
		order: 1;
		background-color: #53b744;
	}
}
</style>
