### `linkchecker_preprocess`

The `linkchecker_preprocess` function is used for adjusting links before performing a link check.

**Type:** `Function`

#### Example: Using `linkchecker_preprocess`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'linkchecker',
  linkchecker_preprocess: function (data) {
    /* This example will encode or double encode the url */
    var newUrl = encodeURIComponent(data.url);
    return { url: newUrl };
  }
});
```
