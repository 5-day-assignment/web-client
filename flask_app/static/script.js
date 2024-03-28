// Endpoints
const findUser = id =>
    fetch(`api/users/${ id }`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }).then(response => {
        if (response.ok)
            return response.json()
        throw new Error('Fail')
    }).catch(err => console.error(`User not found (id: ${ id }).`, err))

const createNewUser = (givenName, familyName, username, address, password) => {
    if (!(givenName && familyName && username && address && password)) {
        console.error('All values must be filled.')
        return null
    }

    const user = {
        givenName,
        familyName,
        username,
        address,
        password,
    }
    return fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok)
            return response.json()
        throw new Error('Fail')
    }).catch(err => console.error('Failed to create user:', user, err))
}
const editUser = (id, givenName, familyName, username, address, password) => {
    const user = {}
    if (givenName) user.givenName = givenName;
    if (familyName) user.familyName = familyName;
    if (username) user.username = username;
    if (address) user.address = address;
    if (password) user.password = password;
    return fetch(`/api/users/${ id }`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }).then(response => {
        if (response.ok)
            return response.json()
        throw new Error('Fail')
    }).catch(err => console.error(`Failed to update user (id: ${ id })`, user, err))
}

const deleteUser = id =>
    fetch(`/api/users/${ id }`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }).then(response => {
        if (response.ok)
            return true
        throw new Error('Fail')
    }).catch(err => console.error(`Failed to delete user (id: ${ id })`, err))

// Modal forms
const clearModalInputs = modal => modal.querySelectorAll('input').forEach(input => input.value = '');
const closeModal = () => document.querySelectorAll('.modal').forEach(modal => modal.style.display = 'none');

const openEditModal = async (userId) => {
    const user = await findUser(userId);

    if(!user) return;

    const modal = document.getElementById('editUserModal');
    modal.querySelector('[name="givenName"]').value = user.givenName;
    modal.querySelector('[name="familyName"]').value = user.familyName;
    modal.querySelector('[name="username"]').value = user.username;
    modal.querySelector('[name="address"]').value = user.address;
    modal.setAttribute('data-id', userId);
    modal.style.display = 'block'
};

const openDeleteModal = async (userId) => {
    const user = await findUser(userId);

    if(!user) return;

    const modal = document.getElementById('deleteUserConfirmModal');
    modal.querySelector('.givenName').textContent = user.givenName;
    modal.querySelector('.familyName').textContent = user.familyName;
    modal.querySelector('.username').textContent = user.username;
    modal.querySelector('.address').textContent = user.address;
    modal.setAttribute('data-id', userId);
    modal.style.display = 'block'
};

// Manipulate list
const listEntryTemplate = (user) => `
    <div class="flex vertical">
        <div>@${ user.username }</div>
        <div class="small light">${ user.givenName } ${ user.familyName }, ${ user.address }</div>
    </div>
    <i name="openEditModal" class="lni lni-pencil-alt ml-auto" data-id='${ user.id }'></i>
    <i name="openDeleteModal" class="lni lni-trash-can" data-id='${ user.id }'></i>`

const addUserToList = (user) => {
    const userDiv = document.createElement('div')
    userDiv.className = 'flex'
    userDiv.dataset.id = user.id
    userDiv.innerHTML = listEntryTemplate(user)
    document.getElementById("user-list").appendChild(userDiv)
}
const editUserOnList = (user) => {
    const editUserModal = document.getElementById('editUserModal')
    const listItem = document.querySelector(`#user-list [data-id="${ user.id }"]`)
    listItem.innerHTML = listEntryTemplate(user)
}
const removeUserFromList = (userId) => {
    document.getElementById("user-list").querySelector(`[data-id="${ userId }"]`).remove()
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[name="openNewUserModal"]').addEventListener('click', () =>
        document.getElementById('newUserModal').style.display = 'block'
    );

    document.querySelectorAll('[name="openDeleteModal"]').forEach(button => {
        button.addEventListener('click', () => {
            const userId = button.getAttribute('data-id');
            openDeleteModal(userId);
        });
    });
});

document.addEventListener('click', function(event) {
    if (event.target.matches('[name="openEditModal"]')) {
        const userId = event.target.dataset.id;
        openEditModal(userId);
    } else if (event.target.matches('[name="openDeleteModal"]')) {
        const userId = event.target.dataset.id;
        openDeleteModal(userId);
    } else if (event.target.matches('.btn-cancel')) {
        closeModal()
    } else if (event.target.matches('.btn-confirm')) {
        const newUserModal = document.getElementById('newUserModal');
        if (newUserModal.contains(event.target)) {
            const givenName = newUserModal.querySelector('[name="givenName"]').value;
            const familyName = newUserModal.querySelector('[name="familyName"]').value;
            const username = newUserModal.querySelector('[name="username"]').value;
            const address = newUserModal.querySelector('[name="address"]').value;
            const password = newUserModal.querySelector('[name="password"]').value;
            createNewUser(givenName, familyName, username, address, password).then(newUser => {
                if (!newUser) return;

                addUserToList(newUser);
                closeModal();
                clearModalInputs(newUserModal);
            });
        } else if (document.getElementById('editUserModal').contains(event.target)) {
            const editUserModal = document.getElementById('editUserModal');
            const userId = editUserModal.dataset.id;
            const givenName = editUserModal.querySelector('[name="givenName"]').value;
            const familyName = editUserModal.querySelector('[name="familyName"]').value;
            const username = editUserModal.querySelector('[name="username"]').value;
            const address = editUserModal.querySelector('[name="address"]').value;
            const password = editUserModal.querySelector('[name="password"]').value;
            editUser(userId, givenName, familyName, username, address, password).then(updatedUser => {

                if (!updatedUser) return;

                editUserOnList(updatedUser);
                closeModal();
                clearModalInputs(editUserModal);
            });
        } else if (document.getElementById('deleteUserConfirmModal').contains(event.target)) {
            const deleteUserModal = document.getElementById('deleteUserConfirmModal');
            const userId = deleteUserModal.dataset.id;
            deleteUser(userId).then(success => {
                if (!success) return;
                removeUserFromList(userId);
                closeModal();
            });
        }
    }
});
