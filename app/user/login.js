const router = require('koa-router')();
const User = require('../../models/user');
const jwt = require('../../libraries/jwt');

const { BadRequest, Unauthorized } = require('../../libraries/error');
const string = require('../../libraries/string');


/**
 * @api {post} /login User Login
 * @apiVersion 1.0.0
 * @apiGroup Auth
 * @apiName UserLogin
 * @apiParam {String{1,255}} email user email
 * @apiParam {String{1,20}} password user password
 * @apiSampleRequest /login
 */
router.post('/login', async (ctx) => {
    ctx.checkBody('email').notEmpty('Email field is required')
    ctx.checkBody('password').notEmpty('Password field is required')

    if (ctx.errors) throw new BadRequest(ctx.errors);

    const user = await User.findOne({
        email: ctx.request.body.email,
        password: string.generatePasswordHash(ctx.request.body.password),
    });

    if (!user || !user.id) throw new Unauthorized('Invalid Credentials');

    const token = jwt.encode({id: user.id});

    ctx.body = {
        id: user.id,
        email: user.email,
        name: user.name,
        token: token,
    };
});

module.exports = router;
