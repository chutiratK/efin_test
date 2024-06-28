<template>
    <div class="addUser-form">
      <h1>Add User</h1>
      <hr/>
      <form @submit.prevent="addUser">
        <div class="name-surname">
            <div class="addUser-itemField">
                <label>Name</label>
                <input v-model="name" type="text" placeholder="Enter here" required />
            </div>
            <div class="addUser-itemField">
                <label>Surname</label>
                <input v-model="surname" type="text" placeholder="Enter here" required />
            </div>
        </div>
        
        <div class="phoneNumber-gender">
            <div class="addUser-itemField">
                <label>Phone number</label>
                <input v-model="formattedPhoneNumber" type="tel" class="phone-input" maxlength="12" placeholder="08X-XXX-XXXX" required />
            </div>
            <div class="gender-age">
                <div class="addUser-itemField">
                    <label>Gender</label>
                    <select v-model="gender" class="gender-selector" required>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div class="addUser-itemField">
                    <label>Age</label>
                    <input v-model="age" type="number" class="age" maxlength="3" required />
                </div>
            </div>
        </div>
        
        <div class="addUser-itemField">
            <label>Email</label>
            <input v-model="email" type="email" placeholder="example@gmail.com" required />
        </div>
        <div class="submit-btn">
            <button class="submit" type="submit">Submit</button>
            <button class="backToHome" @click="backToHome">Back</button>
        </div>
      </form>
    </div>
</template>

<script>
import { useUserStore } from '../stores/userStore'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

export default {
    data() {
        return {
            phoneNumber: ''
        };
    },
    setup() {
        const userStore = useUserStore()
        const router = useRouter()
        const name = ref('')
        const surname = ref('')
        const phoneNumber = ref('')
        const gender = ref('')
        const email = ref('')
        const age = ref('')
        
        const backToHome = () => {
            router.push('/')
        }

        const addUser = () => {
            userStore.addUser({
                name: name.value,
                surname: surname.value,
                phoneNumber: phoneNumber.value.replace(/-/g, ''),
                gender: gender.value,
                age: age.value,
                email: email.value
            })
            alert('Added success')
            router.push('/')
        }
        const formattedPhoneNumber = computed({
            get() {
                let digits = phoneNumber.value.replace(/\D/g, '').slice(0, 10);
                let formatted = '';
                if (digits.length > 3) {
                    formatted += digits.slice(0, 3) + '-';
                    if (digits.length > 6) {
                        formatted += digits.slice(3, 6) + '-';
                        formatted += digits.slice(6);
                    } else {
                        formatted += digits.slice(3);
                    }
                } else {
                    formatted = digits;
                }
                return formatted;
            },
            set(value) {
                phoneNumber.value = value.replace(/\D/g, '').slice(0, 10);
            }
        });

        return {
            name,
            surname,
            phoneNumber,
            gender,
            age,
            email,
            addUser,
            formattedPhoneNumber,
            backToHome
        }
    },
}
</script>

<style>
.addUser-form {
    box-sizing: border-box;
    width: 100%;
    max-width: 800px;
    padding: 40px 80px;
    margin: 40px auto;
    border-radius: 6px;
    background: #f7f7f7;
}
.addUser-itemField {
    width: 100%;
    color: #7b7b7b;
    font-size: 16px;
    display: flex;
    flex-direction: column;
}
.phoneNumber-input {
    width: 50% !important;
}
.addUser-itemField input {
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
.phoneNumber-gender {
    display: flex;
    gap: 40px;
}
.gender-selector {
    padding: 10px;
    width: 100px;
    height: 50px;
    font-size: 14px;
    color: #7b7b7b;
    border: 1px solid #7b7b7b8d;
    border-radius: 4px;
}
.name-surname, .phoneNumber-gender {
    display: flex;
    gap: 20px;
}
.submit-btn {
    display: flex;
    justify-content: center;
    gap: 20px;
}
.submit-btn button{
    margin-top: 20px;
    width: 160px;
    height: 50px;
    border-radius: 6px;
    background: #6079ff;
    border: none;
    cursor: pointer;
    color: white;
    font-size: 16px;
    font-weight: 500;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.submit-btn .backToHome {
    background: #e04f4f;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.submit-btn button:hover,
.submit-btn .backToHome:hover {
    transform: scale(1.05); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
}
.gender-age {
    display: flex;
    gap: 20px;
}
.addUser-form form{
    margin-top: 20px;
}
</style>
  