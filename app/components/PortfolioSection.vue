<template>
  <section id="portfolio" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Наши работы
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Мы гордимся каждым выполненным проектом и с удовольствием показываем
          вам результаты
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center mb-12">
        <UButton
          v-for="filter in filters"
          :key="filter.value"
          :variant="activeFilter === filter.value ? 'solid' : 'ghost'"
          size="lg"
          class="mb-2 mx-2"
          @click="activeFilter = filter.value"
        >
          {{ filter.label }}
        </UButton>
      </div>

      <!-- Portfolio Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <!-- Image -->
          <div
            class="aspect-video bg-gradient-to-br from-orange-100 to-yellow-100 relative overflow-hidden"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <UIcon
                name="i-heroicons-photo"
                class="w-16 h-16 text-orange-300"
              />
            </div>
            <div class="absolute top-4 left-4">
              <UBadge
                :color="getBadgeColor(project.type)"
                variant="solid"
                size="sm"
              >
                {{ getTypeLabel(project.type) }}
              </UBadge>
            </div>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ project.description }}
            </p>

            <!-- Details -->
            <div class="space-y-2 text-sm text-gray-700">
              <div class="flex items-center">
                <UIcon
                  name="i-heroicons-map-pin"
                  class="w-4 h-4 text-gray-400 mr-2"
                />
                {{ project.location }}
              </div>
              <div class="flex items-center">
                <UIcon
                  name="i-heroicons-home"
                  class="w-4 h-4 text-gray-400 mr-2"
                />
                {{ project.area }} м²
              </div>
              <div class="flex items-center">
                <UIcon
                  name="i-heroicons-clock"
                  class="w-4 h-4 text-gray-400 mr-2"
                />
                {{ project.duration }}
              </div>
            </div>

            <!-- Price -->
            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">Стоимость работ:</span>
                <span class="text-lg font-bold text-orange-600">
                  {{ formatPrice(project.cost) }} ₸
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="text-center mt-16">
        <UButton size="xl" @click="$emit('openContact')">
          Посмотреть все работы
        </UButton>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["openContact"]);

const activeFilter = ref("all");

const filters = [
  { label: "Все работы", value: "all" },
  { label: "1-комнатные", value: "1room" },
  { label: "2-комнатные", value: "2room" },
  { label: "3-комнатные", value: "3room" },
  { label: "Квартиры-студии", value: "studio" },
];

const projects = [
  {
    id: 1,
    title: "Современный минимализм",
    description: "Капитальный ремонт с элементами лофта",
    type: "2room",
    location: 'ЖК "Алмалы"',
    area: 65,
    duration: "2 месяца",
    cost: 1200000,
    year: 2024,
  },
  {
    id: 2,
    title: "Классический стиль",
    description: "Элегантный ремонт с дорогими материалами",
    type: "3room",
    location: "ул. Навои",
    area: 85,
    duration: "3 месяца",
    cost: 1800000,
    year: 2024,
  },
  {
    id: 3,
    title: "Компактная студия",
    description: "Оптимальное решение для малогабаритной квартиры",
    type: "studio",
    location: 'ЖК "Кок-Жайляу"',
    area: 32,
    duration: "1.5 месяца",
    cost: 650000,
    year: 2024,
  },
  {
    id: 4,
    title: "Скандинавский стиль",
    description: "Уютный семейный интерьер",
    type: "1room",
    location: "мкр. Мамыр",
    area: 42,
    duration: "2 месяца",
    cost: 850000,
    year: 2023,
  },
  {
    id: 5,
    title: "Модерн с элементами лофта",
    description: "Сочетание современных тенденций",
    type: "2room",
    location: "ул. Достык",
    area: 72,
    duration: "2.5 месяца",
    cost: 1350000,
    year: 2023,
  },
  {
    id: 6,
    title: "Эко-стиль",
    description: "Натуральные материалы и экологичность",
    type: "3room",
    location: 'ЖК "Мерке"',
    area: 95,
    duration: "3.5 месяца",
    cost: 2100000,
    year: 2023,
  },
];

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projects;
  }
  return projects.filter((project) => project.type === activeFilter.value);
});

const formatPrice = (price) => {
  return new Intl.NumberFormat("ru-RU").format(price);
};

const getBadgeColor = (type) => {
  const colors = {
    "1room": "blue",
    "2room": "green",
    "3room": "purple",
    studio: "orange",
  };
  return colors[type] || "gray";
};

const getTypeLabel = (type) => {
  const labels = {
    "1room": "1-комн.",
    "2room": "2-комн.",
    "3room": "3-комн.",
    studio: "Студия",
  };
  return labels[type] || type;
};
</script>
