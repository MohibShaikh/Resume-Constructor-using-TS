document.getElementById('submit-btn')?.addEventListener('click', () => {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const skillsInput = (document.getElementById('skills') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    // Update the resume preview
    document.getElementById('resume-name')!.textContent = name;
    document.getElementById('resume-contact')!.textContent = `Contact: ${email} | ${phone}`;
    document.getElementById('resume-education')!.textContent = education;
    document.getElementById('resume-skills')!.innerHTML = skillsInput.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');
    document.getElementById('resume-work-experience')!.textContent = experience;
});
