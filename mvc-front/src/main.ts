import { CounterTwoView } from "./modules/counterTwo/CounterTwoView"
import {UsersContorller } from "./modules/users/usersController";
import { UsersModel } from "./modules/users/UsersModel";
import { UsersView } from "./modules/users/UsersView";

// Mount counter view
const counterElement = document.getElementById('counter1');
if (counterElement) {
    const counterView = new CounterTwoView(counterElement);
    counterView.mount();
} else {
    console.error('Counter element not found');
}

// Mount users view
const usersElement = document.getElementById('users');
if (usersElement) {
    const usersModel = new UsersModel();
    const usersController = new UsersContorller(usersModel);
    const usersView = new UsersView(usersElement, usersController);
    usersView.mount();
} else {
    console.error('Users element not found');
    
    // Создаем элемент динамически, если его нет
    const newUsersElement = document.createElement('div');
    newUsersElement.id = 'users';
    document.body.appendChild(newUsersElement);
    
    const usersModel = new UsersModel();
    const usersController = new UsersContorller(usersModel);
    const usersView = new UsersView(newUsersElement, usersController);
    usersView.mount();
}