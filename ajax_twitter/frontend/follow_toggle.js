class FollowToggle {
  constructor(el) {
    this.$el = $el;
    this.userId = $el.attr("data-user-id");
    this.followState = $el.attr("data-initial-follow-state");
    this.render.call($el);
    this.handleClick.call($el);
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.html("Follow!");
    } else {
      this.$el.html("Unfollow!");
    }
  }

  handleClick() {
    this.$el.on("click", () => {

    })
  }
}

module.exports(FollowToggle)