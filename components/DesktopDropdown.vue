<template>
	<div class="dropdown" ref="root">
		<button
			class="dropdown__btn"
			:class="{ open }"
			type="button"
			:aria-expanded="open ? 'true' : 'false'"
			aria-haspopup="listbox"
			@click="toggle"
		>
			<span>Все товары и услуги</span>
			<svg
				class="dropdown__icon"
				:class="{ open }"
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
					d="M6.44472 11.565L10.3297 15.45C10.9147 16.035 11.8597 16.035 12.4447 15.45L16.3297 11.565C17.2747 10.62 16.5997 9 15.2647 9L7.49472 9C6.15972 9 5.49972 10.62 6.44472 11.565Z"
					fill="rgb(107.1,107.1,107.1)"
					fill-rule="evenodd"
				/>
			</svg>
		</button>

		<div
			v-if="open"
			class="dropdown__pop"
			:style="popStyle"
			role="listbox"
			:aria-activedescendant="activeId"
			@keydown.esc.prevent="close"
		>
			<button
				class="dropdown__row dropdown__row--heading"
				:id="id('all')"
				role="option"
				:aria-selected="modelValue === 'all'"
				@click="pick('all')"
			>
				<span class="dropdown__label">{{ heading.label }}</span>
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
			</button>

			<div v-for="group in groups" :key="group.title" class="dropdown__group">
				<div class="dropdown__title">{{ group.title }}</div>

				<button
					v-for="item in group.items"
					:key="item.key"
					class="dropdown__row dropdown__row-item"
					:id="id(item.key)"
					role="option"
					:aria-selected="modelValue === item.key"
					@click="pick(item.key)"
				>
					<span class="dropdown__label">{{ item.label }}</span>
					<span class="dropdown__count">{{ item.count }}</span>
				</button>
			</div>
		</div>

		<div v-if="open" class="dropdown__backdrop" @click="close"></div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed } from "vue";
import type { CatalogKey } from "../app/composables/useCatalogFilters";
import { useCatalogFilters } from "../app/composables/useCatalogFilters";

const props = defineProps<{ modelValue: CatalogKey }>();
const emit = defineEmits<{ (e: "update:modelValue", v: CatalogKey): void }>();

const { heading, groups } = useCatalogFilters();

const open = ref(false);
const root = ref<HTMLElement | null>(null);
const popStyle = ref<Record<string, string>>({});

const currentLabel = computed(() => {
	if (props.modelValue === "all") return heading.label;
	for (const g of groups) {
		const f = g.items.find((i) => i.key === props.modelValue);
		if (f) return f.label;
	}
	return heading.label;
});

function updatePosition() {
	const btn = root.value?.querySelector(".dropdown__btn") as HTMLElement | null;
	if (!btn) return;
	const r = btn.getBoundingClientRect();

	popStyle.value = {
		position: "absolute",
		top: "calc(100% + 8px)",
		left: "0",
		width: "100%",
		zIndex: "10",
	};
}
function toggle() {
	open.value ? close() : openMenu();
}
function openMenu() {
	updatePosition();
	open.value = true;
}
function close() {
	open.value = false;
}
function onResize() {
	if (open.value) updatePosition();
}
function onKey(e: KeyboardEvent) {
	if (e.key === "Escape") close();
}
function pick(v: CatalogKey) {
	emit("update:modelValue", v);
	close();
}
function id(k: CatalogKey) {
	return `opt-${k}`;
}
const activeId = computed(() => id(props.modelValue));

function onClickOutside(e: MouseEvent) {
	const target = e.target as HTMLElement;
	if (root.value && !root.value.contains(target)) {
		close();
	}
}

onMounted(() => {
	document.addEventListener("resize", onResize);
	document.addEventListener("scroll", onResize, { passive: true });
	document.addEventListener("keydown", onKey);
	document.addEventListener("click", onClickOutside);
});
onBeforeUnmount(() => {
	document.removeEventListener("resize", onResize);
	document.removeEventListener("scroll", onResize);
	document.removeEventListener("keydown", onKey);
	document.removeEventListener("click", onClickOutside);
});
</script>

<style scoped lang="scss">
.dropdown {
	position: relative;

	&__label {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 13px;
		font-weight: 500;
		line-height: 20px;
		letter-spacing: 0%;
		text-align: left;
	}

	&__count {
		color: var(--color-gray);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 400;
		line-height: 24px;
		letter-spacing: 0%;
		text-align: left;
	}

	&__btn {
		max-width: 438px;
		width: 100%;
		min-height: 48px;
		border: 0;
		border-radius: 12px;
		background: var(--color-gray-light);
		color: var(--color-black);
		padding: 12px 16px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		cursor: pointer;
		transition: background 0.3s ease;
		border: 1px solid var(--color-footer-bgr);

		&.open {
			background: var(--color-light-gray);
		}
	}

	&__pop {
		position: absolute;
		top: calc(100% + 8px);
		left: 0;
		width: 100%;
		z-index: 10;

		background: #fff;
		border-radius: 12px;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
		padding: 12px 8px;
		max-height: 420px;
		overflow: auto;
	}

	&__row {
		width: 100%;
		border: 0;
		background: none;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px;
		border-radius: 10px;
		color: var(--color-black);
		transition: background 0.2s ease;

		&:hover {
			background: #f5f5f5;
		}
		&--heading {
			color: var(--color-black);
			font-family: "Inter";
			font-size: 15px;
			font-weight: 400;
			line-height: 24px;
			letter-spacing: 0%;
			text-align: left;
			padding: 12px;
		}

		&-item {
			display: flex;
			gap: 8px;
			justify-content: flex-start;
		}
	}

	&__title {
		color: var(--color-gray);
		font: 500 13px/20px "Inter";
		padding: 24px 12px 8px 12px;
	}

	&__group {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
}

.dropdown__icon {
	transition: transform 0.3s ease;
	transform-origin: center;
}

.dropdown__icon.open {
	transform: rotate(180deg);
}
</style>
