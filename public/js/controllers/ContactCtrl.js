var app = angular.module('ContactCtrl',[]);

app.controller('ContactController',[
	'$scope',
	'Contacts',
	function($scope, Contacts){
		
		var init = function(){
			Contacts.get().success(function(response){
				console.log("I got the data I requested");
				$scope.contacts = response;
			});
		}

		init();

		$scope.addContact = function(){
			console.log($scope.contact);
			Contacts.create($scope.contact).success(function(response){
				console.log("Success to create a data : " + response);
				$scope.contact = "";
				init();
			});
		}

		$scope.remove = function(id){
			console.log(id);
			Contacts.remove(id).success(function(response){
				console.log("Remove a data : " + response);
				init();
			});
		}

		$scope.update = function(){
			var id = $scope.contact._id;
			Contacts.update(id,$scope.contact).success(function(response){
				$scope.contact = "";
				console.log("Update a data : " + response);
				init();
			});
		}

		$scope.edit = function(id){
			console.log(id);
			Contacts.edit(id).success(function(response){
				console.log("Put data on the form : : " + response);
				$scope.contact = response;
			});
		}

		$scope.deselect = function(){
			$scope.contact = "";
		}
	}
]);