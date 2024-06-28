<template>
    <div class="updateUser-form">
        <h1>Edit User</h1>
        <hr/>
        <form @submit.prevent="updateUser">
            <div class="name-surname">
                <div class="updateUser-itemField">
                    <label>Name</label>
                    <input v-model="formData.name" type="text" placeholder="Enter here" required />
                </div>
                <div class="updateUser-itemField">
                    <label>Surname</label>
                    <input v-model="formData.surname" type="text" placeholder="Enter here" required />
                </div>
            </div>
            
            <div class="phoneNumber-gender">
                <div class="updateUser-itemField">
                    <label>Phone number</label>
                    <input v-model="formData.phoneNumber" type="tel" class="phone-input" maxlength="12" placeholder="08X-XXX-XXXX" required />
                </div>
                <div class="gender-age">
                    <div class="updateUser-itemField">
                        <label>Gender</label>
                        <select v-model="formData.gender" class="gender-selector" required>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div class="updateUser-itemField">
                        <label>Age</label>
                        <input v-model.number="formData.age" type="number" class="age" maxlength="3" required />
                    </div>
                </div>
            </div>
            
            <div class="updateUser-itemField">
                <label>Email</label>
                <input v-model="formData.email" type="email" placeholder="example@gmail.com" required />
            </div>
            <div class="submit-btn">
                <button class="submit" type="submit">Submit</button>
                <button class="backToHome" @click="backToHome">Back</button>
            </div>
        </form>
    </div>
</template>

<script>
import { useUserStore } from '../stores/userStore';
import { useRouter, useRoute } from 'vue-router';

export default {
    setup() {
        const userStore = useUserStore();
        const router = useRouter();
        const route = useRoute();
        const id = Number(route.params.id);
        
        const formData = {
            name: '',
            surname: '',
            phoneNumber: '',
            gender: '',
            email: '',
            age: 0
        };

        const fetchUserData = () => {
            const user = userStore.users.find(user => user.id === id);
            if (user) {
                formData.name = user.name;
                formData.surname = user.surname;
                formData.phoneNumber = user.phoneNumber;
                formData.gender = user.gender;
                formData.email = user.email;
                formData.age = user.age;
            }
        };

        fetchUserData();

        const updateUser = () => {
            userStore.updateUser({
                id,
                name: formData.name,
                surname: formData.surname,
                phoneNumber: formData.phoneNumber,
                gender: formData.gender,
                email: formData.email,
                age: formData.age
            });
            alert('Updated success!')
            router.push('/');
        };

        const backToHome = () => {
            router.push('/');
        };

        return {
            id,
            formData,
            updateUser,
            backToHome
        };
    }
};
</script>

<style>
.updateUser-form {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    padding: 40px 80px;
    margin: 40px auto;
    border-radius: 6px;
    background: #f7f7f7;
}
.updateUser-itemField {
    width: 100%;
    color: #7b7b7b;
    font-size: 16px;
    display: flex;
    flex-direction: column;
}
.phoneNumber-input {
    width: 50% !important;
}
.updateUser-itemField input {
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    border-radius: 4px;
    padding-left: 15px;
    border: 1px solid #c3c3c3c3;
    outline: none;
    color: #7b7b7b;
    font-family: 'Poppins';
    font-size: 14px;
}
.updateUser-form form{
    margin-top: 20px;
}
@media(max-width: 1024px) {
    .updateUser-form {
        padding: 35px 70px;
        margin: 40px auto;
    }
    .updateUser-form h1{
        font-size: 28px;
    }
    .updateUser-itemField {
        width: 100%;
        font-size: 14px;
    }
    .updateUser-itemField input {
        width: 100%;
        height: 40px;
        padding-left: 12px;
        font-size: 14px;
    }
    .submit-btn button{
        margin-top: 20px;
        width: 150px;
        height: 40px;
        font-size: 14px;
    }
    .gender-selector {
        width: 80px;
        height: 40px;
        font-size: 12px;
    }
}
@media(max-width: 800px) {
    .updateUser-form {
        padding: 35px 70px;
        margin: 40px auto;
    }
    .updateUser-form h1{
        font-size: 24px;
    }
    .updateUser-itemField {
        width: 100%;
        font-size: 12px;
    }
    .updateUser-itemField input {
        width: 100%;
        height: 40px;
        padding-left: 12px;
        font-size: 14px;
    }
    .submit-btn button{
        margin-top: 20px;
        width: 140px;
        height: 35px;
        font-size: 14px;
    }
    .gender-selector {
        width: 60px;
        height: 40px;
        font-size: 12px;
    }
}
@media(max-width: 500px) {
    .updateUser-form {
        padding: 20px 20px;
    }
    .updateUser-form h1 {
        font-size: 20px;
    }
    .updateUser-itemField input,
    .gender-selector,
    .submit-btn button {
        width: 100%;
        margin-top: 10px;
    }
}
</style>
    
  