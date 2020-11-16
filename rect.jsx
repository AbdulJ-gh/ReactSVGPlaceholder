export default class Rect {
	constructor({x = 100, y = 20, duration = 1000, padding = 2, radius = 2, name = 'plcHldr'}) {
		this.x = x
		this.y = y
		this.duration = duration
		this.padding = padding
		this.radius = radius
		this.name = name
	}

	create() {
		const {x, y, duration, padding, radius, name} = this
		return (
			<svg viewBox={`0 0 ${x} ${y}`} width={x} height={y}>
				<defs>
					<linearGradient id={name} gradientUnits="userSpaceOnUse" x1="0%" x2="100%" y1="0" y2={y}>
					<stop offset="0%" stopColor="rgb(231,237,241)"></stop>
					<stop offset="25%" stopColor="rgb(218,226,232)"></stop>
					<stop offset="50%" stopColor="rgb(206,216,223)"></stop>
					<stop offset="75%" stopColor="rgb(218,226,232)"></stop>
					<stop offset="100%" stopColor="rgb(231,237,241)"></stop>
					<animate attributeName="x1" from="-120%" to="100%" dur={`${duration}ms`} repeatCount="indefinite" />
					<animate attributeName="x2" from="-20%" to="200%" dur={`${duration}ms`} repeatCount="indefinite" />
					</linearGradient>
				</defs>

				<g>
					<rect width={padding ? x - 2 * padding : x} height={padding ? y - 2 * padding : y } rx={radius}
						  fill={`url(#${name})`} transform={padding ? `translate(${padding}, ${padding})` : 'none'}>
					</rect>
				</g>
			</svg>
		)
	}
}
