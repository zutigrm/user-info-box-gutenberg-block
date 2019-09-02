import React from 'react';
import { SelectControl, ColorPicker } from '@wordpress/components';
import { withState } from '@wordpress/compose';

// Fragment will be used as wrapper if we do not want to include markup, like div, etc
const {Fragment} = wp.element; 

// InspectorControls will be used to wrap Panel body component
// we need this two wrapper component if we want to display our settings
// in the right panel (where we have document and block tabs, next to the content)
const { InspectorControls } = wp.editor;
const { PanelBody } = wp.components;

const Users = ( {userId, existingUser, data, userSelect, setState, setAttributes, color } ) => {
	const __ = wp.i18n.__; // The __() for internationalization.
	
	// if we already have block saved, use the saved userId
	if ( existingUser ) userId = existingUser;

	// loop through users and assign label and value
	// for options. If users are not loaded yet show
	// Loading users message
	const options = data.length ? data.map(user => {
		return {
			label: user.name,
			value: user.id
		}

	}) : [{label: __('Loading users'), value: ''}];

	return(
		<Fragment>
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<SelectControl
						label={__('Select User')}
						value={userId}
						// add first empty option and pass the options array using spread operator
						options={ [ {label: '', value: ''}, ...options ] }
						onChange={( userId ) => {
							// pass user id to parent component (edit function) 
							userSelect(userId);

							// set state - change the value for select box
							setState({userId: userId}); // wp-script do not include property shorthand (userId)
						}}
					/>
					<p>{__('User Box Background Color')}</p>
					<ColorPicker
						color={ color }
						width={ 100 }
						onChangeComplete={ ( value ) => {
							setState( {color: value.rgb } );

							// since we will use rgba mode, format the color
							// you can use hex if you want. Just use value.hex, no formating needed
							const rgb = value.rgb
							const result = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
							// pass selected color to the callback function
							setAttributes( {boxBg: result} );
						}}
					/>
				</PanelBody>
			</InspectorControls>
		</Fragment>
	);
}

// wrap the component with withState so we can manipulate the state
// by using nativelly supporeted WordPress functions
export default withState( {
	userId: '',
	color: ''
} )(Users);