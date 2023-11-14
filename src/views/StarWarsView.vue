<template>
	<div>StarWarsView page!</div>
	<button class="button">GO</button>
	<div v-if="loading">Loading......</div>
	<div class="person" v-else v-for="person in persons" :key="person.name">
		<div class="person__inner">
			<div class="person__main-info">
				<div class="person__prop prop">
					<div class="prop__name">Name</div>
					<div class="prop__value">{{ person.name }}</div>
				</div>
				<div class="person__prop prop">
					<div class="prop__name">height</div>
					<div class="prop__value">{{ person.height }}</div>
				</div>
				<div class="person__prop prop">
					<div class="prop__name">skin color</div>
					<div class="prop__value">{{ person.skin_color }}</div>
				</div>
			</div>
			<div
				@click="showProp(person.homeworld, person.name, $event)"
				class="test"
			>
				Show Home World
			</div>
			<div v-for="home in homeWorldList">
				<div v-if="home.key == person.name">
					<div class="person__main-info">
						<div class="person__prop prop">
							<div class="prop__name">Planet Name</div>
							<div class="prop__value">{{ home.name }}</div>
						</div>
						<div class="person__prop prop">
							<div class="prop__name">Planet Population</div>
							<div class="prop__value">{{ home.population }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
export default {
	data() {
		return {
			persons: [],
			loading: true,
			homeWorldList: [],
		}
	},
	mounted() {
		this.init()
	},
	methods: {
		init() {
			const url = 'https://swapi.dev/api/people/?page=2'
			axios
				.get(url)
				.then(response => {
					this.persons = response.data.results
					this.loading = false
				})
				.catch(error => {
					console.log(error)
				})
		},
		showProp(prop, key, event) {
			axios
				.get(prop)
				.then(response => {
					const homeDataItem = {
						key: key,
						name: response.data.name,
						population: response.data.population,
					}
					this.homeWorldList.push(homeDataItem)
					event.target.style.display = 'none'
				})
				.catch(error => {
					console.log(error)
				})
		},
		isEmptyObj(obj) {
			return Object.keys(obj).length == 0 ? true : false
		},
	},
}
</script>

<style lang="scss" scoped>
.person {
	&:not(:last-child) {
		margin-bottom: 20px;
	}
	&__inner {
		width: 100%;
		padding: 10px 30px;
		border: 1px solid black;
		border-radius: 15px;
	}
	&__main-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 20px;
	}
	&__prop {
		flex: 0 1 33.33%;
	}
}
.prop {
	display: block;
	text-align: left;
	&__name {
		margin-right: 20px;
		font-size: 20px;
		text-transform: uppercase;
		margin-bottom: 10px;
	}

	&__value {
		font-size: 22px;
		font-weight: bold;
	}
}
.test {
}
</style>
