<template>
	<section class="products">
		<div class="products__filter">
			<div class="products__select md-show">
				<DesktopDropdown v-model="selected" />
			</div>
		</div>

		<div class="cards__content-block">
			<ProductCard
				image="/images/piano.jpg"
				title="Clavia Nord Grand сценическое цифровое пианино"
				:price="450500"
				:views="750"
				time="2 дня"
				status="promoted"
			/>

			<ProductCard
				image="/images/Sonata.jpg"
				title="Hyundai Sonata 2.0 AT, 2023, 30 км"
				:price="3285000"
				:views="255"
				time="4 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/flat.jpg"
				title="2-к. квартира, 46 м², 1/5 эт."
				:price="4480000"
				:views="255"
				time="2 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/drums.jpg"
				title="Старые барабаны"
				:price="7500"
				:views="255"
				time="2 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/cabels.jpg"
				title="DMX сплиттер RJ45 to 4x XLR Stairville"
				:price="7500"
				:views="255"
				time="2 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/bikeHonda.jpg"
				title="Мотоцикл honda"
				:price="217000"
				:views="255"
				time="2 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/bike.jpg"
				title="Иж юпитер 5"
				:price="17900"
				:views="255"
				time="2 дня"
				status="recommend"
			/>

			<ProductCard
				image="/images/wacoomCleaner.jpg"
				title="Пылесос кёрхер с водяным мешком для сбора пыли"
				:price="7500"
				:views="50"
				time="1 день"
				status="hidden"
			/>
		</div>

		<BurgerMenu
			v-if="mobOpen"
			:selected="selected"
			@update:selected="selected = $event"
			@close="mobOpen = false"
			@apply="mobOpen = false"
		/>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import DesktopDropdown from "./DesktopDropdown.vue";
import BurgerMenu from "./BurgerMenu.vue";
import ProductCard from "./productCard.vue";
import type { CatalogKey } from "../app/composables/useCatalogFilters";

const selected = ref<CatalogKey>("all");

const mobOpen = ref(false);
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.products {
	&__filter {
		display: flex;
		justify-content: center;
		padding: 24px 16px;
	}

	&__select {
		max-width: 438px;
		width: 100%;
	}

	&__select-btn {
		width: 100%;
		max-width: 438px;
		min-height: 48px;
		border-radius: 12px;
		border: none;
		cursor: pointer;
		background: var(--color-gray-light);
		color: var(--color-black);
		padding: 12px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font: 500 15px/24px "Inter";
	}
}

.cards__content-block {
	display: grid;
	grid-template-columns: 1fr;
	gap: 8px;
	padding: 8px;
	justify-items: center;

	min-width: 0;
	overflow: hidden;

	@include sm {
		grid-template-columns: repeat(2, 1fr);
	}

	@include md {
		grid-template-columns: repeat(3, 1fr);
		padding: 0 32px;
		margin-bottom: 73px;
	}

	@include lg {
		grid-template-columns: repeat(4, 1fr);
	}
}
</style>
