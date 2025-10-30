<template>
	<div class="m-menu" role="dialog" aria-modal="true">
		<div class="m-menu__backdrop" @click="$emit('close')"></div>

		<div class="m-menu__panel">
			<div class="m-menu__head">
				<button
					class="m-menu__close"
					@click="$emit('close')"
					aria-label="Закрыть"
				>
					✕
				</button>
				<div class="m-menu__title">Товары и услуги</div>
			</div>

			<div class="m-menu__body">
				<button
					class="m-menu__row m-menu__row--heading"
					:class="{ 'is-active': selected === 'all' }"
					@click="$emit('update:selected', 'all')"
				>
					<span class="m-menu__label">Все товары и услуги</span>
					<span class="m-menu__check" aria-hidden="true"
						><svg
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							width="24.000000"
							height="24.000000"
							fill="none"
							customFrame="#000000"
						>
							<rect
								id="Icons / 99. Color saver / 25"
								width="24.000000"
								height="24.000000"
								x="0.000000"
								y="0.000000"
							/>
							<path
								id="Union"
								d="M8.99991 16.1701L4.82991 12.0001L3.40991 13.4101L8.99991 19.0001L20.9999 7.00009L19.5899 5.59009L8.99991 16.1701Z"
								fill="rgb(51,117,102)"
								fill-rule="evenodd"
							/>
						</svg>
					</span>
				</button>

				<div class="m-menu__divider"></div>

				<div class="m-menu__group">
					<div class="m-menu__group-title">Категория 1</div>

					<button
						class="m-menu__row"
						:class="{ 'is-active': selected === 'coffins' }"
						@click="$emit('update:selected', 'coffins')"
					>
						<span class="m-menu__label">Гробы</span>
						<span class="m-menu__count">5</span>
					</button>

					<button
						class="m-menu__row"
						:class="{ 'is-active': selected === 'urns' }"
						@click="$emit('update:selected', 'urns')"
					>
						<span class="m-menu__label">Урны</span>
						<span class="m-menu__count">12</span>
					</button>
				</div>

				<div class="m-menu__divider"></div>

				<div class="m-menu__group">
					<div class="m-menu__group-title">Категория 2</div>

					<button
						class="m-menu__row"
						:class="{ 'is-active': selected === 'slippers' }"
						@click="$emit('update:selected', 'slippers')"
					>
						<span class="m-menu__label">Тапки</span>
						<span class="m-menu__count">2</span>
					</button>

					<button
						class="m-menu__row"
						:class="{ 'is-active': selected === 'blanket' }"
						@click="$emit('update:selected', 'blanket')"
					>
						<span class="m-menu__label">Покрывало</span>
						<span class="m-menu__count">1</span>
					</button>
				</div>
			</div>

			<div class="m-menu__button">
				<button class="m-menu__apply" @click="$emit('apply')">Применить</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	selected?: "all" | "coffins" | "urns" | "slippers" | "blanket";
}>();
defineEmits(["close", "apply", "update:selected"]);
</script>

<style lang="scss" scoped>
@import "../assets/scss/breakpoints";
@import "../assets/scss/variables";

.m-menu {
	position: fixed;
	inset: 0;
	z-index: 60;
	display: block;

	&__backdrop {
		position: absolute;
		inset: 0;
		background: rgba(0, 0, 0, 0.25);
	}

	&__panel {
		position: absolute;
		inset: 0;
		background: #fff;
		display: grid;
		grid-template-rows: auto 1fr auto;

		@include md {
			display: none;
		}
	}

	&__head {
		display: grid;
		grid-template-columns: 48px 1fr 48px;
		align-items: center;
		padding: 16px;
	}
	&__close {
		width: 24px;
		height: 24px;
		border: unset;
		background: none;
		font-size: 22px;
		cursor: pointer;
	}
	&__title {
		text-align: center;
		color: var(--color-black);

		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: center;
	}

	&__body {
		padding: 0 16px;
		overflow: auto;
	}

	&__row {
		width: 100%;
		padding: 12px 0px 12px 0px;
		border: 0;
		background: none;
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 18px;
		line-height: 26px;
		color: #111;
		height: 48px;

		&--big {
			height: 52px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 8px;
			padding: 12px 0px 12px 0px;
		}

		&--heading {
			height: 48px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
			gap: 8px;
			padding: 12px 0px 12px 0px;
		}

		& + & {
			border-top: 1px solid #eee;
		}
		&.is-active .m-menu__check {
			opacity: 1;
		}
	}

	&__label {
		color: var(--color-black);

		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: left;
	}

	&__check {
		display: flex;
		align-items: center;
	}

	&__count {
		color: #6b7280;
		font-size: 18px;
		margin-left: 8px;
	}

	&__group {
	}

	&__group-title {
		color: var(--color-gray);
		font-family: "Inter";
		font-size: 13px;
		font-weight: 500;
		line-height: 20px;
		text-align: left;

		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 10;
		padding: 24px 0px 8px 0px;
	}

	&__divider {
		height: 1px;
		background: #e5e7eb;
	}

	&__button {
		padding: 16px;
		background: #fff;
	}
	&__apply {
		background: var(--color-button);

		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: center;

		color: white;
		border-radius: 12px;
		width: 100%;
		height: 56px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		padding: 16px 20px 16px 20px;
		border: unset;
		cursor: pointer;
	}
}
</style>
