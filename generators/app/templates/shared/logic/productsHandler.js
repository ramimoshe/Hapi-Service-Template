'use strict';

const productsRepository = require('../data/products');

exports.get = (param) => {
	return productsRepository.get(param.params.id);
};

exports.create = (param) => {
	return productsRepository.create({
		id  : param.body.id,
		name: param.body.name,
	});
};

exports.search = (param) => {
	if (param.query && param.query.name && param.query.name != '') {
		return productsRepository.searchByName(param.query.name);
	}

	return productsRepository.getAll();
}
