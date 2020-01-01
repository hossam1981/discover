
class Prescription {
    constructor(drug, quantity) {
      this._drug = drug;
      this._quantity = quantity;
    }
    getDrug() {
      return this._drug;
  }
    getQuantity() {
      return this._quantity;
  } }

  export default Prescription