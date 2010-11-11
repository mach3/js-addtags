/*!
 * AddTags.js
 * Copyright (c) Matsukaze. All rights reserved.
 * @author mach3
 * @version 1.0
 * @requires jQuery 1.4 or later
 */

var AddTags = function( tags ){
	this.setTags( tags );
};
/**
 * Class to manage the taglist
 * @class
 */
AddTags.prototype = {
	EVENT_CHANGE:"change",
	tags:[],
	option:{
		form:"form#addtag",
		input: "input#taginput",
		list: "ul#taglist",
		deleteButton: "#taglist li input.delete"
	},
	/**
	 * Reset tag data
	 * @param {array} tags
	 */
	setTags:function( tags ){
		this.tags = tags || [];
		return this;
	},
	/**
	 * Configure containers and elements
	 * @param {object} option
	 */ 
	config:function( option ){
		this.option = $.extend( {}, this.option, option );
		return this;
	},
	/**
	 * Add event listeners
	 */
	run:function(){
		$(this.option.form).bind("submit", $.proxy( this._onSubmit, this ));
		$(this.option.deleteButton).live("click", $.proxy( this._onDelete, this ));
		this.refreshList();
		return this;
	},
	_onSubmit:function(){
		var input = $(this.option.input);
		this.add( input.val() ) && this.refreshList();
		input.val("");
		return false;
	},
	_onDelete:function( e ){
		this.remove( $(e.target).attr("data-tag") );
	},
	/**
	 * Add new tag to the taglist, simple string or collection separated by comma.
	 * @param {string} tag(s)
	 */
	add:function( tag ){
		var _this, changed;
		_this = this;
		changed = false;
		tag = tag.replace( /^\s+|\s+$/, "" ).split(",");
		$.each( tag, function( i, t ){
			if( ! t.length ) return;
			_this.tags.push( t );
			_this.tags.sort();
			_this.tags = $.unique( _this.tags ).sort();
			changed = true;
		});
		if( changed ){ $(this).trigger( this.EVENT_CHANGE ); }
		return true;
	},
	/**
	 * Remove a tag from the taglist
	 * @param {string} tag
	 */
	remove:function( tag ){
		var c = this.tags.length;
		this.tags = $.grep( this.tags, function( v, i ){ return v !== tag; } );
		this.refreshList();
		if( this.tags.length !== c ){ $(this).trigger( this.EVENT_CHANGE ); }
		return this;
	},
	/**
	 * Clear all tags
	 */
	clear:function(){
		this.tags = [];
		this.refreshList();
		$(this).trigger( this.EVENT_CHANGE );
		return this;
	},
	/**
	 * Update the display of list
	 */
	refreshList:function(){
		var html, list;
		html = '<li>{{tag}} '
		+ '<input type="button" value="X" class="delete" data-tag="{{tag}}" /></li>';
		list = $(this.option.list).html("");
		$.each( this.tags, function( i, t ){
			$( html.replace( /{{tag}}/g, t ) ).appendTo( list );
		});
		return this;
	},
	/**
	 * Get tag collection as string, separated comma.
	 */
	toString:function(){
		return this.tags.join(",");
	},
	/**
	 * Wrapper of jquery.bind
	 */
	bind:function( name, func ){
		$(this).bind( name, func );
	},
	/**
	 * Wrapper of jquery.unbind
	 */
	unbind:function( name, func ){
		$(this).unbind( name, func );
	}
};

