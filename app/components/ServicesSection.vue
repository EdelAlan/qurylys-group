<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Наши услуги
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Мы оказываем полный комплекс строительных и ремонтных работ для вашего
          дома
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.id"
          class="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
          <div class="flex items-center mb-4">
            <div
              class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center"
            >
              <UIcon :name="service.icon" class="w-6 h-6 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold text-gray-900 ml-4">
              {{ service.title }}
            </h3>
          </div>

          <p class="text-gray-600 mb-4">{{ service.description }}</p>

          <div class="space-y-2">
            <div
              v-for="item in service.items"
              :key="item"
              class="flex items-center text-sm text-gray-700"
            >
              <UIcon
                name="i-heroicons-check"
                class="w-4 h-4 text-orange-600 mr-2"
              />
              {{ item }}
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-gray-200">
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500">От</span>
              <span class="text-2xl font-bold text-orange-600"
                >{{ service.priceFrom }} ₸</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center mt-16">
        <div
          class="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-2xl p-8 sm:p-12"
        >
          <h3 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Нуждаетесь в другой услуге?
          </h3>
          <p class="text-lg text-gray-600 mb-6">
            Обратитесь к нам за бесплатной консультацией
          </p>
          <UButton size="lg" @click="$emit('openContact')">
            Получить консультацию
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["openContact"]);

const services = [
  {
    id: 1,
    title: "Капитальный ремонт",
    description: "Полный цикл ремонтных работ от демонтажа до чистовой отделки",
    icon: "i-heroicons-wrench-screwdriver",
    priceFrom: "15000",
    items: [
      "Демонтажные работы",
      "Электромонтаж и сантехника",
      "Стяжка пола и штукатурка",
      "Чистовая отделка",
    ],
  },
  {
    id: 2,
    title: "Косметический ремонт",
    description: "Обновление интерьера без кардинальных изменений",
    icon: "i-heroicons-paint-brush",
    priceFrom: "8000",
    items: [
      "Малярные работы",
      "Поклейка обоев",
      "Укладка ламината",
      "Установка плинтусов",
    ],
  },
  {
    id: 3,
    title: "Дизайн-проект",
    description: "Разработка индивидуального дизайн-проекта вашего дома",
    icon: "i-heroicons-squares-2x2",
    priceFrom: "50000",
    items: [
      "Планировочные решения",
      "3D-визуализация",
      "Подбор материалов",
      "Техническая документация",
    ],
  },
  {
    id: 4,
    title: "Электромонтажные работы",
    description: "Профессиональный монтаж электропроводки",
    icon: "i-heroicons-bolt",
    priceFrom: "3000",
    items: [
      "Прокладка кабелей",
      "Установка розеток и выключателей",
      "Монтаж светильников",
      "Подключение электроприборов",
    ],
  },
  {
    id: 5,
    title: "Сантехнические работы",
    description: "Монтаж и ремонт сантехнического оборудования",
    icon: "i-heroicons-wrench",
    priceFrom: "2500",
    items: [
      "Установка сантехники",
      "Прокладка труб",
      "Монтаж систем отопления",
      "Устранение протечек",
    ],
  },
  {
    id: 6,
    title: "Отделка балконов",
    description: "Утепление и отделка балконов и лоджий",
    icon: "i-heroicons-window",
    priceFrom: "25000",
    items: [
      "Остекление балкона",
      "Утепление стен",
      "Отделка пола и потолка",
      "Установка мебели",
    ],
  },
];
</script>
