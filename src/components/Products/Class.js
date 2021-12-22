import { PureComponent } from 'react';
import { Products as SourceProducts } from './Products';

export class Products extends SourceProducts {
  // we can now extend SourceProductCard,
  // and override any methods we want to change

  // this method overrides the default implementation provided in the original ProductCard class
  renderPicture() {
    return null;
  }
}

// we now export the extended and modified version of the class
export default Products;
