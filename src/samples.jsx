import React from 'react'
import PlaceholderRect from '@abduljabbar-aj/react-svg-placeholder'

function Samples() {
	return (
		<div>
			<div>IMAGE</div>
			<PlaceholderRect {...{
				rect: {
					x: 144, y: 215, radius: 15, padding: 0, name: 'test'
				}
			}} />

			<div>COLUMNS REPEAT</div>
			<PlaceholderRect {...{
				multiple: 'column-repeat',
				repeat: 2,
				rect: {x: 144, y: 24, name: 'test'}
			}} />

			<div>COLUMNS BESPOKE</div>
			<PlaceholderRect {...{
				multiple: 'column',
				rects: [
					{x: 144, y: 24, name: 'test'},
					{x: 80, y: 24, name: 'test'},
					{x: 144, y: 24, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'column',
				alignment: 'center',
				rects: [
					{x: 144, y: 24, name: 'test'},
					{x: 80, y: 24, name: 'test'},
					{x: 144, y: 24, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'column',
				alignment: 'flex-end',
				rects: [
					{x: 144, y: 24,  name: 'test'},
					{x: 80, y: 24, name: 'test'},
					{x: 144, y: 24, name: 'test'}
				]
			}} />



			<div>ROWS REPEAT</div>
			<PlaceholderRect {...{
				multiple: 'row-repeat',
				repeat: 3,
				rect: {x: 144, y: 24, name: 'test'}
			}} />



			<div>ROWS BESPOKE</div>
			<PlaceholderRect {...{
				multiple: 'row',
				alignment: 'center',
				rects: [
					{x: 144, y: 24, name: 'test'},
					{x: 80, y: 20, name: 'test'},
					{x: 144, y: 24, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'row',
				rects: [
					{x: 144, y: 24, name: 'test'},
					{x: 80, y: 36, name: 'test'},
					{x: 144, y: 24, name: 'test'}
				]
			}} />
		</div>
	)
}
