/**
* Description of the Controller and the logic it provides
*
* @module  controllers/JShowProduct
*/

'use strict';

var ISML = require('dw/template/ISML');
var guard = require('storefront_controllers/cartridge/scripts/guard');
var ProductMgr = require('dw/catalog/ProductMgr');

function start() {
	
	var parameterId = request.httpParameterMap.pid.stringValue;
	
	var product = ProductMgr.getProduct(parameterId);
	
	
	if (product===null) {
		ISML.renderTemplate(
		'productnotfound.isml', {message:'product with id
		'+parameterId+' not found'}
		);
		}
		else{
		ISML.renderTemplate(
		'productfound.isml', {myProduct:product}
		);
		}
	
	
}
exports.Start = guard.ensure(['get'], start);


