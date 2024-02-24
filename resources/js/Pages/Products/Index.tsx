import { PageProps } from "@/types";
// layout
import ProductLayout from "@/Layouts/ProductLayout";

const Index = ({ auth }: PageProps) => {
    return (
        <ProductLayout auth={auth}>
            <div>Product Index</div>
        </ProductLayout>
    );
};

export default Index;
