import Rgb from '/Rgb.js';

const rgb = Rgb.generate();
console.log(
	rgb.r,
	rgb.generateSimilar({ withinTolerance: 1, outsideTolerance: 0.2 })
);
