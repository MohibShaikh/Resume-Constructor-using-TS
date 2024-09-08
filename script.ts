import jsPDF from 'jspdf';
document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    const skillsList = document.getElementById('resume-skills') as HTMLUListElement;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement;
    const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
    
    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;

    // Initially hide the skills list if needed
    skillsList.style.display = 'none'; 

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
        const education = (document.getElementById('resume-education') as HTMLInputElement).value;
        const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;

        // Update the resume sections
        document.getElementById('resume-name')!.textContent = name;
        document.getElementById('resume-contact')!.textContent = `Contact: ${email} | ${phone}`;
        document.getElementById('resume-education')!.textContent = education;
        document.getElementById('resume-skills')!.innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
        document.getElementById('resume-work-experience')!.textContent = experience;

        // Validate LinkedIn URL and update if valid
        if (linkedinUrlPattern.test(linkedin)) {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn: ${linkedin}`;
        } else {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn URL is not valid`;
        }
    });

    document.getElementById('download-pdf')?.addEventListener('click', () => {
            const doc = new jsPDF();
            
            const name = (document.getElementById('resume-name') as HTMLElement).textContent;
            const contact = (document.getElementById('resume-contact') as HTMLElement).textContent;
            const education = (document.getElementById('resume-education') as HTMLElement).textContent;
            const skills = (document.getElementById('resume-skills') as HTMLElement).innerText;
            const experience = (document.getElementById('resume-work-experience') as HTMLElement).textContent;
            const linkedin = (document.getElementById('resume-linkedin') as HTMLElement).textContent;

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

