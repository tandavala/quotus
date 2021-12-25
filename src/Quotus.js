"use strict";

/**
 *
 * adonis-quotus
 *
 * (c) José Tandavala <jose.tandavala@gmail.com>
 */

const request = require("request");

/**
 *
 * @class Quotus
 *
 * @param { Obj } Config
 */

class Quotus {
  sourceURL = "https://wisdomapi.herokuapp.com/v1/";

  constructor(Config) {
    this.config = Config.merge("quotus", {
      sourceURL: this.sourceURL,
    });
  }
  getQuotes(id = null) {
    let suffix = id ? `${id}` : `random`;
    let endpoint = `${this.config.sourceURL}/${suffix}`;

    return new Promise((resolve, reject) => {
      request(endpoint, { json: true }, (err, res, body) => {
        if (err) return reject(err);
        return resolve(body);
      });
    });
  }
}

module.exports = Quotus;
