export function suggestionHelper(userId: string) {
  function followHandler() {
    console.log(`${userId} followed`);
  }

  return {
    followHandler,
  };
}
