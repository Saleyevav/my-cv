function typeWriter(id, speed, txt, i) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed, id, speed, txt, i);
  }
}
