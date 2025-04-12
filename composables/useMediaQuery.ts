import { ref, onMounted, onUnmounted } from 'vue';

export function useMediaQuery(query: string) {
  const matches = ref(false);

  const updateMatches = () => {
    if (typeof window !== 'undefined') {
      matches.value = window.matchMedia(query).matches;
    }
  };

  onMounted(() => {
    updateMatches();
    window.addEventListener('resize', updateMatches);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', updateMatches);
  });

  return matches;
}

export function useMobile(breakpoint = 768) {
  return useMediaQuery(`(max-width: ${breakpoint - 1}px)`);
}
