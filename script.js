import Rgb from '/Rgb.js';
import Hex from '/Hex.js';

const COLOR_MAP = {
	rgb: Rgb,
	hex: Hex,
};

const DIFFICULTY_MAP = {
	easy: { withinTolerance: 1, outsideTolerance: 0.2 },
	medium: { withinTolerance: 0.5, outsideTolerance: 0.2 },
	hard: { withinTolerance: 0.3, outsideTolerance: 0.2 },
};

const resultElement = document.querySelector('[data-result]');
const resultTxt = resultElement.querySelector('div');
const colorStringElement = document.querySelector('[data-color-string]');
const nextButton = resultElement.querySelector('button');
const colorGrid = document.querySelector('[data-color-grid]');

nextButton.addEventListener('click', (e) => {
	render();
});

document.addEventListener('change', (e) => {
	if (e.target.matches('input[type="radio"]')) render();
});

function render() {
	resultElement.classList.add('hide');
	const format = document.querySelector('[name=format]:checked').value;
	const difficulty = document.querySelector('[name=difficulty]:checked').value;
	const { colors, correctColor } = generateColors({ format, difficulty });

	colorGrid.innerHTML = '';
	colorStringElement.textContent = correctColor.toCSS();
	const colorElements = colors
		.sort(() => Math.random() - 0.5)
		.map((color) => {
			const element = document.createElement('button');
			element.style.backgroundColor = color.toCSS();
			return { color, element };
		});
	colorElements.forEach(({ color, element }) => {
		element.addEventListener('click', () => {
			resultElement.classList.remove('hide');
			resultTxt.textContent = color === correctColor ? 'Correct' : 'Wrong';
			colorElements.forEach(({ color: c, element: e }) => {
				e.disabled = true;
				e.classList.toggle('wrong', c !== correctColor);
			});
		});
		colorGrid.append(element);
	});
}

function generateColors({ format, difficulty }) {
	const colorClass = COLOR_MAP[format];
	const difficultyRules = DIFFICULTY_MAP[difficulty];
	const correctColor = colorClass.generate();
	const colors = [correctColor];
	for (let i = 0; i < 5; i++) {
		colors.push(correctColor.generateSimilar(difficultyRules));
	}
	colors.forEach((c) => console.log(c.toCSS()));
	return { colors, correctColor };
}

render();
