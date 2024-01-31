import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
const userSchema = Yup.object().shape({
  name: Yup.string().min(3, 'To short').max(50, 'To long').required('This is a required field'),
  number: Yup.string().min(3, 'To short').max(50, 'To long').required('This is a required field'),
});
export const Contactform = ({ addusers }) => {
  const namefield = useId();
  const phonefield = useId();
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        addusers({ id: Date.now(), ...values });
        actions.resetForm();
      }}
    >
      <Form>
        <div>
          <label htmlFor={namefield}> Name</label>
          <Field type="text" name="name" id={namefield} />
        </div>
        <div>
          <label htmlFor={phonefield}>Number</label>
          <Field type="text" name="number" id={phonefield} />
        </div>
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
