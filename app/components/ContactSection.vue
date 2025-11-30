<template>
  <section id="contacts" class="py-20 bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-3xl sm:text-4xl font-bold mb-4">Контакты</h2>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">
          Готовы начать работу над вашим проектом? Свяжитесь с нами любым
          удобным способом
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Info -->
        <div>
          <h3 class="text-2xl font-bold mb-8">Наши контакты</h3>

          <div class="space-y-6">
            <!-- Phone -->
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon name="i-heroicons-phone" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-1">Телефон</h4>
                <p class="text-gray-300 mb-2">{{ phone }}</p>
                <p class="text-sm text-gray-400">Ежедневно с 9:00 до 19:00</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon name="i-heroicons-envelope" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-1">Email</h4>
                <p class="text-gray-300">
                  <a
                    :href="'mailto:' + email"
                    class="hover:text-orange-400 transition-colors"
                  >
                    {{ email }}
                  </a>
                </p>
              </div>
            </div>

            <!-- Address -->
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon name="i-heroicons-map-pin" class="w-6 h-6" />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-1">Адрес офиса</h4>
                <p class="text-gray-300">{{ address }}</p>
                <p class="text-sm text-gray-400">
                  Офис открыт с Пн по Пт, 9:00-18:00
                </p>
              </div>
            </div>

            <!-- Messengers -->
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0"
              >
                <UIcon
                  name="i-heroicons-chat-bubble-left-right"
                  class="w-6 h-6"
                />
              </div>
              <div>
                <h4 class="font-semibold text-lg mb-1">Мессенджеры</h4>
                <div class="flex space-x-3">
                  <UButton
                    variant="ghost"
                    size="sm"
                    color="white"
                    :to="whatsappLink"
                    external
                    target="_blank"
                    class="text-green-400 hover:text-green-300"
                  >
                    <UIcon
                      name="i-simple-icons-whatsapp"
                      class="w-5 h-5 mr-1"
                    />
                    WhatsApp
                  </UButton>
                  <UButton
                    variant="ghost"
                    size="sm"
                    color="white"
                    :to="instagramLink"
                    external
                    target="_blank"
                    class="text-red-400 hover:text-red-300"
                  >
                    <UIcon
                      name="i-simple-icons-instagram"
                      class="w-5 h-5 mr-1"
                    />
                    Instagram
                  </UButton>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Contact Form -->
        <div class="bg-gray-800 rounded-2xl p-8">
          <h3 class="text-2xl font-bold mb-6">Оставить заявку</h3>
          <p class="text-gray-300 mb-8">
            Оставьте свои контактные данные, и мы перезвоним вам в течение 5
            минут для обсуждения вашего проекта.
          </p>

          <UForm
            ref="form"
            :schema="schema"
            :state="state"
            class="space-y-4"
            @submit="onSubmit"
          >
            <UFormField label="Имя" name="name">
              <UInput
                v-model="state.name"
                placeholder="Ваше имя"
                size="lg"
                class="bg-gray-700 border-gray-600"
              />
            </UFormField>

            <UFormField label="Телефон" name="phone">
              <UInput
                v-model="state.phone"
                placeholder="+7 (___) ___-__-__"
                type="tel"
                size="lg"
                class="bg-gray-700 border-gray-600"
              />
            </UFormField>

            <UFormField label="Тип работ" name="serviceType">
              <USelect
                v-model="state.serviceType"
                :options="serviceOptions"
                placeholder="Выберите тип работ"
                size="lg"
                class="bg-gray-700 border-gray-600"
              />
            </UFormField>

            <UFormField label="Комментарий (необязательно)" name="comment">
              <UTextarea
                v-model="state.comment"
                placeholder="Опишите вашу задачу..."
                :rows="3"
                size="lg"
                class="bg-gray-700 border-gray-600 w-full"
              />
            </UFormField>

            <UButton type="submit" size="xl" :loading="isLoading" block>
              Отправить заявку
            </UButton>

            <p class="text-xs text-gray-400">
              Нажимая кнопку "Отправить заявку", вы соглашаетесь с
              <NuxtLink to="/privacy" class="text-orange-400 hover:underline"
                >политикой конфиденциальности</NuxtLink
              >
            </p>
          </UForm>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { z } from "zod";

const phone = "+7 (771) 523-23-12";
const email = "info@qurylys-group.kz";
const address = "г. Алматы, ул. Абая, 150/230";
const whatsappLink = "https://wa.me/77715232312";
const instagramLink = "https://instagram.com/qurylys_groupkz";

const schema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Укажите корректный номер телефона"),
  serviceType: z.string().optional(),
  comment: z.string().optional(),
});

const state = reactive({
  name: "",
  phone: "",
  serviceType: "",
  comment: "",
});

const serviceOptions = [
  { label: "Капитальный ремонт", value: "capital" },
  { label: "Косметический ремонт", value: "cosmetic" },
  { label: "Дизайн-проект", value: "design" },
  { label: "Электромонтаж", value: "electrical" },
  { label: "Сантехника", value: "plumbing" },
  { label: "Отделка балкона", value: "balcony" },
  { label: "Консультация", value: "consultation" },
];

const isLoading = ref(false);
const toast = useToast();

const onSubmit = async () => {
  isLoading.value = true;

  try {
    // Здесь будет логика отправки данных
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.add({
      title: "Заявка отправлена!",
      description: "Мы перезвоним вам в ближайшее время.",
      color: "green",
    });

    // Очищаем форму
    Object.assign(state, {
      name: "",
      phone: "",
      serviceType: "",
      comment: "",
    });
  } catch {
    toast.add({
      title: "Ошибка отправки",
      description: "Попробуйте еще раз или позвоните нам напрямую.",
      color: "red",
    });
  } finally {
    isLoading.value = false;
  }
};
</script>
