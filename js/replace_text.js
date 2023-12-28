    var currentProject = '';

    function showProjectDescription(project) {
        var presentationDiv = document.querySelector('.presentation');
    
        if (currentProject === project) {
            presentationDiv.innerHTML = `<h1>Welcome.</h1><p>My name is Franck Zhang, I'm a full stack developer based in Paris, France. I am looking for an alternation in web development, data, or cybersecurity for 2024-2025 (pace: 3 weeks in business / 1 week in school).<br><br> I am passionate about exploring the mysteries of the web, dissecting programming languages and experimenting with new ideas on my computer.</p>`;
            currentProject = ''; 
        } else {
            var description = getProjectDescription(project);
            if (presentationDiv) {
                var siteLink = getSiteLink(project);
                var githubLink = getGithubLink(project);
    
                presentationDiv.innerHTML = `
                    <h2>${project}</h2>
                    <p>${description}</p>
                    <div class="button-container">
                        <a href="${siteLink}" target="_blank" class="view-site-btn">View Site</a>
                        <a href="${githubLink}" target="_blank" class="github-btn">GitHub</a>
                    </div>`;
                currentProject = project; 
            }
        }
    }
    
    
    function getProjectDescription(project) {
        
        var descriptions = {
            'Achaka Conseils': "Founded by Charlène KARSTEN, ACHAKA CONSEILS supports you in the field of industrial property, particularly in terms of patent invention. Complete creation of the website and the graphic charter.",
            'Conquest of Kingdoms': "This project was carried out as part of the EPIC DIGITAL DAY event, an exclusive opportunity for first-year bachelor students at IIM. This project aims to optimize and finalize a board game initially designed during the integration week titled 'Board Game'. The objective is to present an improved version of the game before a jury composed of 2 to 3 permanent or external interveners.",
            'Mongoo': "Mongoo is a company specializing in creating custom salads. The site was designed using a preliminary mockup created in Adobe XD and implemented using SCSS for style management.",
            'HomePod mini': "This project was created as a personal endeavor to recreate the HomePod mini's homepage. The main goal of this project was to gain familiarity with web development by visually recreating the HomePod mini's homepage. It was undertaken as a learning exercise to practice HTML and CSS skills."
        };
        

        
        return descriptions[project] || "No description available.";
    }
