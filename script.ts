document.addEventListener('DOMContentLoaded', () => {
    const toggleSkillsButton = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
    const skillsList = document.getElementById('resume-skills') as HTMLUListElement;
    const updateResumeButton = document.getElementById('update-resume') as HTMLButtonElement;

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
        document.getElementById('resume-linkedin')!.textContent = `LinkedIn: ${linkedin}`;
    });
});
