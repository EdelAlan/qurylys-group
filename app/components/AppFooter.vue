<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <UIcon
              name="i-heroicons-wrench-screwdriver"
              class="w-8 h-8 text-orange-500"
            />
            <span class="text-xl font-bold">Qurylys Group</span>
          </div>
          <p class="text-gray-300 mb-4">
            Профессиональная строительная компания в Алматы. Выполняем
            качественный ремонт квартир под ключ с гарантией и в срок.
          </p>
          <div class="flex space-x-4">
            <UButton
              variant="ghost"
              size="sm"
              to="https://wa.me/77715232312"
              target="_blank"
              external
              class="text-gray-300 hover:text-green-400"
            >
              <UIcon name="i-simple-icons-whatsapp" class="w-5 h-5" />
            </UButton>
            <UButton
              variant="ghost"
              size="sm"
              to="https://instagram.com/qurylys_groupkz"
              target="_blank"
              external
              class="text-gray-300 hover:text-pink-400"
            >
              <UIcon name="i-simple-icons-instagram" class="w-5 h-5" />
            </UButton>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Услуги</h3>
          <ul class="space-y-2 text-gray-300">
            <li>
              <NuxtLink
                to="/#services"
                class="hover:text-orange-500 transition-colors"
                >Капитальный ремонт</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#services"
                class="hover:text-orange-500 transition-colors"
                >Косметический ремонт</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#services"
                class="hover:text-orange-500 transition-colors"
                >Дизайн-проект</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#services"
                class="hover:text-orange-500 transition-colors"
                >Электромонтаж</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/#services"
                class="hover:text-orange-500 transition-colors"
                >Сантехнические работы</NuxtLink
              >
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Контакты</h3>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start space-x-2">
              <UIcon
                name="i-heroicons-phone"
                class="w-5 h-5 text-orange-500 mt-0.5"
              />
              <div>
                <p>{{ phone }}</p>
                <p class="text-sm">Ежедневно с 9:00 до 19:00</p>
              </div>
            </div>
            <div class="flex items-start space-x-2">
              <UIcon
                name="i-heroicons-envelope"
                class="w-5 h-5 text-orange-500 mt-0.5"
              />
              <p>info@qurylys-group.kz</p>
            </div>
            <div class="flex items-start space-x-2">
              <UIcon
                name="i-heroicons-map-pin"
                class="w-5 h-5 text-orange-500 mt-0.5"
              />
              <p>г. Алматы, ул. Абая, 150/230</p>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-8 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} Qurylys Group. Все права защищены.
          </p>
          <div class="flex items-center space-x-4 mt-4 md:mt-0">
            <NuxtLink
              to="/privacy"
              class="text-gray-400 hover:text-orange-500 text-sm transition-colors"
            >
              Политика конфиденциальности
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const phone = "+7 (771) 523-23-12";
const currentYear = new Date().getFullYear();
</script>
