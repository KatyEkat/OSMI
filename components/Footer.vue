<template>
	<footer class="footer">
		<div class="footer__wrapper">
			<p class="footer__copy">© Annonce 2023</p>

			<nav class="footer__nav">
				<a href="#" class="footer__link">Документы</a>
				<a href="#" class="footer__link">О компании</a>
				<a href="#" class="footer__link md-hide">Продавцам</a>
				<a href="#" class="footer__link md-hide">Покупателям</a>
				<a href="#" class="footer__link md-hide">Разместить объявление</a>
			</nav>

			<div class="footer__lang md-hide">
				<svg
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_2124_1088)">
						<rect x="1" y="1" width="16" height="16" rx="8" fill="white" />
						<rect x="1" y="1" width="16" height="5.33333" fill="white" />
						<rect
							x="1"
							y="6.33331"
							width="16"
							height="5.33333"
							fill="#0945E0"
						/>
						<rect
							x="1"
							y="11.6667"
							width="16"
							height="5.33333"
							fill="#DB0606"
						/>
					</g>
					<rect
						x="0.5"
						y="0.5"
						width="17"
						height="17"
						rx="8.5"
						stroke="black"
						stroke-opacity="0.04"
					/>
					<defs>
						<clipPath id="clip0_2124_1088">
							<rect x="1" y="1" width="16" height="16" rx="8" fill="white" />
						</clipPath>
					</defs>
				</svg>

				<span class="footer__lang-text">Русский</span>
			</div>
		</div>
	</footer>
</template>

<script setup></script>

<style scoped lang="scss">
@import "../assets/scss/breakpoints";

.footer {
	width: 100%;
	padding: 24px 16px 40px 16px;
	box-sizing: border-box;
	border-top: 1px solid var(--color-footer-bgr);
	background: var(--color-text-button);

	@include md {
		padding: 24px 32px 40px 32px;
		height: 88px;
	}

	&__wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 20px;

		@include md {
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			gap: 24px;
		}
	}

	&__copy {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		margin: 0;
	}

	&__nav {
		display: flex;
		flex-direction: column;
		gap: 20px;

		@include md {
			flex-direction: row;
			gap: 20px;
		}
	}

	&__link {
		color: var(--color-gray);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
		text-decoration: none;
		transition: color 0.2s ease;

		&:hover {
			color: var(--color-black);
		}
	}

	&__lang {
		display: flex;
		align-items: center;
		gap: 6px;
		margin-top: 8px;
	}

	&__lang-text {
		color: var(--color-black);
		font-family: "Inter";
		font-size: 15px;
		font-weight: 500;
		line-height: 24px;
	}

	.md-hide {
		display: flex;

		@include md {
			display: none;
		}
	}
}
</style>
