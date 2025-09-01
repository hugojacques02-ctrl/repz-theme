document.addEventListener('change', (e) => {
  if (e.target && e.target.matches('input[name="updates[]"]')) {
    e.target.closest('form')?.submit();
  }
});
