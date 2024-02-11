import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";

const Products = ({ auth }: PageProps) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Products
                    </h2>
                </>
            }
        >
            <Head title="Products" />
        </AuthenticatedLayout>
    );
};

export default Products;
