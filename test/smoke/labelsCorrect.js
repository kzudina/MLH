import sel from '../../data/selectors';
import exp from '../../data/expected.json';

describe('Labels are correct', function () {

    before('Open App', function (){
        browser.url('');
    });

    it('TC-015 Header = ' + exp.header, function () {
        let header = $(sel.header).getText();
        expect(header).toEqual(exp.header);
    });

    it('TC-016 Instruction = ' + exp.instruction, function () {
        let instruction = $(sel.instruction).getText();
        expect(instruction).toEqual(exp.instruction);
    });

    it('TC-017 Name label = ' + exp.nameLabel, function () {
        let label = $$(sel.requiredLabel)[0].getText();
        expect(label).toEqual(exp.nameLabel);
    });

    it('TC-018 Gender label = ' + exp.genderLabel, function () {
        let label = $$(sel.requiredLabel)[1].getText();
        expect(label).toEqual(exp.genderLabel);
    });

    it('TC-019 Gender label = ' + exp.heLabel, function () {
        let label = $$(sel.radioButtonsLabels)[0].getText();
        expect(label).toEqual(exp.heLabel);
    });

    it('TC-020 Gender label = ' + exp.sheLabel, function () {
        let label = $$(sel.radioButtonsLabels)[1].getText();
        expect(label).toEqual(exp.sheLabel);
    });

    it('TC-021 Gender label = ' + exp.itLabel, function () {
        let label = $$(sel.radioButtonsLabels)[2].getText(); //radioButtonsLabels
        expect(label).toEqual(exp.itLabel);
    });

    it('TC-022 Age label = ' + exp.ageLabel, function () {
        let label = $$(sel.requiredLabel)[2].getText();
        expect(label).toEqual(exp.ageLabel);
    });

    it('TC-023 Story Type label = ' + exp.storyTypeLabel, function () {
        let label = $$(sel.requiredLabel)[3].getText();
        expect(label).toEqual(exp.storyTypeLabel);
    });

    it('TC-024 Image label = ' + exp.imageLabel, function () {
        let label = $$(sel.imageLabel)[4].getText();
        expect(label).toEqual(exp.imageLabel);
    });

    it('TC-025 Submit label button = ' + exp.submitText, function () {
        let label = $(sel.submit).getText();
        expect(label).toEqual(exp.submitText);
    });
});