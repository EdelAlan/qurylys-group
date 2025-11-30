<template>
  <div class="min-h-screen bg-gray-50">
    <AppHeader />
    <main class="container mx-auto @lg:px-4">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
useSeoMeta({
  title: "Qurylys Group - Профессиональный ремонт квартир в Алматы",
  description:
    "Качественный ремонт квартир под ключ в Алматы. Индивидуальный подход, многоуровневый контроль качества, прозрачные цены.",
  ogTitle: "Qurylys Group - Ремонт квартир в Алматы",
  ogDescription:
    "Профессиональная строительная компания в Алматы. Ремонт квартир под ключ с гарантией качества.",
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
});
</script>
