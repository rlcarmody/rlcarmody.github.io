/* global M $ document */
const projects = {
  dosomething: {
    title: '//doSomething',
    link: 'https://webdevpdx.com/red-team-project/',
    github: 'https://github.com/rlcarmody/red-team-project',
    description: '<p class="flow-text">This site is a collaboratively built application leveraging Bing\'s geocoding and map control system, Foursquare\'s extensive venue data, and OpenWeather map to help users discover new places to go</p>',
  },
  trivia: {
    title: 'Trivia Game',
    github: 'https://github.com/rlcarmody/TriviaGame',
    link: 'https://webdevpdx.com/TriviaGame/',
    description: '<p class="flow-text">A 10 question trivia game where all questions are dynamically generated and randomized using the Open Trivia Database</p>',
  },

  friendfinder: {
    title: 'Friend Finder',
    link: 'https://uo-bootcamp.herokuapp.com/',
    github: 'https://github.com/rlcarmody/friendfinder',
    description: '<p class="flow-text">Find your perfect match with this compatibility matching application built on Node and Express',
  },
  burgerjoint: {
    title: 'Burger Joint',
    link: 'http://burger.webdevpdx.com',
    github: 'https://github.com/rlcarmody/burger',
    description: '<p class="flow-text">Store the burgers you want to eat in a MySQL database and mark them as "devoured." A ToDo app for burgers!</p>',
  },
  volunteer: {
    title: 'Volunteer Coordinator',
    link: 'https://secret-hamlet-38148.herokuapp.com/',
    github: 'https://github.com/rlcarmody/Volunteer-Coordinator-Project2',
    description: '<p class="flow-text">Online volunteer coordination system. The administrator creates the events and defines different positions.  A user can register an event and sign up for a position.  The staff then know who to expect and when</p>',
  },
  techscraper: {
    title: 'TechScraper',
    link: 'https://techscraper-rc.herokuapp.com/',
    github: 'https://github.com/rlcarmody/scraper',
    description: '<p class="flow-text">Gathers articles from AnandTech and stores them in a Mongo database.  Visitors of the site can leave comments and follow the path to the original article.</p>'
  }
};

$(document).ready(() => {
  const elems = document.querySelectorAll('.carousel');
  const carouselInstance = M.Carousel.init(elems, {
    onCycleTo: () => {
      const id = document.querySelector('.active').attributes.id.value;
      $('#activeproject-description').html(projects[id].description);
      $('#activeproject-title').text(projects[id].title);
      $('#activeproject-links').html(`<a class="white-text" href="${projects[id].link}" target="_blank">View App <i class="fas fa-external-link-alt"></i></a><a href="${projects[id].github}" class="white-text" target="_blank">View Source Code <i
        class="fab fa-github"></i></a>`);
    },
    fullWidth: true,
    indicators: true,
  });
  const navElem = document.querySelectorAll('.sidenav');
  navInstance = M.Sidenav.init(navElem, {
    draggable: true,
  });

  $('.arrows').on('click', (event) => {
    const direction = event.target.getAttribute('data-direction');
    $('.carousel').carousel(direction);
  });
});
