import blackJack from '../../images/blackjack2.jpg'
import movies from '../../images/movies.jpg'
import sudoku from '../../images/sudoku.jpg'
import studentImage from '../../images/studentMangement.png'
 

export const ProjectsData = [

    {
        id: 1,
        title: "BlackJack",
        description: "This project was created as a group project for my school work. JavaScript, HTML, CSS, Pug was used for the front-end, Node.js for backend and SOLite to incorporate the database component",
        category: "JavaScript",
        image: blackJack,
        skillsUsed: "JavaScript, HTML, CSS, Vue.js, SqLite",
        githubLink: "https://github.com/CSCI3230U/majorgroupproject-team-canal"

    },
    {
        id: 2,
        title: "Movie database",
        description: "This project was created for a school lab assignment. It provides information about movies and list of showtimes depending on what day is chosen from the calendar. Technologies used were JavaScript, JQuery, HTML, CSS and MongoDB for database component",
        category: "JavaScript",
        image: movies,
        skillsUsed: "..",
        githubLink: "https://github.com/NishchalPersonal/movie"


    },
    {
        id: 3,
        title: "Sudoku",
        description: "This project was created for a school lab assignment. This one is a basic skeleton of the sudoku game with the implementation of a game page and high score page. This was created using JQuery, HTML and CSS",
        category: "JavaScript",
        image: sudoku,
        skillsUsed: "..",
        githubLink: "https://github.com/NishchalPersonal/sudoku"

    },

    {
        id: 4,
        title: "Student Mangement",
        description: "This is a personal java project. The program m allows you to add and remove students, update/search student information. MySQL database was used to store the information and the program communicates with the database using SQL queries. The GUI has been implenented using Java Swing",
        category: "Java",
        image: studentImage,
        skillsUsed: "..",
        githubLink: "https://github.com/Nishchal2309/StudentManagementSystem"

    }
]

export const ButtonNames = [
    {
        id: 1,
        value: 'All',
        skillName: 'All'
    },
    {
        id: 2,
        value: 'JavaScript',
        skillName: 'JavaScript'
    },

    {
        id: 3,
        value: 'Java',
        skillName: 'Java'
    }

    // {
    //     id: 4,
    //     value: 'React',
    //     skillName: 'React'
    // }

]