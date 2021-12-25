"use strict";

/**
 *
 * adonis-quotus
 *
 * (c) Jose Tandavala <jose.tandavala@mail.com>
 */

const { ServiceProvider } = require("@adonisjs/fold");

class QuotusProvider extends ServiceProvider {
  register() {
    this.app.singleton("Adonis/Addons/Quotus", (app) => {
      const Config = app.use("Adonis/Src/Config");
      const Quotus = require("../src/Quotus");
      return new Quotus(Config);
    });
    this.app.alias("Adonis/Addons/Quotus", "Quotus");
    this.app.bind("Adonis/Commands/Quote", () =>
      require("../src/Commands/Quote")
    );
  }
  boot() {
    const ace = require("@adonisjs/ace");

    ace.addCommand("Adonis/Commands/Quote");
  }
}

module.exports = QuotusProvider;
