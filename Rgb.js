const MAX_RGB_VALUE = 255;

export default class Rgb {
	constructor(r, g, b) {
		this.r = r;
		this.g = g;
		this.b = b;
	}

	static generate() {
		return new this(
			randomNumber(MAX_RGB_VALUE),
			randomNumber(MAX_RGB_VALUE),
			randomNumber(MAX_RGB_VALUE)
		);
	}

	generateSimilar(options) {
		return new this.constructor(
			randomValueInRange({
				startingValue: this.r,
				maxCutoff: MAX_RGB_VALUE,
				...options,
			}),
			randomValueInRange({
				startingValue: this.g,
				maxCutoff: MAX_RGB_VALUE,
				...options,
			}),
			randomValueInRange({
				startingValue: this.b,
				maxCutoff: MAX_RGB_VALUE,
				...options,
			})
		);
	}

	toCSS() {
		return `rgb(${this.r},${this.g}, ${this.b})`;
	}
}

function randomNumber(max, min = 0) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function validRanges({
	startingValue,
	maxCutoff,
	withinTolerance,
	outsideTolerance,
}) {
	const withinToleranceIncrementor = Math.floor(withinTolerance * maxCutoff);
	const outsideToleranceIncrementor = Math.ceil(outsideTolerance * maxCutoff);

	const aboveRangeMax = Math.min(
		startingValue + withinToleranceIncrementor,
		maxCutoff
	);
	const aboveRangeMin = startingValue + outsideToleranceIncrementor;
	const belowRangeMin = Math.max(startingValue - withinToleranceIncrementor, 0);
	const belowRangeMax = startingValue - outsideToleranceIncrementor;

	const ranges = [];
	if (aboveRangeMax > aboveRangeMin)
		ranges.push({ min: aboveRangeMin, max: aboveRangeMax });
	if (belowRangeMax > belowRangeMin)
		ranges.push({ min: belowRangeMin, max: belowRangeMax });

	return ranges;
}
function randomValueInRange(options) {
	const ranges = validRanges(options);
	const range = ranges[randomNumber(ranges.length - 1)];
	return randomNumber(range.max, range.min);
}
