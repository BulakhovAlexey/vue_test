<template>
	<div>it is popup</div>
	<div class="popup">
		<div class="popup__inner">
			<div class="popup__text"><slot></slot></div>
			<div @click="$emit('closePopup', true)" class="popup__close">Ясно</div>
		</div>
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.popup {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba($color: #000000, $alpha: 0.5);
	&__inner {
		max-width: 400px;
		width: 100%;
		padding: 30px;
		border: 1px solid black;
		border-radius: 30px;
		background-color: white;
	}

	&__text {
		font-size: 25px;
		margin-bottom: 20px;
	}

	&__close {
		border: 1px solid black;
		display: inline-block;
		padding: 10px 20px;
		border-radius: 30px;
		background-color: rgb(58, 106, 39);
		color: white;
		cursor: pointer;
	}
}
</style>
