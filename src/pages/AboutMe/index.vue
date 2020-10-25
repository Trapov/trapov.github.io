<template>
  <container fluid column align-items="center">
    <h1>
      {{ $t('aboutMe.header') }}
    </h1>
    <container class="little-margin-bottom-offset" fluid row>
      <container class="if-hover-hightlight" fluid row column-if-md :size="6">
        <me-card />
        <container  :size="2">
          <p>
            🧑: {{ $t('aboutMe.name') }}
          </p>
          <p>
            🧓: <time-since :when="new Date('1995-02-14T02:00:00+0500')" />  {{ $t('aboutMe.old') }}
          </p>
          <p>
            👩‍💻:  {{ $t('aboutMe.workexp') }} <time-since :when="new Date('2017-02-14T02:00:00+0500')" />
          </p>
          <p>
            🌍: {{ $t('aboutMe.location') }}
          </p>
          <hr />
          <p>
            💕: {{ $t('aboutMe.hobbies') }}
          </p>
        </container>
      </container>
      <container class="if-hover-hightlight" :size="6">
        <skills />
      </container>
    </container>
    <div @click="this.$router.push('my-projects');" class="forward"> 
      👇
    </div>
  </container>
</template>

<script>
  import TimeSince from '../../components/TimeSince';
  import Container from '../../components/Container';

  import MeCard from './MeCard';
  import Skills from './Skills';

  export default {
    components: {
      TimeSince,
      Container,
      MeCard,
      Skills
    },
    name: 'AboutMe',
    data() {
      return {
        birthday: new Date('02-14-1995 02:00')
      }
    },
    methods: {

    },
    computed: {
      age() {
        return this.timeSince(new Date(), this.birthday).seconds
      }
    }
  }
</script>

<style scoped>
.little-margin-bottom-offset {
  margin-bottom: 10px;
}
.forward {
  font-size: larger;
  text-align: center;
  cursor: pointer;
  padding: 1px 50px 1px 50px;
}

.forward:hover {
  background-color: blueviolet;
  border-radius: 5%;
}

@media screen and (max-width: 350px) {
  .avatar {
    width: 116px !important;
    height: 149px !important;

    background-size: 116px 149px !important;
  }

}
.if-hover-hightlight:hover {
  transition: background-color 1s ease-in-out;
  background-color: #32797159;
  border-radius: 2%;
}
@media screen and (max-width: 950px) {
  .hoverable-list .with-padding {
    padding: 0px !important;
  }
  .hoverable-list > li{
    cursor: pointer;
    font-size: 16px !important;
    margin-left: -15px;
  }
}
</style>
