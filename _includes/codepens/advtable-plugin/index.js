tinymce.init({
  selector: 'textarea#advtable-plugin',
  height: '800px',
  plugins: 'table code advtable lists fullscreen',
  toolbar: 'undo redo | formatselect | bold italic |' +
    'alignleft aligncenter alignright alignjustify | indent outdent |' +
    'table tableinsertdialog tablecellprops tableprops | fullscreen'
});