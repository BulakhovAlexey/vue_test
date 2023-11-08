<template>
	<div class="wrapper">
		<Header />
		<main class="content">
			<div class="content__container">
				<router-view />
			</div>
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
	components: { Header, Footer },
}
</script>

<style lang="scss"></style>
