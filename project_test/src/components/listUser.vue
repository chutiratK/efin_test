<template>
    <div class="list-table">
        <h1>User List ({{ totalUsers }})</h1>
        <div class="header-rows list-format-main">
            <p>Name</p>
            <p>Surname</p>
            <p>Age</p>
            <p>Phone Number</p>
            <p>Gender</p>
            <p>Email</p>
            <p></p>
        </div>
        <div class="data-rows">
            <div v-for="(user, index) in users" :key="index" class="list-format-main list-format">
                <p>{{ user.name }}</p>
                <p>{{ user.surname }}</p>
                <p>{{ user.age }}</p>
                <p>{{ user.phoneNumber }}</p>
                <p>{{ user.gender }}</p>
                <p>{{ user.email }}</p>
                <div class="actions">
                    <img @click="goToEditUser(user.id)" :src="editIcon" alt="Edit">
                    <img @click="deleteUser(user.id)" :src="removeIcon" alt="Delete">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../stores/userStore';
import editIcon from '../assets/edit.png'
import removeIcon from '../assets/remove.png'

export default {
    data() {
        return {
            editIcon,
            removeIcon
        }
    },
    setup() {
        const router = useRouter()
        const userStore = useUserStore()
        const users = computed(() => userStore.users)
        const totalUsers = computed(() => users.value.length);

        const goToEditUser = (id) => {
            router.push(`/edit-user/${id}`)
        }

        const deleteUser = (id) => {
            userStore.deleteUser(id)
        }

        return {
            users,
            goToEditUser,
            deleteUser,
            totalUsers
        }
    },
};
</script>

<style>
.list-table {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 50px;
    border-radius: 6px;
    background: #f7f7f7;
    margin-top: 30px;
    max-height: 500px;
    overflow: auto;
}
.list-format-main {
    display: grid;
    grid-template-columns: 1fr 1fr 0.5fr 1.5fr 0.5fr 1.5fr 1fr;
    gap: 10px;
    width: 100%;
    padding: 10px 0;
    color: #454545;
    font-size: 15px;
    font-weight: 600;
    border-bottom: 1px solid #e0e0e0;
}
.list-format {
    align-items: center;
    font-weight: 500;
}
.header-rows p{
    font-weight: 500 !important;
}
.data-row {
    display: contents;
}
.actions {
    display: flex;
    gap: 10px;
}
.actions img {
    cursor: pointer;
}
@media(max-width: 1024px) {
    .list-format-main {
        font-size: 12px;
    }
    .list-table h1 {
        font-size: 28px;
    }
}
@media(max-width: 800px) {
    .list-format-main {
        font-size: 10px;
    }
    .list-table {
        padding: 18px 40px;
        overflow: hidden;
        box-sizing: border-box;
    }
    .list-table h1 {
        font-size: 25px;
    }
    .actions img {
        width: 20px;
    }
}
@media(max-width: 500px) {
    .list-format-main {
        font-size: 7px;
    }
    .list-table h1 {
        font-size: 17px;
    }
    .actions img {
        width: 15px;
    }
}
</style>