<template>
    <div class="home">
        <div class="add-btn">
            <img :src="addIcon" alt="Add Icon">
            <button @click="goToAddUser">Add User</button>
        </div>
        <ListUser/>
    </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import addIcon from '../assets/add-to-basket.png'
import ListUser from '../components/listUser.vue'

export default {
    components: { ListUser },
    setup() {
        const router = useRouter()
        const userStore = useUserStore()
        const users = computed(() => userStore.users)
        const goToAddUser = () => {
            router.push('/add-user')
        }
        return {
            users,
            goToAddUser,
        }
    },

    data() {
        return {
            addIcon
        }
    }
}
</script>

<style>
.home {
    padding: 50px 100px;
    margin: auto;
}
.add-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    background: #f6f6f6;
    gap: 20px;
    cursor: pointer;
    width: 200px;
    height: 50px;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
}

.add-btn:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.add-btn button {
    border: none;
    background: none;
    cursor: pointer;
    font-weight: 600;
    color: #6a6a6a;
    transition: color 0.3s ease;
}
</style>


  