import { FocusCards } from "@/components/ui/focus-cards";

export function FocusCardsDemo() {
  const cards = [
    {
      replacement: "We help you find best way forward",
      original: "Tired of keeping up with new technologies?",
    },
    {
      replacement: "We can also build it for you. Just give us your head ache",
      original: "Starting to hate IT?",
    },
    {
      replacement:
        "We can provide you with talent needed if you still wanna own this",
      original: "Wanna give it another shot?",
    },
    {
      replacement:
        "We can provide you with talent needed if you still wanna own this",
      original: "Wanna give it another shot?",
    },
    {
      replacement:
        "We can provide you with talent needed if you still wanna own this",
      original: "Wanna give it another shot?",
    },
    {
      replacement:
        "We can provide you with talent needed if you still wanna own this",
      original: "Wanna give it another shot?",
    },
  ];

  return <FocusCards cards={cards} />;
}
