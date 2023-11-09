import {
	HtmxType as OriginalHTMXType,
	HtmxConfig as OriginalHTMXConfig,
} from "htmx.org";
import { Alpine as AlpineType } from "alpinejs";

// Some nonsense until the htmx types for globalViewTransititions are fixed
declare module "htmx.org" {
	interface HtmxConfig extends OriginalHTMXConfig {
		globalViewTransitions?: boolean;
	}
}
declare global {
	interface Window {
		Alpine: AlpineType;
		htmx: OriginalHtmxType & { config: HtmxConfig };
	}
}
