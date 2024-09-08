import { jsPDF } from 'jspdf';

document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    const skillsList = document.getElementById('resume-skills') as HTMLUListElement;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;

    toggleSkillsButton?.addEventListener('click', () => {
        if (skillsList?.style.display === 'none' || skillsList?.style.display === '') {
            skillsList.style.display = 'block';
        } else {
            skillsList.style.display = 'none';
        }
    });

    updateResumeButton?.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('education') as HTMLInputElement).value;
        const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;

        document.getElementById('resume-name')!.textContent = name;
        document.getElementById('resume-contact')!.textContent = `Contact: ${email} | ${phone}`;
        document.getElementById('resume-education')!.textContent = education;
        document.getElementById('resume-skills')!.innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
        document.getElementById('resume-work-experience')!.textContent = experience;

        if (linkedinUrlPattern.test(linkedin)) {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn: ${linkedin}`;
        } else {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn URL is not valid`;
        }
    });

    downloadPdfButton?.addEventListener('click', () => {
        const doc = new jsPDF();
        doc.text('Interactive Resume Builder', 10, 10);
        doc.text(`Name: ${document.getElementById('resume-name')!.textContent}`, 10, 20);
        doc.text(`Contact: ${document.getElementById('resume-contact')!.textContent}`, 10, 30);
        doc.text(`Education: ${document.getElementById('resume-education')!.textContent}`, 10, 40);
        doc.text(`Skills: ${document.getElementById('resume-skills')!.textContent}`, 10, 50);
        doc.text(`Work Experience: ${document.getElementById('resume-work-experience')!.textContent}`, 10, 60);
        doc.text(`LinkedIn: ${document.getElementById('resume-linkedin')!.textContent}`, 10, 70);

        doc.save('resume.pdf');
    });
});
