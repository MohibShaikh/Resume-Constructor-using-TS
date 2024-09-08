"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jspdf_1 = __importDefault(require("jspdf"));
document.addEventListener('DOMContentLoaded', function () {
    var _a;
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    var skillsList = document.getElementById('resume-skills');
    var updateResumeButton = document.getElementById('update-resume');
    var downloadPdfButton = document.getElementById('download-pdf');
    var linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;
    // Initially hide the skills list if needed
    skillsList.style.display = 'none';
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', function () {
        if ((skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === 'none' || (skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === '') {
            skillsList.style.display = 'block';
        }
        else {
            skillsList.style.display = 'none';
        }
    });
    updateResumeButton === null || updateResumeButton === void 0 ? void 0 : updateResumeButton.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('resume-education').value;
        var skillsInput = document.getElementById('skills-input').value;
        var experience = document.getElementById('experience').value;
        var linkedin = document.getElementById('linkedin').value;
        // Update the resume sections
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-contact').textContent = "Contact: ".concat(email, " | ").concat(phone);
        document.getElementById('resume-education').textContent = education;
        document.getElementById('resume-skills').innerHTML = skillsInput.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
        document.getElementById('resume-work-experience').textContent = experience;
        // Validate LinkedIn URL and update if valid
        if (linkedinUrlPattern.test(linkedin)) {
            document.getElementById('resume-linkedin').textContent = "LinkedIn: ".concat(linkedin);
        }
        else {
            document.getElementById('resume-linkedin').textContent = "LinkedIn URL is not valid";
        }
    });
    (_a = document.getElementById('download-pdf')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var doc = new jspdf_1.default();
        var name = document.getElementById('resume-name').textContent;
        var contact = document.getElementById('resume-contact').textContent;
        var education = document.getElementById('resume-education').textContent;
        var skills = document.getElementById('resume-skills').innerText;
        var experience = document.getElementById('resume-work-experience').textContent;
        var linkedin = document.getElementById('resume-linkedin').textContent;
        doc.setFontSize(16);
        doc.text(name || '', 10, 10);
        doc.setFontSize(12);
        doc.text(contact || '', 10, 20);
        doc.text(education || '', 10, 30);
        doc.text('Skills:', 10, 40);
        doc.text(skills || '', 10, 50);
        doc.text('Work Experience:', 10, 70);
        doc.text(experience || '', 10, 80);
        doc.text(linkedin || '', 10, 100);
        doc.save('resume.pdf');
    });
});
