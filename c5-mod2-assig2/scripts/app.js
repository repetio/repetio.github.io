/**
 * Created by angel on 11/10/16.
 */

(function () {
  angular.module('shoppingList', [])
      .service('ShoppingListCheckOffService', ShoppingListService)
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', BoughtController);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.list = ShoppingListCheckOffService.getShoppingList();

    ctrl.buyItem = function (index) {
      ShoppingListCheckOffService.shiftItem(index);
    };
  }

  BoughtController.$inject = ['ShoppingListCheckOffService'];
  function BoughtController(ShoppingListCheckOffService) {
    var ctrl = this;

    ctrl.list = ShoppingListCheckOffService.getBoughtList();

  }

  function ShoppingListService() {
    var service = this;

    var shoppingList = [
      {name:'Cookies', quantity: 10, unit: 'bag(s)'},
      {name:'Sugary Drinks', quantity: 5, unit: 'bottle(s)'},
      {name:'Coffee ', quantity: 2, unit: 'cup(s)'},
      {name:'Nutella', quantity: 2, unit: 'jar(s)'},
      {name:'Salad', quantity: 5, unit: 'bag(s)'}
    ];

    var boughtList = [];

    service.getShoppingList = function () {
      return shoppingList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

    service.shiftItem = function (index) {
      var item = shoppingList.splice(index, 1);
      boughtList.push(item[0]);
    }

  }

})();