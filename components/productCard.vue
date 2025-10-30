<template>
	<div class="overflow-hidden card">
		<div class="relative">
			<img :src="image" :alt="`card-image`" class="card__image" />

			<div v-if="status !== 'hidden'" class="card__bread-block">
				<div class="card__bread">
					<eyeIcon />
					<span>{{ views }}</span>
				</div>

				<div class="card__bread">
					<calendarIcon />
					<span>{{ time }}</span>
				</div>
			</div>

			<button class="card__actions-btn">Действия</button>
		</div>

		<div class="card__content">
			<div class="card__description-price">{{ formattedPrice }} ₽</div>

			<div class="card__description">
				<span class="card__title">{{ title }}</span>
			</div>

			<p class="dash__underline"></p>

			<div
				v-if="status === 'promoted'"
				class="mt-3 flex justify-between items-center"
			>
				<span class="card__progressing-span">Объявление продвигается</span>
			</div>

			<div
				v-else-if="status === 'recommend'"
				class="card__progressing-info--block"
			>
				<p class="card__progressing-text">Увеличьте количество просмотров</p>
				<button class="card__progressing-btn">Продвигать</button>
			</div>

			<div
				v-else-if="status === 'hidden'"
				class="mt-3 flex justify-between items-center"
			>
				<span class="card__hidden-span">Объявление скрыто</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import eyeIcon from "./icons/eyeIcon.vue";
import calendarIcon from "./icons/calendarIcon.vue";

const props = defineProps<{
	image: string;
	title: string;
	description?: string;
	price: number | string;
	views: number;
	time: string;
	status?: "promoted" | "recommend" | "hidden";
}>();

const formattedPrice = computed(() => {
	const num = Number(props.price);
	if (isNaN(num)) return props.price;
	return num.toLocaleString("ru-RU");
});
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.card__bread {
	border-radius: 12px;
	background: rgba(27, 29, 34, 0.6);
	height: 32px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	gap: 8px;
	color: rgba(245, 245, 245, 1);
	font-family: "Inter";
	font-size: 13px;
	font-weight: 500;
	line-height: 20px;
	text-align: center;
	padding: 4px 8px;
}

.card__bread-block {
	display: flex;
	flex-direction: row;
	gap: 4px;
	position: absolute;
	top: 16px;
	left: 16px;
}

.card {
	position: relative;
	display: flex;
	flex-direction: column;
	background: #fff;
	border-radius: 16px;
	padding: 8px;
	box-sizing: border-box;
	width: 100%;
	min-width: 0;

	min-width: 0;

	&__image {
		border-radius: 20px;
		width: 100%;

		aspect-ratio: 4 / 3;
		object-fit: cover;
	}

	&__description {
		width: 100%;
		min-width: 0;
		margin-bottom: 8px;

		&-price {
			color: var(--color-black);
			font-family: "Inter";
			font-size: 17px;
			font-weight: 500;
			line-height: 20px;
			margin-bottom: 8px;
			margin-top: 16px;
			padding: 0 4px;
		}
	}

	&__title {
		display: block;
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;

		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		padding: 0 4px;
	}

	&__progressing-span {
		color: var(--color-button);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		text-align: center;
		width: 100%;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__progressing-btn {
		color: var(--color-text-button);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		width: 112px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 12px;
		background: var(--color-button);
		border: none;
		cursor: pointer;
		padding: 8px 12px;
	}

	&__progressing-text {
		color: var(--color-gray);
		font-family: "Inter";
		font-size: 13px;
		font-weight: 400;
		line-height: 18px;
		padding-right: 7px;
	}

	&__progressing-info--block {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 56px;
		padding: 4px;
	}

	&__hidden-span {
		color: var(--color-red);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 20px;
		text-align: center;
		width: 100%;
		height: 56px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	&__content {
		text-align: left;
		min-width: 0;
		display: flex;
		flex-direction: column;

		min-width: 0;
	}

	&__actions-btn {
		color: var(--color-black);

		font-family: "Inter";
		font-size: 13px;
		font-weight: 500;
		line-height: 20px;
		text-align: center;

		width: 87px;
		height: 32px;
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		padding: 6px 12px 6px 12px;

		box-sizing: border-box;
		border: 1px solid var(--color-footer-bgr);
		border-radius: 12px;
		background: var(--color-text-button);

		position: absolute;
		top: 16px;
		right: 16px;

		@include md {
			display: none;
		}
	}
}

.dash__underline {
	background: var(--color-gray-light);
	width: 100%;
	height: 1px;
}
</style>
