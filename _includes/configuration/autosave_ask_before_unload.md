### `autosave_ask_before_unload`

This option allows you to set whether the editor should prompt the user to advise them that they have unsaved changes when attempting to close the current window. By default this option is enabled and an example of disabling this setting is included below.

**Type**: `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `autosave_ask_before_unload`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_ask_before_unload: false
});
```