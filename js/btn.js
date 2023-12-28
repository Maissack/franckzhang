function getSiteLink(project) {
    var siteLinks = {
        'Achaka Conseils': 'https://10.achakaconseils.com/?lang=fr',
        'Conquest of Kingdoms': 'https://maissack.github.io/conquete_royaume',
        'Mongoo': 'https://maissack.github.io/mongoo',
        'HomePod mini': 'https://maissack.github.io/homepod_mini',
    };

    return siteLinks[project] || '#';
}

function getGithubLink(project) {
    var githubLinks = {
        'Achaka Conseils': 'https://github.com/Code-Nam/Achaka-wordpress', 
        'Conquest of Kingdoms': 'https://github.com/Maissack/conquete_royaume', 
        'Mongoo': 'https://github.com/Maissack/mongoo', 
        'HomePod mini': 'https://github.com/Maissack/homepod_mini', 
    };

    return githubLinks[project] || '#';
}