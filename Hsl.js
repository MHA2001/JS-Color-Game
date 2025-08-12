import { randomNumber, randomValueInRange } from '/utils.js';
const MAX_HUE_VALUE = 360;
const MAX_SATURATION_VALUE = 100;
const MAX_LIGHTNESS_VALUE = 100;

export default class Hsl {
	constructor(h, s, l) {
		this.h = h;
		this.s = s;
		this.l = l;
	}

	static generate() {
		return new this(
			randomNumber(MAX_HUE_VALUE),
			randomNumber(MAX_SATURATION_VALUE),
			randomNumber(MAX_LIGHTNESS_VALUE)
		);
	}

	generateSimilar(options) {
		return new this.constructor(
			randomValueInRange({
				startingValue: this.h,
				maxCutoff: MAX_HUE_VALUE,
				...options,
			}),
			randomValueInRange({
				startingValue: this.s,
				maxCutoff: MAX_SATURATION_VALUE,
				...options,
			}),
			randomValueInRange({
				startingValue: this.l,
				maxCutoff: MAX_LIGHTNESS_VALUE,
				...options,
			})
		);
	}

	toCSS() {
		return `hsl(${this.h},${this.s}%, ${this.l}%)`;
	}
}
