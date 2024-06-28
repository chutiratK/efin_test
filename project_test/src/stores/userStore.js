import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users') || '[]')
  }),
  actions: {
    addUser(user) {
      user.id = this.users.length ? this.users[this.users.length - 1].id + 1 : 1;
      this.users.push(user);
      this.saveUsers();
    },
    updateUser(updatedUser) {
      const index = this.users.findIndex(user => user.id === updatedUser.id)
      if (index !== -1) {
        this.users.splice(index, 1, updatedUser)
        this.saveUsers();
      }
    },
    deleteUser(userId) {
      this.users = this.users.filter(user => user.id !== userId);
      this.saveUsers();
    },
    saveUsers() {
      localStorage.setItem('users', JSON.stringify(this.users));
    },
  }
});
