// Get form and resume container elements
var form = document.getElementById('resume-form');
var generatedResume = document.getElementById('generated-resume');
// Handle form submission to generate resume
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var home = document.getElementById('home').value;
    var sex = document.getElementById('sex').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value.split(',');
    var workExperience = document.getElementById('work-experience').value;
    // Generate the editable resume dynamically
    generatedResume.innerHTML = "\n    <section>\n      <h1 contenteditable=\"true\" id=\"name-field\">".concat(name, "</h1>\n      <p contenteditable=\"true\" id=\"email-field\">Email: ").concat(email, "</p>\n      <p contenteditable=\"true\" id=\"phone-field\">Phone: ").concat(phone, "</p>\n       <p contenteditable=\"true\" id= \"home-field>  ").concat(home, "</p>\n      <p  contenteditable=\"true\" id= \"sex-field>Sex: ").concat(sex, "</p>\n    </section>\n    <section>\n      <h2>Education</h2>\n      <p contenteditable=\"true\" id=\"education-field\">").concat(education, "</p>\n    </section>\n    <section>\n      <h2>Skills</h2>\n      <ul id=\"skills-list\">\n        ").concat(skills.map(function (skill) { return "<li contenteditable=\"true\">".concat(skill.trim(), "</li>"); }).join(''), "\n      </ul>\n    </section>\n    <section>\n      <h2>Work Experience</h2>\n      <p contenteditable=\"true\" id=\"work-experience-field\">").concat(workExperience, "</p>\n    </section>\n  ");
    // Add event listeners to handle contenteditable changes
    makeEditableAndSave('name-field');
    makeEditableAndSave('email-field');
    makeEditableAndSave('phone-field');
    makeEditableAndSave('home-field');
    makeEditableAndSave('sex-field');
    makeEditableAndSave('education-field');
    makeEditableAndSave('work-experience-field');
    // Add event listeners for each skill item (since it's a list)
    var skillItems = generatedResume.querySelectorAll('#skills-list li');
    skillItems.forEach(function (skillItem, index) {
        skillItem.addEventListener('blur', function () {
            console.log("Skill ".concat(index + 1, " updated: ").concat(skillItem.innerHTML));
        });
    });
});
/**
 * This function makes an element contenteditable and logs any changes made.
 * @param elementId The id of the contenteditable element.
 */
function makeEditableAndSave(elementId) {
    var element = document.getElementById(elementId);
    element.addEventListener('blur', function () {
        // Logs changes or you can do something else to save them
        console.log("".concat(elementId, " updated: ").concat(element.innerText));
    });
}
