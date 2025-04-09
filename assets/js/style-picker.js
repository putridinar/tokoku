jQuery('.style-picker div').click(function() {
  var target = $(this).attr('id');
  $(this).addClass('item_warna').siblings().removeClass('item_warna');
  $('#' + target).show().siblings('div').hide();
});
