$(document).ready(function () {
  $(".slider div").click(function () {
    $(".slider div").removeClass("selected");
    $(this).addClass("selected");
  });

  $(".menuOpen").click(function () {
    $(".options").slideToggle();
  });
  $(document).click(function (e) {
    var target = e.target;
    if (!$(target).is(".menuOpen") && !$(target).is(".options") && !$(target).closest(".options").length) {
      $(".options").slideUp();
    }
  });


  $('.messages').show(); // Başlangıçta community kutusunu göster
  $('.community, .situations, .calls').hide(); // Diğer kutuları gizle

});

// Tablara tıklandığında ilgili kutuyu göster
$('.slider div').click(function () {

  // Seçili olan öğeye tıklanırsa hiç bir şey yapma
  if ($(this).hasClass('selected')) {
    return
  }

  // Seçili sekmeden önceki ve sonraki tüm kutuları gizle
  $('.community, .messages, .situations, .calls').hide();

  // Tıklanan sekmeye göre ilgili kutuyu göster
  if ($(this).index() === 0) {
    $('.community').show();
  } else if ($(this).index() === 1) {
    $('.messages').show();
  } else if ($(this).index() === 2) {
    $('.situations').show();
  } else if ($(this).index() === 3) {
    $('.calls').show();
  }
});