// "use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// const jspdf_1 = require("jspdf"); // If using npm-installed jspdf, otherwise see UMD handling below
// document.addEventListener('DOMContentLoaded', () => {
//     const toggleSkillsButton = document.getElementById('toggle-skills-btn');
//     const skillsList = document.getElementById('resume-skills');
//     const updateResumeButton = document.getElementById('update-resume');
//     const downloadPdfButton = document.getElementById('download-pdf');
//     const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;
//     // Initially hide the skills list if needed
//     if (skillsList)
//         skillsList.style.display = 'none';
//     if (toggleSkillsButton) {
//         toggleSkillsButton.addEventListener('click', () => {
//             if (skillsList) {
//                 skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
//             }
//         });
//     }
//     if (updateResumeButton) {
//         updateResumeButton.addEventListener('click', () => {
//             const name = document.getElementById('name').value;
//             const email = document.getElementById('email').value;
//             const phone = document.getElementById('phone').value;
//             const education = document.getElementById('education').value;
//             const skillsInput = document.getElementById('skills-input').value;
//             const experience = document.getElementById('experience').value;
//             const linkedin = document.getElementById('linkedin').value;
//             // Update resume content using template literals
//             if (document.getElementById('resume-name')) {
//                 document.getElementById('resume-name').textContent = `${name}`;
//             }
//             if (document.getElementById('resume-contact')) {
//                 document.getElementById('resume-contact').textContent = `Contact: ${email} | ${phone}`;
//             }
//             if (document.getElementById('resume-education')) {
//                 document.getElementById('resume-education').textContent = `${education}`;
//             }
//             if (document.getElementById('resume-skills')) {
//                 document.getElementById('resume-skills').innerHTML = `${skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}`;
//             }
//             if (document.getElementById('resume-work-experience')) {
//                 document.getElementById('resume-work-experience').textContent = `${experience}`;
//             }
//             if (document.getElementById('resume-linkedin')) {
//                 if (linkedinUrlPattern.test(linkedin)) {
//                     document.getElementById('resume-linkedin').textContent = `LinkedIn: ${linkedin}`;
//                 }
//                 else {
//                     document.getElementById('resume-linkedin').textContent = `LinkedIn URL is not valid`;
//                 }
//             }
//         });
//     }
//     if (downloadPdfButton) {
//         downloadPdfButton.addEventListener('click', () => {
//             const doc = new jspdf_1.jsPDF();
//             const name = document.getElementById('resume-name').textContent || '';
//             const contact = document.getElementById('resume-contact').textContent || '';
//             const education = document.getElementById('resume-education').textContent || '';
//             const skills = document.getElementById('resume-skills').innerText || '';
//             const experience = document.getElementById('resume-work-experience').textContent || '';
//             const linkedin = document.getElementById('resume-linkedin').textContent || '';
//             // PDF content using template literals
//             doc.setFontSize(16);
//             doc.text(`${name}`, 10, 10);
//             doc.setFontSize(12);
//             doc.text(`${contact}`, 10, 20);
//             doc.text(`${education}`, 10, 30);
//             doc.text('Skills:', 10, 40);
//             doc.text(`${skills}`, 10, 50);
//             doc.text('Work Experience:', 10, 70);
//             doc.text(`${experience}`, 10, 80);
//             doc.text(`${linkedin}`, 10, 100);
//             doc.save('resume.pdf');
//         });
//     }
// });
"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
});