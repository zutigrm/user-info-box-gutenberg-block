import React from 'react';
import { withState } from '@wordpress/compose';
import apiFetch from '@wordpress/api-fetch'; 

// import our Users component which handles the users dropdown
import Users from './users';
import UserBox from './user-box';


const __ = wp.i18n.__; // The __() for internationalization.
const registerBlockType = wp.blocks.registerBlockType; // The registerBlockType() to register blocks.
const {Fragment} = wp.element; // Wrapper we can use instead of adding markup, like div, etc

/**
 * Register: a Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType("uib/user-info-block", {
  title: __("User Info Box"), // Our block title
  icon: "businessman",
  category: "common", // pick a category from core provided ones or create a custom one
  keywords: [__("User"), __("User Info")],

  // attributes start here
  attributes: {
	id: {
		source: "attribute",
		selector: ".uib-wrapper",
		attribute: "id"
	},
	avatar: {
		source: "attribute",
		selector: "img",
		attribute: "src"
	},
	name: {
		source: "text",
		selector: ".uib-name",
	},
	desc: {
		source: "text",
		selector: ".uib-desc",
	},
	boxBg: {
		source: "attribute",
		selector: '.uib-wrapper',
		attribute: 'databg'
	}
  },
  // attributes end here

  /**
   * Edit function will render our block code
   * inside the Gutemberg editor once inserted
   */
  edit: withState( {users: []} )( ( {users, setState, attributes, setAttributes} ) => {
	
	// make sure to check if users is still empty before calling
	// fetch and updating state. If we do not include this
	// conditional our state will be updated over and over again.
	if ( ! users.length ) {

		// users data fetched from WP Rest Api
		// resposne will be passed to a setState hook
		// which will update state of users constant
		// use apiFetch to get user data from WP Rest api
		apiFetch( { path: '/wp/v2/users' } )
			.then( response => {
				// setState is pre defined is available if we wrap
				// component with withState
				setState({users: response});
			} );
	}
	
	// this is the callback function which will be
	// passed as prop to Users component
	// it will be used as callback for onChange event
	// inside the select box
	const setUserData = (userId) => {
		const user = users.find(u => u.id == userId);
		
		if ( userId ) {
			// setAttributes is provided for us by WordPress package
			// it will update attributes property. Make sure to allways
			// use this function, do Not update attributes directly like props.attributes.x = y
			setAttributes({
				id: user.id,
				name: user.name,
				avatar: user.avatar_urls[96],
				desc: user.description
			})
		}
	}

	if ( typeof attributes.id === 'string' && attributes.id.search('user-') !== -1 ) {
		// if we have prefixed id it means we already have saved user
		// and this is new block insert, we need to filter id
		attributes.id = attributes.id.replace('user-', '');
	}
	
	return(
		<Fragment>
			<Users data={users} existingUser={attributes.id} userSelect={setUserData} setAttributes={setAttributes} />
			<UserBox data={attributes} />
		</Fragment>
	)
  }),

  /**
   * Save function will handle the client side rendering
   * This is the code (html markup) which will be saved into the_content
   * once post is saved
   */
  save: props => {
	const {attributes} = props;

	if ( typeof attributes.id === 'string' && attributes.id.search('user-') !== -1 ) {
		// if we have prefixed id it means we already have saved user
		// and this is new block insert, we need to filter id
		attributes.id = attributes.id.replace('user-', '');
	}

	return(
		<UserBox data={attributes} />
	)
  }
});