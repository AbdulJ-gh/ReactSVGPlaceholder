import React from 'react'
import Rect from './Rect.jsx'

// multiple = false || columns || rows || columns-repeat || rows-repeat

export default function PlaceholderRect({
	rect: {x, y, duration, padding, paddingY, radius, name} = {}, // standard single rectangle
						// padding - all side, paddingY - top/bottom only. paddingY overrides top/bottom parts from padding
	rects, // multiple rectangles, requires multiple
	multiple = false, // multiples rects or not
	repeat = 1, // no. of rects when column-repeat || row-repeat
	alignment = 'baseline', // For multiple (not repeat) - Any option for css flex prop 'align-items'
	topMargin = 0, // Top margin of outer div
	// multiGap = 4 // space between multiples // TODO
	// className = '' // TODO Add scope for custom classNames
}) {

	// Default Classname for Multiples Div
	let className = 'placeholderRect'
	const classConcat = string => className.concat(string)
	if (multiple) {
		if (multiple.includes('column')) {
			classConcat('-multipleColumn')
		} else if (multiple.includes('row')) {
			classConcat('-multipleRow')
		}
	}

	// Style adjustments to individual svg items
	const style = {}
	if (multiple) {
		style.display = 'flex'
		style.alignItems = alignment
		style.width = 'min-content'
		multiple === 'column' ? style.flexDirection = 'column' : null
	}
	topMargin !== 0 ? style.marginTop = topMargin : null
	// multiGap !== 0 ? style.marginRight = multiGap : null


	// Map function
	const mapRects = rects => rects.map((rect, i) => <Rect {...{key: i, ...rect}}/>)

	switch (multiple) {
		case false:
			return <Rect {...{x, y, duration, padding, paddingY, radius, name, style}}/>
		case 'column':
		case 'row':
			return <div {...{className, style}} >{mapRects(rects)}</div>
		case 'column-repeat':
		case 'row-repeat':
			return PlaceholderRect({
				multiple: multiple.includes('row') ? 'row' : 'column',
				rects: Array(repeat).fill({x, y, duration, padding, paddingY, radius, name}),
			})
		default:
			throw new Error('Unsupported "multiple" property passed')
	}
}
