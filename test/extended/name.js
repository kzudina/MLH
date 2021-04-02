import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, age, gender, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';

describe('Testing extended Name field ', function () {

    before('Open App', function (){
        browser.url('');
    });

    beforeEach('Refresh the page', function (){
        browser.refresh();
    });

    describe('Placeholder', function () {
        it('TC-028 Name Field placeholder = ' + exp.namePlaceholder, function () {
            let namePlaceholder = $(sel.name).getAttribute("placeholder");
            expect(namePlaceholder).toEqual(exp.namePlaceholder);
        });
    });

    describe('Positive cases', function () {
        it('TC-029 Name field accept one symbol', function () {
            $(sel.name).setValue(name.name1);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-030 Name field accept 70 symbols', function () {
            $(sel.name).setValue(name.name70);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-031 Name field accept letters', function () {
            $(sel.name).setValue(name.nameLetters);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-032 Name field accept Upper case', function () {
            $(sel.name).setValue(name.nameUpper);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-033 Name field accept Lower case', function () {
            $(sel.name).setValue(name.nameLower);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-034 Name field accept digits', function () {
            $(sel.name).setValue(name.nameDigits);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-035 Name field accept special symbols', function () {
            $(sel.name).setValue(name.nameSpecial);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-036 Name field accept letters with space', function () {
            $(sel.name).setValue(name.nameSpace);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-037 Name field accept russian letters', function () {
            $(sel.name).setValue(name.nameRus);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        // TC-038 Name field accepts emoji

        /*
        it.only('TC-039 Name field accept copy past functionality', function () {
            $(sel.name).setValue(name.default);
            $(sel.name).doubleClick();
            browser.keys(['ctrl', 'c']);
            browser.keys(['ctrl', 'v']);
            browser.keys(['ctrl', 'v']);

            let name1 = $(sel.name).getValue();
            expect(name1).toEqual(name.default+name.default);
        });
        */

    });

    describe('Negative cases', function () {
        it('TC-040 Name field do not accept SQL/XML code injections', function () {
            $(sel.name).setValue(name.nameCode);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-041 Name field do not accept Empty name field', function () {
            //$(sel.name).click();
            //$(sel.age).click();
            $(sel.name).setValue(name.name1);
            $(sel.name).keys(['Backspace']);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-042 Name field do not accept 71 symbols', function () {
            $(sel.name).setValue(name.name71);
            let error = $(sel.ErrorMessage).getText();
            expect(error).toEqual(name.nameError71);
            //let error = $(sel.ErrorMessage).isDisplayed();
            //expect(error).toEqual(true);
        });

        it('TC-043 Name field do not accept 71 symbols when copy and paste', function () {
            //No
            $(sel.name).setValue(name.name71);
            let error = $(sel.ErrorMessage).getText();
            expect(error).toEqual(name.nameError71);
        });

        it('TC-044 User left Name input field blank ', function () {
            inputValues4('',gender.she, age.age1, story.comedy);
            let SubmitBtn = $(sel.submit).isEnabled();
            expect(SubmitBtn).toEqual(false);
        });

        it('TC-045 Name field do not accept spaces only (Error)', function () {
            $(sel.name).setValue(name.nameSpaces);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it('TC-046 Name field do not accept spaces only (Submit button)', function () {
            inputValues4(name.nameSpaces, gender.she, age.default, story.comedy);
            let SubmitBtn = $(sel.submit).isEnabled();
            expect(SubmitBtn).toEqual(false);
        });
    });
});
