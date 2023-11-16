<template>
	<Person v-for="item in items" :person="item" />
</template>

<script>
import Person from '@/components/StarWars/Person'
export default {
	components: { Person, Person },
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped></style>
