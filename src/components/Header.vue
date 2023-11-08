<template>
	<header class="header">
		<div class="container">
			<div class="header__inner">
				<div class="header__logo">
					<router-link class="header__logo-link" to="/"
						><img src="@/assets/logo.png" alt=""
					/></router-link>
				</div>
				<nav class="header__menu">
					<ul class="header__links-list">
						<li class="header__list-item">
							<router-link class="header__link" to="/">HOME</router-link>
						</li>
						<li class="header__list-item">
							<router-link class="header__link" to="/notes">NOTES</router-link>
						</li>
						<li class="header__list-item">
							<router-link class="header__link" to="/star_wars"
								>star wars</router-link
							>
						</li>
						<li>
							<router-link class="header__link" to="/about">ABOUT</router-link>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header__link {
	text-transform: uppercase;
}
</style>
