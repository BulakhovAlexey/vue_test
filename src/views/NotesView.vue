<template>
	<Form @onSubmitForm="handlerForm" />
	<List :items="notes" @removeNote="handlerRemoveNote" @doneNote="doneNote" />
	<Popap @closePopup="closePopup" v-if="showErrorPopup">
		<slot>ЭЭЭ, пустое поле!</slot>
	</Popap>
</template>

<script>
import Form from '@/components/Note/Form'
import List from '@/components/Note/List'
import Popap from '@/components/Popap'
export default {
	components: { Form, List, Popap },
	data() {
		return {
			showErrorPopup: false,
			notes: [
				{
					title: 'Learn Vue',
					tags: ['work', 'study'],
					done: false,
				},
				{
					title: 'Drink Beer',
					tags: ['rest'],
					done: false,
				},
				{
					title: 'Visit something',
					tags: ['travel'],
					done: false,
				},
			],
		}
	},
	mounted() {
		this.checkLocalStorage()
	},
	watch: {
		notes: {
			handler(updatedList) {
				localStorage.setItem('notes', JSON.stringify(updatedList))
				if (updatedList.length === 0) {
					localStorage.removeItem('notes')
				}
			},
			deep: true,
		},
	},
	methods: {
		handlerForm(note) {
			if (note.title == '') {
				this.showErrorPopup = true
			} else {
				this.notes.push(note)
			}
		},
		handlerRemoveNote(index) {
			this.notes.splice(index, 1)
		},
		checkLocalStorage() {
			const localNotes = localStorage.getItem('notes')
			if (localNotes) {
				this.notes = JSON.parse(localNotes)
			}
		},
		closePopup() {
			this.showErrorPopup = false
		},
		doneNote(index) {
			this.notes[index].done = !this.notes[index].done
		},
	},
}
</script>
