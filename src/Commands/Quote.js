"use strict";

const { Command } = use("@adonis/ace");
const Quotus = use("Quotus");

class Quote extends Command {
  static get signature() {
    return "quote";
  }
  static get description() {
    return "startup juice and motivation.";
  }
  async handle(args, options) {
    Quotus.getQuotes((quote) => {
      console.log(
        `${this.chalk.gray(quote.author.name)} - ${this.chalk.cyan(
          quote.author.company
        )}`
      );
      console.log(`${quote.content}`);
    });
  }
}

module.exports = Quote;
