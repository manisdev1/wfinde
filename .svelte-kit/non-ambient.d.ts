
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/blog-sobre-ruedas" | "/blog" | "/blog/[slug]" | "/contacto" | "/experiencias" | "/experiencia" | "/experiencia/[slug]" | "/explorar" | "/login" | "/preguntas-frecuentes" | "/que-es-van-camp" | "/register" | "/vehiculo" | "/vehiculo/[id]";
		RouteParams(): {
			"/blog/[slug]": { slug: string };
			"/experiencia/[slug]": { slug: string };
			"/vehiculo/[id]": { id: string }
		};
		LayoutParams(): {
			"/": { slug?: string | undefined; id?: string | undefined };
			"/blog-sobre-ruedas": Record<string, never>;
			"/blog": { slug?: string | undefined };
			"/blog/[slug]": { slug: string };
			"/contacto": Record<string, never>;
			"/experiencias": Record<string, never>;
			"/experiencia": { slug?: string | undefined };
			"/experiencia/[slug]": { slug: string };
			"/explorar": Record<string, never>;
			"/login": Record<string, never>;
			"/preguntas-frecuentes": Record<string, never>;
			"/que-es-van-camp": Record<string, never>;
			"/register": Record<string, never>;
			"/vehiculo": { id?: string | undefined };
			"/vehiculo/[id]": { id: string }
		};
		Pathname(): "/" | "/blog-sobre-ruedas" | `/blog/${string}` & {} | "/contacto" | "/experiencias" | `/experiencia/${string}` & {} | "/explorar" | "/login" | "/preguntas-frecuentes" | "/que-es-van-camp" | "/register" | `/vehiculo/${string}` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/assets/1.webp" | "/assets/2.webp" | "/assets/3.webp" | "/assets/acompanamiento-camper.webp" | "/assets/blog-hero-bg.webp" | "/assets/camino-santiago.webp" | "/assets/experiencias.webp" | "/assets/explore-hero.jpg" | "/assets/favicon.png" | "/assets/hero-poster.webp" | "/assets/LOGO.webp" | "/assets/logotipo.png" | "/assets/vanandcamp.webp" | "/assets/viaje-marruecos.webp" | "/assets/wfinde-logo.png" | string & {};
	}
}