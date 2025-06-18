let userContainer = document.querySelector('.userContainer');
let searchInput = document.querySelector('#searchInput');

const users = [
    {
        profileUrl: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=60",
        name: 'Aaravi Mehta',
        email: 'aaravi.mehta@gmail.com',
    },
    {
        profileUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=60",
        name: 'Ishit Sharma',
        email: 'ishit.sharma@yahoo.com',
    },
    {
        profileUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=60",
        name: 'Kanika Kapoor',
        email: 'rohanika.kapoor@hotmail.com',
    },
    {
        profileUrl: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=60",
        name: 'Simrit Kaur',
        email: 'simrit.kaur@gmail.com',
    },
    
];


// Render function using map
function renderUsers(arr) {
    userContainer.innerHTML = "";
    arr.map(function(obj) {
        let elem = document.createElement('div');
        elem.className = 'userItem';
        elem.innerHTML = `
            <img src="${obj.profileUrl}" alt="${obj.name}">
            <div class="userDetails">
                <h3>${obj.name}</h3>
                <p>${obj.email}</p>
            </div>
        `;
        userContainer.appendChild(elem);
    });
}

// Initial render
renderUsers(users);

// Search logic using filter
function handleSearch(e) {
    let searchValue = e.target.value.toLowerCase();
    let filteredUsers = users.filter(obj => {
        return (
            obj.name.toLowerCase().includes(searchValue) ||
            obj.email.toLowerCase().includes(searchValue)
        );
    });

    renderUsers(filteredUsers);
}

// Attach event
searchInput.addEventListener('input', handleSearch);
