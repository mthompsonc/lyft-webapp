$(document).ready(function() {
  $('#firstpage').hide();
  $('#signup').hide();
  $('#signup').hide();
  $('#verify').hide();
  $('#register').hide();
  $('#final').hide();
  /* SPLASH */
  $("#splash").fadeOut(3000, function() {
    $('#splash').hide();
    $('#firstpage').show();
    $('#signup').hide();
    $('#verify').hide();
    $('#register').hide();
    $('#final').hide();

  });
  /* Sign Up */
  $("#signupbtn").click(function() {
    $('#firstpage').hide();
    $("#signup").show();
    $("#codecol").hide();
    $("#codeper").hide();
    $("#codemex").hide();
    $("#codeusa").hide();
    $("#btnext").attr("disabled", "disabled");
  });
  $("#btn-back").click(function() {
    $('#signup').hide();
    $("#firstpage").show();
  })
  /* Selector */
  $(".dropdown img.flag").addClass("flagvisibility");
  $(".dropdown dt a").click(function() {
    $(".dropdown dd ul").toggle();
  });

  $(".dropdown dd ul li a").click(function() {
    var text = $(this).html();
    $(".dropdown dt a span").html(text);
    $(".dropdown dd ul").hide();
    $("#result").html("Selected value is: " + getSelectedValue("sample"));
  });

  function getSelectedValue(id) {
    return $("#" + id).find("dt a span.value").html();
  }

  $(document).bind('click', function(e) {
    var $clicked = $(e.target);
    if (!$clicked.parents().hasClass("dropdown"))
      $(".dropdown dd ul").hide();
  });
  $(".dropdown img.flag").toggleClass("flagvisibility");

  /*Code Phone*/
  /*Colombia*/
  $('#imgcol').click(function() {
    $("#codecol").show();
    $("#codeper").hide();
    $("#codemex").hide();
    $("#codeusa").hide();
  });
  /*Peru*/
  $('#imgper').click(function() {
    $("#codecol").hide();
    $("#codeper").show();
    $("#codemex").hide();
    $("#codeusa").hide();
  });
  /*Mexico*/
  $('#imgmex').click(function() {
    $("#codecol").hide();
    $("#codeper").hide();
    $("#codemex").show();
    $("#codeusa").hide();
  });

  /*U.S.A*/
  $('#imgusa').click(function() {
    $("#codecol").hide();
    $("#codeper").hide();
    $("#codemex").hide();
    $("#codeusa").show();
  });

  /*Deshabilitar btn next*/
  $("#number").keyup(function() {
    if ($(this).val().length == 10) {
      $("#btnext").removeAttr('disabled');
      $("#btnext").removeClass("disabled");
    } else {
      $("#btnext").attr("disabled", "disabled");
    }
  });


  /*boton next código*/
  $("#btnext").click(function() {
    $("#number").val("");
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código de verificación es: " + code);
    $('#signup').hide();
    $("#verify").show();
    $("#btnext-2").attr("disabled", "disabled");
    $("#code").val("");
  });

  /*Deshabilitar btn next 2(verify)*/
  $("#code").keyup(function() {
    if ($(this).val().length == 3) {
      $("#btnext-2").removeAttr('disabled');
      $("#btnext-2").removeClass("disabled");
    } else {
      $("#btnext-2").attr("disabled", "disabled");
    }
  });

  /* Botón back de section Verify */
  $("#btn-back2").click(function() {
    $("#verify").hide();
    $('#signup').show();
  });

    /*Botón para reenviar el código de verificación*/
  $("#btnresend").click(function(){
    var code = "";
    var str = "123456789";
    for (var i = 0; i < 3; i++) {
      code += str.charAt(Math.floor(Math.random() * str.length));
    }
    alert("Tu código de verificación es: " + code);
    $("#code").val("");
  });

    /*Botón next que entra a la section register*/
  $("#btnext-2").click(function(){
    $("#verify").hide();
    $("#code").val("");
    $('#register').show();
    $("#btnext-3").attr("disabled", "disabled");
  });

  /*Botón back de Section Register*/
  $("#btn-back3").click(function() {
    $("#register").hide();
    $('#verify').show();
    $("#name").val("");
    $("#lastname").val("");
    $("#email").val("");
  });


  /*Activar botón next de Section Register*/
  $("input:checkbox").on("click",function(){
    $("#btnext-3").removeAttr("disabled");
  });

    /*Botón next register a final*/
  $("#btnext-3").click(function(){
    $('#register').hide();
    $('#final').show();
    $("#name").val("");
    $("#lastname").val("");
    $("#email").val("");
  })

  $("#btnext-4").click(function(){
    $('#firstpage').show();
    $('#final').hide();

  })
})
