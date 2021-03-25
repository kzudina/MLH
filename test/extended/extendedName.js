import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Testing extended Name field ', function () {

    before('Open App', function (){
        browser.url('');
    });

    it('TC-028 Name Field placeholder = ' + exp.namePlaceholder, function () {
        let namePlaceholder = $(sel.name).placeholder;
        expect(namePlaceholder).toEqual(exp.namePlaceholder);
    });


});
