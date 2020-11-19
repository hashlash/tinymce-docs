---
layout: default
title: Implement TinyMCE in PHP
---

Embedding the editor on a web page form is simple, but handling the content is what makes it useful.

## Example without a database

More or less useless for a CMS in reality, but good enough to play around with. The sample file – explained below:

```
<?php
 $allowedTags='<p><strong><em><u><h1><h2><h3><h4><h5><h6><img>';
 $allowedTags.='<li><ol><ul><span><div><br><ins><del>';  
// Should use some proper HTML filtering here.
  if($_POST['elm1']!='') {
    $sHeader = '<h1>Ah, content is king.</h1>';
    $sContent = strip_tags(stripslashes($_POST['elm1']),$allowedTags);
} else {
    $sHeader = '<h1>Nothing submitted yet</h1>';
    $sContent = '<p>Start typing...</p>';
    $sContent.= '<p><img width="107" height="108" border="0" src="/mediawiki/images/badge.png"';
    $sContent.= 'alt="TinyMCE button"/>This rover has crossed over</p>';
  }
?>
<html>
<head>
<title>My test editor - with tinyMCE and PHP</title>
<script language="javascript" type="text/javascript" src="/js/tinymce/jscripts/tiny_mce/tiny_mce.js"></script>
<script language="javascript" type="text/javascript">
  tinyMCE.init({
    theme : "advanced",
    mode: "exact",
    elements : "elm1",
    theme_advanced_toolbar_location : "top",
    theme_advanced_buttons1 : "bold,italic,underline,strikethrough,separator,"
    + "justifyleft,justifycenter,justifyright,justifyfull,formatselect,"
    + "bullist,numlist,outdent,indent",
    theme_advanced_buttons2 : "link,unlink,anchor,image,separator,"
    +"undo,redo,cleanup,code,separator,sub,sup,charmap",
    theme_advanced_buttons3 : "",
    height:"350px",
    width:"600px"
});

</script>
</head>
<body>
 <?php echo $sHeader;?>
 <h2>Sample using TinyMCE and PHP</h2>
 <form method="post" action="<?=$_SERVER['REQUEST_URI']?>">
  <textarea id="elm1" name="elm1" rows="15" cols="80"><?php echo $sContent;?></textarea>
<br />
<input type="submit" name="save" value="Submit" />
<input type="reset" name="reset" value="Reset" />
</form>
</body>
</html>
```

Save the code above into a file ending with .php, upload it to your webserver and test/modify it yourself.

## The tinyMCE.init section

A few words on the JavaScript `tinyMCE.init({...}` part in the example.

*   theme : advanced  tells TinyMCE to use the "advanced" theme, which enables us to configure a lot of customizations. → [theme](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@theme/) in the TinyMCE documentation

*   mode : exact  commands TinyMCE to not convert all the textareas on the page, but only those we tell it to (see below) → [mode](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@mode/) in the TinyMCE documentation

*   elements : "elm1"  related to the option "mode" above, tells TinyMCE which textareas are converted. The value should contain the id attributes of all textareas you would like to convert. → [elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@elements/) in the TinyMCE documentation.