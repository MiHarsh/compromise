'use strict';
//a Text is an array of termLists
class Text {
  constructor(arr, lexicon, parent) {
    this.list = arr || [];
    this._parent = parent;
  // this.whitespace = {
  //   before: (str) => {
  //     this.firstTerm().whitespace.before = str;
  //     return this;
  //   },
  //   after: (str) => {
  //     this.firstTerm().whitespace.before = str;
  //     return this;
  //   }
  // };
  }
  //getter/setters
  /** did it find anything? */
  get found() {
    return this.list.length > 0;
  }
  get parent() {
    return this._parent || this;
  }
  /** how many Texts are there?*/
  get length() {
    return this.list.length;
  }
  get isA() {
    return 'Text';
  }
  get whitespace() {
    return {
      before: (str) => {
        this.list.forEach((ts) => {
          ts.whitespace.before(str);
        });
        return this;
      },
      after: (str) => {
        this.list.forEach((ts) => {
          ts.whitespace.after(str);
        });
        return this;
      }
    };
  }
}

module.exports = Text;
Text = require('./methods/misc')(Text);
Text = require('./methods/tag')(Text);
Text = require('./methods/sort')(Text);
Text = require('./methods/case')(Text);
Text = require('./methods/match/match')(Text);
Text = require('./methods/remove')(Text);
Text = require('./methods/replace')(Text);
Text = require('./methods/render/render')(Text);
Text = require('./methods/split')(Text);
Text = require('./methods/insert')(Text);
Text.prototype.topk = require('./methods/render/topk');
Text.prototype.ngram = require('./methods/render/ngram');
Text.prototype.normalize = require('./methods/normalize');

const subset = {
  adjectives: require('./subset/adjectives'),
  adverbs: require('./subset/adverbs'),
  contractions: require('./subset/contractions'),
  nouns: require('./subset/nouns'),
  dates: require('./subset/dates'),
  people: require('./subset/people'),
  values: require('./subset/values'),
  verbs: require('./subset/verbs'),
  subjects: require('./subset/subjects'),
  sentences: require('./subset/sentences'),
  statements: require('./subset/sentences/statements'),
  questions: require('./subset/sentences/questions'),
};
//term subsets
Object.keys(subset).forEach((k) => {
  Text.prototype[k] = function () {
    return new subset[k](this.list);
  };
});
