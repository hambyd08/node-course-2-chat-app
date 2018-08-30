var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from: from,
            text: text,
        });
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'user';
        var latitude = 1;
        var longitude = 1;
        var url = 'https://www.google.com/maps?q=1,1';
        var locationObject = generateLocationMessage(from, latitude, longitude);

        expect(typeof locationObject.createdAt).toBe('number');
        expect(locationObject).toMatchObject({
            from: from,
            url: url
        });



    });
});