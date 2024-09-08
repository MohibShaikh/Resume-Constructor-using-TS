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
        if (typeof window['jspdf'] === 'undefined') {
            console.error('jsPDF is not loaded.');
            return;
        }

        const { jsPDF } = window['jspdf']; // Cast to `any` to bypass TypeScript error
        const doc = new jsPDF();

        // Generate PDF content
        doc.text(document.getElementById('resume-name')!.textContent || '', 10, 10);
        doc.text(document.getElementById('resume-contact')!.textContent || '', 10, 20);
        doc.text(document.getElementById('resume-education')!.textContent || '', 10, 30);
        doc.text(document.getElementById('resume-skills')!.innerText || '', 10, 40);
        doc.text(document.getElementById('resume-work-experience')!.textContent || '', 10, 50);

        // Save the PDF
        doc.save('resume.pdf');
    });
});
