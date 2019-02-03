// the route here goes starting from public folder
document.addEventListener('DOMContentLoaded', () => {
    const deletes = document.querySelectorAll(".delete-user");
    deletes.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.dataset.id;
            fetch('users/delete/' + id, {method: 'DELETE'}).then(res => res).then(res => {
                window.location.replace('/')
            }).catch(err => { console.log(err) })
        })
    })
})