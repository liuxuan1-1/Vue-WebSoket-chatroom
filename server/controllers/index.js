let index = async (ctx, next) => {
  let user = ctx.state.user;
  if (user) {
    ctx.response.redirect(`../static/rome.html?user=${user}`)
  } else {
    ctx.response.redirect('/signin');
  }
}

module.exports = {
  'GET /': index,
};