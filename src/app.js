import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            todos: [
                'Get Shopping', 'Cook Dinner', 'Wash Dishes'
            ],
            newTodo: ""
        },
        methods: {
            saveNewTodo: function(){
                this.todos.push(this.newTodo);
                this.newTodo = "";
            },
        },
    });
});