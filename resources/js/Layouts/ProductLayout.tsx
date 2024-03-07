import { Head } from "@inertiajs/react";
import { PageProps } from "@/types";
// layout
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
// comnponents
import NavLink from "@/Components/NavLink";

type TProductLayout = PageProps & {
    children?: React.ReactNode;
};

const ProductLayout = ({ auth, children }: TProductLayout) => {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <>
                    <NavLink
                        href={route("products.index")}
                        active={route().current("products.index")}
                        className="font-semibold text-xl text-gray-800 leading-tight"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        href={route("products.add")}
                        active={route().current("products.add")}
                        className="font-semibold text-xl text-gray-800 leading-tight"
                    >
                        Add
                    </NavLink>
                    <NavLink
                        href={route("categories.index")}
                        active={route().current("categories.index")}
                        className="font-semibold text-xl text-gray-800 leading-tight"
                    >
                        Categories
                    </NavLink>
                </>
            }
        >
            <Head title="Products" />
            {children}
        </AuthenticatedLayout>
    );
};

export default ProductLayout;
