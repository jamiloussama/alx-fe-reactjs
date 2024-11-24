import * as Yup from 'yup';

// Formik validation schema with Yup
export const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email format").required("Email is required."),
  password: Yup.string().min(6, "Password must be at least 6 characters long").required("Password is required."),
});

// Initial form values
export const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Handle form submission
export const handleSubmit = (values) => {
  console.log("Form submitted:", values);
  alert("Form submitted successfully!");
};

// Export the FormikForm component as the default export
const FormikForm = () => {
  return null;  // This file only contains logic, the JSX goes in formikForm.jsx
};

export default FormikForm;
