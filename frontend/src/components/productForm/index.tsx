export function ProductForm() {
  return (
    <div>
      <h1>Product Form</h1>
      <form>
        <label>
          Product Name:
          <input type="text" name="productName" />
        </label>
        <br />
        <label>
          Price:
          <input type="number" name="price" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}