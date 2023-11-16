<template>
	<div class="planet">
		<div @click="getHomePlanet(homeWorld, name, $event)" class="planet__btn">
			Show Home World
		</div>
		<div v-for="home in homeWorldList">
			<div v-if="home.key == name">
				<div class="planet">
					<div class="planet__prop prop">
						<div class="prop__name">Planet Name</div>
						<div class="prop__value">{{ home.name }}</div>
					</div>
					<div class="planet__prop prop">
						<div class="prop__name">Planet Population</div>
						<div class="prop__value">{{ home.population }}</div>
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
			homeWorldList: [],
		}
	},
	props: {
		homeWorld: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
	},
	methods: {
		getHomePlanet(homeWorld, name, event) {
			axios
				.get(homeWorld)
				.then(response => {
					const homeDataItem = {
						key: name,
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
	},
}
</script>

<style lang="scss" scoped>
.planet {
	padding: 10px;
	&__btn {
		display: inline-block;
		padding: 10px 20px;
		border: 1px solid green;
		border-radius: 20px;
		cursor: pointer;
	}

	&__prop {
		display: flex;
		width: 100%;
		justify-content: flex-end;
		align-items: center;
		&:not(:last-child) {
			margin-bottom: 20px;
		}
	}
}
.prop {
	&__name {
		font-size: 20px;
	}

	&__value {
		font-size: 24px;
		flex: 0 1 30%;
	}
}
</style>
