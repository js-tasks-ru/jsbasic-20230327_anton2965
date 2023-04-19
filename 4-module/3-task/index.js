function highlight(table) {
  const tr = table.getElementsByTagName('tr');

  Array.from(tr).forEach((item) => {
    const td = item.getElementsByTagName('td');

    if (td[td.length - 1].getAttribute('data-available')) {
      item.classList.add(td[td.length - 1].getAttribute('data-available') === 'true' ? 'available' : 'unavailable');
    }

    if (td[td.length - 2].innerHTML !== 'Gender') {
      item.classList.add(td[td.length - 2].innerHTML === 'm' ? 'male' : 'female');
    }

    if (td[td.length - 3].innerHTML < 18) {
      item.style.cssText = 'text-decoration: line-through';
    }

    if (td[td.length - 1].dataset.available === undefined) {
      item.hidden = true;
    }
  });
}
