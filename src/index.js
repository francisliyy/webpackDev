/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-12-27 09:54:37
 * @version $Id$
 */

 import _ from 'lodash';

function component(){
	var element = document.createElement('div');

	element.innerHTML = _.join(['Hello','webpack'],'');

	return element;
}

document.body.appendChild(component());
