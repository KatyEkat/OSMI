export type CatalogKey = "all" | "coffins" | "urns" | "slippers" | "blanket";

export function useCatalogFilters() {
	const heading = { key: "all" as const, label: "Все товары и услуги" };

	const groups = [
		{
			title: "Категория 1",
			items: [
				{ key: "coffins" as const, label: "Гробы", count: 5 },
				{ key: "urns" as const, label: "Урны", count: 12 },
			],
		},
		{
			title: "Категория 2",
			items: [
				{ key: "slippers" as const, label: "Тапки", count: 2 },
				{ key: "blanket" as const, label: "Покрывало", count: 1 },
			],
		},
	];

	return { heading, groups };
}
