<template>
	<h1 class="star-wars">Star Wars App!</h1>
	<transition-group name="startView">
		<Preloader v-if="loading" />
		<div class="star__inner" v-else>
			<Persons :items="persons" />
			<LoadMore
				v-if="nextPage != null"
				:url="nextPage"
				@loadMorePersons="loadMoreItems"
				@updateNextPage="updateNextPage"
			/>
		</div>
	</transition-group>
</template>

<script>
import axios from 'axios'
import Preloader from '@/components/UI/Preloader'
import LoadMore from '@/components/UI/LoadMore'
import Persons from '@/components/StarWars/Persons'
export default {
	components: { Preloader, Persons, LoadMore },
	data() {
		return {
			url: 'https://swapi.dev/api/people/?page=1',
			persons: [],
			loading: true,
			nextPage: '',
		}
	},
	mounted() {
		this.init(this.url)
	},
	methods: {
		init(url) {
			axios
				.get(this.url)
				.then(response => {
					this.nextPage = response.data.next
					this.persons = response.data.results
					this.loading = false
				})
				.catch(error => {
					console.log(error)
				})
		},
		loadMoreItems(nextPageArr) {
			nextPageArr.forEach(element => {
				this.persons.push(element)
			})
		},
		updateNextPage(newPage) {
			this.nextPage = newPage
		},
		// isEmptyObj(obj) {
		// 	return Object.keys(obj).length == 0 ? true : false
		// },
	},
}
</script>

<style lang="scss" scoped>
.star-wars {
	font-size: 26px;
	font-weight: bold;
	margin-bottom: 30px;
}
.startView-enter-active,
.startView-leave-active {
	transition: opacity 1s ease;
}
.startView-enter-from,
.startView-leave-to {
	opacity: 0;
}
</style>
