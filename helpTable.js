import { table } from "table";

class Table {
  constructor(data) {
    this.data = data;
  }

  getHelpTable(data) {
    return table(data);
  }
}

export default Table;
