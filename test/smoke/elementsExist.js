import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('My Little Hero', function () {

    describe('Getting to the page', function () {

        before('Open App', function (){
            browser.url('');
        });

        it('Page Title is MLH trial', function () {
            let title = browser.getTitle();
            browser.pause(2000);
            expect(title).toEqual(exp.title);
        });
    });

    describe('Elements exist', function () {

        it('TC-002 Header is present', function () {
            let header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-003 Instruction is present', function () {
            let instruction = $(sel.instruction).isDisplayed();
            expect(instruction).toEqual(true);
        });

        it('TC-004  Name field label is present', function () {
            let label = $$(sel.requiredLabel)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-005  Name field is present', function () {
            let name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });

        it('TC-006  Gender label is present', function () {
            let label = $$(sel.requiredLabel)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007.a  Gender radio button HE is present', function () {
            let radioButtonHe = $$(sel.radioButtons)[0].isDisplayed();
            expect(radioButtonHe).toEqual(true);
        });

        it('TC-007.b  Gender radio button SHE is present', function () {
            let radioButtonShe = $$(sel.radioButtons)[1].isDisplayed();
            expect(radioButtonShe).toEqual(true);
        });
        it('TC-007.c  Gender radio button IT is present', function () {
            let radioButtonIt = $$(sel.radioButtons)[2].isDisplayed();
            expect(radioButtonIt).toEqual(true);
        });

        it('TC-007.d  Gender radio button label HE is present', function () {
            let label = $$(sel.radioButtonsLabels)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-007.e  Gender radio button label SHE is present', function () {
            let label = $$(sel.radioButtonsLabels)[1].isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-007.f  Gender radio button label IT is present', function () {
            let label = $$(sel.radioButtonsLabels)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-008  Age label is present',  function () {
            let label = $$(sel.requiredLabel)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-009  Age field is present', function () {
            let age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-010  Story Type label is present', function () {
            let label = $$(sel.requiredLabel)[3].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-011  Story type dropdown field is present', function () {
            let storyType = $(sel.storyType).isDisplayed(); //
            expect(storyType).toEqual(true);
        });

        it('TC-012  Image label is present', function () {
            let label = $$(sel.imageLabel)[4].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-013  Image field is present', function () {
            let image = $(sel.image).isDisplayed();
            expect(image).toEqual(true);
        });

        it('TC-014  Submit button is present', function () {
            let submitButton = $(sel.submit).isDisplayed();
            expect(submitButton).toEqual(true);
        });

    });
});