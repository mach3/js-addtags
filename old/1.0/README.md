#AddTags.js

## This does

- help us controll "Add Tag" interface easily

## This doesn't

- markup automatically ( except for tag list )

## Requires

- jQuery 1.4 or later

### Author

- [Mach3.laBlog](http://blog.mach3.jp/)
- [Follow me on Twitter](http://twitter.com/mach3ss)

## Usage

### Basic

First of all, markup form and other elements.

	<!-- form to input tag -->
	<form id="addtag" action="">
		<input type="text" id="taginput" />
		<input type="submit" value="add" />
		<input type="reset" value="clear" />
	</form>

	<!-- list to display tag collection -->
	<ul id="taglist"></ul>

Initialize the class, and run it.

	<script type="text/javascript">
	var mytags = new AddTags;
	mytags.run();
	</script>

### Default tags

You can pass array of tag collection for default
as argument for constructor or "setTag" method.

	var mytags = new AddTags( ["hoge","fuga","foo","bar"] );
	// or 
	mytags.setTags( ["hoge","fuga","foo","bar"] );

### Configure the selector

Use "config" method to configure the selector for each element.

	mytags.config({
		form:"form#addtag", // form element
		input:"input#taginput", // text input to add tag
		list:"ul#taglist", // list element for display tags added
		deleteButton:"#taglist li input.delete" // button to delete tag
	});

"deleteButton" is inserted automatically.
See "refreshList" method of source.

### Events

This dispatch "change" event when tag list updated.
Use jQuery.bind to add event listener.

	mytags.bind( mytags.EVENT_CHANGE, function(){
		console.log( this.toString() );
	});


### Other

####remove( tag )

Remove a tag from the taglist

####clear()

Clear all tags

####toString()

Return tag collection as string separated by comma.
