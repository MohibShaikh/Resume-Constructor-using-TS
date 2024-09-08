"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = __importDefault(require("jspdf"));
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    var skillsList = document.getElementById('resume-skills');
    var updateResumeButton = document.getElementById('update-resume');
    var downloadPdfButton = document.getElementById('download-pdf');
    var linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;
    // Initially hide the skills list if needed
    if (skillsList)
        skillsList.style.display = 'none';
    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsList && (skillsList.style.display === 'none' || skillsList.style.display === '')) {
                skillsList.style.display = 'block';
            }
            else {
                if (skillsList)
                    skillsList.style.display = 'none';
            }
        });
    }
    if (updateResumeButton) {
        updateResumeButton.addEventListener('click', function () {
            var name = document.getElementById('name').value;
            var email = document.getElementById('email').value;
            var phone = document.getElementById('phone').value;
            var education = document.getElementById('resume-education').value;
            var skillsInput = document.getElementById('skills-input').value;
            var experience = document.getElementById('experience').value;
            var linkedin = document.getElementById('linkedin').value;
            if (document.getElementById('resume-name')) {
                document.getElementById('resume-name').textContent = name;
            }
            if (document.getElementById('resume-contact')) {
                document.getElementById('resume-contact').textContent = "Contact: ".concat(email, " | ").concat(phone);
            }
            if (document.getElementById('resume-education')) {
                document.getElementById('resume-education').textContent = education;
            }
            if (document.getElementById('resume-skills')) {
                document.getElementById('resume-skills').innerHTML = skillsInput.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
            }
            if (document.getElementById('resume-work-experience')) {
                document.getElementById('resume-work-experience').textContent = experience;
            }
            if (document.getElementById('resume-linkedin')) {
                if (linkedinUrlPattern.test(linkedin)) {
                    document.getElementById('resume-linkedin').textContent = "LinkedIn: ".concat(linkedin);
                }
                else {
                    document.getElementById('resume-linkedin').textContent = "LinkedIn URL is not valid";
                }
            }
        });
    }
    if (downloadPdfButton) {
        downloadPdfButton.addEventListener('click', function () {
            var doc = new jspdf_1.default();
            var name = document.getElementById('resume-name').textContent || '';
            var contact = document.getElementById('resume-contact').textContent || '';
            var education = document.getElementById('resume-education').textContent || '';
            var skills = document.getElementById('resume-skills').innerText || '';
            var experience = document.getElementById('resume-work-experience').textContent || '';
            var linkedin = document.getElementById('resume-linkedin').textContent || '';
            doc.setFontSize(16);
            doc.text(name, 10, 10);
            doc.setFontSize(12);
            doc.text(contact, 10, 20);
            doc.text(education, 10, 30);
            doc.text('Skills:', 10, 40);
            doc.text(skills, 10, 50);
            doc.text('Work Experience:', 10, 70);
            doc.text(experience, 10, 80);
            doc.text(linkedin, 10, 100);
            doc.save('resume.pdf');
        });
    }
});
