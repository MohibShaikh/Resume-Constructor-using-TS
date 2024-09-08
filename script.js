"use strict";
document.addEventListener('DOMContentLoaded', function () {
    var toggleSkillsButton = document.getElementById('toggle-skills-btn');
    var skillsSection = document.getElementById('skills');
    if (toggleSkillsButton && skillsSection) {
        toggleSkillsButton.addEventListener('click', function () {
            if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
                skillsSection.style.display = 'block';
            }
            else {
                skillsSection.style.display = 'none';
            }
        });
    }
});
