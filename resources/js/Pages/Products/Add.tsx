import { PageProps } from "@/types";
// layout
import ProductLayout from "@/Layouts/ProductLayout";

const Add = ({ auth }: PageProps) => {
    return (
        <ProductLayout auth={auth}>
            <div>Product add</div>
        </ProductLayout>
    );
};

export default Add;
