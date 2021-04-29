
const courses = document.querySelector('#courses-list');





loadEventListeners();

function loadEventListeners() {

    courses.addEventListener('click', buyCourse);
}









function buyCourse(e) {
    e.preventDefault();

    if(e.target.classList.contains('add-to-cart')) {
        
        const course = e.target.parentElement.parentElement;


        getCourseInfo(course);
    }



}

function getCourseInfo(course) {
    console.log(course);
}















