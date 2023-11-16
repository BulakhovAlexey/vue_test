<template>
	<div class="load-more">
		<transition-group name="load-more__transition" mode="out-in">
			<div
				class="load-more__btn"
				:class="{ disable: loadMore }"
				@click="loadMoreItems"
				:key="0"
			>
				Load More Persons
			</div>
			<div class="load-more__preloader" v-if="loadMore" :key="1">
				<img src="@/assets/img/745.gif" alt="" />
			</div>
		</transition-group>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			loadMore: false,
		}
	},
	props: {
		url: {
			type: String,
			required: true,
		},
	},
	methods: {
		loadMoreItems() {
			if (this.url !== null) {
				this.loadMore = true
				axios
					.get(this.url)
					.then(response => {
						const loadMoreArray = response.data.results
						this.loadMore = false
						this.$emit('loadMorePersons', loadMoreArray)
						this.$emit('updateNextPage', response.data.next)
					})
					.catch(error => {
						console.log(error)
						this.loadMore = false
					})
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.load-more {
	margin-top: 20px;
	&__btn {
		display: inline-block;
		padding: 20px 10px;
		border-radius: 20px;
		border: 1px solid black;
		cursor: pointer;
		text-transform: uppercase;
		&.disable {
			opacity: 0.3;
			pointer-events: none;
		}
	}

	&__preloader {
		margin-top: 15px;
	}
	&__transition-enter-active,
	&__transition-leave-active {
		transition: opacity 1s ease;
	}
	&__transition-enter-from,
	&__transition-leave-to {
		opacity: 0;
	}
}
</style>
