---
layout: default
title: pagebreak
---

(Requires: 3.0)

Adds pagebreak support, some CMS systems uses a special separator to break the contents into pages. This plugin enables you to insert such page breaks in the editor.

## Initialization Example

```html
tinyMCE.init({
	theme : "advanced",
	mode : "textareas",
	plugins : "pagebreak",
	pagebreak_separator : "<!-- my page break -->"
});

```

## Plugin options

| Name | Summary |
| --- | --- |
| [pagebreak_separator] | Enables you to specify how the page break should be generated in the HTML source code. |

## Usage Notes

You must allow your img tags to have the class attribute in order for this plugin to work correctly. If you are overriding the default valid_elements, make sure you include something like:

```html
img[src|border|alt=|title|width|height|align|class]

```