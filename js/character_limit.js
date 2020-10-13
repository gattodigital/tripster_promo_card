$( document ).ready(function() {
  console.log( "jquery loaded!" );
  $(".description").each(function () {
    len=$(this).text().length;
    str= $(this).text().substr(0,190);
    lastIndexOf = str.lastIndexOf(" "); 
    if(len>190) {
      $(this).text(str.substr(0, lastIndexOf) + '...');
    }
  });
});