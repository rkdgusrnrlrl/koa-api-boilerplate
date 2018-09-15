const router = require('koa-router')();
const auth = require('../../middlewares/auth');

router.get('/me/profile', auth, async (ctx) => {
  const user = ctx.currentUser;

  ctx.body = {
    id: user.id,
    name: user.name,
    email: user.email,
    token: user.token,
  };
});

module.exports = router;
