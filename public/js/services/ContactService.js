var app = angular.module('ContactService',[]);

app.factory('Contacts',['$http',function($http){
	var urlBase = '/contact';

	return {
		get : function(){
			return $http.get(urlBase);
		},
		create : function(contactData){
			return $http.post(urlBase, contactData);
		},
		remove : function(id){
			return $http.delete(urlBase + '/' + id);
		},
		update : function(id,contactData){
			return $http.put(urlBase + '/' + id,contactData);
		},
		edit : function(id){
			return $http.get(urlBase + '/' + id);
		}
	}

}]);