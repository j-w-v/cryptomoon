var request = require('request-promise');



  exports.crypto_all = function(req, res, next) {
        request({
            uri: 'https://api.coinmarketcap.com/v2/ticker/?sort=percent_change_24h&convert=GBP',
            qs: {
              limit: 15,
              convert: 'GBP',
            },
            json: true
          })
            .then((data) => {
              //res.render('index', data)
              const settings = {
                data: data,
                title: 'Crypto Moon',
              }
              res.render('index', settings);
            })
            .catch((err) => {
              console.log(err)
              res.render('error')
            })
  };

  exports.all_refresh = function(req, res, next) {
    console.log('refreshed');
    res.redirect(req.get('referer'));
};

exports.about = function(req, res, next) {
  res.render('about');
};