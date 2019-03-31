M.AutoInit();
const projects = {
    dosomething: {
        title: '//doSomething',
        link: 'https://webdevpdx.com/red-team-project/',
        github: 'https://github.com/rlcarmody/red-team-project',
        description: `<p class="flow-text">This site is a collaboratively built application leveraging Bing's geocoding and map control system, Foursquare's extensive venue data, and OpenWeather map to help users discover new places to go</p>`
    },
    rps: {
        title: 'Rock Paper Scissors',
        link: 'https://webdevpdx.com/RPS-Multiplayer/',
        github: 'https://github.com/rlcarmody/RPS-Multiplayer',
        description: `<p class="flow-text">A multiplayer Rock Paper Scisscors game powered by jQuery and Firebase real-time database</p>`
    },
    gifs: {
        title: 'Oscar Winning Gifs',
        link: 'https://webdevpdx.com/GifTastic/',
        github: 'https://github.com/rlcarmody/GifTastic',
        description: `<p class="flow-text">A Giphy powered site that generates a series of still images related to movies that won an Academy Award for Best Visual Effects.  Clicking the image "plays" the gif and users can choose favorites that will remain in local storage.</p>`
    },
    rpg: {
        title: 'Mini Role Playing Game',
        link: 'https://webdevpdx.com/GoT-RPG/',
        github: 'https://github.com/rlcarmody/GoT-RPG',
        description: `<p class="flow-text">A small project for practicing DOM manipulation using jQuery.  Players choose a fighter and must battle through all remaining characters</p>`
    },
    trivia: {
        title: 'Trivia Game',
        github: 'https://github.com/rlcarmody/TriviaGame',
        link: 'https://webdevpdx.com/TriviaGame/',
        description: `<p class="flow-text">A 10 question trivia game where all questions are dynamically generated and randomized using the Open Trivia Database</p>`
    },
    pokehangman: {
        title: 'Pokehangman',
        github: 'https://github.com/rlcarmody/Word-Guess-Game',
        link: 'https://webdevpdx.com/Word-Guess-Game/',
        description: `<p class="flow-text">A fun little word game where the player guess the Pokemon.  A single onKeyUp listener is used to fire all of the game logic</p>`
    },

    liri: {
        title: 'LIRI Bot',
        github: 'https://github.com/rlcarmody/liri-node-app',
        link: 'https://github.com/rlcarmody/liri-node-app',
        description: `<p class="flow-text">A Node CLI application for querying APIs for information about movies, concerts, and songs using OMDB, Bands in Town and Spotify APIs.  The application accepts arguments from the command line and has a fallback using the Inquirer package if the user fails to enter a valid argument</p>`
    }

}

document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.carousel');
    let instances = M.Carousel.init(elems, {
        padding: 50, dist: -50, onCycleTo: function () {
            let id = document.querySelector('.active').attributes.id.value;
            $('#activeproject-description').html(projects[id].description);
            $('#activeproject-title').text(projects[id].title);
            $('#activeproject-links').html(`<a class="white-text" href="${projects[id].link}" target="_blank">View App <i class="fas fa-external-link-alt"></i></a><a href="${projects[id].github}" class="white-text" target="_blank">View Source Code <i
        class="fab fa-github"></i></a>`)
        }
    })
})

