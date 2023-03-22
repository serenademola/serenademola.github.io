const expandableRows = document.querySelectorAll('.expandable-row');

expandableRows.forEach(row => {
  row.addEventListener('click', () => {
    if (row.classList.contains('expanded')) {
      row.classList.remove('expanded');
      row.innerHTML = row.getAttribute('data-original-text');
    } else {
      row.classList.add('expanded');
      row.setAttribute('data-original-text', row.innerHTML);
      row.innerHTML = `<td colspan="3">${row.getAttribute('data-text')}</td>`;
    }
  });
});
