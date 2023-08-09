import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTagify,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from "unocss";

export default defineConfig({
	shortcuts: [
		["crate", "container max-w-5xl mx-auto px-4 sm:px-2 md:px-10 xl:px-20"],
		["flex-center", "flex justify-center items-center"]
	],
	presets: [
		presetUno(),
		presetTagify(),
		presetAttributify(),
		presetIcons({
			extraProperties: {
				"display": "inline-block",
				"vertical-align": "middle"
			}
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				heading: {
					name: "Montserrat",
					weights: ["200", "400", "700"]
				},
				text: "Inter"
			}
		})
	],
	theme: {
		breakpoints: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1400px",
			uw: "2000px"
		}
	},
	transformers: [
		transformerDirectives(),
		transformerVariantGroup()
	]
});
