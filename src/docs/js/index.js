function toggle_result_block(result_block) {
  result_block.prev().toggleClass('stacked');
  result_block.toggle();
}

function insert_result_links() {
  $('.result').each(function(idx, node) {
    var result_block = $(node);
    var sample = result_block.prev();

    var view_result_link = $('<a class="view-result" href="#">結果を表示する</a>');
    sample.before(view_result_link);

    view_result_link.on('click', function(event) {
      event.preventDefault();
      toggle_result_block(result_block);
    });
  });
}

$(insert_result_links);
