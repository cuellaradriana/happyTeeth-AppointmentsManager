const handleOnChange = (
    e,
    setFormData,
    formData,
    setErrors,
    validateFunction
) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value,
    });
    setErrors(validateFunction({ ...formData, [name]: value }));
};

export default handleOnChange;
