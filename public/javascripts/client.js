var cryptoMoon = {
  cache: {
    mooning: document.getElementsByClassName("mooning")[0],
    noMooning: document.getElementsByClassName("notMooning")[0]
  },
  init: function() {
    cryptoMoon.count();
  },
  count: function() {
    let mooning = window.document.getElementsByClassName("up").length;
    let notMooning = window.document.getElementsByClassName("down").length;

    cryptoMoon.cache.mooning.innerHTML ='Mooning ' + mooning;
    cryptoMoon.cache.noMooning.innerHTML ='Not Mooning ' + notMooning;

  }
};

cryptoMoon.init();
