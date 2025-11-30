<template>
  <section id="about" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Почему выбирают нас
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Мы — команда профессионалов, которая вот уже 8 лет создаёт красивые и
          комфортные дома для жителей Алматы
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Company Info -->
        <div>
          <h3 class="text-2xl font-bold text-gray-900 mb-6">
            Qurylys Group — надёжный партнёр в строительстве
          </h3>
          <div class="space-y-4 text-gray-700">
            <p>
              Наша компания специализируется на комплексном ремонте квартир в
              Алматы. Мы превращаем ваши идеи в реальность, создавая
              пространства, в которых хочется жить.
            </p>
            <p>
              За годы работы мы выполнили более 300 проектов, каждый из которых
              уникален. Мы гордимся нашими довольными клиентами и стабильным
              высоким рейтингом.
            </p>
          </div>

          <div class="mt-8">
            <UButton size="lg" @click="$emit('openContact')">
              Обсудить проект
            </UButton>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center p-6 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl"
          >
            <div class="text-4xl font-bold text-orange-600 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-700 font-medium">
              {{ stat.label }}
            </div>
            <div class="text-sm text-gray-500 mt-1">
              {{ stat.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- Advantages -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="advantage in advantages"
          :key="advantage.title"
          class="text-center p-6"
        >
          <div
            class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <UIcon :name="advantage.icon" class="w-8 h-8 text-orange-600" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-3">
            {{ advantage.title }}
          </h3>
          <p class="text-gray-600">
            {{ advantage.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["openContact"]);

const stats = [
  {
    value: "8+",
    label: "лет на рынке",
    description: "Опыт и экспертиза",
  },
  {
    value: "300+",
    label: "проектов",
    description: "Успешно выполненных",
  },
  {
    value: "50+",
    label: "специалистов",
    description: "Профессиональная команда",
  },
  {
    value: "4.9",
    label: "рейтинг",
    description: "Оценка клиентов",
  },
];

const advantages = [
  {
    icon: "i-heroicons-shield-check",
    title: "Гарантия качества",
    description:
      "Мы гарантируем высокое качество всех выполняемых работ и предоставляем гарантию на 2 года.",
  },
  {
    icon: "i-heroicons-currency-dollar",
    title: "Фиксированная цена",
    description:
      "Никаких скрытых доплат. Цена, оговорённая в договоре, остаётся неизменной до конца работ.",
  },
  {
    icon: "i-heroicons-clock",
    title: "Соблюдение сроков",
    description:
      "Мы ценим ваше время и всегда сдаём объекты в оговорённые сроки. Контроль на каждом этапе.",
  },
];
</script>
