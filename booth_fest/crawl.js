// https://booth.pm/ja/exhibitions/bf-analoguegames?sort=popularity

$root = $('.items-6cols');
$items = $root.find('.item_basic-wrap');
results = [];
_.each($items, function(item){
  result = {};
  $item = $(item);

  result.image_url = $item.find('.thumbnail-image').first().data('original');
  result.name = $item.find('.item_summary-title').text();
  result.url = $item.find('.item_summary-title .nav')[0].href;
  result.price_str = $item.find('.price').text();
  result.price_str = parseInt(result.url.match(/\/(\d+)/)[1], 10);
  result.shop = {};
  result.shop.name = $item.find('.item_summary-shop_name').text();
  result.shop.image_url = $item.find('.item_summary-shop_name .user-avatar')[0].src;

  results.push(result);
});
JSON.stringify(results, null, '  ');