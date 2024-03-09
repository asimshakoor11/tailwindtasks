

// <!-- ************************* theme switch Start *********************** -->

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")    
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
} else {
    document.documentElement.classList.remove('dark')
    // document.getElementById("ticklight").classList.toggle("hidden")
    // document.getElementById("tickdarkk").classList.toggle("hidden")    
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
}


function darktheme() {
    document.getElementById("sunsvg").classList.add("hidden")
    document.getElementById("moonsvg").classList.remove("hidden")
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
}

function lighttheme() {
    document.getElementById("sunsvg").classList.remove("hidden")
    document.getElementById("moonsvg").classList.add("hidden")
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}

// <!-- ************************* theme switch Start *********************** -->



// dropdown toggle
let listboxT = document.getElementById("listboxT");

// const linksT = document.querySelectorAll('.nav-linkT');

function themedropdown() {
    // tablelastTD()

    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox6.classList.add("hidden");
    // listbox7.classList.add("hidden");
    listbox5.classList.add("hidden");
    listboxT.classList.toggle("hidden");

}




// var styles = document.documentElement.style;

var rankList = [
    { 'task': 'TASK-1', 'label': 'Documentation', 'title': 'Ensuring seamless integration with third-party API', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-2', 'label': 'Feature', 'title': 'Enhancing user authentication mechanism', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-3', 'label': 'Bug', 'title': 'Fixing memory leak issue in data processing module', 'status': 'Todo', 'priority': 'High' },
    { 'task': 'TASK-4', 'label': 'Documentation', 'title': 'Optimizing database queries for better performance', 'status': 'Cancelled', 'priority': 'Medium' },
    { 'task': 'TASK-5', 'label': 'Feature', 'title': 'Implementing real-time notifications feature', 'status': 'Done', 'priority': 'High' },
    { 'task': 'TASK-6', 'label': 'Bug', 'title': 'Resolving UI rendering glitch on mobile devices', 'status': 'Backlog', 'priority': 'Low' },
    { 'task': 'TASK-7', 'label': 'Feature', 'title': 'Adding multi-language support to the application', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-8', 'label': 'Documentation', 'title': 'Creating user manual for new feature set', 'status': 'Todo', 'priority': 'High' },
    { 'task': 'TASK-9', 'label': 'Bug', 'title': 'Addressing security vulnerability in authentication layer', 'status': 'Cancelled', 'priority': 'Low' },
    { 'task': 'TASK-10', 'label': 'Feature', 'title': 'Integrating machine learning for predictive analytics', 'status': 'Done', 'priority': 'Medium' },
    { 'task': 'TASK-11', 'label': 'Documentation', 'title': 'Updating API documentation for version 2.0', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-12', 'label': 'Feature', 'title': 'Implementing drag-and-drop functionality for file uploads', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-13', 'label': 'Bug', 'title': 'Fixing database deadlock issue during peak load', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-14', 'label': 'Documentation', 'title': 'Creating release notes for upcoming version release', 'status': 'Cancelled', 'priority': 'High' },
    { 'task': 'TASK-15', 'label': 'Feature', 'title': 'Adding dark mode theme option for better user experience', 'status': 'Done', 'priority': 'Low' },
    { 'task': 'TASK-16', 'label': 'Bug', 'title': 'Resolving compatibility issue with older browsers', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-17', 'label': 'Feature', 'title': 'Implementing video conferencing feature', 'status': 'In Progress', 'priority': 'High' },
    { 'task': 'TASK-18', 'label': 'Documentation', 'title': 'Creating developer guide for API integration', 'status': 'Todo', 'priority': 'Low' },
    { 'task': 'TASK-19', 'label': 'Bug', 'title': 'Fixing broken links in user dashboard', 'status': 'Cancelled', 'priority': 'Medium' },
    { 'task': 'TASK-20', 'label': 'Feature', 'title': 'Integrating social media sharing functionality', 'status': 'Done', 'priority': 'High' },
    { 'task': 'TASK-21', 'label': 'Documentation', 'title': 'Updating system architecture diagram', 'status': 'Backlog', 'priority': 'Low' },
    { 'task': 'TASK-22', 'label': 'Feature', 'title': 'Implementing two-factor authentication for enhanced security', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-23', 'label': 'Bug', 'title': 'Fixing server-side validation issue in form submission', 'status': 'Todo', 'priority': 'High' },
    { 'task': 'TASK-24', 'label': 'Documentation', 'title': 'Writing technical blog post about recent performance optimizations', 'status': 'Cancelled', 'priority': 'Medium' },
    { 'task': 'TASK-25', 'label': 'Feature', 'title': 'Adding chat support feature for customer assistance', 'status': 'Done', 'priority': 'Low' },
    { 'task': 'TASK-26', 'label': 'Bug', 'title': 'Resolving CSS conflict causing layout distortion', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-27', 'label': 'Feature', 'title': 'Implementing user feedback mechanism for product improvement', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-28', 'label': 'Documentation', 'title': 'Updating user guide with frequently asked questions section', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-29', 'label': 'Bug', 'title': 'Fixing broken pagination functionality in search results', 'status': 'Cancelled', 'priority': 'High' },
    { 'task': 'TASK-30', 'label': 'Feature', 'title': 'Integrating payment gateway for seamless transactions', 'status': 'Done', 'priority': 'Medium' },
    { 'task': 'TASK-31', 'label': 'Documentation', 'title': 'Creating API usage examples for developer reference', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-32', 'label': 'Feature', 'title': 'Implementing image cropping tool for user profile pictures', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-33', 'label': 'Bug', 'title': 'Fixing server error occurring during large data imports', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-34', 'label': 'Documentation', 'title': 'Writing technical specifications for upcoming feature set', 'status': 'Cancelled', 'priority': 'Low' },
    { 'task': 'TASK-35', 'label': 'Feature', 'title': 'Adding geolocation tracking feature for delivery services', 'status': 'Done', 'priority': 'High' },
    { 'task': 'TASK-36', 'label': 'Bug', 'title': 'Resolving JavaScript conflict causing form submission errors', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-37', 'label': 'Feature', 'title': 'Implementing file versioning system for document management', 'status': 'In Progress', 'priority': 'High' },
    { 'task': 'TASK-38', 'label': 'Documentation', 'title': 'Updating installation guide for better user onboarding', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-39', 'label': 'Bug', 'title': 'Fixing security vulnerability in file upload module', 'status': 'Cancelled', 'priority': 'Low' },
    { 'task': 'TASK-40', 'label': 'Feature', 'title': 'Implementing data encryption for enhanced privacy', 'status': 'Done', 'priority': 'Medium' },
    { 'task': 'TASK-41', 'label': 'Documentation', 'title': 'Creating troubleshooting guide for common user issues', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-42', 'label': 'Feature', 'title': 'Implementing advanced search functionality with filters', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-43', 'label': 'Bug', 'title': 'Fixing performance degradation issue in database queries', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-44', 'label': 'Documentation', 'title': 'Writing API documentation for third-party developers', 'status': 'Cancelled', 'priority': 'High' },
    { 'task': 'TASK-45', 'label': 'Feature', 'title': 'Adding voice command support for hands-free operation', 'status': 'Done', 'priority': 'Low' },
    { 'task': 'TASK-46', 'label': 'Bug', 'title': 'Resolving layout inconsistency in responsive design', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-47', 'label': 'Feature', 'title': 'Implementing email scheduling feature for marketing campaigns', 'status': 'In Progress', 'priority': 'High' },
    { 'task': 'TASK-48', 'label': 'Documentation', 'title': 'Updating user interface design guidelines', 'status': 'Todo', 'priority': 'Low' },
    { 'task': 'TASK-49', 'label': 'Bug', 'title': 'Fixing validation error in user registration form', 'status': 'Cancelled', 'priority': 'Medium' },
    { 'task': 'TASK-50', 'label': 'Feature', 'title': 'Integrating barcode scanning functionality for inventory management', 'status': 'Done', 'priority': 'High' },
    { 'task': 'TASK-51', 'label': 'Documentation', 'title': 'Creating deployment checklist for system administrators', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-52', 'label': 'Feature', 'title': 'Implementing offline mode for mobile app usage without internet', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-53', 'label': 'Bug', 'title': 'Fixing compatibility issue with Internet Explorer browser', 'status': 'Todo', 'priority': 'High' },
    { 'task': 'TASK-54', 'label': 'Documentation', 'title': 'Writing technical whitepaper on industry best practices', 'status': 'Cancelled', 'priority': 'Medium' },
    { 'task': 'TASK-55', 'label': 'Feature', 'title': 'Adding social media login option for user convenience', 'status': 'Done', 'priority': 'Low' },
    { 'task': 'TASK-56', 'label': 'Bug', 'title': 'Resolving memory leak issue in background processes', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-57', 'label': 'Feature', 'title': 'Implementing video autoplay feature for media content', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-58', 'label': 'Documentation', 'title': 'Updating data backup and recovery procedures', 'status': 'Todo', 'priority': 'High' },
    { 'task': 'TASK-59', 'label': 'Bug', 'title': 'Fixing broken links in email notifications', 'status': 'Cancelled', 'priority': 'Low' },
    { 'task': 'TASK-60', 'label': 'Feature', 'title': 'Integrating AI-powered recommendation engine', 'status': 'Done', 'priority': 'Medium' },
    { 'task': 'TASK-61', 'label': 'Documentation', 'title': 'Creating user training materials for new feature rollout', 'status': 'Backlog', 'priority': 'High' },
    { 'task': 'TASK-62', 'label': 'Feature', 'title': 'Implementing data export functionality for analytics', 'status': 'In Progress', 'priority': 'Low' },
    { 'task': 'TASK-63', 'label': 'Bug', 'title': 'Fixing XSS vulnerability in user profile settings', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-64', 'label': 'Documentation', 'title': 'Writing case studies on successful customer implementations', 'status': 'Cancelled', 'priority': 'High' },
    { 'task': 'TASK-65', 'label': 'Feature', 'title': 'Adding augmented reality feature for product visualization', 'status': 'Done', 'priority': 'Low' },
    { 'task': 'TASK-66', 'label': 'Bug', 'title': 'Resolving caching issue causing stale data display', 'status': 'Backlog', 'priority': 'Medium' },
    { 'task': 'TASK-67', 'label': 'Feature', 'title': 'Implementing advanced search algorithms for better results', 'status': 'In Progress', 'priority': 'High' },
    { 'task': 'TASK-68', 'label': 'Documentation', 'title': 'Updating privacy policy according to GDPR regulations', 'status': 'Todo', 'priority': 'Medium' },
    { 'task': 'TASK-69', 'label': 'Bug', 'title': 'Fixing CORS issue in API responses for cross-origin requests', 'status': 'Cancelled', 'priority': 'Low' },
    { 'task': 'TASK-70', 'label': 'Feature', 'title': 'Integrating voice recognition for speech-to-text functionality', 'status': 'Done', 'priority': 'High' },
    { 'task': 'TASK-71', 'label': 'Documentation', 'title': 'Improper indentation in user guide', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-72', 'label': 'Bug', 'title': 'Error message not displayed on login failure', 'status': 'BackLog', 'priority': 'High' },
    { 'task': 'TASK-73', 'label': 'Feature', 'title': 'Implement dark mode option', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-74', 'label': 'Documentation', 'title': 'Update API reference for latest changes', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-75', 'label': 'Bug', 'title': 'Crash on clicking submit button', 'status': 'BackLog', 'priority': 'Low' },
    { 'task': 'TASK-76', 'label': 'Feature', 'title': 'Integrate payment gateway', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-77', 'label': 'Documentation', 'title': 'Add installation instructions for Windows', 'status': 'To Do', 'priority': 'Low' },
    { 'task': 'TASK-78', 'label': 'Bug', 'title': 'Incorrect sorting of data in table', 'status': 'BackLog', 'priority': 'Medium' },
    { 'task': 'TASK-79', 'label': 'Feature', 'title': 'Implement real-time chat feature', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-80', 'label': 'Documentation', 'title': 'Update user manual with troubleshooting section', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-81', 'label': 'Bug', 'title': 'Application freezes on startup', 'status': 'BackLog', 'priority': 'Medium' },
    { 'task': 'TASK-82', 'label': 'Feature', 'title': 'Add support for multiple languages', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-83', 'label': 'Documentation', 'title': 'Create FAQ section for common queries', 'status': 'To Do', 'priority': 'Low' },
    { 'task': 'TASK-84', 'label': 'Bug', 'title': 'Incorrect calculation in reporting module', 'status': 'BackLog', 'priority': 'High' },
    { 'task': 'TASK-85', 'label': 'Feature', 'title': 'Implement file upload functionality', 'status': 'To Do', 'priority': 'Medium' },
    { 'task': 'TASK-86', 'label': 'Documentation', 'title': 'Update release notes for version 2.0', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-87', 'label': 'Bug', 'title': 'Broken links on homepage', 'status': 'BackLog', 'priority': 'Medium' },
    { 'task': 'TASK-88', 'label': 'Feature', 'title': 'Integrate social media sharing options', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-89', 'label': 'Documentation', 'title': 'Add usage examples to API documentation', 'status': 'To Do', 'priority': 'Low' },
    { 'task': 'TASK-90', 'label': 'Bug', 'title': 'Incorrect data validation in registration form', 'status': 'BackLog', 'priority': 'High' },
    { 'task': 'TASK-91', 'label': 'Feature', 'title': 'Implement email notifications', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-92', 'label': 'Documentation', 'title': 'Create getting started guide for new users', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-93', 'label': 'Bug', 'title': 'Application crashes when printing', 'status': 'BackLog', 'priority': 'High' },
    { 'task': 'TASK-94', 'label': 'Feature', 'title': 'Implement search functionality', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-95', 'label': 'Documentation', 'title': 'Add security best practices to documentation', 'status': 'To Do', 'priority': 'Low' },
    { 'task': 'TASK-96', 'label': 'Bug', 'title': 'UI elements misaligned on mobile devices', 'status': 'BackLog', 'priority': 'Medium' },
    { 'task': 'TASK-97', 'label': 'Feature', 'title': 'Implement role-based access control', 'status': 'To Do', 'priority': 'High' },
    { 'task': 'TASK-98', 'label': 'Documentation', 'title': 'Update developer guide with new API endpoints', 'status': 'In Progress', 'priority': 'Medium' },
    { 'task': 'TASK-99', 'label': 'Bug', 'title': 'Incorrect data displayed in dashboard widgets', 'status': 'BackLog', 'priority': 'High' },
    { 'task': 'TASK-100', 'label': 'Feature', 'title': 'Implement export to PDF functionality', 'status': 'To Do', 'priority': 'Medium' },
];

var array = [];
var array_length = 0;
var table_size = 10;
var start_index = 1;
var end_index = 0;
var current_index = 1;
var max_index = 10;
var pageno = 1;
// var sortCol = 'rank';
// var ascOrder = true;


function tablesize10() {
    table_size = 10
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
}

function tablesize20() {
    table_size = 20
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
}

function tablesize30() {
    table_size = 30
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
}

function tablesize40() {
    table_size = 40
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
}

function tablesize50() {
    table_size = 50
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
}

function preloadCalculation() {
    filterRankList()
    // sortRankList()
    // array = rankList
    array_length = array.length
    max_index = array_length / table_size
    max_index = Math.round(max_index)
    if ((array_length % table_size) > 0) {
        max_index++
    }
}

function filterRankList() {
    var tab_filter_text = $("#myInput3").val();
    if (tab_filter_text != '') {
        var temp_array = rankList.filter(function (object) {
            return object.title.toUpperCase().includes(tab_filter_text.toUpperCase())

            // return object.rank.toString().includes(tab_filter_text)
            //     || object.name.toUpperCase().includes(tab_filter_text.toUpperCase())
            //     || object.marks.toString().includes(tab_filter_text)
            //     || object.year.toString().includes(tab_filter_text)
            //     || object.percentage.toString().includes(tab_filter_text)
        });
        array = temp_array;
    } else {
        array = rankList;
    }
}

// function sortRankList() {
//     array.sort((a,b) => {
//         if (ascOrder) {
//             return (a[sortCol] > b[sortCol]) ? 1 : -1;
//         } else {
//             return (b[sortCol] > a[sortCol]) ? 1 : -1;
//         }
//     });

//     $(".table th").removeClass("sort_indication")
//     $(".table th[colName='"+sortCol+"']").addClass("sort_indication");

//     if(ascOrder){
//         styles.setProperty('--up_arrow_color','#ffffff');
//         styles.setProperty('--up_arrow_shadow','0px 0px 10px white');
//         styles.setProperty('--down_arrow_color','#ffffff49');
//         styles.setProperty('--down_arrow_shadow','0px 0px 0px rgba(255, 255, 255, 0)');
//     }else{
//         styles.setProperty('--up_arrow_color','#ffffff49');
//         styles.setProperty('--up_arrow_shadow','0px 0px 0px rgba(255, 255, 255, 0)');
//         styles.setProperty('--down_arrow_color','#ffffff');
//         styles.setProperty('--down_arrow_shadow','0px 0px 10px white');        
//     }
// }

function displayIndexButtons() {
    preloadCalculation();
    $(".index_buttons button").remove()
    $(".index_buttons").append(`<button
    class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-darkborder border dark:text-darktext border-input bg-background shadow-sm dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
    disabled onclick="gotofirstpage()" id="mostleastid"><span class="sr-only">Go to first
        page</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
        <path
            d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg>
</button>`)
    $(".index_buttons").append(`<button
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-darkborder border dark:text-darktext  border-input bg-background shadow-sm dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
    id="previd" disabled onclick="prev()"><span class="sr-only">Go to previous
        page</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
        <path
            d="M8.84182 3.13514C9.04327 3.32401 9.05348 3.64042 8.86462 3.84188L5.43521 7.49991L8.86462 11.1579C9.05348 11.3594 9.04327 11.6758 8.84182 11.8647C8.64036 12.0535 8.32394 12.0433 8.13508 11.8419L4.38508 7.84188C4.20477 7.64955 4.20477 7.35027 4.38508 7.15794L8.13508 3.15794C8.32394 2.95648 8.64036 2.94628 8.84182 3.13514Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg></button>`)
    $(".index_buttons").append(`<button
    class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-darkborder border dark:text-darktext dark:border-darkborder border-input bg-background shadow-sm dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground h-8 w-8 p-0"
    id="nextid" onclick="next()"><span class="sr-only">Go to next page</span><svg
        width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
        <path
            d="M6.1584 3.13508C6.35985 2.94621 6.67627 2.95642 6.86514 3.15788L10.6151 7.15788C10.7954 7.3502 10.7954 7.64949 10.6151 7.84182L6.86514 11.8418C6.67627 12.0433 6.35985 12.0535 6.1584 11.8646C5.95694 11.6757 5.94673 11.3593 6.1356 11.1579L9.565 7.49985L6.1356 3.84182C5.94673 3.64036 5.95694 3.32394 6.1584 3.13508Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg></button>`)
    $(".index_buttons").append(`<button
    class="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:border-darkborder border dark:text-darktext dark:border-darkborder border-input bg-background shadow-sm dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground hidden h-8 w-8 p-0 lg:flex"
    onclick="gotolastpage()" id="mostforwardid"><span class="sr-only">Go to last
        page</span><svg width="15" height="15" viewBox="0 0 15 15" fill="none"
        xmlns="http://www.w3.org/2000/svg" class="h-4 w-4">
        <path
            d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
    </svg></button>`)
    highlighIndexButton();
    // displayTableRows();
}


function highlighIndexButton() {
    start_index = ((current_index - 1) * table_size) + 1;
    end_index = (start_index + table_size) - 1;
    if (end_index > array_length) {
        end_index = array_length;
    }

    // $("#tableindicator").text('Page 1 of ' + array_length + ' Showing ' + start_index + ' to ' + end_index + ' of ' + array_length + ' entries')
    $("#tableindicator").text(`Page ${current_index} of ${Math.round(max_index)}`);
    // $("#tableindicator").text('Showing ' + start_index + ' to ' + end_index + ' of ' + array_length + ' entries');
    // $(".index_buttons button").removeClass('active');
    // $(".index_buttons button[index='" + current_index + "']").addClass('active');
    displayTableRows();
}

function displayTableRows() {
    $(".tablec table tbody tr").remove();
    var tab_start = start_index - 1;
    var tab_end = end_index

    for (var i = tab_start; i < tab_end; i++) {
        var student = array[i]

        if (i == tab_end || i == tab_end - 1 || i == tab_end - 2 || i == tab_end - 3) {
            var tr = `<tr class="dark:border-darkborder border-b  hover:bg-muted/50 data-[state=selected]:bg-muted"
        data-state="false">
        <td
            class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
            <input type="checkbox" value=""
                class="checkboxes w-4 h-4 text-black bg-transparent hover:cursor-pointer dark:border-darkborder border-black dark:border-darktext rounded  focus:ring-transparent focus:outline-none">
        </td>
        <td
            class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">            
            <div class="w-[80px]">${student['task']}</div>
        </td>
        <td
            class="titlehide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
            <div class="flex space-x-2">
                <div
                    class="inline-flex items-center rounded-md dark:border-darkborder border px-2.5 py-0.5 text-xs font-semibold  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground dark:text-darktext">
                    ${student['label']}
                </div>
                <a href="#" class="max-w-[500px] truncate font-medium cursor-default dark:text-darktext">
                ${student['title']}
                </a>
            </div>
        </td>
        <td
            class="statushide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <div class="flex w-[100px] items-center"><svg width="15" height="15"
                    viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-muted-foreground  dark:text-darktextcol">
                    <path
                        d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg><a href="#">${student['status']}</a>
            </div>
        </td>
        <td
            class="phide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <div class="flex items-center"><svg width="15" height="15" viewBox="0 0 15 15"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-muted-foreground  dark:text-darktextcol">
                    <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg><a href="#">${student['priority']}</a></div>
        </td>
        
        <td
            class="tablerow p-2 align-middle tablelastrows dropbtn [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <button
                class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed">
                <svg width="15" height="15"
                    viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="dropbtn h-4 w-4 pointer-events-none">
                    <path
                        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    </path>
                </svg><span class="dropbtn sr-only">Open menu

                </span>
            </button>

        </td>
    </tr>`
        } else {
            var tr = `<tr class="dark:border-darkborder border-b  hover:bg-muted/50 data-[state=selected]:bg-muted"
        data-state="false">
        <td
            class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
            <input type="checkbox" value=""
                class="checkboxes w-4 h-4 text-black bg-transparent hover:cursor-pointer dark:border-darkborder border-black dark:border-darktext rounded  focus:ring-transparent focus:outline-none">
        </td>
        <td
            class="p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">            
            <div class="w-[80px]">${student['task']}</div>
        </td>
        <td
            class="titlehide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px]">
            <div class="flex space-x-2">
                <div
                    class="inline-flex items-center rounded-md dark:border-darkborder border px-2.5 py-0.5 text-xs font-semibold  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground dark:text-darktext">
                    ${student['label']}
                </div>
                <a href="#" class="max-w-[500px] truncate font-medium cursor-default dark:text-darktext">
                ${student['title']}
                </a>
            </div>
        </td>
        <td
            class="statushide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <div class="flex w-[100px] items-center"><svg width="15" height="15"
                    viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-muted-foreground  dark:text-darktextcol">
                    <path
                        d="M5.49998 0.5C5.49998 0.223858 5.72383 0 5.99998 0H7.49998H8.99998C9.27612 0 9.49998 0.223858 9.49998 0.5C9.49998 0.776142 9.27612 1 8.99998 1H7.99998V2.11922C9.09832 2.20409 10.119 2.56622 10.992 3.13572C11.0116 3.10851 11.0336 3.08252 11.058 3.05806L11.858 2.25806C12.1021 2.01398 12.4978 2.01398 12.7419 2.25806C12.986 2.50214 12.986 2.89786 12.7419 3.14194L11.967 3.91682C13.1595 5.07925 13.9 6.70314 13.9 8.49998C13.9 12.0346 11.0346 14.9 7.49998 14.9C3.96535 14.9 1.09998 12.0346 1.09998 8.49998C1.09998 5.13362 3.69904 2.3743 6.99998 2.11922V1H5.99998C5.72383 1 5.49998 0.776142 5.49998 0.5ZM2.09998 8.49998C2.09998 5.51764 4.51764 3.09998 7.49998 3.09998C10.4823 3.09998 12.9 5.51764 12.9 8.49998C12.9 11.4823 10.4823 13.9 7.49998 13.9C4.51764 13.9 2.09998 11.4823 2.09998 8.49998ZM7.99998 4.5C7.99998 4.22386 7.77612 4 7.49998 4C7.22383 4 6.99998 4.22386 6.99998 4.5V9.5C6.99998 9.77614 7.22383 10 7.49998 10C7.77612 10 7.99998 9.77614 7.99998 9.5V4.5Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg><a href="#">${student['status']}</a>
            </div>
        </td>
        <td
            class="phide p-2 align-middle [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <div class="flex items-center"><svg width="15" height="15" viewBox="0 0 15 15"
                    fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="mr-2 h-4 w-4 text-muted-foreground  dark:text-darktextcol">
                    <path
                        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg><a href="#">${student['priority']}</a></div>
        </td>
        
        <td
            class="tablerow p-2 align-middle dropbtn [&amp;:has([role=checkbox])]:pr-0 [&amp;>[role=checkbox]]:translate-y-[2px] dark:text-darktext">
            <button
                class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium  focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:hover:bg-darkhover hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed">
                <svg width="15" height="15"
                    viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="dropbtn h-4 w-4 pointer-events-none">
                    <path
                        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    </path>
                </svg><span class="dropbtn sr-only">Open menu

                </span>
            </button>

        </td>
    </tr>`
        }

        $(".tablec table tbody").append(tr);
    }
    tablelastTD();
}

displayIndexButtons()



function next() {
    let previd = document.getElementById("previd")
    let mostleastid = document.getElementById("mostleastid")
    let nextid = document.getElementById("nextid")
    let mostforwardid = document.getElementById("mostforwardid")

    previd.removeAttribute("disabled")
    mostleastid.removeAttribute("disabled")
    if (current_index < max_index) {
        current_index++;
        highlighIndexButton()
    }
    if (current_index == max_index) {
        nextid.setAttribute("disabled", "");
        mostforwardid.setAttribute("disabled", "");
    }

}

function prev() {
    nextid.removeAttribute("disabled")
    mostforwardid.removeAttribute("disabled")
    if (current_index > 1) {
        current_index--;
        highlighIndexButton()
    }
    if (current_index == 1) {
        previd.setAttribute("disabled", "");
        mostleastid.setAttribute("disabled", "");
    }
}

function gotolastpage() {
    previd.removeAttribute("disabled")
    mostleastid.removeAttribute("disabled")
    if (current_index < max_index) {
        current_index = max_index;
        highlighIndexButton()
    }
    if (current_index == max_index) {
        nextid.setAttribute("disabled", "");
        mostforwardid.setAttribute("disabled", "");
    }
}

function gotofirstpage() {
    nextid.removeAttribute("disabled")
    mostforwardid.removeAttribute("disabled")
    if (current_index > 1) {
        current_index = 1;
        highlighIndexButton()
    }
    if (current_index == 1) {
        previd.setAttribute("disabled", "");
        mostleastid.setAttribute("disabled", "");
    }
}

// function indexPagination(index) {
//     current_index = parseInt(index);
//     highlighIndexButton()
// }

// $("#table_size").change(function () {
//     table_size = parseInt($(this).val());
//     current_index = 1;
//     start_index = 1;
//     displayIndexButtons();
// })

// $('#userInput').on('input', function() {
//     // This function will be executed every time the user types something
//     var userInput = $(this).val(); // Get the value of the input field
//     // Call your function here and pass the userInput as an argument
//     yourFunction(userInput);
// });

$("#myInput3").on('input', function () {
    current_index = 1;
    start_index = 1;
    displayIndexButtons();
})

// $(".table th").click(function() {
//     var colName = $(this).attr("colName");
//     ascOrder = (sortCol == colName) ? !ascOrder : true
//     sortCol = colName
//     current_index = 1
//     start_index = 1
//     displayIndexButtons();
// })















// search input

// function myFunction3() {
//     let input3, filter3, ul3, li3, a3, i3, txtValue3;
//     input3 = document.getElementById("myInput3");
//     filter3 = input3.value.toUpperCase();
//     ul3 = document.getElementById("listbox9");
//     li3 = ul3.getElementsByTagName("tr");
//     for (i3 = 1; i3 < li3.length; i3++) {
//         a3 = li3[i3].getElementsByTagName("a")[0];
//         txtValue3 = a3.textContent || a3.innerText;
//         if (txtValue3.toUpperCase().indexOf(filter3) > -1) {
//             li3[i3].classList.remove("hidden");
//         } else {
//             li3[i3].classList.add("hidden");
//         }
//     }
//     // e.preventDefault();
// }

// search input
var status_checkbox1 = document.getElementById("status-checkbox1")
var status_checkbox2 = document.getElementById("status-checkbox2")
var status_checkbox3 = document.getElementById("status-checkbox3")
var status_checkbox4 = document.getElementById("status-checkbox4")
var status_checkbox5 = document.getElementById("status-checkbox5")

function sortstatus() {

    var backlog_text = "backlog";
    var backlog_text2 = "todo";
    var backlog_text3 = "progress";
    var backlog_text4 = "done";
    var backlog_text5 = "cancelled";

    if (status_checkbox1.hasAttribute("checked") && status_checkbox2.hasAttribute("checked")
        && status_checkbox3.hasAttribute("checked") && status_checkbox4.hasAttribute("checked")
        && status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text3.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text4.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox1.hasAttribute("checked") && status_checkbox2.hasAttribute("checked")
        && status_checkbox3.hasAttribute("checked") && status_checkbox4.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text3.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text4.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox1.hasAttribute("checked") && status_checkbox2.hasAttribute("checked")
        && status_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox1.hasAttribute("checked") && status_checkbox2.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text2.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox1.hasAttribute("checked") && status_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox1.hasAttribute("checked") && status_checkbox4.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text4.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox1.hasAttribute("checked") && status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox2.hasAttribute("checked") && status_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox2.hasAttribute("checked") && status_checkbox4.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text4.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox2.hasAttribute("checked") && status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox3.hasAttribute("checked") && status_checkbox4.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text3.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text4.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox3.hasAttribute("checked") && status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text3.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = [...temp_array];
    }else if (status_checkbox4.hasAttribute("checked") && status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text4.toUpperCase())
                || object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (status_checkbox1.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text.toUpperCase())
        });
        array = temp_array;
    } else if (status_checkbox2.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text2.toUpperCase())
        });
        array = temp_array;
    }
    else if (status_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = temp_array;
    } else if (status_checkbox4.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text4.toUpperCase())
        });
        array = temp_array;
    } else if (status_checkbox5.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.status.toUpperCase().includes(backlog_text5.toUpperCase())
        });
        array = temp_array;
    } else {
        array = rankList;
    }
    array_length = array.length
    max_index = array_length / table_size
    max_index = Math.round(max_index)

    highlighIndexButton();
}

// // backlog sorting 

function backlog() {
    status_checkbox1.toggleAttribute("checked");
    sortstatus();
}

// // backlog sorting 


// // todo sorting 

function todo() {
    status_checkbox2.toggleAttribute("checked");
    sortstatus();
}

// // todo sorting 


// // In Progress sorting 

function progress() {
    status_checkbox3.toggleAttribute("checked");
    sortstatus();
}

// // In Progress sorting 

// // In done sorting 

function done() {
    status_checkbox4.toggleAttribute("checked");
    sortstatus();
}

// // In done sorting 

// // In canceled sorting 

function canceled() {
    status_checkbox5.toggleAttribute("checked");
    sortstatus();

}

// // In canceled sorting 

// // low sorting 


var p_checkbox1 = document.getElementById("p-checkbox1")
var p_checkbox3 = document.getElementById("p-checkbox3")
var p_checkbox2 = document.getElementById("p-checkbox2")
function sortpriority() {

    var backlog_text = "low";
    var backlog_text2 = "medium";
    var backlog_text3 = "high";

    if (p_checkbox1.hasAttribute("checked") && p_checkbox2.hasAttribute("checked") && p_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text.toUpperCase())
                || object.priority.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.priority.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (p_checkbox1.hasAttribute("checked") && p_checkbox2.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text.toUpperCase())
                || object.priority.toUpperCase().includes(backlog_text2.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (p_checkbox1.hasAttribute("checked") && p_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text.toUpperCase())
                || object.priority.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (p_checkbox2.hasAttribute("checked") && p_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text2.toUpperCase())
                || object.priority.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = [...temp_array];
    }
    else if (p_checkbox1.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text.toUpperCase())
        });
        array = temp_array;
    } else if (p_checkbox2.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text2.toUpperCase())
        });
        array = temp_array;
    }
    else if (p_checkbox3.hasAttribute("checked")) {
        var temp_array = rankList.filter(function (object) {
            return object.priority.toUpperCase().includes(backlog_text3.toUpperCase())
        });
        array = temp_array;
    } else {
        array = rankList;
    }
    array_length = array.length
    max_index = array_length / table_size
    max_index = Math.round(max_index)

    highlighIndexButton();
}

function plow() {
    p_checkbox1.toggleAttribute("checked");
    sortpriority()
}

// // low sorting 

// // medium sorting 

function pmedium() {
    p_checkbox2.toggleAttribute("checked");
    sortpriority()
}

// // medium sorting 

// // high sorting 

function phigh() {
    p_checkbox3.toggleAttribute("checked");

    sortpriority()
}

// // high sorting 

function Ftitlehide() {
    let titlehide = document.querySelectorAll('.titlehide');
    let hidetick1 = document.getElementById("hidetick1");
    for (j = 0; j < titlehide.length; j++) {
        titlehide[j].classList.toggle("hidden");
    }
    hidetick1.classList.toggle("hidden");
    listbox3.classList.toggle("hidden");
}

function Fstatushide() {
    let statushide = document.querySelectorAll('.statushide');
    let hidetick2 = document.getElementById("hidetick2");
    for (j = 0; j < statushide.length; j++) {
        statushide[j].classList.toggle("hidden");
    }
    hidetick2.classList.toggle("hidden");
    listbox3.classList.toggle("hidden");
}

function Fphide() {
    let phide = document.querySelectorAll('.phide');
    let hidetick3 = document.getElementById("hidetick3");
    for (j = 0; j < phide.length; j++) {
        phide[j].classList.toggle("hidden");
    }
    hidetick3.classList.toggle("hidden");
    listbox3.classList.toggle("hidden");
}

// function checkAll(){
//     let checkboxes = document.querySelectorAll('.checkboxes');
//     for (k = 0; k < checkboxes.length; k++) {
//         checkboxes[k].toggleAttribute("checked") 
//     }          
// }

function checkAll(o) {
    let boxes = document.querySelectorAll('.checkboxes');
    for (var x = 0; x < boxes.length; x++) {
        var obj = boxes[x];
        if (obj.type == "checkbox") {
            if (obj.name != "check")
                obj.checked = o.checked;
        }
    }
}


// header 

// dropdown toggle
let listbox = document.getElementById("listbox");

function dropdowntoggle() {
    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.toggle("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");


    let links7 = document.querySelectorAll('.tablerow');

    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });
}

// header 

// status button 

// dropdown toggle
let listbox1 = document.getElementById("listbox1");

// let selectedOption1 = document.getElementById("selectedOption1");

const links = document.querySelectorAll('.nav-link');

function dropdowntoggle1() {
    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.toggle("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");

    let links7 = document.querySelectorAll('.tablerow');


    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`

    });

    document.getElementById("myInput").value = "";
    ul = document.getElementById("listbox1");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length - 1; i++) {
        li[i].classList.remove("hidden");
    }
    event.preventDefault();
}

if (links.length) {
    links.forEach((link) => {
        link.addEventListener('click', (e) => {
            links.forEach((link) => {
                // selectedOption1.innerHTML = "";
                // let text = link.innerHTML;
                // selectedOption1.innerHTML = text;
                // link.nextElementSibling.classList.add("hidden");
                listbox1.classList.add("hidden");
            });

            e.preventDefault();
            // selectedOption1.innerHTML = ""
            // let text1 = link.innerHTML;
            // selectedOption1.innerHTML = text1
            link.nextElementSibling.classList.remove("hidden")
        });
    });
}


// Search funcality 
function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listbox1");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].classList.remove("hidden");
        } else {
            li[i].classList.add("hidden");
        }
    }
    // e.preventDefault();
}

// Search funcality

// status button

// priority


// dropdown toggle
let listbox2 = document.getElementById("listbox2");

// let selectedOption1 = document.getElementById("selectedOption1");

const links2 = document.querySelectorAll('.nav-link');

function dropdowntoggle2() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.toggle("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.add("hidden");

    let links7 = document.querySelectorAll('.tablerow');


    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });
    document.getElementById("myInput2").value = "";
    ul = document.getElementById("listbox2");
    li = ul.getElementsByTagName("li");
    for (i = 1; i < li.length - 1; i++) {
        li[i].classList.remove("hidden");
    }
    event.preventDefault();
}

if (links2.length) {
    links2.forEach((link2) => {
        link2.addEventListener('click', (e) => {
            links2.forEach((link2) => {
                // selectedOption1.innerHTML = "";
                // let text = link.innerHTML;
                // selectedOption1.innerHTML = text;
                // link.nextElementSibling.classList.add("hidden");
                listbox2.classList.add("hidden");
                listbox8.classList.add("hidden");
            });

            e.preventDefault();
            // selectedOption1.innerHTML = ""
            // let text1 = link.innerHTML;
            // selectedOption1.innerHTML = text1
            // link2.nextElementSibling.classList.remove("hidden")

        });
    });
}

// Search funcality 
function myFunction2() {
    let input2, filter2, ul2, li2, a2, i, txtValue2;
    input2 = document.getElementById("myInput2");
    filter2 = input2.value.toUpperCase();
    ul2 = document.getElementById("listbox2");
    li2 = ul2.getElementsByTagName("li");
    for (i = 1; i < li.length; i++) {
        a2 = li[i].getElementsByTagName("a")[0];
        txtValue2 = a2.textContent || a2.innerText;
        if (txtValue2.toUpperCase().indexOf(filter2) > -1) {
            li[i].classList.remove("hidden");
        } else {
            li[i].classList.add("hidden");
        }
    }
    // e.preventDefault();
}

// Search funcality

// priority

// view 

// dropdown toggle
let listbox3 = document.getElementById("listbox3");

// let selectedOption1 = document.getElementById("selectedOption1");

// const links3 = document.querySelectorAll('.nav-link3');

function dropdowntoggle3() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.toggle("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");

    let links7 = document.querySelectorAll('.tablerow');


    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });
    event.preventDefault();
}

// view


// title 

// dropdown toggle
let listbox4 = document.getElementById("listbox4");

// let selectedOption1 = document.getElementById("selectedOption1");

// const links3 = document.querySelectorAll('.nav-link3');

function dropdowntoggle4() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.toggle("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");


    let links7 = document.querySelectorAll('.tablerow');

    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });

    event.preventDefault();
}

// title

// status 

// dropdown toggle
let listbox5 = document.getElementById("listbox5");

// let selectedOption1 = document.getElementById("selectedOption1");

// const links3 = document.querySelectorAll('.nav-link3');

function dropdowntoggle5() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.toggle("hidden");
    listbox6.classList.add("hidden");

    let links7 = document.querySelectorAll('.tablerow');


    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });

    event.preventDefault();
}

// status


// status 

// dropdown toggle
let listbox6 = document.getElementById("listbox6");

// let selectedOption1 = document.getElementById("selectedOption1");

// const links3 = document.querySelectorAll('.nav-link3');

function dropdowntoggle6() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.toggle("hidden");

    let links7 = document.querySelectorAll('.tablerow');


    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted dark:text-darktext"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`
    });
    event.preventDefault();
}

// status

// rowsdropdown 

// dropdown toggle



function tablelastTD() {
    let listbox7 = document.getElementById("listbox7");

    // let selectedOption1 = document.getElementById("selectedOption1");

    let links7 = document.querySelectorAll('.tablerow');

    if (links7.length) {
        links7.forEach((link7) => {
            link7.addEventListener('click', (e) => {
                links7.forEach((link7) => {
                    link7.innerHTML = `<button
                class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed"><svg
                    width="15" height="15" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                    <path
                        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    </path>
                </svg><span class="dropbtn sr-only">Open menu</span></button>`

                    // listbox7.classList.remove("hidden");

                });

                e.preventDefault();
                if (link7.matches('.tablelastrows')) {
                    link7.innerHTML = `<div class="relative">
                <button
                    class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                    aria-expanded="false" data-state="closed"><svg width="15" height="15"
                        viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4">
                        <path
                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        </path>
                    </svg><span class="sr-only">Open menu</span></button>

                <ul id="listbox7"
                    class="dropbtn dropdown-content absolute bottom-6  z-10 max-h-58 w-[180px] overflow-auto py-1 text-base ring-1 dark:bg-darkbackground ring-black ring-opacity-5 focus:outline-none sm:text-sm whitespace-nowrap rounded-md border dark:border-darkborder border-input bg-[#ffffff] px-1 shadow-sm ring-offset-background placeholder:text-[#71717a] dark:text-muted-foreground  focus:ring-1 focus:ring-ring"
                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3" style="right: 12px; width: 160px;">

                    <li class="dropbtn text-gray-900 relative w-full   dark:hover:bg-darkhovert dark:text-darktext  cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Edit</div>

                    </li>

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Make a copy</div>

                    </li>

                    

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Favourite</div>

                    </li>

                    <div role="separator" aria-orientation="horizontal"
                        class="-mx-1 my-1 h-px bg-muted"></div>

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Delete<span
                                class="ml-auto text-xs tracking-widest opacity-60">⌘⌫</span>
                        </div>

                    </li>

                </ul>
            </div>`
                }
                else {
                    link7.innerHTML = `
                <div class="relative">
                <button
                    class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent dark:hover:bg-darkhover hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                    type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                    aria-expanded="false" data-state="closed"><svg width="15" height="15"
                        viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4">
                        <path
                            d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                            fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                        </path>
                    </svg><span class="sr-only">Open menu</span></button>

                <ul id="listbox7"
                    class="dropbtn dropdown-content absolute z-10 max-h-58 w-[180px] overflow-auto py-1 text-base ring-1 dark:bg-darkbackground ring-black ring-opacity-5 focus:outline-none sm:text-sm whitespace-nowrap rounded-md border dark:border-darkborder border-input bg-[#ffffff] px-1 shadow-sm ring-offset-background placeholder:text-[#71717a] dark:text-muted-foreground  focus:ring-1 focus:ring-ring"
                    tabindex="-1" role="listbox" aria-labelledby="listbox-label"
                    aria-activedescendant="listbox-option-3" style="right: 12px; width: 160px;">

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Edit</div>

                    </li>

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Make a copy</div>

                    </li>

                    

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Favourite</div>

                    </li>

                    <div role="separator" aria-orientation="horizontal"
                        class="-mx-1 my-1 h-px bg-muted"></div>

                    <li class="dropbtn text-gray-900 relative   dark:hover:bg-darkhovert dark:text-darktext  w-full cursor-default select-none py-0.6 hover:bg-[#f4f4f5] hover:text-[#18181b]  dark:hover:bg-darkhover px-1 rounded-md"
                        id="listbox-option-0" role="option">
                        <div role="menuitem"
                            class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                            tabindex="-1" data-orientation="vertical"
                            data-radix-collection-item="">Delete<span
                                class="ml-auto text-xs tracking-widest opacity-60">⌘⌫</span>
                        </div>

                    </li>

                </ul>
            </div>`
                }

                listbox.classList.add("hidden");
                listbox1.classList.add("hidden");
                listbox2.classList.add("hidden");
                listbox8.classList.add("hidden");
                listbox3.classList.add("hidden");
                listbox4.classList.add("hidden");
                listbox5.classList.add("hidden");
                listbox6.classList.add("hidden");
            });
        });
    }

}

tablelastTD();


// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    let links7 = document.querySelectorAll('.tablerow');

    // tablelastTD()
    if (!event.target.matches('.dropbtn')) {
        listbox.classList.add("hidden");
        listbox1.classList.add("hidden");
        listbox2.classList.add("hidden");
        listbox8.classList.add("hidden");
        listbox3.classList.add("hidden");
        listbox4.classList.add("hidden");
        listbox5.classList.add("hidden");
        listbox6.classList.add("hidden");
        // listbox7.classList.add("hidden");
        listboxT.classList.add("hidden");

        links7.forEach((link7) => {
            link7.innerHTML = `<button
                class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
                type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
                aria-expanded="false" data-state="closed"><svg
                    width="15" height="15" viewBox="0 0 15 15" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                    <path
                        d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                        fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                    </path>
                </svg><span class="dropbtn sr-only">Open menu</span></button>`
        });
    }
}



// dropdown toggle
let listbox8 = document.getElementById("listbox8");

let selectedOption6 = document.getElementById("selectedOption6");

const links6 = document.querySelectorAll('.nav-link6');

function dropdowntoggle8() {

    // tablelastTD()
    // listbox7.classList.add("hidden");
    listbox.classList.add("hidden");
    listbox1.classList.add("hidden");
    listbox2.classList.add("hidden");
    listbox8.classList.add("hidden");
    listbox3.classList.add("hidden");
    listbox4.classList.add("hidden");
    listbox5.classList.add("hidden");
    listbox6.classList.add("hidden");
    listbox8.classList.toggle("hidden");

    let links7 = document.querySelectorAll('.tablerow');

    links7.forEach((link7) => {
        link7.innerHTML = ` <button
            class="items-center dropbtn justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground flex h-8 w-8 p-0 data-[state=open]:bg-muted"
            type="button" id="radix-:Rodannlbq6la:" aria-haspopup="menu"
            aria-expanded="false" data-state="closed"><svg
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" class="dropbtn h-4 w-4">
                <path
                    d="M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z"
                    fill="currentColor" fill-rule="evenodd" clip-rule="evenodd">
                </path>
            </svg><span class="dropbtn sr-only">Open menu</span></button>`

    });
}

if (links6.length) {
    links6.forEach((link6) => {
        link6.addEventListener('click', (e) => {
            links6.forEach((link6) => {
                selectedOption6.innerHTML = "";
                let text3 = link6.innerHTML;
                selectedOption6.innerHTML = text3;
                link6.nextElementSibling.classList.add("hidden");
                listbox8.classList.add("hidden");
                // document.body.addEventListener('click', () => {listbox6.classList.add("hidden")});
            });
            e.preventDefault();
            selectedOption6.innerHTML = "";
            let text3 = link6.innerHTML;
            selectedOption6.innerHTML = text3
            link6.nextElementSibling.classList.remove("hidden")
        });
    });
}
// dropdowntoggle end



// table slider start

// let flag = 0;
// let tableflag = 1;

// let tableindicator = document.getElementById("tableindicator")
// let slides = document.getElementsByClassName('slide');



// let slideslength = slides.length

// function controllerprev() {
//     nextid.removeAttribute("disabled")
//     mostforwardid.removeAttribute("disabled")

//     flag = flag - 1;
//     tableflag = tableflag - 1;
//     slideshow(flag);
//     if (tableflag <= 1) {
//         previd.setAttribute("disabled", "");
//         mostleastid.setAttribute("disabled", "");
//         return
//     }
// }


// function controllernext() {
//     previd.removeAttribute("disabled")
//     mostleastid.removeAttribute("disabled")

//     flag = flag + 1;
//     tableflag = tableflag + 1;
//     slideshow(flag);

//     if (tableflag == slides.length) {
//         nextid.setAttribute("disabled", "");
//         mostforwardid.setAttribute("disabled", "");
//         // tableflag=1
//         return
//     }
// }

// slideshow(flag);

// function slideshow(num) {

//     if (num == slides.length) {
//         flag = 0;
//         num = 0;
//     }

//     if (num < 0) {
//         flag = slides.length - 1;
//         num = slides.length - 1;
//     }

//     for (let y of slides) {
//         y.classList.add("hidden");
//     }

//     slides[num].classList.remove("hidden");
//     // tableindicator.innerHTML = `Page ${tableflag} of 10`

// }


// function golastpage() {
//     previd.removeAttribute("disabled")
//     mostleastid.removeAttribute("disabled")
//     nextid.setAttribute("disabled", "");
//     mostforwardid.setAttribute("disabled", "");


//     // if (tableflag > slides.length) {
//     //     tableflag = 1;
//     // }

//     flag = 9;
//     tableflag = 10;
//     slideshow(9);
//     // tableindicator.innerHTML = `Page 10 of 10`

// }


// function gofirstpage() {

//     nextid.removeAttribute("disabled")
//     mostforwardid.removeAttribute("disabled")
//     previd.setAttribute("disabled", "");
//     mostleastid.setAttribute("disabled", "");


//     // if (tableflag > slides.length) {
//     //     tableflag = 1;
//     // }

//     flag = 0;
//     tableflag = 1;
//     slideshow(0);
//     // tableindicator.innerHTML = `Page 1 of 10`

// }

// table slider end 


