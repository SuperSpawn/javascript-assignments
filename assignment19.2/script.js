const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];


const ol = document.getElementsByTagName('os');
users.forEach(function(value) {
    const li = document.createElement('li');
    li.innerText = value.firstName + ' ' + value.lastName;
    li.setAttribute('data-id', value.id);
    ol.appendChild(li);
});




