(function() {
  'use strict';

  angular
    .module('discoverModule')
    .factory('discoverFactory', discoverFactory);

  discoverFactory.$inject = ['firebaseFactory'];
  function discoverFactory(firebaseFactory) {

    var factory = {
      SearchCont: SearchCont,
      getTasks: getTasks,

    }

    return factory;

    ///////////////////////////

    function SearchCont(){
      this.location = '';
      this.age = '';
      this.category = '';
      this.price = '';
    }
    function getTasks(cont){
      // start.ref("tasks"); //you will need to know which object later
      // var arr =  []
      var here = document.getElementById('here');
      while (here.hasChildNodes()){
        here.removeChild(here.childNodes[0]);
      }

      var start = firebaseFactory.refRoot.ref("tasks")
      start.orderByChild("location").equalTo(cont.location).on("child_added", function(snapshot) {
        var x = snapshot.val();
        if ((cont.category == x.category)) {
          if ((cont.price != '') && (x.price == cont.price)){
            var here = document.getElementById('here');
            if ((x.age === cont.age) || (cont.age === '')){
              var z = createTableElement(x);
              here.appendChild(z)
            }
          }
        }
      });
      // Somehow setup an else
    }

    function createTableElement(x){
        var tr = document.createElement('tr');
        createTd(x.age ? 'Yes' : 'No', tr);
        createTd(x.price, tr);
        createTd(x.category, tr);
        createTd(x.summary, tr);
        createTd(getTime(x.time), tr);
        createTd(x.location, tr);
        return tr;
    }

    function createTd(item, tr){
      var td = document.createElement('td')
      td.innerHTML = item;
      tr.appendChild(td);
    }

    function getTime(oldTime){
      var newTime = Math.floor(Date.now() / 1000);
      var time = newTime - oldTime;

      if (time < 3600){
        return `Posted ${Math.ceil(time / 60)} minute(s) ago`;
      }
      else if (time < 86400){
        return `Posted ${Math.ceil(time / 3600)} hour(s) ago`;
      }
      else if (time < 604800){
        return `Posted ${Math.ceil(time / 86400)} day(s) ago`;
      }
      else {
        return `Posted ${Math.ceil(time / 604800)} week(s) ago`;
      }
    }

  }

})();
