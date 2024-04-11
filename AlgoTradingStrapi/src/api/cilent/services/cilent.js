'use strict';

/**
 * cilent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cilent.cilent');
