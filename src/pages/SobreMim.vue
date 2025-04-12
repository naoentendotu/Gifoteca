<template>
  <q-page padding>
    <div class="q-mx-auto" style="max-width: 1024px">
      <h2 class="titulo" style="letter-spacing: 2px;">SOBRE</h2>

      <q-separator class="q-my-md" />
      <q-expansion-item-group v-model="openCard" expand-separator accordion>
        <!-- OBJETIVO -->
        <q-expansion-item icon="emoji_objects" label="Qual é o objetivo da aplicação" value="objetivo"
          class="bg-white text-primary q-mb-md rounded-xl shadow-2" header-class="text-h6 q-py-md q-px-lg"
          expand-icon-class="text-primary">
          <q-card flat class="bg-white text-primary">
            <q-card-section class="text-justify text-body1 q-px-lg q-pb-md">
              O objetivo desta aplicação é proporcionar uma experiência divertida e interativa através da busca e
              exibição de GIFs animados. Aqui você pode fazer sua própria coleção de GIFs.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- FERRAMENTAS -->
        <q-expansion-item icon="build_circle" label="Quais ferramentas foram utilizadas?" value="ferramentas"
          class="bg-white text-primary q-mb-md rounded-xl shadow-2" header-class="text-h6 q-py-md q-px-lg"
          expand-icon-class="text-primary">
          <q-card flat class="bg-white text-primary">
            <q-card-section class="text-justify text-body1 q-px-lg q-pb-md">
              Utilizei <strong>Quasar</strong>, <strong>Vue 3</strong>, <strong>Pinia</strong>,
              <strong>Tailwind</strong> e a <strong>API do GIPHY</strong> para criar uma aplicação interativa e
              responsiva. Tudo foi feito com foco na leveza, performance e diversão para o usuário!
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- DESAFIOS -->
        <q-expansion-item icon="bug_report" label="Quais foram os desafios no desenvolvimento?" value="desafios"
          class="bg-white text-primary q-mb-md rounded-xl shadow-2" header-class="text-h6 q-py-md q-px-lg"
          expand-icon-class="text-primary">
          <q-card flat class="bg-white text-primary">
            <q-card-section class="text-justify text-body1 q-px-lg q-pb-md">
              Durante o desenvolvimento, enfrentei desafios como a integração com a <strong>API do GIPHY</strong>,
              controle de estado entre componentes com o <strong>Pinia</strong> e estilização responsiva usando
              <strong>Tailwind</strong> e <strong>Quasar</strong> juntos. Como ainda estou aprendendo
              <strong>Vue</strong>, precisei explorar bastante a documentação e exemplos para entender melhor os
              conceitos e a estrutura do framework. Além disso, buscar um equilíbrio entre <strong>performance</strong>
              e <strong>estética</strong> foi essencial para garantir uma boa experiência para todos os usuários.
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- PERFIL -->
        <q-expansion-item icon="person" label="Quem sou eu?" value="perfil"
          class="bg-white text-primary q-mt-md rounded-xl shadow-2" header-class="text-h6 q-py-md q-px-lg"
          expand-icon-class="text-primary">
          <q-card flat class="bg-white text-primary">
            <q-card-section class="q-px-lg q-pb-md">
              <div class="flex items-center">
                <q-avatar size="80px" class="q-mr-md shadow-3">
                  <img src="icons/tulianaFoto.jpeg" alt="Foto de Tuliana Andrade">
                </q-avatar>
                <div>
                  <div class="text-h6">Tuliana Andrade</div>
                  <div class="text-subtitle2">Graduanda em Ciência da Computação</div>
                  <div class="text-subtitle2">UFMT - Universidade Federal de Mato Grosso</div>
                </div>
              </div>
            </q-card-section>
            <div class="text-justify text-body1 q-px-lg q-pb-md">
              Sou apaixonada por tecnologia e desenvolvimento de software. Ao longo da minha jornada acadêmica, tenho
              explorado diversas áreas da computação e, atualmente, estou no sexto semestre do curso de Ciência da
              Computação.
              Participo da <strong>Infocorp</strong>, a empresa júnior do <strong> Instituto de Computação</strong> da
              UFMT, onde trabalho
              em projetos
              no cargo de desenvolvedora <strong>Front-end</strong>, adquirindo experiência prática.

              Meu foco está em continuar explorando a área das aplicações web,
              pois acredito
              no impacto que pode gerar.
              Estou sempre aberta a novos desafios e oportunidades de crescimento profissional.
            </div>
          </q-card>
        </q-expansion-item>
      </q-expansion-item-group>

      <!-- REDES SOCIAIS -->
      <div class="q-mt-xl flex justify-center">
        <q-btn href="https://www.linkedin.com/in/tulianandrade" target="_blank" label="LinkedIn" color="primary"
          unelevated rounded class="q-px-md q-py-sm shadow-2 q-mr-sm" />
        <q-btn href="https://github.com/naoentendotu" target="_blank" label="GitHub" color="primary" unelevated rounded
          class="q-px-md q-py-sm shadow-2" />
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const openCard = ref<string | null>(null)
</script>
