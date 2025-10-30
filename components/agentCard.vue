<template>
	<div class="agent">
		<img :src="photo" alt="agent photo" class="agent__photo" />

		<div class="agent__head">
			<h3 class="agent__name">{{ name }}</h3>

			<div class="agent__meta">
				<div v-if="verified" class="agent__verified">
					<arrowGreen />
					<span class="agent__verified-text">
						<span class="md-hide">Проверен</span>
						<span class="md-show">Документы проверены</span>
					</span>
				</div>

				<div v-if="rating" class="agent__rating">
					<starGreen />
					<span>{{ rating.toFixed(1) }}</span>
				</div>

				<div
					v-if="reviews !== undefined && reviews !== false"
					class="agent__reviews"
				>
					<span v-if="reviews > 0">{{ reviews }} отзывов</span>
					<span v-else>Нет отзывов</span>
				</div>
			</div>
		</div>

		<p class="agent__desc">{{ description }}</p>
	</div>
</template>

<script setup lang="ts">
import arrowGreen from "./icons/arrowGreen.vue";
import starGreen from "./icons/starGreen.vue";

defineProps<{
	name: string;
	photo: string;
	verified?: boolean | false;
	rating?: number | false;
	reviews?: number | false;
	description?: string;
}>();
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.agent {
	display: grid;
	grid-template-columns: 48px 1fr;

	grid-template-areas:
		"photo head"
		"desc  desc";
	column-gap: 12px;
	row-gap: 8px;
	padding: 16px;
	border-radius: 20px;
	background: var(--color-text-button);
	width: 100%;
	max-width: 560px;
	align-items: start;

	@include md {
		grid-template-columns: 140px 1fr;
		grid-template-areas:
			"photo head"
			"photo desc";
		column-gap: 20px;
		row-gap: unset;
		padding: 20px;
	}

	&__photo {
		grid-area: photo;
		width: 48px;
		height: 48px;
		border-radius: 12px;
		object-fit: cover;

		@include md {
			width: 140px;
			height: 140px;
			border-radius: 20px;
		}
	}

	&__head {
		grid-area: head;
		display: flex;
		flex-direction: column;
		gap: 4px;
		min-width: 0;
	}

	&__meta {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 4px;
		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		line-height: 20px;

		@include md {
			gap: 6px;
		}

		> * + *::before {
			content: "•";

			color: var(--color-black);
			font-weight: 400;
		}
	}

	&__desc {
		grid-area: desc;
		margin: 0;
		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		line-height: 22px;
		display: -webkit-box;
		-webkit-line-clamp: 3;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
	}
}

.agent__name {
	margin: 0;
	color: var(--color-black);
	font-family: "Inter";
	font-size: 20px;
	font-weight: 600;
	line-height: 24px;
	text-align: left;

	@include md {
		font-size: 24px;
	}
}

.agent__verified,
.agent__rating,
.agent__reviews {
	display: flex;
	align-items: center;
	gap: 4px;

	@include md {
		gap: 6px;
	}
}

.md-hide {
	display: inline;
}
.md-show {
	display: none;
}

@include md {
	.md-hide {
		display: none;
	}
	.md-show {
		display: inline;
	}
}
</style>
