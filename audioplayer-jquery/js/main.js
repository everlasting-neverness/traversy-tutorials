var audio;

$("#pause").hide();

initAudio($("#playlist li:first-child"));

function initAudio(element) {
  var song = element.data("song");
  var title = element.text();
  var cover = element.data("cover");
  var artist = element.data("artist");

  audio = new Audio(`media/${song}`);

  if (!audio.currentTime) {
    $("#duration").html("0.00");
  }

  $("#audio-player .artist").text(artist);
  $("#audio-player .title").text(title);

  $("img.cover").attr("src", cover);

  $("#playlist li").removeClass("active");
  element.addClass("active");
}

$("#play").on("click", () => {
  audio.play();
  $("#play").hide();
  $("#pause").show();
  $("#duration").fadeIn(400);
  showDuration();
});

$("#pause").on("click", () => {
  audio.pause();
  $("#pause").hide();
  $("#play").show();
});

$("#stop").on("click", () => {
  audio.pause();
  audio.currentTime = 0;
  $("#pause").hide();
  $("#play").show();
  $("#duration").fadeOut(400);
});

$("#next").on("click", () => {
  audio.pause();
  var next = $('#playlist li.active').next();
  if (next.length === 0) {
    next = $('#playlist li:first-child');
  }
  initAudio(next);
  audio.play();
  showDuration();
});

$("#prev").on("click", () => {
  audio.pause();
  var prev = $('#playlist li.active').prev();
  if (prev.length === 0) {
    prev = $('#playlist li:last-child');
  }
  initAudio(prev);
  audio.play();
  showDuration();
});

$('#volume').change(function() {
  audio.volume = parseFloat(this.value / 10);
})

function showDuration() {
  $(audio).bind("timeupdate", () => {
    var s = parseInt(audio.currentTime % 60);
    var m = parseInt(audio.currentTime / 60) % 60;
    if (s < 10) {
      s = "0" + s;
    }
    $("#duration").html(m + "." + s);
    var value = 0;
    if (audio.currentTime > 0) {
      value = Math.floor((100 / audio.duration) * audio.currentTime);
    }
    $('#progress').css('width', value + '%');
  });
}
