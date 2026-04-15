import { Formik, Form } from "formik";
import {useState } from "react";
import FormObserver from "./components/FormObserver";
import Sidebar from "./components/Sidebar";
import Section from "./components/Section";
import FormField from "./components/FormField";
import Loader from "./components/Loader";

export default function App() {
  const [showLoader, setShowLoader] = useState(false);

  const onFormComplete = () => {
    setShowLoader(true);
    setTimeout(() => setShowLoader(false), 3000);
  };

  return (
    <div className="container">
      <Sidebar />

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          city: "",
          company: "",
          role: "",
          skill: "",
          experience: ""
        }}
        validate={(values) => {
          const errors = {};

          Object.keys(values).forEach((key) => {
            if (!values[key]) {
              errors[key] = "This field is required";
            }
          });

          return errors;
        }}
        onSubmit={() => {}}
      >
        {({ values, errors }) => {
          const isValid =
            Object.keys(values).every((v) => values[v]) &&
            Object.keys(errors).length === 0;

          // useEffect(() => {
          //   if (isValid) {
          //     onFormComplete();
          //   }
          // }, [values]);

          return (
            <Form className="form">

              <FormObserver
                values={values}
                isValid={isValid}
                onFormComplete={onFormComplete}
              />

              {showLoader && <Loader />}

              <Section id="section-A" title="Section A — Personal Info">
                <FormField name="name" placeholder="Name" />
                <FormField name="email" validator="email" placeholder="Email" />
              </Section>

              <Section id="section-B" title="Section B — Contact">
                <FormField name="phone" validator="phone" placeholder="Phone" />
                <FormField name="city" placeholder="City" />
              </Section>

              <Section id="section-C" title="Section C — Work">
                <FormField name="company" placeholder="Company" />
                <FormField name="role" placeholder="Role" />
              </Section>

              <Section id="section-D" title="Section D — Skills">
                <FormField name="skill" placeholder="Skill" />
                <FormField name="experience" placeholder="Experience" />
              </Section>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}