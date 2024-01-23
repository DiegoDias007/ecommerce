import styled from "styled-components";
import useProductsData from "../../utils/useProductsData";
import Product from "../../components/Product";
import ProductResponse from "../../interfaces/ProductResponse";
import LoadingSpinner from "../../components/LoadingSpinner";

const GridContainer = styled.div`
  display: grid;
  margin-left: 20px;
  margin-right: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
`;

export default function ProductsPage() {
  const { data: products, isLoading, error  } = useProductsData()
  
  if (isLoading) {
    return <LoadingSpinner />
  }

  if (error) {
    return error.message
  }

  return (
    <GridContainer>
      {!isLoading &&
        products?.data?.map((product: ProductResponse) => {
          return <Product key={product.id} product={product} />;
        })}
    </GridContainer>
  );
}