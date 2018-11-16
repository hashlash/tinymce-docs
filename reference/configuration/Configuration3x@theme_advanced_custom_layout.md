---
layout: default
title: theme_advanced_custom_layout
---

This option is used to specify a custom layout manager function. The format of this function is: customLayout(template) where template is the template array within the advanced theme. This function should return a new template array containing the editor HTML in a key called "html". This option can only be used when theme is set to advanced and when the theme_advanced_layout_manager option is set to the value of "CustomLayout".

## Example of usage of the theme_advanced_custom_layout option:

```js
function myCustomLayout(template) {
	// Make custom layout
	template['html'] = "make new layout";

	return template;
}

tinyMCE.init({
	...
	theme_advanced_custom_layout : "myCustomLayout"
});
```