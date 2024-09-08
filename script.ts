import { jsPDF } from 'jspdf'; // If using npm-installed jspdf, otherwise see UMD handling below

document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement | null;
    const skillsList = document.getElementById('resume-skills') as HTMLUListElement | null;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement | null;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement | null;

    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;

    // Initially hide the skills list if needed
    if (skillsList) skillsList.style.display = 'none';

    if (toggleSkillsButton) {
        toggleSkillsButton.addEventListener('click', () => {
            if (skillsList) {
                skillsList.style.display = skillsList.style.display === 'none' ? 'block' : 'none';
            }
        });
    }

    if (updateResumeButton) {
        updateResumeButton.addEventListener('click', () => {
            const name = (document.getElementById('name') as HTMLInputElement).value;
            const email = (document.getElementById('email') as HTMLInputElement).value;
            const phone = (document.getElementById('phone') as HTMLInputElement).value;
            const education = (document.getElementById('education') as HTMLInputElement).value;
            const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value;
            const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
            const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;

            // Update resume content using template literals
            if (document.getElementById('resume-name')) {
                (document.getElementById('resume-name') as HTMLElement).textContent = `${name}`;
            }
            if (document.getElementById('resume-contact')) {
                (document.getElementById('resume-contact') as HTMLElement).textContent = `Contact: ${email} | ${phone}`;
            }
            if (document.getElementById('resume-education')) {
                (document.getElementById('resume-education') as HTMLElement).textContent = `${education}`;
            }
            if (document.getElementById('resume-skills')) {
                (document.getElementById('resume-skills') as HTMLElement).innerHTML = `${skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('')}`;
            }
            if (document.getElementById('resume-work-experience')) {
                (document.getElementById('resume-work-experience') as HTMLElement).textContent = `${experience}`;
            }
            if (document.getElementById('resume-linkedin')) {
                if (linkedinUrlPattern.test(linkedin)) {
                    (document.getElementById('resume-linkedin') as HTMLElement).textContent = `LinkedIn: ${linkedin}`;
                } else {
                    (document.getElementById('resume-linkedin') as HTMLElement).textContent = `LinkedIn URL is not valid`;
                }
            }
        });
    }

    if (downloadPdfButton) {
        downloadPdfButton.addEventListener('click', () => {
            const doc = new jsPDF();
            
            const name = (document.getElementById('resume-name') as HTMLElement).textContent || '';
            const contact = (document.getElementById('resume-contact') as HTMLElement).textContent || '';
            const education = (document.getElementById('resume-education') as HTMLElement).textContent || '';
            const skills = (document.getElementById('resume-skills') as HTMLElement).innerText || '';
            const experience = (document.getElementById('resume-work-experience') as HTMLElement).textContent || '';
            const linkedin = (document.getElementById('resume-linkedin') as HTMLElement).textContent || '';

            // PDF content using template literals
            doc.setFontSize(16);
            doc.text(`${name}`, 10, 10);
            doc.setFontSize(12);
            doc.text(`${contact}`, 10, 20);
            doc.text(`${education}`, 10, 30);
            doc.text('Skills:', 10, 40);
            doc.text(`${skills}`, 10, 50);
            doc.text('Work Experience:', 10, 70);
            doc.text(`${experience}`, 10, 80);
            doc.text(`${linkedin}`, 10, 100);

            doc.save('resume.pdf');
        });
    }
});
