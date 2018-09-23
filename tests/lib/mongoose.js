var expect = require('chai').expect
const jwt = require('../../libraries/jwt')
const Strings = require('../../libraries/string')

const config = require('../../env').jwt
const jwt2 = require('jsonwebtoken');


describe('mongoose test',  () => {
    it('mongoose get start',async () => {
        const mongoose = require('mongoose');
        mongoose.connect('mongodb://localhost/test');

        const Cat = mongoose.model('Cat', { name: String });

        const kitty = new Cat({ name: 'Zildjian' });
        kitty.save().then(() => console.log('meow'));

        let catList = await Cat.find().lean().exec();
        console.log(catList)
    })
})