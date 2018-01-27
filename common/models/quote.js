'use strict';

module.exports = function(Quote) {

  /**
   *
   * @param {Function(Error, object)} callback
   */

  Quote.random = function(callback) {
    Quote.getDataSource().connector.connect(function(err, db) {
      var collection = db.collection('Quote');
      collection.aggregate([{$sample: {size: 1}}], function(err, data) {
        if (err) return callback(err);
        return callback(null, data);
      });
    });
  };

};
