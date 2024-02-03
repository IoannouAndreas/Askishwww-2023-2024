let bio = document.querySelector("#bio") //match the specific button -> biography button
bio.addEventListener('click', () =>{ // when button click
    document.querySelector('#bioContent').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#discographyContent').style.visibility = 'hidden'; 
    document.querySelector('#linksContent').style.visibility = 'hidden';
    document.querySelector('#photosContent').style.visibility = 'hidden';
    document.querySelector('#managementContent').style.visibility = 'hidden';
})

let foto = document.querySelector("#foto") // ->photos button
foto.addEventListener('click', () =>{
    document.querySelector('#photosContent').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#discographyContent').style.visibility = 'hidden'; 
    document.querySelector('#linksContent').style.visibility = 'hidden';
    document.querySelector('#bioContent').style.visibility = 'hidden';
    document.querySelector('#managementContent').style.visibility = 'hidden';
})

let works = document.querySelector("#works") // ->works button
works.addEventListener('click', () =>{
    document.querySelector('#discographyContent').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#photosContent').style.visibility = 'hidden'; 
    document.querySelector('#linksContent').style.visibility = 'hidden';
    document.querySelector('#bioContent').style.visibility = 'hidden';
    document.querySelector('#managementContent').style.visibility = 'hidden';
})

let links = document.querySelector("#links") // ->links button
links.addEventListener('click', () =>{
    document.querySelector('#linksContent').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#photosContent').style.visibility = 'hidden'; 
    document.querySelector('#discographyContent').style.visibility = 'hidden';
    document.querySelector('#bioContent').style.visibility = 'hidden';
    document.querySelector('#managementContent').style.visibility = 'hidden';
})

let managment = document.querySelector("#managment") // ->managment button
managment.addEventListener('click', () =>{
    document.querySelector('#managementContent').style.visibility = 'visible'; //reveal the corresponding message in aside
    document.querySelector('#photosContent').style.visibility = 'hidden'; 
    document.querySelector('#discographyContent').style.visibility = 'hidden';
    document.querySelector('#bioContent').style.visibility = 'hidden';
    document.querySelector('#linksContent').style.visibility = 'hidden';
})


let info = document.querySelector("#info")  
info.addEventListener('click', () =>{ 
    document.querySelector('#info_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let Death = document.querySelector("#Death")  
Death.addEventListener('click', () =>{ 
    document.querySelector('#Death_').style.visibility = 'visible'; 
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let Carear = document.querySelector("#Carear")  
Carear.addEventListener('click', () =>{ 
    document.querySelector('#Carear_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let songs_1980_1990_ = document.querySelector("#songs_1980-1990") 
songs_1980_1990_.addEventListener('click', () =>{ 
    document.querySelector('#songs_1980-1990_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let songs_1990_2000 = document.querySelector("#songs_1990-2000")  
songs_1990_2000.addEventListener('click', () =>{ 
    document.querySelector('#songs_1990-2000_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let songs_2000_2020 = document.querySelector("#songs_2000-2020")  
songs_2000_2020.addEventListener('click', () =>{ 
    document.querySelector('#songs_2000-2020_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let photo1_ = document.querySelector("#photo1")  
photo1_.addEventListener('click', () =>{ 
    document.querySelector('#photo1_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let photo2_ = document.querySelector("#photo2")  
photo2_.addEventListener('click', () =>{ 
    document.querySelector('#photo2_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let Interview_ = document.querySelector("#Interview")  
Interview_.addEventListener('click', () =>{ 
    document.querySelector('#Interview_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let videoclips_ = document.querySelector("#videoclips")  
videoclips_.addEventListener('click', () =>{ 
    document.querySelector('#videoclips_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#managment1_').style.visibility = 'hidden';

})

let managment1 = document.querySelector("#managment1")  
managment1.addEventListener('click', () =>{ 
    document.querySelector('#managment1_').style.visibility = 'visible'; 
    document.querySelector('#Death_').style.visibility = 'hidden';
    document.querySelector('#Carear_').style.visibility = 'hidden';
    document.querySelector('#songs_1980-1990_').style.visibility = 'hidden';
    document.querySelector('#songs_1990-2000_').style.visibility = 'hidden';
    document.querySelector('#songs_2000-2020_').style.visibility = 'hidden';
    document.querySelector('#photo1_').style.visibility = 'hidden';
    document.querySelector('#photo2_').style.visibility = 'hidden';
    document.querySelector('#Interview_').style.visibility = 'hidden';
    document.querySelector('#info_').style.visibility = 'hidden';
    document.querySelector('#videoclips_').style.visibility = 'hidden';

})

const userData = {
    username: "admin",
    password: "admin123",
};

// Στοιχεία σύνδεσης
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Στοιχεία διαχείρισης
const managementSection = document.getElementById("managementSection");

// Κουμπί Σύνδεσης
function login() {
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    if (enteredUsername === userData.username && enteredPassword === userData.password) {
        // Επιτυχής σύνδεση
        showManagementSection();
    } else {
        alert("Λάθος όνομα χρήστη ή κωδικός πρόσβασης.");
    }
}

// Κουμπί Αποσύνδεσης
function logout() {
    hideManagementSection();
}

function showManagementSection() {
    alert("Συνδεθήκατε!!!!!!!");
    document.getElementById("loginForm").classList.add("hidden");
    managementSection.classList.remove("hidden");
}

// Απόκρυψη τμήματος διαχείρισης
function hideManagementSection() {
    document.getElementById("loginForm").classList.remove("hidden");
    managementSection.classList.add("hidden");
}