<template>
  
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {
        register: false,
        login: false,
        log: true,
        reg: true,
        msg: 'Home',
        showCard: false,
        accountUser: {
          name: '',
          email: '',
          password: ''
        }

      }
    },

    mounted() {

    },

    methods: {
      userLogin() {
        var user = { email: this.accountUser.email, password: this.accountUser.password }
        this.$store.dispatch('login', user).then(() => {
          this.resetFields()
        })
      },

      userRegister() {
        this.$store.dispatch('register', this.accountUser).then(() => {
          this.resetFields()
        })
      },

      resetFields() {
        this.reg = true;
        this.log = true;
        this.login = false;
        this.register = false;
        this.accountUser = {};
      },

      logout() {
        this.$store.dispatch('logout', this.accountUser)
      },

      toggleLogin() {
        this.login = !this.login;

        if (this.login == false) {
          this.reg = true;
        } else {
          this.reg = false;
        }
      },

      toggleRegister() {
        this.register = !this.register
        if (this.register == false) {
          this.log = true;
        } else {
          this.log = false;
        }
      }

    },

    computed: {
      activeUser() {
        if (this.$store.state.activeUser1.name != '') {
          showCard = true;
        } else {
          showCard = false;
        }
      }
    }

  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .tiny {
    height: 2rem;
    width: 2rem;
    margin-left: 10%;
  }
  /* ANIMATIONS */

  @keyframes flipInX {
    from {
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      animation-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      animation-timing-function: ease-in;
    }

    60% {
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    to {
      transform: perspective(400px);
    }
  }

  .flipInX {

    animation-name: flipInX;
    animation-duration: 750ms;
  }
</style>