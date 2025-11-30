<template>
  <section class="relative text-white overflow-hidden">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <NuxtImg
        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2058&q=80"
        alt="Современный интерьер квартиры"
        class="w-full h-full object-cover"
      />
      <!-- Dark overlay for better text readability -->
      <div class="absolute inset-0 bg-black/40" />
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="text-center lg:text-left">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
          >
            Профессиональный
            <span class="text-orange-200">ремонт квартир</span>
            в Алматы
          </h1>
          <p class="text-xl sm:text-2xl mb-8 text-orange-100">
            Индивидуальный подход и многоуровневый контроль
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div class="text-center lg:text-left">
              <div class="text-3xl font-bold text-orange-200">
                {{ stats.years }}+
              </div>
              <div class="text-sm text-orange-300">лет на рынке</div>
            </div>
            <div class="text-center lg:text-left">
              <div class="text-3xl font-bold text-orange-200">
                {{ stats.projects }}+
              </div>
              <div class="text-sm text-orange-300">проектов</div>
            </div>
            <div class="text-center lg:text-left col-span-2 lg:col-span-1">
              <div class="text-3xl font-bold text-orange-200">
                {{ stats.rating }}
              </div>
              <div class="text-sm text-orange-300">рейтинг</div>
            </div>
          </div>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <UButton
              size="xl"
              color="neutral"
              variant="soft"
              class="font-semibold text-orange-600"
              @click="$emit('openCalculator')"
            >
              <UIcon name="i-heroicons-calculator" class="w-5 h-5 mr-2" />
              Рассчитать стоимость
            </UButton>
            <UButton
              size="xl"
              variant="soft"
              color="neutral"
              class="font-semibold text-orange-600"
              @click="$emit('openContact')"
            >
              <UIcon name="i-heroicons-phone" class="w-5 h-5 mr-2" />
              Бесплатная консультация
            </UButton>
          </div>
        </div>

        <!-- Hero Image -->
        <div class="relative">
          <div class="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <div
              class="aspect-square bg-linear-to-br from-white/20 to-white/5 rounded-xl flex items-center justify-center"
            >
              <UIcon
                name="i-heroicons-home-modern"
                class="w-32 h-32 text-white/80"
              />
            </div>
            <!-- Floating elements -->
            <div
              class="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-orange-600 text-sm font-semibold text-white"
            >
              0 ₸ предоплата
            </div>
            <div
              class="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full text-sm font-semibold text-orange-600"
            >
              Гарантия 2 года
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineEmits(["openCalculator", "openContact"]);

const stats = {
  years: 8,
  projects: 300,
  rating: 4.9,
};
</script>
