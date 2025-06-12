const boxes = document.querySelectorAll('.option-box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => b.classList.remove('active'));
    box.classList.add('active');

    const radio = box.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  });

  const radio = box.querySelector('input[type="radio"]');
  if (radio) {
    radio.addEventListener('click', (e) => {
      e.stopPropagation(); 
    });
  }
});
