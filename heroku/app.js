const App = angular.module('mainApp', []);

App.controller('mainCtrl', ['$scope', function($scope) {
  $scope.go_to_top = function() {
    $('html, body').animate({
	    scrollTop: 0 // $("#sdl").offset().top
    }, 1000);
  }

  $scope.me = {
    name: "Ryan M. Waite",
    headline: "Developer\nProgrammer",
    desc: "Computer Science Major (Currently a Student)",
    img: "img/me_dev.jpg",
    links: [
      {name: "Home", href: "/"},
      {name: "Story", href: "/story"}
    ]
  }

  $scope.herokuapps = [
    {
      title: "World News",
      desc: "Find out what's happening around the world in an interactive way!",
      icon: "img/political_earth.png",
      heroku: "https://rmw-world-news.herokuapp.com/",
      github: "https://github.com/ryanwaite28/world_news",
      date: "December 2017"
    },
    {
      title: "Vepolus API",
      desc: "Server-Side Tools For Client-Side Needs. Bringing capabilities of server-side languages to JavaScript.",
      icon: "img/api.png",
      heroku: "https://rmw-vepolus.herokuapp.com/",
      github: "https://github.com/ryanwaite28/vepolus",
      date: "March 2016"
    },
    {
      title: "Readable",
      desc: "This is an application created with React and Redux. This projects demonstrates the understanding of the Redux library and how to better manage application state by deciding when to use data from Component State or Redux Store.",
      icon: "https://raw.githubusercontent.com/ryanwaite28/react-readable/master/react_and_redux.jpg",
      heroku: "https://rmw-udacity-react-readable.herokuapp.com/",
      github: "https://github.com/ryanwaite28/react-readable",
      date: "August 2017"
    },
    {
      title: "My Reads",
      desc: "This is an application created with ReactJS. This projects demonstrates the understanding of props, states, Components, JSX, AJAX, and JavaScript(ECMAScript) 6.",
      icon: "https://github.com/ryanwaite28/react-myreads/raw/master/react_logo.png",
      heroku: "https://rmw-udacity-react-myreads.herokuapp.com/",
      github: "https://github.com/ryanwaite28/react-myreads",
      date: "August 2017"
    },
    {
      title: "Items Catalog",
      desc: "Full Stack App with CRUD (Create|Read|update|Destroy) Functionality",
      icon: "https://github.com/ryanwaite28/item-catalog/raw/master/front_page.PNG",
      heroku: "https://rmw-udacity-fsnd-item-catalog.herokuapp.com/",
      github: "https://github.com/ryanwaite28/item-catalog",
      date: "May 2016"
    },
    {
      title: "Travellrs",
      desc: "Record and share all the places you've been to in the world!",
      icon: "img/earth-bw.png",
      heroku: "https://dashboard.heroku.com/apps/rmw-travellrs",
      github: "https://github.com/ryanwaite28/travellrs",
      date: "June 2016"
    },
    {
      title: "Safe Star",
      desc: "All of your essentials, in one place - Information Repository",
      icon: "img/safestar-logo-1.png",
      heroku: "https://rmw-safestar.herokuapp.com/",
      github: "https://github.com/ryanwaite28/safestar",
      date: "January 2017"
    }
  ]
}])



/*

{
  title: "",
  desc: "",
  icon: "",
  heroku: "",
  github: "",
  date: ""
}

*/
