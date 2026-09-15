import { lazy, ComponentType, LazyExoticComponent } from "react";

export type PreloadableComponent<T extends ComponentType<unknown>> =
	LazyExoticComponent<T> & { preload: () => Promise<{ default: T }> };

export function preloadable<T extends ComponentType<unknown>>(
	loader: () => Promise<{ default: T }>
): PreloadableComponent<T> {
	const Component = lazy(loader) as PreloadableComponent<T>;
	Component.preload = loader;
	return Component;
}
