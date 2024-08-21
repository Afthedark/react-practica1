import SearchBar from '../_components/SearchBar';
import ProductTable from '../../Product/_components/ProductTable';

export default function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}
