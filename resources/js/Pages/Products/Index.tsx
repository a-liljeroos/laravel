import { Link } from "@inertiajs/react";
// types
import { PageProps, Product } from "@/types";
// styles
import "./Products.scss";
// layout
import ProductLayout from "@/Layouts/ProductLayout";
// components
import TrashButton from "@/Components/Buttons/TrashButton";
import EditButton from "@/Components/Buttons/EditButton";

interface IIndexPageProps extends PageProps {
    products: Product[];
}

const Index = ({ auth, products }: IIndexPageProps) => {
    return (
        <ProductLayout auth={auth}>
            <div className="product-list">
                {products.length === 0 && (
                    <div className="text-center text-gray-500 mb-4">
                        No products found.
                    </div>
                )}
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td className="flex gap-1">
                                    <Link
                                        href={route("products.add", {
                                            product_id: product.id,
                                        })}
                                        method="post"
                                        as="button"
                                    >
                                        <EditButton />
                                    </Link>
                                    <TrashButton />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </ProductLayout>
    );
};

export default Index;
