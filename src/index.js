/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-27 09:54:37
 * @version $Id$
 */

import _ from 'lodash';
import './style.css';
import SantaIcon from './santa-claus.png';

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello','webpack'],'');
	element.classList.add('hello');

	var myIcon = new Image();
    myIcon.src = SantaIcon;
 
    element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
