import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, age, gender, story} from '../../data/testData';
import {inputValues4, changeTheStoryType} from '../../helpers/methods';

describe('Testing extended Story Type field ', function () {

    before('Open App', function (){
        browser.url('');
    });

    beforeEach('Refresh the page', function (){
        browser.refresh();
    });

    describe('Placeholder', function () {
        it('TC-087 Name Field placeholder = ' + exp.storyTypePlaceholder, function () {
            let storyTypePlaceholder = $(sel.storyTypePlaceholder).getText();
            expect(storyTypePlaceholder).toEqual(exp.storyTypePlaceholder);
        });
    });

   describe('Positive cases', function () {
        it('TC-088 The field is a dropdown', function () {
            $(sel.storyType).click();
            let length = $$(sel.storyList).length;
            expect(length).toEqual(story.len);
        });

       it('TC-089 The first type of the story is '+story.overcomingTheMonsterDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.overcomingTheMonster].getAttribute("title");
           expect(element).toEqual(story.overcomingTheMonsterDisplay);
       });

       it('TC-090 The second type of the story is '+story.rebirthDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.rebirth].getAttribute("title");
           expect(element).toEqual(story.rebirthDisplay);
       });

       it('TC-091 The third type of the story is '+story.questDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.quest].getAttribute("title");
           expect(element).toEqual(story.questDisplay);
       });

       it('TC-092 The forth type of the story is '+story.journeyAndReturnDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.jorneyAndReturn].getAttribute("title");
           expect(element).toEqual(story.journeyAndReturnDisplay);
       });

       it('TC-093 The fifth type of the story is '+story.ragsAndRichesDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.ragsAndRiches].getAttribute("title");
           expect(element).toEqual(story.ragsAndRichesDisplay);
       });

       it('TC-094 The sixth type of the story is '+story.tragedyDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.tragedy].getAttribute("title");
           expect(element).toEqual(story.tragedyDisplay);
       });

       it('TC-095 The seventh type of the story is '+story.comedyDisplay, function () {
           $(sel.storyType).click();
           let element = $$(sel.storyList)[story.comedy].getAttribute("title");
           expect(element).toEqual(story.comedyDisplay);
       });

       it('TC-096 The chosen value fills the placeholder in', function () {
           $(sel.storyType).click();
           $$(sel.storyList)[story.comedy].click();
           let element = $(sel.storyType).getText();
           expect(element).toEqual(story.comedyDisplay);
       });

       it.only('TC-097 After the value is chosen the dropdown is collapsed', function () {
           $(sel.storyType).click();
           $$(sel.storyList)[story.comedy].click();
           //browser.pause(2000); //$(sel.storyList).isDisplayed();
           let elementIsNotDisplayed = $(sel.storyList).waitUntil(() =>$(sel.storyList).isDisplayed()===false, {timeout: 2000,timeoutMsg:""});
           expect(elementIsNotDisplayed).toEqual(true);
       });


       /*
       it.only('TC-098 Story type is highlighted when the user hovers on it', function () {
           $(sel.storyType).click();
           console.log("background = " + $$(sel.storyList)[story.comedy].background);
           let el = $$(sel.storyList)[story.comedy];
           console.log("browser.elementHover(el) = " + browser.elementHover(el));
           //expect(browser.elementHover(el)).toEqual(true);

           expect(el).toEqual(true);
       });
        */

       //it('TC-099 User can choose one of the 7 story types ', function () {
           // the same as TC-096
       //});

       it('TC-100 Verify that dropdown list shows all of the story types, when changing stories', function () {
           $(sel.name).setValue(name.default);
           $$(sel.radioButtons)[gender.she].click();
           $(sel.age).setValue(age.default);
           $(sel.storyType).click();
           let length = $$(sel.storyList).length;
           expect(length).toEqual(story.len);
       });

       it('TC-101 User can change the Story Type: "Overcoming the Monster" -> "Rebirth"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.rebirth);
           expect(el).toEqual(story.rebirthDisplay);
       });

       it('TC-102 User can change the Story Type: "Overcoming the Monster" -> "Quest"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.quest);
           expect(el).toEqual(story.questDisplay);
       });

       it('TC-103 User can change the Story Type: "Overcoming the Monster" -> "Journey and Return"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.jorneyAndReturn);
           expect(el).toEqual(story.journeyAndReturnDisplay);
       });

       it('TC-104 User can change the Story Type: "Overcoming the Monster" -> "Rags and Riches"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.ragsAndRiches);
           expect(el).toEqual(story.ragsAndRichesDisplay);
       });

       it('TC-105 User can change the Story Type: "Overcoming the Monster" -> "Tragedy"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.tragedy);
           expect(el).toEqual(story.tragedyDisplay);
       });

       it('TC-106 User can change the Story Type: "Overcoming the Monster" -> "Comedy"', function () {
           let el = changeTheStoryType(story.overcomingTheMonster, story.comedy);
           expect(el).toEqual(story.comedyDisplay);
       });

        //'TC-107 - TC-142
   });

    describe('Negative cases', function () {
        it('TC-143 Not chosen story type / Required', function () {
            inputValues4(name.default, gender.she, age.default, -1);
            let SubmitBtn = $(sel.submit).isEnabled();
            expect(SubmitBtn).toEqual(false);
        });
    });
});
