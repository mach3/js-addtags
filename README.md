# AddTags.js

Class help us to create "add tag" interface easily.

## Features

- Help us to create "add tag" interface
- Add event listeners to the html you marked up
- This does not mark up automatically !
  ( Except for <li> element containing tag )

## Version

- 1.2.2 : Add Second Argument for Constructor
- 1.2.1 : Add Error Handler ( No Error yet )
- 1.2 : Add escape
- 1.1 : Change the rule of marking up
- 1.0 : First release

## Author

mach3

- [Mach3.laBlog](http://blog.mach3.jp)
- [Follow me on Twitter](http://twitter.com/mach3ss)

## Usage

### Basic

First of all, mark up HTML.
	
	<!-- Form element to input -->
	<input id="tagInput" type="text" />
	<input id="tagAddButton" type="button" value="add" />
	<input id="tagResetButton" type="button" value="reset" />
	
	<!-- Container to display the tag list -->
	<ul id="tagList"></ul>

Then, initialize class.

	var myaddtags = new AddTags( {}, [ "foo", "bar" ] );
	myaddtags.run();

You can pass the tags for default, as 2nd argument for constructor.

### Options

You can configure the markup information with `config` method,  
or first argument for constructor.
	
	var myconfig = {
		tagInput : "#tagInput", // Text input to add tag
		tagAddButton : "#tagAddButton", // Button to add tag
		tagClearButton : "#tagClearButton", // Button to clear tags
		tagList : "#tagList", // List element to display the tags
		tagDeleteButton : "#tagList li input.delete" // Button to delete the tag
	};
	var myaddtags = new AddTags( myconfig );

	// or

	myaddtags.config( myconfig );


### Events

The only event fired by this class is `change`,  
triggered when the tag list is updated.  
Add event listener using `bind`, us `unbind` to remove.

	myaddtags.bind( myaddtags.EVENT_CHANGE, function( e ){
		console.log( this.toString() );
	});

### Other

- `add( tag )`  
	Add tag(s) to the list.  
	You can pass also string separated with comma.
- `remove( tag )`  
	Remove a tag from the list.
- `clear()`  
	Clear all tags.
- `refreshList()`  
	Refresh the display of ul element containing tags.
- `toString()`  
	Return tag collection as string separated with comma.

## Lisence

The MIT License

Copyright (c) 2010 Matsukaze.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

