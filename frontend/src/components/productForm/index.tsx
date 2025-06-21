import React from 'react';
import { Button, TomatoButton } from './styles';

export function ProductForm() {
  return (
    <div>
      <h1>Product Form</h1>
      <form>
        <input type="Model" name="Model" />
        <input type="brand" name="brand" />
        <select name="type">
          <option value="Prime">Prime</option>
          <option value="Zoom">Zoom</option>
          <option value="Macro">Macro</option>
          <option value="Tilt-Shift">Tilt-Shift</option>
        </select>
        <input type="focalLength" name="focalLength" />
        <input type="maxAperture" name="maxAperture" />
        <input type="mount" name="mount" />
        <input type="weight" name="weight" />

        <label>
          <input type="checkbox" name="hasStabilization" />
          Has Stabilization
        </label>
        <label>
          <input type="checkbox" name="active" />
          Active{' '}
        </label>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <div>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
      </div>
    </div>
  );
}
