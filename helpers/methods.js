import sel from "../data/selectors";
import {story} from "../data/testData";

function inputValues4(name, gender, age, story){
    if (name !== "")
        $(sel.name).setValue(name);
    if (gender >= 0 && gender <=2)
        $$(sel.radioButtons)[gender].click();
    if (age !== "")
        $(sel.age).setValue(age);
    if (story >= 0 && story <=6){
        $(sel.storyType).click();
        $$(sel.storyList)[story].click();
    }
}

function changeTheStoryType(story1, story2){
    $(sel.storyType).click();
    $$(sel.storyList)[story1].click();
    $(sel.storyType).click();
    $$(sel.storyList)[story2].click();

    return $(sel.storyType).getText();
}
module.exports = {inputValues4, changeTheStoryType};
