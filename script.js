"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn');
    const skillsList = document.getElementById('resume-skills');
    const updateResumeButton = document.getElementById('update-resume');
    const downloadPdfButton = document.getElementById('download-pdf');
    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;
    toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener('click', () => {
        if ((skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === 'none' || (skillsList === null || skillsList === void 0 ? void 0 : skillsList.style.display) === '') {
            skillsList.style.display = 'block';
        }
        else {
            skillsList.style.display = 'none';
        }
    });
    updateResumeButton === null || updateResumeButton === void 0 ? void 0 : updateResumeButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const education = document.getElementById('education').value;
        const skillsInput = document.getElementById('skills-input').value;
        const experience = document.getElementById('experience').value;
        const linkedin = document.getElementById('linkedin').value;
        document.getElementById('resume-name').textContent = name;
        document.getElementById('resume-contact').textContent = `Contact: ${email} | ${phone}`;
        document.getElementById('resume-education').textContent = education;
        document.getElementById('resume-skills').innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
        document.getElementById('resume-work-experience').textContent = experience;
        if (linkedinUrlPattern.test(linkedin)) {
            document.getElementById('resume-linkedin').textContent = `LinkedIn: ${linkedin}`;
        }
        else {
            document.getElementById('resume-linkedin').textContent = `LinkedIn URL is not valid`;
        }
    });
    downloadPdfButton === null || downloadPdfButton === void 0 ? void 0 : downloadPdfButton.addEventListener('click', () => {
        const { jsPDF } = window; // Cast to `any` to bypass TypeScript error
        const doc = new jsPDF();
        // Generate PDF content
        doc.text(document.getElementById('resume-name').textContent || '', 10, 10);
        doc.text(document.getElementById('resume-contact').textContent || '', 10, 20);
        doc.text(document.getElementById('resume-education').textContent || '', 10, 30);
        doc.text(document.getElementById('resume-skills').innerText || '', 10, 40);
        doc.text(document.getElementById('resume-work-experience').textContent || '', 10, 50);
        // Save the PDF
        doc.save('resume.pdf');
    });
});
