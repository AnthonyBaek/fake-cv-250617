
document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'kor';

    const langToggle = document.getElementById('lang-toggle');

    function renderContent() {
        // LocalizedString type getter
        const ls = (data) => data[currentLang];

        // 1. Render Navbar
        const { profile, nav } = CV_DATA;
        document.getElementById('nav-title').textContent = ls(profile.name);
        document.querySelector('title').textContent = `${ls(profile.name)} | CV`;
        
        const navMenu = document.getElementById('nav-menu');
        navMenu.innerHTML = Object.keys(nav).map(key => 
            `<a href="#${key}">${ls(nav[key])}</a>`
        ).join('');

        // 2. Render Summary Area
        const summaryArea = document.getElementById('summary-area');
        summaryArea.innerHTML = `
            <img src="./assets/images/profile.png" alt="Profile Picture" class="profile-pic">
            <h1>${ls(profile.name)}</h1>
            <p class="tagline">${ls(profile.tagline)}</p>
            <div class="summary-info">
                <div class="summary-info-item">
                    <img src="./assets/icons/email.svg" alt="Email"><span>${profile.email}</span>
                </div>
                <div class="summary-info-item">
                    <img src="./assets/icons/phone.svg" alt="Phone"><span>${profile.phone}</span>
                </div>
                <div class="summary-info-item">
                    <img src="./assets/icons/location.svg" alt="Location"><span>${ls(profile.location)}</span>
                </div>
            </div>
            <div class="external-links">
                <a href="${profile.links.github}" target="_blank"><img src="./assets/icons/github.svg" alt="GitHub"></a>
                <a href="${profile.links.linkedin}" target="_blank"><img src="./assets/icons/linkedin.svg" alt="LinkedIn"></a>
                <a href="${profile.links.blog}" target="_blank"><img src="./assets/icons/blog.svg" alt="Blog"></a>
            </div>
            <div class="keywords-container">
                <h3>Keywords</h3>
                <div class="tags-list">
                    ${profile.keywords.map(kw => `<span class="tag">${ls(kw)}</span>`).join('')}
                </div>
            </div>
            <div class="qualification-summary">
                <h3>${ls({kor: "주요 자격", eng: "Qualifications"})}</h3>
                <p>${ls(profile.qualificationSummary)}</p>
            </div>
            <button class="contact-cta-btn" id="contact-cta">${ls(CV_DATA.contact.ctaButton)}</button>
        `;
        
        // 3. Render Contents Area
        renderIntroduction();
        renderEducation();
        renderExperience();
        renderProjects();
        renderSkills();
        renderResearch();
        renderAwards();
        
        // 4. Render Footer
        document.getElementById('footer').innerHTML = `<p>${ls(CV_DATA.footer.copyright)}</p>`;
        
        // 5. Add event listeners for dynamic elements
        addEventListeners();
    }

    function renderIntroduction() {
        const { introduction } = CV_DATA;
        document.getElementById('introduction').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/introduction.svg" alt="Intro Icon">${ls(introduction.title)}</h2>
            <div class="subsection">
                <h3>${ls({kor: "자기소개", eng: "About Me"})}</h3>
                <p>${ls(introduction.selfIntroduction)}</p>
            </div>
            <div class="subsection">
                <h3>${ls({kor: "목표", eng: "Career Goals"})}</h3>
                <p>${ls(introduction.goals)}</p>
            </div>
        `;
    }

    function renderEducation() {
        const { education } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('education').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/education.svg" alt="Edu Icon">${ls(education.title)}</h2>
            <div class="timeline">
                ${education.items.map(item => `
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <h4><span class="math-inline">\{ls\(item\.degree\)\}</h4\>
<p class\="institution"\></span>{ls(item.institution)}</p>
                        <p class="period"><span class="math-inline">\{ls\(item\.period\)\}</p\>
<p\></span>{ls(item.description)}</p>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderExperience() {
        const { experience } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('experience').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/experience.svg" alt="Exp Icon">${ls(experience.title)}</h2>
            ${experience.items.map(item => `
                <div class="experience-card">
                    <h4><span class="math-inline">\{ls\(item\.position\)\}</h4\>
<p class\="company"\></span>{item.company}</p>
                    <p class="period">${ls(item.period)}</p>
                    <ul>
                        ${item.tasks.map(task => `<li>${ls(task)}</li>`).join('')}
                    </ul>
                </div>
            `).join('')}
        `;
    }

    function renderProjects() {
        const { projects } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('projects').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/project.svg" alt="Proj Icon">${ls(projects.title)}</h2>
            <div class="projects-grid">
                ${projects.items.map((item, index) => `
                    <div class="project-card">
                        <img src="<span class="math-inline">\{item\.image\}" alt\="</span>{ls(item.title)}">
                        <div class="project-card-content">
                            <h4><span class="math-inline">\{ls\(item\.title\)\}</h4\>
<p\></span>{ls(item.description)}</p>
                            <div class="project-tags">
                                ${item.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
                            </div>
                        </div>
                        <button class="project-card-btn" data-project-index="<span class="math-inline">\{index\}"\></span>{ls({kor: "프로젝트 보기", eng: "View Project"})}</button>
                    </div>
                `).join('')}
            </div>
        `;
    }

    function renderSkills() {
        const { skills } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('skills').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/skill.svg" alt="Skill Icon">${ls(skills.title)}</h2>
            ${skills.categories.map(cat => `
                <div class="skill-category">
                    <h4>${ls(cat.name)}</h4>
                    ${cat.items.map(skill => `
                        <div class="skill-item">
                            <span class="skill-name">${skill.name}</span>
                            <div class="skill-bar-container">
                                <div class="skill-bar" style="width: ${skill.level}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `).join('')}
        `;
    }
    
    function renderResearch() {
        const { research } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('research').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/research.svg" alt="Research Icon">${ls(research.title)}</h2>
            <div class="list-container">
            ${research.items.map(item => `
                <div class="list-item">
                    <div class="list-item-content">
                        <h4><span class="math-inline">\{ls\(item\.title\)\}</h4\>
<p\></span>{ls(item.publication)} (<span class="math-inline">\{item\.date\}\)</p\>
</div\>
<div class\="list\-item\-action"\>
<a href\="</span>{item.link}" target="_blank" class="btn">${ls({kor: "논문 보기", eng: "View Paper"})}</a>
                    </div>
                </div>
            `).join('')}
            </div>
        `;
    }

    function renderAwards() {
        const { awards } = CV_DATA;
        const ls = (data) => data[currentLang];
        document.getElementById('awards').innerHTML = `
            <h2 class="section-title"><img src="./assets/icons/award.svg" alt="Award Icon">${ls(awards.title)}</h2>
            <div class="list-container">
            ${awards.items.map(item => `
                <div class="list-item">
                    <div class="list-item-content">
                        <h4><span class="math-inline">\{ls\(item\.name\)\}</h4\>
<p\></span>{ls(item.issuer)} (${item.date})</p>
                    </div>
                </div>
            `).join('')}
            </div>
        `;
    }


    function addEventListeners() {
        // Contact CTA
        document.getElementById('contact-cta').addEventListener('click', () => {
            const { contact } = CV_DATA;
            const ls = (data) => data[currentLang];
            const formHTML = `
                <p>${ls(contact.modalIntro)}</p>
                <form class="contact-form" onsubmit="event.preventDefault(); alert('Form submitted (dev only)');">
                    <div class="form-group">
                        <label for="name">${ls(contact.form.name)}</label>
                        <input type="text" id="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">${ls(contact.form.email)}</label>
                        <input type="email" id="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">${ls(contact.form.message)}</label>
                        <textarea id="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-btn">${ls(contact.form.submit)}</button>
                </form>
            `;
            showModal(ls(contact.modalTitle), formHTML);
        });

        // Project Modals
        document.querySelectorAll('.project-card-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const index = e.target.getAttribute('data-project-index');
                const project = CV_DATA.projects.items[index];
                const ls = (data) => data[currentLang];
                const detailHTML = `<div class="project-details">${ls(project.details)}</div>`;
                showModal(ls(project.title), detailHTML);
            });
        });
    }

    // Initial Render
    renderContent();

    // Language Toggle Event
    langToggle.addEventListener('click', () => {
        currentLang = (currentLang === 'kor') ? 'eng' : 'kor';
        document.documentElement.lang = (currentLang === 'kor') ? 'ko' : 'en';
        renderContent();
    });
});
