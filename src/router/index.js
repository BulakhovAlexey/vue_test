import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotesView from '@/views/NotesView.vue'
import AboutPage from '@/views/AboutView.vue'
import StarWarsView from '@/views/StarWarsView.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
	},
	{
		path: '/notes',
		name: 'notes',
		component: NotesView,
	},
	{
		path: '/star_wars',
		name: 'Star_wars',
		component: StarWarsView,
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage,
	},
	{
		path: '/:CatchAll(.*)',
		name: 'not_found',
		component: NotFoundPage,
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
