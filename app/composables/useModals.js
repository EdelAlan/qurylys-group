export const useModals = () => {
  const isContactOpen = useState("modal.contact", () => false);
  const isCalculatorOpen = useState("modal.calculator", () => false);

  const openContact = () => {
    isContactOpen.value = true;
  };

  const closeContact = () => {
    isContactOpen.value = false;
  };

  const openCalculator = () => {
    isCalculatorOpen.value = true;
  };

  const closeCalculator = () => {
    isCalculatorOpen.value = false;
  };

  return {
    isContactOpen,
    isCalculatorOpen,
    openContact,
    closeContact,
    openCalculator,
    closeCalculator,
  };
};
