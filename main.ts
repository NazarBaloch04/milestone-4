// Get form and resume container elements
const form = document.getElementById('resume-form') as HTMLFormElement;
const generatedResume = document.getElementById('generated-resume') as HTMLElement;

// Handle form submission to generate resume
form.addEventListener('submit', (event: Event) => {
  event.preventDefault();

  // Get form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const home = (document.getElementById('home') as HTMLInputElement).value;
  const sex = (document.getElementById('sex') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
  const workExperience = (document.getElementById('work-experience') as HTMLInputElement).value;

  // Generate the editable resume dynamically
  generatedResume.innerHTML = `
    <section>
      <h1 contenteditable="true" id="name-field">${name}</h1>
      <p contenteditable="true" id="email-field">Email: ${email}</p>
      <p contenteditable="true" id="phone-field">Phone: ${phone}</p>
       <p contenteditable="true" id= "home-field>${home}</p>
      <p  contenteditable="true" id= "sex-field>Sex${sex}</p>
    </section>
    <section>
      <h2>Education</h2>
      <p contenteditable="true" id="education-field">${education}</p>
    </section>
    <section>
      <h2>Skills</h2>
      <ul id="skills-list">
        ${skills.map(skill => `<li contenteditable="true">${skill.trim()}</li>`).join('')}
      </ul>
    </section>
    <section>
      <h2>Work Experience</h2>
      <p contenteditable="true" id="work-experience-field">${workExperience}</p>
    </section>
  `;

  // Add event listeners to handle contenteditable changes
  makeEditableAndSave('name-field');
  makeEditableAndSave('email-field');
  makeEditableAndSave('phone-field');
  makeEditableAndSave('home-field');
  makeEditableAndSave('sex-field');
  makeEditableAndSave('education-field');
  makeEditableAndSave('work-experience-field');

  // Add event listeners for each skill item (since it's a list)
  const skillItems = generatedResume.querySelectorAll('#skills-list li');
  skillItems.forEach((skillItem, index) => {
    skillItem.addEventListener('blur', () => {
      console.log(`Skill ${index + 1} updated: ${skillItem.innerHTML}`);
    });
  });
});

/**
 * This function makes an element contenteditable and logs any changes made.
 * @param elementId The id of the contenteditable element.
 */
function makeEditableAndSave(elementId: string) {
  const element = document.getElementById(elementId) as HTMLElement;
  element.addEventListener('blur', () => {
    // Logs changes or you can do something else to save them
    console.log(`${elementId} updated: ${element.innerText}`);
  });
}
