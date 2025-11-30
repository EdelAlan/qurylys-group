<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
      @open-calculator="openCalculator"
      @open-contact="openContact"
    />

    <!-- Services Section -->
    <ServicesSection @open-contact="openContact" />

    <!-- Portfolio Section -->
    <PortfolioSection @open-contact="openContact" />

    <!-- About Section -->
    <AboutSection @open-contact="openContact" />

    <!-- Contact Section -->
    <ContactSection />

    <!-- Global Modals -->
    <ContactModal />

    <!-- Calculator Modal (placeholder) -->
    <UModal v-model:open="isCalculatorOpen" title="Калькулятор стоимости">
      <template #body>
        <div class="p-4">
          <p class="text-gray-600">
            Калькулятор стоимости ремонта будет добавлен в следующих
            обновлениях.
          </p>
          <UButton
            class="mt-4"
            @click="
              closeCalculator();
              openContact();
            "
          >
            Обратиться за консультацией
          </UButton>
        </div>
      </template>
    </UModal>
  </div>
</template>

<script setup>
const { openContact, closeCalculator, openCalculator, isCalculatorOpen } =
  useModals();
</script>
