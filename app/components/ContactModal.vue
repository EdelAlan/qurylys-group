<template>
  <UModal
    v-model:open="isContactOpen"
    title="Заказать звонок"
    :close="{
      color: 'primary',
      variant: 'outline',
      class: 'rounded-full',
    }"
  >
    <template #body>
      <div class="space-y-4">
        <p class="text-gray-600">
          Оставьте ваши контакты и мы перезвоним в течение 5 минут
        </p>

        <UForm ref="form" :schema="schema" :state="state" @submit="onSubmit">
          <UFormField label="Имя" name="name" size="lg">
            <UInput v-model="state.name" placeholder="Ваше имя" />
          </UFormField>

          <UFormField label="Телефон" name="phone" class="mt-4" size="lg">
            <UInput
              v-model="state.phone"
              placeholder="+7 (___) ___-__-__"
              type="tel"
            />
          </UFormField>

          <UFormField
            label="Комментарий (необязательно)"
            name="comment"
            class="mt-4"
            size="lg"
          >
            <UTextarea
              v-model="state.comment"
              class="w-full"
              placeholder="Опишите вашу задачу..."
              :rows="3"
            />
          </UFormField>

          <div class="flex justify-end space-x-2 mt-6">
            <UButton variant="ghost" @click="isOpen = false"> Отмена </UButton>
            <UButton type="submit" :loading="isLoading"> Отправить </UButton>
          </div>
        </UForm>

        <p class="text-xs text-gray-500">
          Нажимая кнопку "Отправить", вы соглашаетесь с
          <NuxtLink to="/privacy" class="text-orange-600 hover:underline"
            >политикой конфиденциальности</NuxtLink
          >
        </p>
      </div>
    </template>
  </UModal>
</template>

<script setup>
import { z } from "zod";

// const props = defineProps({
//   modelValue: {
//     type: Boolean,
//     default: false,
//   },
// });

// const emit = defineEmits(["update:modelValue"]);

// const isOpen = computed({
//   get: () => props.modelValue,
//   set: (value) => emit("update:modelValue", value),
// });

const { isContactOpen, closeContact } = useModals();

const schema = z.object({
  name: z.string().min(2, "Имя должно содержать минимум 2 символа"),
  phone: z.string().min(10, "Укажите корректный номер телефона"),
  comment: z.string().optional(),
});

const state = reactive({
  name: "",
  phone: "",
  comment: "",
});

const isLoading = ref(false);

const toast = useToast();

const onSubmit = async () => {
  isLoading.value = true;

  try {
    // Здесь будет логика отправки данных
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Имитация отправки

    toast.add({
      title: "Заявка отправлена!",
      description: "Мы перезвоним вам в ближайшее время.",
      color: "green",
    });

    // Очищаем форму
    Object.assign(state, { name: "", phone: "", comment: "" });
    closeContact();
  } catch (error) {
    console.log(error);
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
