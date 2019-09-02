import React from 'react';
const __ = wp.i18n.__; // The __() for internationalization.

const UserBox = ({data}) => {
	// extract the properties we will use from user data
	const {id, name, avatar, desc, boxBg} = data;
	
	// if we do not have user selected, show the message and prevent
	// code from further rendering
	if ( !id ) return __('No user selected');

	return(
		<div dataBg={boxBg} style={{backgroundColor: boxBg}} className="uib-wrapper" id={'user-' +  id}>
			<figure>
				<img 
					src={avatar}
					width={96}
					height={96} 
					alt={name  + ' avatar'} />
			</figure>
			<div className="uib-content">
				<h4 className="uib-name">{name}</h4>
				<p className="uib-desc">{desc}</p>
			</div>
		</div>
	);
}

export default UserBox;