<?php
/*
Plugin Name:  User Info Box
Plugin URI:	  https://no-domain-yet.com
Description:  Very cool plugin for displaying user information using Gutemberg block.
Version:	  1.0.0
Author:		  Aleksej Vukomanovic
Author URI:   http://messyarray.com
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  messyarray
Domain Path:  /languages
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// define path to our build folder
define( 'UIB_BLOCK_BUILD', plugin_dir_url(__FILE__) . 'build/' );

// define path to our src folder where we will keep styles
define( 'UIB_BLOCK', plugin_dir_url(__FILE__) . 'src/' );


// Enqueue Gutenberg block assets for both frontend + backend.
add_action( 'enqueue_block_assets', 'uib_block_assets' );


/**
 * callback function for registeing our block style
 * in both Gutemberg editor and frontend
 *
 * @return void
 */
function uib_block_assets() {
    
    // include css style which will be used on both block preview
    // inside Gutemberg block Editor and on the frontend
    wp_enqueue_style( 'uib-style-css', UIB_BLOCK . 'style.css', array(), '1.0.0' );
} 


// Enqueue Gutenberg block assets for backend editor.
add_action( 'enqueue_block_editor_assets', 'uib_editor_assets' );

/**
 * Callback function for registering our block with Gutemberg
 *
 * @return void
 */
function uib_editor_assets() {
  
    // Scripts.
    wp_enqueue_script(
        'uib-block-js',
        UIB_BLOCK_BUILD . 'index.js',
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        '1.0.0',
        true
    );
}