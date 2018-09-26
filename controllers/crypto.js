var request = require("request-promise");

exports.crypto_all = function(req, res, next) {
  request({
    uri: "https://api.coinmarketcap.com/v2/ticker/",
    qs: {
      sort: "rank",
      limit: 100,
      convert: "GBP",
    },
    json: true
  })
    .then(data => {
      //res.render('index', data)
      const settings = {
        data: data,
        title: "Crypto Moon"
      };
      res.render("index", settings);
    })
    .catch(err => {
      console.log(err);
      res.render("error");
    });
};

exports.crypto_detail = function(req, res, next) {
  request({
    uri: "https://api.coinmarketcap.com/v2/ticker/" +   req.params.id,
    qs: {
      convert: "GBP",
    },
    json: true
  })
    .then(data => {
      //res.render('index', data)
      const settings = {
        data: data,
      };
      console.log(settings.data.data);
      res.render("single", settings);
    })
    .catch(err => {
      console.log(err);
      res.render("error");
    });
};


exports.all_refresh = function(req, res, next) {
  console.log("refreshed");
  res.redirect(req.get("referer"));
};

exports.about = function(req, res, next) {
  res.render("about");
};
