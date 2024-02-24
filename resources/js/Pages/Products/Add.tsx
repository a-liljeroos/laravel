import React, { FormEventHandler, useRef } from "react";
import { useForm } from "@inertiajs/react";
import { generateNumberArray } from "../Functions/Functions";
// types
import { PageProps } from "@/types";
import { CheckBoxGroupRef } from "@/Components/CheckboxGroup";
import { MultiInputRef } from "@/Components/MultiInput";
// layout
import ProductLayout from "@/Layouts/ProductLayout";
// components
import CheckboxGroup from "@/Components/CheckboxGroup";
import InputLabel from "@/Components/InputLabel";
import MultiInput from "@/Components/MultiInput";
import PrimaryButton from "@/Components/Buttons/PrimaryButton";
import SelectInput from "@/Components/SelectInput";
import TextareaInput from "@/Components/TextareaInput";
import TextInput from "@/Components/TextInput";

const Add = ({ auth }: PageProps) => {
    const checkBoxRef = useRef<CheckBoxGroupRef>(null);
    const multiInputRef = useRef<MultiInputRef>(null);
    const multiInputRef2 = useRef<MultiInputRef>(null);

    const { data, setData, post, processing, errors, progress, reset, cancel } =
        useForm({
            name: "",
            description_short: "",
            description_long: "",
            price: "",
            quantity: "",
            brand_id: "",
            category_ids: {},
            image_urls: {},
            tags: {},
            ean: "",
            warranty: 0,
            active: true,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("products.create"));
    };

    const resetForm = () => {
        reset();
        checkBoxRef.current?.reset();
        multiInputRef.current?.reset();
        multiInputRef2.current?.reset();
    };

    return (
        <ProductLayout auth={auth}>
            <div className="py-12">
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
                                    setData("price", e.target.value);
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
                                    setData("quantity", e.target.value);
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
                                    setData("brand_id", e.target.value);
                                }}
                            />
                            <InputLabel
                                htmlFor="category_ids"
                                value="Categories"
                                error={errors.category_ids}
                            />
                            <CheckboxGroup
                                name="category_ids"
                                ref={checkBoxRef}
                                onChange={(e) => {
                                    setData("category_ids", JSON.stringify(e));
                                }}
                                checkBoxes={[
                                    { label: "Category 1", value: "1" },
                                    {
                                        label: "Category 2",
                                        value: "2",
                                        checked: true,
                                    },
                                    { label: "Category 3", value: "3" },
                                    { label: "Category 4", value: "4" },
                                    { label: "Category 5", value: "5" },
                                    { label: "Category 6", value: "6" },
                                ]}
                            />
                            <InputLabel
                                htmlFor="tags"
                                value="Tags"
                                error={errors.tags}
                            />
                            <MultiInput
                                ref={multiInputRef}
                                onChange={(e) => {
                                    setData("tags", JSON.stringify(e));
                                }}
                            />
                            <InputLabel
                                htmlFor="image_urls"
                                value="Image URLs"
                                error={errors.image_urls}
                            />
                            <MultiInput
                                ref={multiInputRef2}
                                onChange={(e) => {
                                    setData("image_urls", JSON.stringify(e));
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
