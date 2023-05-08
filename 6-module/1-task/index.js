/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.table = document.createElement('TABLE');
    this.elem = this.createTable();
  }

  createTable() {
    this.table.insertAdjacentHTML('beforeEnd', `<thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
      </tr>
    </thead>`);

    return this.addTableValue();
  }

  addTableValue() {
    this.table.insertAdjacentHTML('beforeEnd', this.rows.map(value => `<tbody>
      <tr>
        <td>${value.name}</td>
        <td>${value.age}</td>
        <td>${value.salary}</td>
        <td>${value.city}</td>
        <td><button class="remove-button">[x]</button></td>
      </tr>
    </tbody>`).join(''));

    this.table.addEventListener('click', function(event)  {
      event.target.closest('TR').remove();
    });
    return this.table;
  }
}
