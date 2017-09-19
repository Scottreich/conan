$(document).ready(function() {
  $("form").submit(function(event) {

    // var vowels = ["a","e","i","o","u"];
    var sentence = $("#input1").val();

    // alert(sentence);

    // vowels.forEach(function(vowel) {
    //   sentence = sentence.replace(vowel, "-");
    //   // var vowels = ["a","e","i","o","u"];
    // });

    var output = "";
    var sentenceArray = sentence.split("");

    sentenceArray.forEach(function(char) {
      if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
        var char = "-";
      } output = output + char;
    });
    $("form").hide();
    $("#output").removeClass("hidden");
    $("#output").append(output);
    event.preventDefault();

  });
});
