`var expect = require('chai').expect
var mongoose = require('mongoose')
var User = require('../../models/user')
const autoIncrement = require('mongoose-auto-increment')

describe('User', function() {
    before(function () {
        const connection = mongoose.createConnection('mongodb://localhost/app')
        autoIncrement.initialize(connection);
        User.init(connection)
    })

    it("create", async () => {
        const email = 'rkdgusrnrlrl@gmail.com';
        const name = "강현구";
        User.create(email, '123', name)

        const user = await User.findOne({email})
        expect(user).to.have.property('name', name)
    })

    it("find user list", async () => {
        const userList = await User.getList()
        expect(userList).to.have.lengthOf.above(0)
    })

    after(function () {
        mongoose.disconnect()
    })
})