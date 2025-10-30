<template>
	<div class="company__block">
		<div class="company__logo">
			<img class="company__logo-image" src="/images/heirtageImage.jpg" alt="logo-image" />
		</div>

		<div class="company__info">
			<h2 class="company__name">Наследие</h2>

			<div class="company__meta">
				<div class="company__verified">
					<arrowGreen />
					<span>Документы проверены</span>
				</div>

				<div class="company__rating">
					<span>•</span>
					<starGreen />
					<span>4.7</span>
					<span>•</span>
					<span>19 отзывов</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import heritageImage from "./icons/heritageImage.vue";
import starGreen from "./icons/starGreen.vue";
import arrowGreen from "./icons/arrowGreen.vue";
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints";

.company {
	&__block {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 24px;
		margin-bottom: 24px;
	
	}


	&__info {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__name {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 24px;
		font-weight: 600;
		line-height: 28px;
		letter-spacing: 0%;
		text-align: center;
		margin-bottom: 12px;
	}

	&__meta {
		display: flex;
		gap: 4px;
		color: var(--color-black);

		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		letter-spacing: 0%;
		text-align: left;
	}

	&__verified,
	&__rating {
		display: flex;
		flex-direction: row;
		gap: 4px;
		align-items: center;
	}
}

.company__logo {
	display: flex;
	justify-content: center;
	align-items: center;

	svg {
		width: 120px;
		height: auto;
		display: block;
	}
}

.company__logo-image {
	border-radius: 25px;
}
</style>
