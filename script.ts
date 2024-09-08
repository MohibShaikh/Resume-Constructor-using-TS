document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    const skillsList = document.getElementById('resume-skills') as HTMLUListElement;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement;
    
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
        const linkedin = (document.getElementById('resume-linkedin') as HTMLTextAreaElement).value;


        // Update the resume sections
        document.getElementById('resume-name')!.textContent = name;
        document.getElementById('resume-contact')!.textContent = `Contact: ${email} | ${phone}`;
        document.getElementById('resume-education')!.textContent = education;
        document.getElementById('resume-skills')!.innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
        document.getElementById('resume-work-experience')!.textContent = experience;
        // Validate LinkedIn URL and updadocument.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    const skillsSection = document.getElementById('skills') as HTMLDivElement;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement;
    const shareButton = document.getElementById('share-resume') as HTMLButtonElement;

    const linkedinUrlPattern = /^(https?:\/\/)?(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]+$/;

    // Toggle skills section visibility
    toggleSkillsButton?.addEventListener('click', () => {
        if (skillsSection?.style.display === 'none') {
            skillsSection.style.display = 'block';
        } else {
            skillsSection.style.display = 'none';
        }
    });

    // Update resume based on form input
    updateResumeButton?.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const phone = (document.getElementById('phone') as HTMLInputElement).value;
        const education = (document.getElementById('resume-education') as HTMLInputElement).value;
        const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
        const linkedin = (document.getElementById('resume-linkedin') as HTMLTextAreaElement).value;

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

    // Generate unique resume path and share
    shareButton?.addEventListener('click', () => {
        const uniqueId = Date.now().toString(); // Simple unique ID based on timestamp
        const resumeUrl = `${window.location.origin}/resume/${uniqueId}`;
        alert(`Share this link to view your resume: ${resumeUrl}`);
    });
});
te if valid
        if (linkedinUrlPattern.test(linkedin)) {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn: ${linkedin}`;
        } else {
            document.getElementById('resume-linkedin')!.textContent = `LinkedIn URL is not valid`;
        }
    });
});
