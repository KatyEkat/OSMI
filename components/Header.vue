<template>
	<header class="header">
		<div class="header__inner">
			<div class="header__left">
				<button
					class="header__burger"
					@click="openMenu"
					aria-label="Открыть меню"
				>
					<burgerIcon />
				</button>

				<a href="#main" class="header__logo-block">
					<logo class="header__logo" />
				</a>

				<button class="header__categories" aria-label="Все категории">
					<categoriesIcon />
					<span>Все категории</span>
				</button>
			</div>

			<div class="header__right">
				<button class="header__cart" aria-label="Корзина"><cartIcon /></button>

				<div class="header__city">
					<svg
						viewBox="0 0 16 16"
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						fill="none"
					>
						<path
							d="M8 2C6.9 2 5.9 2.4 5.2 3.1C4.4 3.9 4 4.9 4 5.9C4 9.1 8 13 8 13C8 13 12 9.1 12 5.9C12 4.9 11.6 3.9 10.8 3.1C10 2.3 9 2 8 2ZM8 7.5C7.7 7.5 7.4 7.4 7.1 7.2C6.8 7.1 6.6 6.8 6.5 6.5C6.4 6.2 6.4 5.9 6.4 5.6C6.5 5.3 6.6 5 6.9 4.8C7.1 4.6 7.4 4.4 7.7 4.4C8 4.3 8.3 4.4 8.6 4.5C8.9 4.6 9.2 4.8 9.3 5.1C9.5 5.3 9.6 5.6 9.6 5.9C9.6 6.4 9.4 6.8 9.1 7C8.9 7.2 8.6 7.4 8.3 7.4C8.2 7.5 8.1 7.5 8 7.5Z"
							fill="rgb(15,15,15)"
						/>
					</svg>
					<span>Ростов-на-Дону</span>
				</div>

				<div class="header__dash"></div>
				<a href="#" class="header__add">Разместить объявление</a>

				<div class="header__profile">
					<burgerIcon />
					<headerAvatar class="avatar" />
				</div>
			</div>
		</div>
	</header>

	<MobileMenu
		v-if="isMenuOpen"
		:selected="selected"
		@update:selected="selected = $event"
		@close="closeMenu"
		@apply="applyFilter"
	/>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import burgerIcon from "./icons/burgerIcon.vue";
import cartIcon from "./icons/cartIcon.vue";
import logo from "./icons/logo.vue";
import categoriesIcon from "./icons/categoriesIcon.vue";
import headerAvatar from "./icons/headerAvatar.vue";
import MobileMenu from "./BurgerMenu.vue";

const isMenuOpen = ref(false);

const selected = ref<"all" | "coffins" | "urns" | "slippers" | "blanket">(
	"all"
);

const lockScroll = (yes: boolean) => {
	document.documentElement.style.overflow = yes ? "hidden" : "";
};

const openMenu = () => {
	isMenuOpen.value = true;
	lockScroll(true);
};

const closeMenu = () => {
	isMenuOpen.value = false;
	lockScroll(false);
};

const onKey = (e: KeyboardEvent) => {
	if (e.key === "Escape") closeMenu();
};

onMounted(() => document.addEventListener("keydown", onKey));
onBeforeUnmount(() => {
	document.removeEventListener("keydown", onKey);
	lockScroll(false);
});

const applyFilter = () => {
	closeMenu();
};

const openProductsDropdown = () => {
	document.dispatchEvent(new CustomEvent("open-products-dropdown"));
};
</script>

<style scoped lang="scss">
@import "../assets/scss/variables";
@import "../assets/scss/breakpoints";

.header {
	position: sticky;
	top: 0;
	z-index: 50;
	background: var(--color-header);

	&__inner {
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 56px;

		@include md {
			height: 64px;
			padding: 8px 32px;
		}
	}

	&__left {
		display: contents;
		width: 100%;

		@include md {
			display: flex;
			align-items: center;
			gap: 12px;
			width: auto;
		}
	}

	&__right {
		display: flex;
		align-items: center;
		gap: 16px;
	}

	&__burger {
		display: block;
		padding: 8px;
		background: none;
		border: none;
		cursor: pointer;

		@include md {
			display: none;
		}
	}

	&__logo {
		height: 32px;
		display: block;
	}

	&__categories {
		display: none;
		align-items: center;
		gap: 8px;
		font-size: 14px;
		font-weight: 500;
		padding: 12px 16px;
		border-radius: 40px;
		background-color: var(--color-gray-light);
		color: #111;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s ease;

		@include md {
			display: flex;
		}

		&:hover {
			background-color: #d6d6d6;
		}

		span {
			white-space: nowrap;
			color: var(--color-black);
			font-family: "Inter";
			font-size: 15px;
			font-weight: 500;
			line-height: 24px;
		}
	}

	&__city {
		display: none;
		align-items: center;
		gap: 6px;
		font-size: 14px;
		color: #333;

		svg {
			width: 16px;
			height: 16px;
		}

		@include md {
			display: flex;
		}

		span {
			color: var(--color-black);
			font-family: "Inter";
			font-size: 15px;
			font-weight: 400;
			line-height: 24px;
		}
	}

	&__add {
		display: none;
		color: var(--color-button);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		text-align: center;
		text-decoration: none;

		@include md {
			display: inline-block;
		}

		color: var(--color-button);

		&:hover {
			filter: brightness(0.9);
		}
	}

	&__cart {
		padding: 8px;
		background: none;
		border: none;
		cursor: pointer;
		display: flex;
		align-items: center;

		@include md {
			display: none;
		}
	}

	&__dash {
		display: none;

		@include sm {
			display: flex;
			width: 1px;
			height: 32px;
			background: #ccc;
		}
	}

	&__profile {
		display: none;
		align-items: center;
		gap: 8px;

		@include md {
			display: flex;
			flex-direction: row;
			align-items: center;
			gap: 8px;
			padding: 4px 4px 4px 12px;
			border-radius: 24px;
			background: var(--color-gray-light);
		}
	}

	&__avatar {
		width: 32px;
		height: 32px;
		object-fit: cover;
	}

	&__logo-block {
		margin-right: -47px;

		@include md {
			margin-right: 0;
		}
	}
}

.avatar {
	border-radius: 50%;
}
</style>
