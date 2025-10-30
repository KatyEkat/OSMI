<template>
	<section class="agents">
		<div class="agents__list">
			<agentCard
				photo="/images/Dmitrii.jpg"
				name="Дмитрий Хитрый"
				verified
				:rating="4.3"
				:reviews="19"
				description="Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться."
			/>

			<agentCard
				photo="/images/Fedor.jpg"
				name="Фёдор Сумкин"
				:verified="false"
				:rating="4.3"
				:reviews="19"
				description="Помог справиться с потерей и организовать похороны для 126 семей."
			/>

			<agentCard
				photo="/images/Appolinar.png"
				name="Апполинарий Землеперекопский"
				verified
				:rating="false"
				:reviews="false"
				description="Помог справиться с потерей и организовать похороны для 126 семей."
			/>

			<agentCard
				photo="/images/Vasilii.jpg"
				name="Василий Копушин"
				verified
				:rating="4.3"
				:reviews="19"
				description="Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться."
			/>

			<agentCard
				photo="/images/Fedor2.jpg"
				name="Феофан Кусакин"
				:verified="false"
				:rating="4.3"
				:reviews="19"
				description="Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться."
			/>

			<agentCard
				photo="/images/Vasilisa.jpg"
				name="Василиса Землеперекопская"
				verified
				:rating="4.3"
				:reviews="19"
				description="Помог справиться с потерей и организовать похороны для 126 семей ну и еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться."
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import agentCard from "./agentCard.vue";
</script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.agents {
	padding: 24px 0 48px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 24px;

	@include md {
		padding: 32px 0 64px 0;
	}

	&__list {
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: center;
		width: 100%;
		max-width: 720px;
	}
}
</style>
