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
      // this.age = false; // Maybe change this somehow to search for both
      this.category = '';
      // this.price = '';
    }
    function getTasks(cont){
      // start.ref("tasks"); //you will need to know which object later
      var start = firebaseFactory.refRoot.ref("tasks")
      start.orderByChild("category").equalTo(cont.category).on("child_added", function(snapshot) {
        var x = snapshot.val();
        // console.log(x);
        var z = createTableElement(x);
        var here = document.getElementById('here');
        here.appendChild(z)
      });
    }

    function createTableElement(x){
        var tr = document.createElement('tr');
        createTd(x.age, tr);
        createTd(x.price, tr);
        createTd(x.category, tr);
        createTd(x.summary, tr);
        createTd(x.time, tr);
        return tr;
    }
    function createTd(item, tr){
      var td = document.createElement('td')
      td.innerHTML = item;
      tr.appendChild(td);
    }

  }

})();
