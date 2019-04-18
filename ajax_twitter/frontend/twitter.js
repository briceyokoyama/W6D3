let FollowToggle = require("./follow_toggle.js")

$(
  $("button").each((idx, el) => {
    FollowToggle.new(el);
  })
)