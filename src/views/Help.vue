<template>
  <div>
  <b-jumbotron bg-variant="info" text-variant="white" border-variant="light">
    <template v-slot:header>Помощь</template>

    <template v-slot:lead>
      В данном проекте реализована возможность просматривать, добавлять, изменять и удалять предметы таблицы предметов, игроки могут только смотреть
    </template>

    <hr class="my-4">

    <p>
      Чтобы игроку получить статус мастера, напишите на почту одному из наших администраторов:
    </p>
    <p>
        zoider@pm.me
    </p>
    <p>
        demkovich98@gmail.com
    </p>
  </b-jumbotron>
</div>
</template>

<script>
export default {
    name: 'Help'
}
</script>

<style>

</style>