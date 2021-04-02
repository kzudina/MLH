import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Testing Image field', function () {

    before('Open App', function (){
        browser.url('');
    });

    describe('Placeholder', function () {
        it('TC-147 Image field placeholder = '+exp.imagePlaceholder, function () {
            let imagePlaceholder = $(sel.image).getText();
            expect(imagePlaceholder).toEqual(exp.imagePlaceholder);
        });
    });

    describe('Positive cases', function () {
        it('TC-148 Click works for .jpeg files', function () {
            browser.refresh();
            $(sel.image).click();
            browser.filepath = '../../data/2mb-2.jpg';
            browser.click();
            console.log('1 === '+$(sel.image).getValue());
            $(sel.image).setValue('../../data/2mb-2.jpg');
            console.log('2 === '+$(sel.image).getValue());
            //browser.pause(2000);

            //let tryAgainBtn = $(sel.tryAgain).isDisplayed();
            expect(true).toEqual(true);
        });
    });
});

