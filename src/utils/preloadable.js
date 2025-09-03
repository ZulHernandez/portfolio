// utils/preloadable.js
import React from "react";

export function preloadable(loader) {
	const Component = React.lazy(loader);
	Component.preload = loader;
	return Component;
}
