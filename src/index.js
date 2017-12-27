/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-27 09:54:37
 * @version $Id$
 */

import _ from 'lodash';
import './style.css';
import SantaIcon from './santa-claus.png';
import printMe from './print.js'

function component(){
	var element = document.createElement('div');
    var btn = document.createElement('button');

	element.innerHTML = _.join(['Hello','webpack'],'');
	element.classList.add('hello');

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;

	element.appendChild(btn);

	var myIcon = new Image();
    myIcon.src = SantaIcon;
 
    element.appendChild(myIcon);

	return element;
}

document.body.appendChild(component());
