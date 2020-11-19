---
layout: default
title: Limit number of characters/words
---

It seems fairly common that people want to limit the number of words/characters in a form with TinyMCE so here is a small code snippet that can be used in your implementation logic to count the number of characters in the text and the number of words. The character/word limit checking needs to be in the implementation logic since TinyMCE shouldn't mess with form submission or validation that is up to the implementation.

### Function that returns text statistics for an editor instance by id

```js
// Returns text statistics for the specified editor by id
function getStats(id) {
    var body = tinymce.get(id).getBody(), text = tinymce.trim(body.innerText || body.textContent);

    return {
        chars: text.length,
        words: text.split(/[\w\u2019\'-]+/).length
    };
}
```

### Example of usage of the statistics function above

```js
function submitForm() {
    // Check if the user has entered less than 1000 characters
    if (getStats('content').chars < 1000) {
        alert("You need to enter 1000 characters or more.");
        return;
    }

    // Check if the user has entered less than 100 words
    if (getStats('content').words < 100) {
        alert("You need to enter 100 words or more.");
        return;
    }

    // Submit the form
    document.forms[0].submit();
}
```

[Example](http://fiddle.tiny.cloud/l1baab) on how to visually preview the contents entered in a size restrictive box.