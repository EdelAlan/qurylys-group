<template>
  <header class="bg-white shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <NuxtLink to="/" class="flex items-center space-x-2">
            <NuxtImg src="/logo.png" class="w-8 h-8 text-orange-600" />
            <span class="text-xl font-bold text-gray-900">Qurylys Group</span>
          </NuxtLink>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="text-gray-700 hover:text-orange-600 font-medium transition-colors duration-200"
          >
            {{ item.label }}
          </NuxtLink>
        </nav>

        <!-- Contact Info -->
        <div class="hidden lg:flex items-center space-x-4">
          <!-- Social Links -->
          <div class="flex items-center space-x-2">
            <UButton
              variant="ghost"
              size="sm"
              :to="whatsappLink"
              target="_blank"
              external
              class="p-1 hover:bg-green-50 rounded-lg"
            >
              <UIcon
                name="i-simple-icons-whatsapp"
                class="w-6 h-6 text-orange-600"
              />
            </UButton>
            <UButton
              variant="ghost"
              size="sm"
              :to="instagramLink"
              target="_blank"
              external
              class="p-1 hover:bg-pink-50 rounded-lg"
            >
              <UIcon
                name="i-simple-icons-instagram"
                class="w-6 h-6 text-orange-600"
              />
            </UButton>
          </div>
          <div class="text-right">
            <p class="text-sm text-gray-600">Звоните прямо сейчас</p>
            <UButton
              variant="ghost"
              size="sm"
              :to="'tel:' + phone.replace(/\s/g, '')"
              class="font-semibold p-0"
            >
              {{ phone }}
            </UButton>
          </div>
          <UButton size="lg" @click="openContact()"> Заказать звонок </UButton>
        </div>

        <!-- Mobile Menu Button -->
        <UButton
          variant="ghost"
          size="lg"
          class="md:hidden"
          @click="isMobileMenuOpen = !isMobileMenuOpen"
        >
          <UIcon name="i-heroicons-bars-3" class="w-6 h-6" />
        </UButton>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="isMobileMenuOpen" class="md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-4">
          <NuxtLink
            v-for="item in navigation"
            :key="item.label"
            :to="item.to"
            class="text-gray-700 hover:text-orange-600 font-medium"
            @click="isMobileMenuOpen = false"
          >
            {{ item.label }}
          </NuxtLink>
          <div class="pt-4 border-t">
            <!-- Social Links Mobile -->
            <div class="flex items-center space-x-4 mb-4">
              <UButton
                variant="ghost"
                size="sm"
                :to="whatsappLink"
                target="_blank"
                external
                class="flex items-center space-x-2 text-green-600"
              >
                <UIcon name="i-simple-icons-whatsapp" class="w-5 h-5" />
                <span>WhatsApp</span>
              </UButton>
              <UButton
                variant="ghost"
                size="sm"
                :to="instagramLink"
                target="_blank"
                external
                class="flex items-center space-x-2 text-pink-600"
              >
                <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
                <span>Instagram</span>
              </UButton>
            </div>
            <p class="text-sm text-gray-600 mb-2">Звоните прямо сейчас</p>
            <UButton
              variant="ghost"
              size="sm"
              :to="'tel:' + phone.replace(/\s/g, '')"
              class="font-semibold mb-2 p-0"
            >
              {{ phone }}
            </UButton>
            <br />
            <UButton
              @click="
                openContact();
                isMobileMenuOpen = false;
              "
            >
              Заказать звонок
            </UButton>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
const phone = "+7 (771) 523-23-12";
const whatsappLink = "https://wa.me/77715232312";
const instagramLink = "https://instagram.com/qurylys_groupkz";
const isMobileMenuOpen = ref(false);

const { openContact } = useModals();

const navigation = [
  { label: "Главная", to: "/" },
  { label: "Услуги", to: "/#services" },
  { label: "Портфолио", to: "/#portfolio" },
  { label: "О нас", to: "/#about" },
  { label: "Контакты", to: "/#contacts" },
];
</script>
