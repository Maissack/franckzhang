    var currentProject = '';

    function showProjectDescription(project) {
        var presentationDiv = document.querySelector('.presentation');
    
        if (currentProject === project) {
            presentationDiv.innerHTML = `<h1>Bienvenue.</h1><p>Je m’appelle Franck Zhang, je suis un développeur full stack basé à Paris. Je recherche une alternance dans le développement web, la data ou la cybersécurité pour 2024-2025 (rythme : 3 semaines en entreprise / 1 semaine à l’école). <br><br> Explorer les mystères du web, disséquer les langages de programmation et expérimenter de nouvelles idées sur mon ordinateur me passionne.</p>`;
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
                        <a href="${siteLink}" target="_blank" class="view-site-btn">Voir Site</a>
                        <a href="${githubLink}" target="_blank" class="github-btn">GitHub</a>
                    </div>`;
                currentProject = project; 
            }
        }
    }
    
    
    function getProjectDescription(project) {
        
        var descriptions = {
            'Achaka Conseils': "Fondée par Charlène KARSTEN, ACHAKA CONSEILS vous accompagne dans le domaine de la propriété industrielle, notamment en matière de brevet d’invention. Création complète du site et de la charte graphique.",
            'Conquête des Royaumes': "Ce projet a été réalisé dans le cadre de l’événement EPIC DIGITAL DAY, une opportunité exclusive pour les étudiants de première année à l’IIM. Ce projet vise à optimiser et finaliser un jeu de société initialement conçu au cours de la semaine d’intégration intitulé 'Board Game'. L’objectif est de présenter une version améliorée du jeu devant un jury composé de 2 à 3 intervenants permanents ou externes.",
            'Mongoo': "Mongoo est une entreprise spécialisée dans la création de salades personnalisées. Le site a été conçu à l’aide d’une maquette préliminaire créée dans Adobe XD et implémentée en utilisant SCSS pour la gestion du style.",
            'HomePod mini': "Ce projet a été créé comme un effort personnel pour recréer la page d’accueil du HomePod mini. L’objectif principal de ce projet était de se familiariser avec le développement web en recréant visuellement la page d’accueil du HomePod mini. Il a été entrepris comme un exercice d’apprentissage pour pratiquer les compétences HTML et CSS."
        };
        

        return descriptions[project] || "Aucune description disponible";
    }
