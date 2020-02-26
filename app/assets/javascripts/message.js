$(function(){ 
  var buildHTML = function(message) {
    if (message.content && message.image) {
      
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          `<p class="lower-message__content">` +
            message.content +
          `</p>` +
          `<img src="` + message.image + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    } else if (message.content) {
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div class="message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          `<p class="lower-message__content">` +
            message.content +
          `</p>` +
        `</div>` +
      `</div>`
    } else if (message.image) {
      var html = `<div class="message" data-message-id=` + message.id + `>` +
        `<div class="message__upper-info">` +
          `<div class="message__upper-info__talker">` +
            message.user_name +
          `</div>` +
          `<div class="message__upper-info__date">` +
            message.created_at +
          `</div>` +
        `</div>` +
        `<div class="lower-message">` +
          `<img src="` + message.image + `" class="lower-message__image" >` +
        `</div>` +
      `</div>`
    };
    return html;
  };


  $('#new_message').on('submit', function(e){
  e.preventDefault();
  var formData = new FormData(this);
  var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html);
      $('form')[0].reset();
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
    })
    
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    })
    .always(function(){            
      $('.send').prop("disabled", false);
    });
  });
});