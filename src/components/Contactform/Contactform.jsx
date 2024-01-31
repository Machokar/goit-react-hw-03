import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
const userSchema = Yup.object().shape({
  username: Yup.string().min(3, 'To short').max(50, 'To long').required('This is a required field'),
  phone: Yup.string().min(3, 'To short').max(50, 'To long').required('This is a required field'),
});
export const Contactform = ({ addusers }) => {
  const namefield = useId();
  const phonefield = useId();
  return (
    <Formik
      initialValues={{ username: '', phone: '' }}
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
          <Field type="text" name="username" id={namefield} />
        </div>
        <div>
          <label htmlFor={phonefield}>Phone</label>
          <Field type="text" name="phone" id={phonefield} />
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
