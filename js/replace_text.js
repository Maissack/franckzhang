    var currentProject = '';

    function showProjectDescription(project) {
        var presentationDiv = document.querySelector('.presentation');

        
        if (currentProject === project) {
            
            presentationDiv.innerHTML = `<h1>Welcome.</h1><p>My name is Franck Zhang, I'm a full stack developer based in Paris, France. I am looking for an alternation in web development, data or cybersecurity for 2024-2025 (pace: 3 weeks in business / 1 week in school).<br><br> I am passionate about exploring the mysteries of the web, dissecting programming languages and experimenting with new ideas on my computer.p>`;
            currentProject = ''; 
        } else {
            
            var description = getProjectDescription(project);
            if (presentationDiv) {
                presentationDiv.innerHTML = `<h1>${project}</h1><p>${description}</p>`;
                currentProject = project; 
            }
        }
    }

    
    function getProjectDescription(project) {
        
        var descriptions = {
            achaka: "Description d'Achaka Conseils...",
            conquest: "Description de Conquest of Kingdoms...",
            mongoo: "Description de Mongoo...",
            homepod: "Description de HomePod mini..."
        };

        
        return descriptions[project] || "Aucune description disponible.";
    }
