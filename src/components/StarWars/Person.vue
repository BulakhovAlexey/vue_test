<template>
	<div class="person">
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
			<Planet :homeWorld="person.homeworld" :name="person.name" />
		</div>
	</div>
</template>

<script>
import Planet from '@/components/StarWars/Planet'
export default {
	components: { Planet },
	props: {
		person: {
			type: Object,
			required: true,
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
</style>
