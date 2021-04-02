import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, age, gender, story} from '../../data/testData';
import {inputValues4} from '../../helpers/methods';


describe('Age field suit', function () {

    before('Open App', function (){
        browser.url('');
    });

    beforeEach('Refresh the page', function (){
        browser.refresh();
    });

    describe('Placeholder', function () {
        it('TC-060 Age field placeholder = ' + exp.agePlaceholder, function () {
            let agePlaceholder = $(sel.age).getAttribute("placeholder");
            expect(agePlaceholder).toEqual(exp.agePlaceholder);
        });
    });

    describe('Positive cases', function () {
        it("TC-061 Age field accepts at least one digit (not below digit '1')", function () {
            $(sel.age).setValue(age.age1);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-062 Age field accepts up to 12 digits', function () {
            $(sel.age).setValue(age.age12);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it('TC-063 Age field accepts any digits', function () {
            $(sel.age).setValue(age.ageDigits);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it("TC-064 Age field accepts '0' on the left side", function () {
            $(sel.age).setValue(age.age001);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it("TC-065 Age field accepts digits with spaces", function () {
            $(sel.age).setValue(age.ageWithSpace);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(false);
        });

        it("TC-066.a Spin up functionality available", function () {
            $(sel.ageSpinUp).click();
            let spinUp = $(sel.ageSpinUp).isDisplayed();
            expect(spinUp).toEqual(true);
        });

        it("TC-066.b Spin down functionality available", function () {
            $(sel.ageSpinDown).click();
            let spinDown = $(sel.ageSpinDown).isDisplayed();
            expect(spinDown).toEqual(true);
           });


        it("TC-067 Age field's spin turns up (0 -> 1)", function () {
            //$(sel.age).setValue(age.age0);
            $(sel.ageSpinUp).click();
            let result = $(sel.age).getValue();
            expect(result).toEqual(age.age1);
        });

        it("TC-068 Age field's spin turns up (1 -> 2)", function () {
            $(sel.age).setValue(age.age1);
            $(sel.ageSpinUp).click();
            let result = $(sel.age).getValue();
            expect(result).toEqual(age.age2);
        });

        it("TC-069 Age field's spin turns down (2 -> 1)", function () {
            $(sel.age).setValue(age.age2);
            $(sel.ageSpinDown).click();
            let result = $(sel.age).getValue();
            expect(result).toEqual(age.age1);
        });

        //it("TC-070 Scroll up -> 1", function () {
        //it("TC-071 Scroll up 1 -> 2", function () {
        //it("TC-072 Scroll down 2 -> 1", function () {
        //it("TC-073 Age field accepts copy/paste functionality", function () {
        //it("TC-074 Verify that scroll works in the age field", function () {
    });

    describe('Negative cases', function () {
        it("TC-075 Empty Age field", function () {
            $(sel.age).setValue(age.age1);
            $(sel.age).keys(['Backspace']);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-076 Age field contains one digit: '0' ", function () {
            $(sel.age).setValue(age.age0);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-077 Age field contains more than 12 digits", function () {
            $(sel.age).setValue(age.age13);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-078 Age field contains letters", function () {
            $(sel.age).setValue(age.ageLetters);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-078 Age field contains letters", function () {
            $(sel.age).setValue(age.ageLetters);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-079 Age field contains symbols", function () {
            $(sel.age).setValue(age.ageSymbols);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-080 Age field contains negative digits", function () {
            $(sel.age).setValue(age.ageNegative);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-081 Age field contains float numbers", function () {
            $(sel.age).setValue(age.ageFloat);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-082 Age field contains Russian letters", function () {
            $(sel.age).setValue(age.ageRus);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        //it("TC-083 Age field doesn't accept emojis", function () {

        it("TC-084 Age field contains SQL/XML code injections", function () {
            $(sel.age).setValue(age.ageCode);
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-085 Age field's spin down from one digit: '0' ", function () {
            //$(sel.age).setValue(age.age1);
            //$(sel.age).setValue(age.age0);
            $(sel.ageSpinDown).click();
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-086 Age field's spin up after 12 digit's number", function () {
            $(sel.age).setValue(age.ageMax);
            $(sel.ageSpinUp).click();
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

        it("TC-200 Empty Age field (Submit button is disabled)", function () {
            inputValues4(name.default, gender.she, -1, story.comedy)
            let error = $(sel.ErrorMessage).isDisplayed();
            expect(error).toEqual(true);
        });
   });
});
