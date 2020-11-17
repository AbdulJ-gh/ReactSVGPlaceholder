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
				multiple: 'columns-repeat',
				repeat: 2,
				rect: {x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
			}} />

			<div>COLUMNS BESPOKE</div>
			<PlaceholderRect {...{
				multiple: 'columns',
				rects: [
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 80, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'columns',
				alignment: 'center',
				rects: [
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 80, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'columns',
				alignment: 'flex-end',
				rects: [
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 80, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
				]
			}} />



			<div>ROWS REPEAT</div>
			<PlaceholderRect {...{
				multiple: 'rows-repeat',
				repeat: 3,
				rect: {x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
			}} />



			<div>ROWS BESPOKE</div>
			<PlaceholderRect {...{
				multiple: 'rows',
				alignment: 'center',
				rects: [
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 80, y: 20, radius: 2, padding: 2, name: 'test'},
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
				]
			}} />
			<PlaceholderRect {...{
				multiple: 'rows',
				rects: [
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'},
					{x: 80, y: 36, radius: 2, padding: 2, name: 'test'},
					{x: 144, y: 24, radius: 2, padding: 2, name: 'test'}
				]
			}} />
		</div>
	)
}
