<template>
	<section class="about">
		<div class="about__wrapper">
			<heirtageComponent class="heirtage" />

			<div class="about__content">
				<div class="about__content-miniblock">
					<h3 class="about__title">О компании</h3>
					<p class="about__text">
						Копкой занимаемся 15 лет. Все началось с хобби и плавно переросло в
						любимую работу. Работаем с профессиональной техникой.
					</p>
				</div>

				<div class="about__schedule">
					<div class="about__schedule-header">
						<h4 class="about__schedule-heading">Режим работы</h4>
						<svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							width="24.000000"
							height="24.000000"
							fill="none"
							customFrame="#000000"
						>
							<rect
								id="Icons / 99. Color saver / 24"
								width="24.000000"
								height="24.000000"
								x="0.000000"
								y="0.000000"
							/>
							<path
								id="Union"
								d="M8.11973 9.29L11.9997 13.17L15.8797 9.29C16.2697 8.9 16.8997 8.9 17.2897 9.29C17.6797 9.68 17.6797 10.31 17.2897 10.7L12.6997 15.29C12.3097 15.68 11.6797 15.68 11.2897 15.29L6.69973 10.7C6.30973 10.31 6.30973 9.68 6.69973 9.29C7.08973 8.91 7.72973 8.9 8.11973 9.29Z"
								fill="rgb(15.3,15.3,15.3)"
								fill-rule="evenodd"
							/>
						</svg>
					</div>
					<p class="about__schedule-time">Сегодня с 8:00 до 23:00</p>
				</div>

				<div class="about__location">
					<div class="about__location-miniblock">
						<h4 class="about__location-title">Местоположение</h4>
						<p class="about__address">
							Ростов на Дону, Воронежская ул., 42А корп. 12
						</p>
					</div>

					<div class="about__map">
						<iframe
							src="https://yandex.ru/map-widget/v1/?um=constructor%3A1efe86f31bf7766228dfd37d3df0f1e197d76c34e461f7fbdfac891df48f14e2&amp;source=constructor"
							width="631"
							height="393"
							frameborder="0"
						></iframe>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import heirtageComponent from "./heirtageComponent.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.heirtage {
	display: flex;
	flex-direction: column;
	align-items: center;

	:deep(.company__block) {
		display: flex !important;
		flex-direction: column;
		align-items: center;
	}

	@include md {
		display: none;
	}
}

.about {
	padding: 16px;
	display: flex;
	justify-content: center;

	@include md {
		padding: 32px 0;
	}

	&__wrapper {
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;

		@include md {
			justify-content: space-between;
			gap: 64px;
		}
	}

	&__content {
		display: flex;
		flex-direction: column;
		gap: 8px;
		max-width: 560px;
		width: 100%;

		&-miniblock {
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding: 16px;
		}
	}

	&__title {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 20px;
		font-weight: 600;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: left;

		@include md {
			font-size: 24px;
		}
	}

	&__text {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: left;

		@include md {
			font-size: 17px;
		}
	}

	&__schedule {
		border-radius: 16px;
		background: var(--color-text-button);
		opacity: 0.3;
		max-width: 560px;
		width: 100%;
		height: 88px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 16px;
		gap: 8px;

		&-heading {
			font-family: "Inter";
			font-size: 20px;
			font-weight: 600;
			line-height: 24px;
			letter-spacing: 0%;
			text-align: left;

			@include md {
				font-size: 24px;
			}
		}

		&-header {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
		}

		&-arrow {
			width: 24px;
			height: 24px;
		}

		&-time {
			color: var(--color-black);
			font-family: "Inter";
			font-size: 15px;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: 0%;
			text-align: left;
		}
	}

	&__location {
		display: flex;
		flex-direction: column;

		@include md {
			display: grid;
			grid-template-columns: 2fr 1fr;
		}

		.about__map {
			order: -1;

			@include md {
				width: auto;
				max-height: 132px;

				border-radius: 0 20px 20px 0;
			}
		}

		&-miniblock {
			display: flex;
			flex-direction: column;
			gap: 8px;
			padding: 16px;
		}

		@include md {
			.about__map {
				order: 1;
			}
		}
	}

	&__location-title {
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

	&__address {
		color: var(--color-button);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: left;

		@include md {
			font-size: 17px;
		}
	}

	&__map {
		width: 100%;
		border-radius: 25px 25px 0 0;
		height: 96px;
		overflow: hidden;

		img {
			width: 100%;
			height: auto;
			display: block;
		}

		@include md {
			width: 300px;
			height: 200px;

			img {
				object-fit: cover;
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
