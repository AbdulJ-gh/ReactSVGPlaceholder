import Rect from './rect'

// multiple = false || columns || rows || columns-repeat || rows-repeat

function placeholderRect({
	rect: {x, y, duration, padding, radius, name} = {},
	multiple = false,
	repeat = 1,
	alignment = 'baseline', // Any option for css flex prop 'align-items'
	rects,
	// className = '' // TODO Add scope for custom classNames
}) {


	/** Multiple **/
	// Default Classname for Multiples Div
	let className = 'placeholderRect'
	const classConcat = string => className.concat(string)
	if (multiple) {
		if (multiple.includes('columns')) {
			classConcat('-multipleColumns')
		} else if (multiple.includes('rows')) {
			classConcat('-multipleRows')
		}
	}

	// Style adjustments
	const style = {}
	if (multiple) {
		style.display = 'flex'
		style.alignItems = alignment
		style.width = 'min-content'
		multiple === 'columns' ? style.flexDirection = 'column' : null
	}


	// Map function
	const mapRects = rects => rects.map((rect) => new Rect(rect).create())
	/** Multiple **/

	console.log(multiple)

	switch (multiple) {
		case false:
			return new Rect({x, y, duration, padding, radius, name}).create()
		case 'columns':
		case 'rows':
			return <div {...{className, style}} >{mapRects(rects)}</div>
		case 'columns-repeat':
		case 'rows-repeat':
			return placeholderRect({
				multiple: multiple.includes('rows') ? 'rows' : 'columns',
				rects: Array(repeat).fill({x, y, duration, padding, radius, name}),
			})
		default:
			throw new Error('Unsupported "multiple" property passed')
	}
}

module.exports = placeholderRect