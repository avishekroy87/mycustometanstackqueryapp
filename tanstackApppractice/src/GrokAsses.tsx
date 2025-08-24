import { Fragment } from "react"
import { useFormik } from "formik"
import * as Yup from 'yup';


const GrokAsses = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),

            email: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
        }),

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });


    return (
        <Fragment>
            <div>GrokAsses</div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First Name</label>

                <input type="text" id="firstName" name="firstName" onChange={formik.handleChange} value={formik.values.firstName} />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                ) : null}
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" onChange={formik.handleChange} value={formik.values.lastName} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} />
                {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                ) : null}
                <button type="submit">Submit</button>
            </form>
        </Fragment>


    )
}

export default GrokAsses