// sign in:

let index = 0;

let signinGet = async (ctx, next) => {
  let names = '甲乙丙丁戊己庚辛壬癸';
  let name = `路人${names[index % 10]}`;
  index++;
  console.log(name);
  console.log(index);
  console.log(names[index % 10]);
  let user = {
    id: index,
    name: name,
    image: index % 10
  };
  let value = Buffer.from(JSON.stringify(user)).toString('base64');
  console.log(`Set cookie value: ${value}`);
  ctx.cookies.set('name', value);
  ctx.response.redirect('/');
}

let signinPost = async (ctx, next) => {
  
}

let signout = async (ctx, next) => {
  ctx.cookies.set('name', '');
  ctx.response.redirect('/signin');
}

module.exports = {
  'GET /signin': signinGet,

  'GET /signinName': signinPost,

  'GET /signout': signout,
};