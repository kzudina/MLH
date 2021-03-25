import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Testing Image field', function () {

    before('Open App', function (){
        browser.url('');
    });

    it('TC-147 Image field placeholder = '+exp.imagePlaceholder, function () {

        let imagePlaceholder = $(sel.image).getText();
        expect(imagePlaceholder).toEqual(exp.imagePlaceholder);
    });

    it('TC-148 Click works for .jpeg files', function () {
        browser.refresh();
        $(sel.image).click();

        browser.pause(2000);

        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });
});

