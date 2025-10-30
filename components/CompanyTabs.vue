<template>
	<section class="company">
		<div class="company__wrapper">
			<div class="company__heirtage-miniblock">
				<heirtageComponent />
				<button class="company__phone-button">Показать номер телефона</button>
			</div>

			<div class="company__tabs">
				<button
					v-for="tab in tabs"
					:key="tab.name"
					@click="activeTab = tab.name"
					:class="['company__tab', { active: activeTab === tab.name }]"
				>
					<span>{{ tab.label }}</span>

					<span v-if="tab.name === 'Agents'" class="company__tab-count">
						6
					</span>
				</button>
			</div>

			<div class="company__content">
				<component :is="activeTabComponent" />
			</div>
		</div>
	</section>
</template>

<script setup>
import { ref, computed } from "vue";
import heirtageComponent from "./heirtageComponent.vue";

import ProductsServices from "./ProductsServices.vue";
import Agents from "./agents.vue";
import AboutCompany from "./aboutCompany.vue";

const tabs = [
	{
		name: "ProductsServices",
		label: "Товары и услуги",
		component: ProductsServices,
	},
	{ name: "Agents", label: "Агенты", component: Agents, count: 6 },
	{ name: "AboutCompany", label: "О компании", component: AboutCompany },
];

const activeTab = ref("ProductsServices");

const activeTabComponent = computed(() => {
	const tab = tabs.find((t) => t.name === activeTab.value);
	return tab ? tab.component : null;
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints";

.company {
	text-align: center;

	&__tabs {
		box-sizing: border-box;
		border-bottom: 1px solid var(--color-gray-line);
		padding: 8px 16px;
		display: flex;
		flex-direction: row;
		gap: 8px;
		overflow: scroll;
		justify-content: center;
		overflow-x: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;

		&::-webkit-scrollbar {
			display: none;
		}

		justify-content: flex-start;
		scroll-behavior: smooth;

		@include sm {
			justify-content: center;
		}

		@include md {
			overflow-x: auto;
			padding: unset;

			padding-bottom: 32px;
		}
	}

	&__heirtage-miniblock {
		display: none;

		@include md {
			display: flex;
			flex-direction: column;
			align-items: center;
		}
	}

	&__phone-button {
		background: var(--color-button);
		font-family: "Inter";
		color: white;
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: center;

		display: flex;
		flex-direction: row;
		align-items: center;

		width: 236px;
		height: 56px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		padding: 16px 20px 16px 20px;
		cursor: pointer;
		border: unset;
		border-radius: 12px;
		margin-bottom: 32px;
	}

	&__tab {
		white-space: nowrap;
		transition: all 0.2s ease;

		height: 40px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 4;
		padding: 8px 12px 8px 12px;
		border-radius: 12px;
		background: var(--color-gray-light);
		color: var(--color-black);
		border: unset;

		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: center;
		cursor: pointer;
		gap: 4px;

		&-count {
			color: var(--color-gray);
			font-family: "Inter";
			font-size: 15px;
			font-weight: 500;
			line-height: 24px;
			letter-spacing: 0%;
			text-align: center;
		}
	}

	@media (min-width: 768px) {
		&__block {
			flex-direction: column;
		}

		&__tabs {
			justify-content: center;
			overflow: visible;
		}
	}
}
</style>
