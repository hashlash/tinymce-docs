### `visualchars_default_state`

This option enables specifying the default state of the Visual Characters plugin.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `visualchars_default_state`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to the HTML
  plugins: 'visualchars',
  menubar: 'view',
  toolbar: 'visualchars',
  visualchars_default_state: true
});
```