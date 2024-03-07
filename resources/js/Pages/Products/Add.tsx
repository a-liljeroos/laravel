import React, { FormEventHandler, useRef } from "react";
import { Link, useForm } from "@inertiajs/react";
import { generateNumberArray } from "../Functions/Functions";
import { toast } from "react-toastify";
// types
import { CheckBoxGroupRef } from "@/Components/CheckboxGroup";
import { MultiInputRef } from "@/Components/MultiInput";
import { PageProps, Product, Category } from "@/types";
// layout
import ProductLayout from "@/Layouts/ProductLayout";
// components
import CheckboxGroup, {
    generateCheckBoxList,
} from "@/Components/CheckboxGroup";
import EditButton from "@/Components/Buttons/EditButton";
import InputLabel from "@/Components/InputLabel";
import MultiInput from "@/Components/MultiInput";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";

interface IAddProps extends PageProps {
    product: Product;
    categories: Category[];
}
const Add = ({ auth, product, categories }: IAddProps) => {
    const checkBoxRef = useRef<CheckBoxGroupRef>(null);
    const multiInputTags = useRef<MultiInputRef>(null);
    const multiInputURLs = useRef<MultiInputRef>(null);

    const { data, setData, post, processing, errors, progress, reset, cancel } =
        useForm(
            product || {
                name: "",
                description_short: "",
                description_long: "",
                price: "",
                quantity: "",
                brand_id: "",
                category_ids: [],
                image_urls: [],
                tags: [],
                ean: "",
                warranty: 0,
                active: true,
            }
        );

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        if (product) {
            post(route("products.edit", product.id), {
                preserveScroll: true,
                onSuccess: () => {
                    toast("Product updated!");
                },
            });
        }

        post(route("products.create"), {
            preserveScroll: true,
            onSuccess: () => {
                resetForm();
                toast("Product added!");
            },
        });
    };

    const resetForm = () => {
        reset();
        checkBoxRef.current?.reset();
        multiInputTags.current?.reset();
        multiInputURLs.current?.reset();
    };

    return (
        <ProductLayout auth={auth}>
            <div className="py-12 position-relative">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            method="POST"
                            className="p-10 text-gray-900-w-8 flex flex-col"
                            onSubmit={submit}
                        >
                            <InputLabel
                                htmlFor="name"
                                value="Name"
                                error={errors.name}
                            />
                            <TextInput
                                name="name"
                                required
                                value={data.name}
                                isFocused={true}
                                onChange={(e) => {
                                    setData("name", e.target.value);
                                }}
                            />
                            <InputLabel
                                htmlFor="description_short"
                                value="Short Description"
                                error={errors.description_short}
                            />
                            <TextInput
                                required
                                name="description_short"
                                value={data.description_short}
                                max={255}
                                onChange={(e) => {
                                    setData(
                                        "description_short",
                                        e.target.value
                                    );
                                }}
                            />
                            <InputLabel
                                htmlFor="description_long"
                                value="Long Description"
                                error={errors.description_long}
                            />
                            <TextareaInput
                                required
                                name="description_long"
                                value={data.description_long}
                                onChange={(e) => {
                                    setData("description_long", e.target.value);
                                }}
                            />
                            <InputLabel
                                htmlFor="price"
                                value="Price (€)"
                                error={errors.price}
                            />
                            <TextInput
                                required
                                name="price"
                                type="number"
                                value={data.price}
                                min={0}
                                step={0.01}
                                onChange={(e) => {
                                    setData("price", Number(e.target.value));
                                }}
                            />
                            <InputLabel
                                htmlFor="quantity"
                                value="Quantity"
                                error={errors.quantity}
                            />
                            <TextInput
                                required
                                name="quantity"
                                type="number"
                                value={data.quantity}
                                min={0}
                                onChange={(e) => {
                                    setData("quantity", Number(e.target.value));
                                }}
                            />
                            <InputLabel
                                htmlFor="brand_id"
                                value="Brand"
                                error={errors.brand_id}
                            />
                            <TextInput
                                required
                                name="brand_id"
                                type="number"
                                value={data.brand_id}
                                min={0}
                                onChange={(e) => {
                                    setData("brand_id", Number(e.target.value));
                                }}
                            />
                            <div className="flex items-end my-3">
                                <InputLabel
                                    htmlFor="category_ids"
                                    value="Categories"
                                    error={errors.category_ids}
                                />
                                <Link href={route("categories.index")}>
                                    <EditButton />
                                </Link>
                            </div>
                            <CheckboxGroup
                                name="category_ids"
                                ref={checkBoxRef}
                                onchange={(e) => {
                                    setData("category_ids", e.map(Number));
                                }}
                                checkBoxes={generateCheckBoxList(
                                    categories,
                                    product
                                )}
                            />
                            <InputLabel
                                htmlFor="tags"
                                value="Tags"
                                error={errors.tags}
                            />
                            <MultiInput
                                ref={multiInputTags}
                                feed={product ? product.tags : []}
                                onchange={(e) => {
                                    setData("tags", e);
                                }}
                            />
                            <InputLabel
                                htmlFor="image_urls"
                                value="Image URLs"
                                error={errors.image_urls}
                            />
                            <MultiInput
                                ref={multiInputURLs}
                                feed={product ? product.image_urls : []}
                                onchange={(e) => {
                                    setData("image_urls", e);
                                }}
                            />
                            <InputLabel
                                htmlFor="ean"
                                value="EAN"
                                error={errors.ean}
                            />

                            <TextInput
                                required
                                name="ean"
                                type="number"
                                value={data.ean}
                                min={0}
                                onChange={(e) => {
                                    setData("ean", e.target.value);
                                }}
                            />
                            <InputLabel
                                htmlFor="warranty"
                                value="Warranty (months)"
                                error={errors.warranty}
                            />

                            <SelectInput
                                required
                                name="warranty"
                                value={data.warranty}
                                onChange={(e) => {
                                    setData("warranty", Number(e.target.value));
                                }}
                                optionItems={generateNumberArray(36, true)}
                            />
                            <InputLabel
                                htmlFor="active"
                                value="Active"
                                error={errors.active}
                            />

                            <SelectInput
                                required
                                name="active"
                                onChange={(e) => {
                                    if (e.target.value === "true") {
                                        setData("active", true);
                                    }
                                    if (e.target.value === "false") {
                                        setData("active", false);
                                    }
                                }}
                                optionItems={[
                                    { value: "true", label: "Yes" },
                                    { value: "false", label: "No" },
                                ]}
                            />
                            <br />
                            {progress && (
                                <progress value={progress.percentage} max="100">
                                    {progress.percentage}%
                                </progress>
                            )}

                            <div className="flex gap-2">
                                {!processing ? (
                                    <PrimaryButton
                                        className="justify-center w-20"
                                        type="submit"
                                    >
                                        Save
                                    </PrimaryButton>
                                ) : (
                                    <PrimaryButton
                                        className="justify-center w-20"
                                        type="button"
                                        onClick={cancel}
                                    >
                                        Cancel
                                    </PrimaryButton>
                                )}

                                <PrimaryButton
                                    className="justify-center w-20"
                                    type="button"
                                    onClick={resetForm}
                                >
                                    Reset
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </ProductLayout>
    );
};

export default Add;
