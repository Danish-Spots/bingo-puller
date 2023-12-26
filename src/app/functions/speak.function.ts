export function utterNumber(value: number) {
  const voice = window.speechSynthesis
    .getVoices()
    .filter((e) => e.lang === 'en-GB')[0];
  const utterance = new SpeechSynthesisUtterance(value.toString());
  if (voice) {
    utterance.voice = voice;
    window.speechSynthesis.speak(utterance);
  }
}
