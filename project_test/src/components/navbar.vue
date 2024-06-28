<template>
  <div className='navbar'>
        <div className='nav-logo'>
            <p>ADD-UPDATE-DELETE</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.navbar {
    display: flex;
    justify-content: space-around;
    padding: 16px;
    box-shadow: 0 1px 3px -2px black;
    align-items: center;
}
.nav-logo {
    display: flex;
    align-items: center;
    gap: 10px;
}
.nav-logo p {
    font-size: 30px;
    font-weight: 500;
    color: #626262;
}
@media(max-width:1280px) {
    .navbar{
        padding: 12px 50px;
    }
    .nav-logo p {
        font-size: 25px;
    }
}
@media (max-width:1024px) {
    .navbar{
        padding: 12px 30px;
    }
}
@media(max-width:800px) {
    .navbar {
        padding: 10px 0px;
        align-items: center;
    }
}
@media(max-width:500px) {
    .navbar {
        width: 8px 0px;
        gap: 0;
    }
    .nav-logo {
        transform: scale(0.8);
    }
}
</style>