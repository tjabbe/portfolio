var App = function() {
	this.init();
};

App.prototype.init = function() {
	
	this.$        = {};
	this.$.body   = $('body');
	this.$.menuLi = this.$.body.find('nav ul li, nav span a');
	this.$.menuA  = this.$.menuLi.find('a');

	this.initEvents();
	this.setActive();
};

App.prototype.initEvents = function() {

	this.$.menuLi.on('click', $.proxy(function(e){this.changeActive(e);}, this));

};

App.prototype.changeActive = function(e) {
	this.$.menuLi.removeClass('active');

	if ($(e.target).hasClass('logo')) {
		this.$.menuLi.eq(1).addClass('active');
	}
	else {
		$(e.target).parent().addClass('active');
	}
};

App.prototype.setActive = function() {
	var fu = window.location.pathname;

	this.$.menuLi.filter('.active').removeClass('active');
	this.$.menuA.filter('[href="'+fu+'"]').parent().addClass('active');

};
