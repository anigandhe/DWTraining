/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JCall
*/

var guard = require('storefront_controllers/cartridge/scripts/guard');
var ISML = require('dw/template/ISML');

function start() {

	var myParam = request.httpParameterMap.param;
	
	if (myParam.stringValue != null)
	{
		ISML.renderTemplate(
				'call/jnotEmpty.isml', {paramOnPdict:myParam}
				);
	}
	else
	{
		ISML.renderTemplate(
				'call/jempty.isml', {paramOnPdict:'param not found'}
				);
	}
	
	response.getWriter().println(myParam.stringValue);

};
exports.Start = guard.ensure(['get'], start);

