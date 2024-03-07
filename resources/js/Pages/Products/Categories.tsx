import React from "react";
import { useForm } from "@inertiajs/react";
import { toast } from "react-toastify";
// types
import { PageProps, Category } from "@/types";
// layouts
import ProductLayout from "@/Layouts/ProductLayout";
// components
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import TextInput from "@/Components/TextInput";

interface ICategories extends PageProps {
    categories: Category[];
}

const Categories = ({ auth, categories }: ICategories) => {
    const initCategory: Category = {
        name: "",
        description: "",
    };

    const { data, setData, post, processing, errors } = useForm(initCategory);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(route("categories.create"), {
            preserveScroll: true,
            onError: () => {
                toast.error("Error adding category");
            },
            onSuccess: () => {
                setData(initCategory);
                toast.success("Category Added");
            },
        });
    };
    return (
        <ProductLayout auth={auth}>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={handleSubmit}
                            className="p-10 text-gray-900-w-8 flex flex-col"
                        >
                            <InputLabel error={errors.name} value="Name" />
                            <TextInput
                                type="text"
                                value={data.name}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                }}
                            />
                            <InputLabel
                                error={errors.name}
                                value="Description"
                            />
                            <TextInput
                                value={data.description}
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                            />
                            <PrimaryButton
                                type="submit"
                                className="justify-center w-20 mt-4"
                            >
                                Save
                            </PrimaryButton>
                        </form>
                        {categories.length === 0 && (
                            <div className="text-left text-gray-500 mb-4 pl-10 pb-8">
                                No categories yet.
                            </div>
                        )}
                        {categories.length > 0 && (
                            <div className="p-10 text-gray-900-w-8">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                    {categories.map((category) => (
                                        <div
                                            key={category.id}
                                            className="bg-white shadow-lg rounded-lg p-4"
                                        >
                                            <h3 className="text-xl font-semibold">
                                                {category.name}
                                            </h3>
                                            <p className="text-gray-500">
                                                {category.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </ProductLayout>
    );
};

export default Categories;
