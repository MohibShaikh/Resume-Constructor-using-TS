document.getElementById('update-resume')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skillsInput = (document.getElementById('skills-input') as HTMLInputElement).value; // Correct ID for the skills input
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value; // Correct textarea type

    // Update the resume preview
    document.getElementById('resume-name')!.textContent = name;
    document.getElementById('resume-contact')!.textContent = `Contact: ${email} | ${phone}`;
    document.getElementById('resume-education')!.textContent = education;
    document.getElementById('resume-skills')!.innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
    document.getElementById('resume-work-experience')!.textContent = experience;
});
