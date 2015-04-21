$(document).ready(function () {
  // Grab the template script
  var theTemplateScript = $("#address-template").html();
  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  //get Ajax
  var url = "https://gist.githubusercontent.com/bobbywilson0/8c1ecf7db294ecdc176a/raw/a4b4946a0d789c5e8666843d695ac7427723be1b/data.json"
  var output = $.getJSON(url, function(result) {
    // console.log(JSON.stringify(result, null, 2));

    // Pass our data to the template
    var theCompiledHtml = theTemplate(result);

    // Add the compiled html to the page
    $('.output').html(theCompiledHtml);
  });
});
