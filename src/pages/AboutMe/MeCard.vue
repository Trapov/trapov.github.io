<template>

<container fluid column row row-if-md align-items="center" justify-content="center">
  <container :size="6">
    <div class="avatar"></div>
  </container>
  <container fluid row :size="2" column-if-md>
    <div>
        <a href="https://github.com/Trapov">
        <img class="icon" src="https://img.icons8.com/ios/50/000000/github.png"/>
        </a>
    </div>
    <div>
        <a href="https://t.me/DmitryAAD">
        <img class="icon" src="https://img.icons8.com/ios-filled/50/000000/telegram-app.png"/>
        </a>
    </div>
    <div>
        <a href="https://www.linkedin.com/in/dmitry-afonin-a48a0b163/">
        <img class="icon" src="https://img.icons8.com/ios/50/000000/linkedin.png"/>
        </a>
    </div>
  </container>
</container>

</template>

<script>
import Container from '../../components/Container';

export default {
  components: {
    Container
  }
}
</script>

<style>
.icon {
  filter: invert(100%);
}

.icon:hover {
  cursor: pointer;
  filter: invert(100%) contrast(0.5) sepia(1) hue-rotate(89deg) !important;
}


@media screen and (max-width: 350px) {
  .avatar {
    width: 116px !important;
    height: 149px !important;

    background-size: 116px 149px !important;
  }

}

.avatar:hover {
  border-color: aqua;
  cursor: pointer;
}
.avatar:hover::before {
  background-color: aqua;
  color: brown;
}
.avatar::before::after {
  content: " ";
    right: 0;
    border-left: 7px solid transparent;
    border-right: 7px solid whitesmoke;
    border-bottom: 7px solid transparent;
    border-top: 7px solid whitesmoke;
}
.avatar::before {
  position: absolute;
  border-style: dotted;
  border-color: black;

  color:whitesmoke;
  letter-spacing: 2px;
  padding: 5px;
  margin: 0px -15px 0px -25px;
  transform: rotate(-45deg);
  background-color: darkorchid;
  content: 'Hired';
}
.avatar {
  margin-top: 35px;
  border-style: dashed;
  width: 195px;
  height: 248px;
  margin: 0 25px 0 25px;
  border-radius: 5%;
  background-repeat: no-repeat;
  background-size: 195px 248px;
  background-image: url("~@/assets/me.jpg");
}



</style>