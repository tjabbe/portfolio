var App = function() {
	this.init();
};

App.prototype.init = function() {
	
	this.$        = {};
	this.$.body   = $('body');
	this.$.menuLi = this.$.body.find('nav ul li');

	this.initEvents();
};

App.prototype.initEvents = function() {

	this.$.menuLi.on('click', $.proxy(function(e){this.changeActive(e);}, this));

};

App.prototype.changeActive = function(e) {
	this.$.menuLi.removeClass('active');
	$(e.target).parent().addClass('active');
};