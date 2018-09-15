const router = require('koa-router')();
const auth = require('../../middlewares/auth');
const User = require('../../models/user');

router.post('/users', async (ctx) => {

    ctx.checkBody('email').notEmpty('Email field is required')
    ctx.checkBody('password').notEmpty('Password field is required')
    ctx.checkBody('name').notEmpty('Name field is required')

    const {email, password, name} = ctx.request.body
    const user = await User.create(email, password, name)

    ctx.body = {
        ok : "ok"
    }
})

module.exports = router
