const balloon = document.getElementById('balloon');
  const colors = ['red', 'green', 'blue'];
  let colorIndex = 0;
  let size = 200;

  function nextColor() {
    colorIndex = (colorIndex + 1) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
  }

  function prevColor() {
    colorIndex = (colorIndex - 1 + colors.length) % colors.length;
    balloon.style.backgroundColor = colors[colorIndex];
  }

  balloon.addEventListener('click', () => {
    size += 10;
    if (size > 420) {
      size = 200;
      colorIndex = 0;
      balloon.style.backgroundColor = colors[colorIndex];
    } else {
      nextColor();
    }
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
  });

  balloon.addEventListener('mouseleave', () => {
    size = Math.max(200, size - 5);
    prevColor();
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
  });